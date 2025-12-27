"use client";

import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import { Play, RotateCcw, FileCode, Bot, Loader2 } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { toast } from "sonner"; // Assuming you have sonner or use alert

interface CodeEditorWindowProps {
  isOpen: boolean;
  onClose: () => void;
  station: any;
}

export default function CodeEditorWindow({ isOpen, onClose, station }: CodeEditorWindowProps) {
  const [code, setCode] = useState("// Write your solution here...\nconsole.log('Hello NetVerse');");
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [isAiLoading, setIsAiLoading] = useState(false);

  // 1. RUN CODE LOGIC
  const handleRun = async () => {
    setIsRunning(true);
    setOutput("Sending to Execution Container...");

    try {
      const res = await fetch("/api/run", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code, language: "javascript" }),
      });
      const data = await res.json();
      setOutput(data.output || "Execution Complete (No Output)");
    } catch (err) {
      setOutput("Error: Could not connect to execution engine.");
    } finally {
      setIsRunning(false);
    }
  };

  // 2. ASK AI LOGIC
  const handleAskAI = async () => {
    if (!output || output.includes("Sending")) {
      toast.error("Run your code first to generate an output/error!");
      return;
    }
    
    setIsAiLoading(true);
    try {
      const res = await fetch("/api/hint", {
        method: "POST",
        body: JSON.stringify({ code, error: output }),
      });
      const data = await res.json();
      
      // Append AI Hint to the console output
      setOutput((prev) => prev + "\n\n🤖 AI LAB ASSISTANT:\n" + data.hint);
    } catch (err) {
      toast.error("AI Assistant is offline.");
    } finally {
      setIsAiLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-w-[90vw] h-[85vh] bg-zinc-950 border-zinc-800 flex flex-col p-0">
        {/* HEADER */}
        <div className="h-14 border-b border-zinc-800 bg-zinc-900 flex items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-600 rounded-md"><FileCode className="w-5 h-5 text-white"/></div>
            <div>
              <DialogTitle className="text-white font-mono">{station?.label || "Dev Terminal"}</DialogTitle>
              <div className="text-[10px] text-zinc-400">Environment: Node.js v18 (Secure)</div>
            </div>
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={() => setCode("")} className="border-zinc-700 text-zinc-400">
              <RotateCcw className="w-4 h-4 mr-2"/> Reset
            </Button>
            
            {/* AI BUTTON */}
            <Button 
              size="sm" 
              variant="secondary"
              onClick={handleAskAI} 
              disabled={isAiLoading}
              className="bg-purple-900/50 text-purple-200 hover:bg-purple-900 border border-purple-700"
            >
              {isAiLoading ? <Loader2 className="w-4 h-4 animate-spin"/> : <Bot className="w-4 h-4 mr-2"/>}
              Ask AI Hint
            </Button>

            {/* RUN BUTTON */}
            <Button size="sm" onClick={handleRun} disabled={isRunning} className="bg-green-600 hover:bg-green-500 text-white">
              {isRunning ? <Loader2 className="w-4 h-4 animate-spin"/> : <Play className="w-4 h-4 mr-2"/>}
              Run Code
            </Button>
          </div>
        </div>

        {/* EDITOR BODY */}
        <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
          <div className="flex-1 border-r border-zinc-800">
             <Editor
               height="100%"
               defaultLanguage="javascript"
               theme="vs-dark"
               value={code}
               onChange={(val) => setCode(val || "")}
               options={{ minimap: { enabled: false }, fontSize: 14, padding: { top: 20 } }}
             />
          </div>
          
          {/* CONSOLE */}
          <div className="h-1/3 lg:h-auto lg:w-1/3 bg-[#0d0d0d] flex flex-col font-mono text-sm">
            <div className="px-4 py-2 bg-zinc-900 border-b border-zinc-800 text-zinc-400 text-xs font-bold tracking-wider">
              TERMINAL OUTPUT
            </div>
            <div className="p-4 text-zinc-300 whitespace-pre-wrap overflow-auto flex-1">
              {output || <span className="text-zinc-600 italic">// Output will appear here...</span>}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}