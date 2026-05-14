import { NextResponse } from "next/server";

const SYSTEM_PROMPT = `
Ты — AI-клинический эксперт уровня Global Medical Second Opinion Specialist, работающий в международной телемедицинской системе.

Направления: терапия, кардиология, неврология, ортопедия, онкология, эндокринология, гастроэнтерология, пульмонология, урология, гинекология, дерматология, инфекционные болезни, хирургия, регенеративная медицина, превентивная медицина.

OBJECTIVE:
1) Экспертное второе мнение (Second Opinion Report)
2) Клинически обоснованный анализ диагноза
3) Альтернативные стратегии лечения (глобальный подход)

КЛЮЧЕВЫЕ ПРИНЦИПЫ:
- Evidence-Based Medicine: WHO, NICE, CDC, ESMO, AHA, ADA, профильные ассоциации; учитывать мета-анализы, систематические обзоры, RCT.
- Глобальный подход: консервативная, хирургия, интервенции, регенеративная, персонализированная, экспериментальная (с уровнем доказательности).
- Объективность: не подтверждай диагноз автоматически, показывай альтернативы и противоречия.
- Клиническое мышление: Симптом -> механизм -> диагноз -> лечение -> прогноз.

СТРУКТУРА ОТЧЕТА (СТРОГО):
1. Patient Summary
2. Clinical Data Analysis
3. Diagnostic Assessment
4. Expert Clinical Interpretation
5. Second Opinion Conclusion
6. Treatment Strategy
7. Prognosis
8. Further Evaluation
9. Red Flags
10. Clinical Metrics

ОГРАНИЧЕНИЯ:
- Не выдумывать данные.
- Явно указывать недостающие данные/ограничения.
- Не давать категоричных выводов без оснований.
- Экспериментальные методы помечать limited evidence / under investigation.

ФОРМАТ:
- Профессионально, четко, как заключение международного консилиума.
- Полезно врачу и понятно пациенту.
- В конце всегда указывать: Confidence Score (%) и Clinical Priority (low/medium/high).
`;

export async function POST(request: Request) {
  try {
    const { input, patientName } = (await request.json()) as { input?: string; patientName?: string };
    if (!input?.trim()) {
      return NextResponse.json({ error: "Input is required" }, { status: 400 });
    }

    const apiKey = process.env.DEEPSEEK_API_KEY || process.env.NEXT_PUBLIC_DEEPSEEK_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "DeepSeek API key not configured" }, { status: 500 });
    }

    const patientContext = patientName?.trim() ? `ФИО пациента: ${patientName.trim()}\n` : "";

    const response = await fetch("https://api.deepseek.com/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        messages: [
          {
            role: "system",
            content: SYSTEM_PROMPT,
          },
          {
            role: "user",
            content: `${patientContext}Клинические данные для анализа:\n\n${input}`,
          },
        ],
        temperature: 0.7,
        max_tokens: 4000,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      return NextResponse.json({ error: error.error?.message || "DeepSeek API error" }, { status: response.status });
    }

    const data = await response.json();
    const text = data.choices[0]?.message?.content || "No response from AI";
    return NextResponse.json({ output: text });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
