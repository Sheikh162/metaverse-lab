"use client";

import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import { 
  Play, 
  RotateCcw, 
  Bot, 
  Loader2, 
  Terminal, 
  X, 
  ChevronDown 
} from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { DialogTitle } from "@radix-ui/react-dialog";

// --- CONFIGURATION ---
const LANGUAGES = [
  { id: "javascript", label: "JavaScript (Node.js)", snippet: "console.log('Hello NetVerse');" },
  { id: "python", label: "Python 3.10", snippet: "print('Hello NetVerse')" },
  { id: "go", label: "Go 1.20", snippet: "package main\n\nimport \"fmt\"\n\nfunc main() {\n\tfmt.Println(\"Hello NetVerse\")\n}" },
  { id: "cpp", label: "C++ (GCC)", snippet: "#include <iostream>\n\nint main() {\n\tstd::cout << \"Hello NetVerse\";\n\treturn 0;\n}" }
];

interface CodeEditorWindowProps {
  isOpen: boolean;
  onClose: () => void;
  station: any;
}

export default function CodeEditorWindow({ isOpen, onClose, station }: CodeEditorWindowProps) {
  // State
  const [activeLang, setActiveLang] = useState(LANGUAGES[0]);
  const [code, setCode] = useState(LANGUAGES[0].snippet);
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [isAiLoading, setIsAiLoading] = useState(false);

  // Helper: Change Language
  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = LANGUAGES.find(l => l.id === e.target.value) || LANGUAGES[0];
    setActiveLang(selected);
    setCode(selected.snippet); // Optional: Reset code snippet on change
    setOutput(""); // Clear output
  };

  // 1. RUN CODE LOGIC
  const handleRun = async () => {
    setIsRunning(true);
    setOutput("Sending to Execution Container...");

    try {
      // Pass the selected language to your backend
      const res = await fetch("/api/run", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code, language: activeLang.id }),
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
    if (!output) {
      toast.error("Run your code first to generate an output/error!");
      return;
    }
    
    setIsAiLoading(true);
    try {
      const res = await fetch("/api/hint", {
        method: "POST",
        body: JSON.stringify({ code, error: output, language: activeLang.id }),
      });
      const data = await res.json();
      setOutput((prev) => prev + "\n\n🤖 AI LAB ASSISTANT:\n" + data.hint);
    } catch (err) {
      toast.error("AI Assistant is offline.");
    } finally {
      setIsAiLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(v) => !v && onClose()}>
      <DialogContent 
        // 1. FIX: Custom Classes to remove default close button overlapping & maximize size
        className="max-w-[95vw] h-[90vh] bg-[#1e1e1e] border-zinc-800 p-0 gap-0 flex flex-col overflow-hidden sm:rounded-xl"
      >
        {/* --- HEADER --- */}
        <div className="h-16 bg-[#252526] border-b border-black/40 flex items-center justify-between px-4 shrink-0">
          
          {/* LEFT: Title & Language Selector */}
          <div className="flex items-center gap-4">
            <div className="flex flex-col">
              <DialogTitle className="text-white font-bold text-sm tracking-wide flex items-center gap-2">
                 <Terminal className="w-4 h-4 text-blue-400"/>
                 {station?.label || "TERMINAL_01"}
              </DialogTitle>
              <span className="text-[10px] text-zinc-500 uppercase font-mono">
                Remote Environment Connected
              </span>
            </div>

            {/* Language Dropdown (Styled HTML Select) */}
            <div className="relative group ml-4">
              <select 
                value={activeLang.id}
                onChange={handleLanguageChange}
                className="appearance-none bg-zinc-900 border border-zinc-700 text-zinc-300 text-xs rounded-md pl-3 pr-8 py-1.5 focus:outline-none focus:border-blue-500 hover:border-zinc-500 transition-colors cursor-pointer"
              >
                {LANGUAGES.map(lang => (
                  <option key={lang.id} value={lang.id}>{lang.label}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-2 w-3 h-3 text-zinc-500 pointer-events-none"/>
            </div>
          </div>

          {/* RIGHT: Action Buttons */}
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => { setCode(activeLang.snippet); setOutput(""); }} 
              className="text-zinc-400 hover:text-white hover:bg-zinc-800 hidden sm:flex"
            >
              <RotateCcw className="w-4 h-4 mr-2"/> Reset
            </Button>
            
            <Button 
              size="sm" 
              variant="secondary"
              onClick={handleAskAI} 
              disabled={isAiLoading || !output}
              className="bg-purple-900/20 text-purple-300 hover:bg-purple-900/40 border border-purple-500/30"
            >
              {isAiLoading ? <Loader2 className="w-4 h-4 animate-spin"/> : <Bot className="w-4 h-4 sm:mr-2"/>}
              <span className="hidden sm:inline">AI Hint</span>
            </Button>

            <Button 
              size="sm" 
              onClick={handleRun} 
              disabled={isRunning} 
              className="bg-green-600 hover:bg-green-500 text-white shadow-lg shadow-green-900/20 min-w-[100px]"
            >
              {isRunning ? <Loader2 className="w-4 h-4 animate-spin"/> : <Play className="w-4 h-4 mr-2 fill-current"/>}
              Run
            </Button>

            <div className="w-px h-6 bg-zinc-700 mx-2"/>

            <Button 
              size="icon" 
              variant="ghost" 
              onClick={onClose}
              className="text-zinc-400 hover:text-white hover:bg-red-500/20 hover:text-red-400 rounded-full w-8 h-8"
            >
              <X className="w-5 h-5"/>
            </Button>
          </div>
        </div>

        {/* --- BODY (Vertical Split) --- */}
        <div className="flex-1 flex flex-col min-h-0">
          
          {/* EDITOR SECTION (Takes available space) */}
          <div className="flex-1 relative bg-[#1e1e1e]">
             <Editor
               height="100%"
               language={activeLang.id} // Dynamic Language
               theme="vs-dark"
               value={code}
               onChange={(val) => setCode(val || "")}
               options={{ 
                 minimap: { enabled: false }, 
                 fontSize: 14, 
                 lineNumbers: "on",
                 scrollBeyondLastLine: false,
                 padding: { top: 16 }
               }}
             />
          </div>
          
          {/* TERMINAL SECTION (Fixed height at bottom) */}
          <div className="h-48 md:h-64 bg-[#0d0d0d] border-t border-zinc-800 flex flex-col shrink-0">
            <div className="h-8 bg-[#1e1e1e] border-b border-black flex items-center px-4 justify-between">
              <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-2">
                <Terminal className="w-3 h-3"/> Console Output
              </span>
              <button 
                onClick={() => setOutput("")}
                className="text-[10px] text-zinc-500 hover:text-zinc-300 underline"
              >
                Clear
              </button>
            </div>
            
            <div className="flex-1 p-4 overflow-auto font-mono text-sm">
              {output ? (
                <pre className="text-zinc-300 whitespace-pre-wrap font-[inherit]">
                  {output}
                </pre>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-zinc-700 space-y-2">
                  <Play className="w-8 h-8 opacity-20"/>
                  <span className="text-xs">Run code to see output</span>
                </div>
              )}
            </div>
          </div>

        </div>
      </DialogContent>
    </Dialog>
  );
}