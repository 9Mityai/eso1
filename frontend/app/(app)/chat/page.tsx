"use client";

import { useState, useRef, useEffect } from "react";
import { useAuth } from "@/components/providers/auth-provider";
import { GlassCard } from "@/components/ui/glass-card";
import { PillButton } from "@/components/ui/pill-button";
import { Send, Bot, User } from "lucide-react";
import { useRouter } from "next/navigation";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
};

export default function ChatPage() {
  const { session } = useAuth();
  const router = useRouter();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Hello! I'm your AI medical assistant. To provide you with the best second opinion, I need to gather some information about your medical history. Please describe your current symptoms or concerns.",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  if (!session || session.role !== "patient") {
    router.push("/login");
    return null;
  }

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/ai-gem", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          input: userMessage.content,
          patientName: session.login,
        }),
      });

      const data = await response.json();

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: data.output || data.error || "Sorry, I couldn't process your request.",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "Sorry, there was an error connecting to the AI service. Please try again.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="border-b border-white/10 bg-black/20 p-4">
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <div className="flex items-center gap-3">
            <Bot className="h-6 w-6 text-accent" />
            <h1 className="text-xl font-semibold text-white">AI Medical Assistant</h1>
          </div>
          <PillButton variant="ghost" size="sm" onClick={() => router.push("/patient-home")}>
            Back to Portal
          </PillButton>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="mx-auto max-w-4xl space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}
            >
              {message.role === "assistant" && (
                <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center">
                  <Bot className="h-4 w-4 text-accent" />
                </div>
              )}
              <GlassCard className={`max-w-[80%] p-4 ${message.role === "user" ? "bg-accent/20" : ""}`}>
                <p className="text-white whitespace-pre-wrap">{message.content}</p>
                <p className="mt-2 text-xs text-white/40">
                  {message.timestamp.toLocaleTimeString()}
                </p>
              </GlassCard>
              {message.role === "user" && (
                <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center">
                  <User className="h-4 w-4 text-white" />
                </div>
              )}
            </div>
          ))}
          {isLoading && (
            <div className="flex gap-3 justify-start">
              <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center">
                <Bot className="h-4 w-4 text-accent" />
              </div>
              <GlassCard className="p-4">
                <div className="flex space-x-1">
                  <div className="h-2 w-2 bg-accent rounded-full animate-bounce"></div>
                  <div className="h-2 w-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                  <div className="h-2 w-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                </div>
              </GlassCard>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input */}
      <div className="border-t border-white/10 bg-black/20 p-4">
        <div className="mx-auto max-w-4xl">
          <div className="flex gap-2">
            <textarea
              className="flex-1 rounded-full border border-white/15 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 resize-none"
              placeholder="Describe your symptoms or ask a question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              rows={1}
              disabled={isLoading}
            />
            <PillButton
              onClick={sendMessage}
              disabled={!input.trim() || isLoading}
              className="px-4"
            >
              <Send className="h-4 w-4" />
            </PillButton>
          </div>
        </div>
      </div>
    </div>
  );
}