import os
from dotenv import load_dotenv

load_dotenv()

try:
    import google.genai as genai
    _USE_NEW_GENAI = True
except ImportError:
    import google.generativeai as genai
    _USE_NEW_GENAI = False

API_KEY = os.getenv("GEMINI_API_KEY") or os.getenv("GENAI_API_KEY")

if not API_KEY:
    raise RuntimeError("GEMINI_API_KEY environment variable is required")

if hasattr(genai, "configure"):
    genai.configure(api_key=API_KEY)


def _build_model():
    if _USE_NEW_GENAI and hasattr(genai, "TextModel"):
        return genai.TextModel.from_pretrained("gemini-1.5-pro")
    if hasattr(genai, "GenerativeModel"):
        return genai.GenerativeModel("gemini-1.5-pro")
    raise RuntimeError("Unable to create Gemini model from installed library")


def analyze_text(text: str) -> str:
    prompt = f"""
You are a clinical decision support system.

Analyze the patient input and provide:

1. Summary
2. Differential diagnosis (top 3)
3. Red flags
4. Treatment options
5. Questions for doctor

Patient input:
{text}
"""

    model = _build_model()

    if hasattr(model, "predict"):
        response = model.predict(prompt)
        return getattr(response, "text", str(response))

    if hasattr(model, "generate_content"):
        response = model.generate_content(prompt)
        return getattr(response, "text", str(response))

    raise RuntimeError("Unsupported Gemini model API: no predict or generate_content method")
