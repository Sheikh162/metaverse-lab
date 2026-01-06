import React, { useState, useEffect, useRef } from "react";
import { useChat } from "@/hooks/useChat";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { X, Send, Terminal } from "lucide-react";

interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
  chatId: string;
  myUsername: string;
  partnerName: string;
}

export default function ChatModal({ isOpen, onClose, chatId, myUsername, partnerName }: ChatModalProps) {
  const { messages, sendMessage } = useChat(chatId);
  const [inputText, setInputText] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  const handleSend = () => {
    sendMessage(myUsername, inputText);
    setInputText("");
  };

  if (!isOpen) return null;

  return (
    <Card className="fixed bottom-4 right-4 z-50 w-80 h-96 border-border shadow-2xl animate-in slide-in-from-right-10 flex flex-col overflow-hidden bg-card/95 backdrop-blur-md">
      
      {/* Header */}
      <CardHeader className="p-3 border-b border-border bg-muted/40 flex flex-row items-center justify-between space-y-0">
        <div className="flex items-center gap-2">
           <Terminal className="w-4 h-4 text-primary" />
           <CardTitle className="text-sm font-mono font-bold text-foreground">
             COMM_LINK :: {partnerName}
           </CardTitle>
        </div>
        <Button variant="ghost" size="icon" onClick={onClose} className="h-6 w-6 text-muted-foreground hover:text-foreground">
          <X className="w-4 h-4" />
        </Button>
      </CardHeader>

      {/* Messages Area */}
      <ScrollArea className="flex-1 p-4 bg-background/50">
        <div className="space-y-3">
          {messages.map((msg) => {
            const isMe = msg.senderName === myUsername;
            return (
              <div key={msg.id} className={`flex flex-col ${isMe ? "items-end" : "items-start"}`}>
                 <span className="text-[10px] text-muted-foreground mb-0.5 font-mono uppercase">
                   {isMe ? "YOU" : msg.senderName}
                 </span>
                 <div className={`px-3 py-2 rounded-md text-sm font-mono max-w-[85%] break-words shadow-sm border ${
                   isMe 
                     ? "bg-primary text-primary-foreground border-primary rounded-br-none" 
                     : "bg-muted text-foreground border-border rounded-bl-none"
                 }`}>
                   {msg.text}
                 </div>
              </div>
            );
          })}
          <div ref={bottomRef} />
        </div>
      </ScrollArea>

      {/* Input Area */}
      <div className="p-3 border-t border-border bg-muted/20 flex gap-2 items-center">
        <Input 
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Enter message..."
          className="font-mono text-xs bg-background border-input focus-visible:ring-primary h-9"
        />
        <Button size="icon" onClick={handleSend} className="h-9 w-9 shrink-0">
          <Send className="w-4 h-4" />
        </Button>
      </div>
    </Card>
  );
}