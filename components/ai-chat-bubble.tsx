"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import {
  MessageCircle,
  Send,
  X,
  Loader2,
  Sparkles,
  Bot,
} from "lucide-react"
import { quickActions } from "@/lib/portfolio-assistant"

type ChatMessage = {
  role: "assistant" | "user"
  content: string
}

type AssistantMode = "fallback" | "ai"

const initialMessage: ChatMessage = {
  role: "assistant",
  content:
    "Hi there! I’m Bryan’s portfolio assistant. I can help you explore his technical skills, featured projects, and ways to get in touch.",
}

export function AIChatBubble() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState<ChatMessage[]>([initialMessage])
  const [isLoading, setIsLoading] = useState(false)
  const [mode, setMode] = useState<AssistantMode>("fallback")
  const [error, setError] = useState<string | null>(null)

  const scrollRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, isLoading])

  const canSend = useMemo(
    () => message.trim().length > 0 && !isLoading,
    [message, isLoading]
  )

  async function sendChatMessage(content: string) {
    const trimmed = content.trim()
    if (!trimmed) return

    const userMessage: ChatMessage = {
      role: "user",
      content: trimmed,
    }

    const nextMessages = [...messages, userMessage]

    setMessages(nextMessages)
    setMessage("")
    setIsLoading(true)
    setError(null)

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: nextMessages,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data?.error || "Failed to send message.")
      }

      setMode(data?.mode === "ai" ? "ai" : "fallback")

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.message,
        },
      ])
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Something went wrong."

      setError(errorMessage)
      setMode("fallback")

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I’m currently running in portfolio fallback mode. I can still help with Bryan’s skills, featured projects, and contact details.",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button
            size="lg"
            className={`
              rounded-full size-14 p-0 shadow-lg
              transition-all duration-300
              hover:scale-105 hover:shadow-xl hover:shadow-primary/20
              ${isOpen ? "bg-accent text-accent-foreground" : "bg-primary text-primary-foreground"}
            `}
          >
            {isOpen ? <X className="size-5" /> : <MessageCircle className="size-5" />}
            <span className="sr-only">Chat with Bryan&apos;s portfolio assistant</span>
          </Button>
        </PopoverTrigger>

        <PopoverContent
          side="top"
          align="end"
          sideOffset={16}
          className="w-80 md:w-96 p-0 border-border/50 bg-card/95 backdrop-blur-xl shadow-2xl"
        >
          <div className="p-4 border-b border-border/50">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="size-10 rounded-full bg-gradient-to-br from-primary/20 to-accent flex items-center justify-center">
                    <MessageCircle className="size-5 text-foreground" />
                  </div>
                  <div className="absolute bottom-0 right-0 size-3 rounded-full bg-emerald-500 border-2 border-card" />
                </div>

                <div>
                  <h3 className="font-semibold text-foreground text-sm">
                    Portfolio Assistant
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Ask about Bryan&apos;s work
                  </p>
                </div>
              </div>

              <div
                className={`inline-flex items-center gap-1 rounded-full border px-2 py-1 text-[10px] font-medium ${
                  mode === "ai"
                    ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                    : "border-amber-500/30 bg-amber-500/10 text-amber-400"
                }`}
              >
                {mode === "ai" ? (
                  <>
                    <Sparkles className="size-3" />
                    AI
                  </>
                ) : (
                  <>
                    <Bot className="size-3" />
                    Fallback
                  </>
                )}
              </div>
            </div>
          </div>

          <div
            ref={scrollRef}
            className="p-4 min-h-[240px] max-h-[360px] overflow-y-auto"
          >
            <div className="space-y-4">
              {messages.map((msg, index) => (
                <div
                  key={`${msg.role}-${index}`}
                  className={`flex gap-3 ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {msg.role === "assistant" && (
                    <div className="size-8 shrink-0 rounded-full bg-accent flex items-center justify-center">
                      <MessageCircle className="size-4 text-accent-foreground" />
                    </div>
                  )}

                  <div
                    className={`max-w-[80%] rounded-lg px-3 py-2 text-sm leading-relaxed ${
                      msg.role === "assistant"
                        ? "bg-secondary/50 rounded-tl-none text-foreground/90"
                        : "bg-primary text-primary-foreground rounded-tr-none"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex gap-3">
                  <div className="size-8 shrink-0 rounded-full bg-accent flex items-center justify-center">
                    <MessageCircle className="size-4 text-accent-foreground" />
                  </div>
                  <div className="bg-secondary/50 rounded-lg rounded-tl-none px-3 py-2 text-sm text-foreground/90 flex items-center gap-2">
                    <Loader2 className="size-4 animate-spin" />
                    Thinking...
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {quickActions.map((action) =>
                action.type === "link" ? (
                  <a
                    key={action.label}
                    href={action.href}
                    className="text-xs px-3 py-1.5 rounded-full border border-border/50 bg-background/50 text-muted-foreground hover:text-foreground hover:border-border transition-colors"
                  >
                    {action.label}
                  </a>
                ) : (
                  <button
                    key={action.label}
                    type="button"
                    onClick={() => sendChatMessage(action.prompt)}
                    className="text-xs px-3 py-1.5 rounded-full border border-border/50 bg-background/50 text-muted-foreground hover:text-foreground hover:border-border transition-colors"
                  >
                    {action.label}
                  </button>
                )
              )}
            </div>

            {mode === "fallback" && (
              <p className="mt-3 text-[11px] text-muted-foreground leading-relaxed">
                Running in fallback mode right now, but I can still answer common questions about Bryan&apos;s skills, projects, and contact details.
              </p>
            )}

            {error && (
              <p className="mt-2 text-[11px] text-amber-400">{error}</p>
            )}
          </div>

          <div className="p-4 border-t border-border/50">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                void sendChatMessage(message)
              }}
              className="flex gap-2"
            >
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ask about skills, projects, or contact..."
                className="flex-1 px-3 py-2 text-sm bg-secondary/50 border border-border/50 rounded-lg placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-transparent text-foreground"
              />
              <Button
                type="submit"
                size="icon"
                className="shrink-0"
                disabled={!canSend}
              >
                {isLoading ? (
                  <Loader2 className="size-4 animate-spin" />
                ) : (
                  <Send className="size-4" />
                )}
                <span className="sr-only">Send message</span>
              </Button>
            </form>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}