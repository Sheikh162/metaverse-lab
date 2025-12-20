"use client";

import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import { Play, RotateCcw, CheckCircle2, XCircle, Terminal, FileCode } from "lucide-react";
// 1. Import DialogTitle
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface CodeEditorWindowProps {
  isOpen: boolean;
  onClose: () => void;
  station: any; // The station object from config
}

export default function CodeEditorWindow({ isOpen, onClose, station }: CodeEditorWindowProps) {
  const [code, setCode] = useState("// Write your solution here...\n\nfunction solve() {\n  return true;\n}");
  const [output, setOutput] = useState<string>("");
  const [isRunning, setIsRunning] = useState(false);

  const handleRun = () => {
    setIsRunning(true);
    setOutput("Compiling...");
    
    // MOCK BACKEND CALL (Replace with real Cloud Run fetch later)
    setTimeout(() => {
      setIsRunning(false);
      setOutput("Result: Success\nExecution Time: 42ms\n\nTest Case 1: PASSED\nTest Case 2: PASSED");
    }, 1500);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-w-[95vw] h-[90vh] bg-zinc-950 border-zinc-800 p-0 flex flex-col overflow-hidden">
        
        {/* --- HEADER --- */}
        <div className="h-12 border-b border-zinc-800 bg-zinc-900 flex items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <div className={`p-1.5 rounded ${station?.color || "bg-blue-500"}`}>
              <FileCode className="w-4 h-4 text-white" />
            </div>
            <div>
              {/* 2. Replace <h2> with <DialogTitle> and keep the styling */}
              <DialogTitle className="text-sm font-bold text-zinc-100">
                {station?.label || "Coding Task"}
              </DialogTitle>
              <p className="text-[10px] text-zinc-400">ID: {station?.id}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={() => setCode("")} className="text-zinc-400 hover:text-white">
              <RotateCcw className="w-3 h-3 mr-2" /> Reset
            </Button>
            <Button size="sm" onClick={handleRun} disabled={isRunning} className="bg-green-600 hover:bg-green-500 text-white">
              {isRunning ? "Running..." : <><Play className="w-3 h-3 mr-2" /> Run Code</>}
            </Button>
          </div>
        </div>

        {/* --- MAIN SPLIT VIEW --- */}
        <div className="flex-1 flex overflow-hidden">
          
          {/* LEFT: PROBLEM STATEMENT (Only if it's an Exam/Lab) */}
          <div className="w-1/3 border-r border-zinc-800 bg-zinc-900/50 p-6 overflow-y-auto text-zinc-300">
            <h1 className="text-xl font-bold text-white mb-4">Problem: Invert Binary Tree</h1>
            <p className="mb-4 text-sm leading-relaxed">
              Given the root of a binary tree, invert the tree, and return its root.
            </p>
            <div className="bg-zinc-900 border border-zinc-800 p-3 rounded-lg mb-4 font-mono text-xs">
              <span className="text-blue-400">Input:</span> root = [4,2,7,1,3,6,9]<br/>
              <span className="text-green-400">Output:</span> [4,7,2,9,6,3,1]
            </div>
            <h3 className="font-bold text-white mb-2 text-sm">Constraints:</h3>
            <ul className="list-disc pl-5 text-xs space-y-1 text-zinc-400">
              <li>The number of nodes in the tree is in the range [0, 100].</li>
              <li>-100 &lt;= Node.val &lt;= 100</li>
            </ul>
          </div>

          {/* MIDDLE: EDITOR */}
          <div className="flex-1 flex flex-col bg-[#1e1e1e]">
            <Editor
              height="60%"
              defaultLanguage="javascript"
              theme="vs-dark"
              value={code}
              onChange={(val) => setCode(val || "")}
              options={{ minimap: { enabled: false }, fontSize: 14 }}
            />
            
            {/* BOTTOM: OUTPUT CONSOLE */}
            <div className="flex-1 border-t border-zinc-800 bg-zinc-950 flex flex-col">
              <div className="h-8 bg-zinc-900 border-b border-zinc-800 flex items-center px-4">
                <span className="text-xs font-bold text-zinc-400 flex items-center gap-2">
                  <Terminal className="w-3 h-3" /> CONSOLE OUTPUT
                </span>
              </div>
              <div className="p-4 font-mono text-sm text-zinc-300 whitespace-pre-wrap overflow-auto">
                {output || <span className="text-zinc-600 italic">Click "Run Code" to see output...</span>}
              </div>
            </div>
          </div>

        </div>
      </DialogContent>
    </Dialog>
  );
}