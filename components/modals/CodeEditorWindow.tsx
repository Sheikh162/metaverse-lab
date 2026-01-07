"use client";

import React, { useState, useEffect, useRef } from "react";
import Editor from "@monaco-editor/react";
import { 
  Play, RotateCcw, Save, Loader2, Terminal, X, 
  Code2, FileText, RefreshCw, Bot, Cpu, Plus 
} from "lucide-react";

// Shadcn Imports
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

import { toast } from "sonner";
import { useAuth } from "@/components/providers/AuthProvider";
import { CloudAPI } from "@/lib/cloud-shell-api";

// --- LANGUAGE CONFIG ---
const LANGUAGES = [
  { id: "cpp", label: "C++ (GCC)", snippet: "#include <iostream>\n\nint main() {\n\tstd::cout << \"Hello NetVerse\";\n\treturn 0;\n}" },
  { id: "python", label: "Python 3", snippet: "print('Hello NetVerse')" },
  { id: "javascript", label: "Node.js", snippet: "console.log('Hello NetVerse');" }
];

interface CodeEditorWindowProps {
  isOpen: boolean;
  onClose: () => void;
  station: any;
}

export default function CodeEditorWindow({ isOpen, onClose, station }: CodeEditorWindowProps) {
  const { user } = useAuth();
  
  // --- STATE ---
  const [activeLang, setActiveLang] = useState(LANGUAGES[0]);
  const [code, setCode] = useState(LANGUAGES[0].snippet);
  const [output, setOutput] = useState("");
  
  // Loading States
  const [isRunning, setIsRunning] = useState(false);
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [isLoadingFiles, setIsLoadingFiles] = useState(false);

  // File System State
  // 🟢 CHANGE 1: Default to "Untitled" instead of main.cpp
  const [currentFilename, setCurrentFilename] = useState("Untitled");
  const [files, setFiles] = useState<any[]>([]);

  const terminalEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll effect
  useEffect(() => {
    if (output && terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [output]);

  // Initial Load
  useEffect(() => {
    if (isOpen && user?.email) {
      refreshFiles();
    }
  }, [isOpen, user]);

  const refreshFiles = async () => {
    if (!user?.email) return;
    setIsLoadingFiles(true);
    const data = await CloudAPI.listFiles();
    if (data.files) setFiles(data.files);
    setIsLoadingFiles(false);
  };

  // 🟢 CHANGE 2: Add a handler to reset to a new file
  const handleNewFile = () => {
    setCurrentFilename("Untitled");
    setCode(activeLang.snippet);
    setOutput("");
  };

  // --- ACTIONS ---
  const handleRun = async () => {
    setIsRunning(true);
    setOutput("📡 Sending to Cloud VM...");
    
    const result = await CloudAPI.execute(code, activeLang.id);
    
    if (result.isError) {
      setOutput(`⚠️ Error:\n${result.output}`);
    } else {
      setOutput(`✅ Execution Time: ${result.executionTime || "0ms"}\n\n${result.output}`);
    }
    setIsRunning(false);
  };

  const handleSave = async () => {
    if (!user?.email) return toast.error("You must be logged in to save.");
    
    let filename = currentFilename;
    // Check for both lowercase and capitalized versions
    if (filename === "untitled" || filename === "Untitled") {
      const input = prompt("Enter filename to save (e.g., main.cpp):");
      if (!input) return;
      filename = input;
    }

    const toastId = toast.loading("Saving to cloud...");
    const res = await CloudAPI.saveFile(filename, code);
    
    toast.dismiss(toastId);
    if (res.success) {
      toast.success("File saved successfully!");
      setCurrentFilename(filename);
      refreshFiles();
    } else {
      toast.error("Save failed: " + res.error);
    }
  };

  const loadFile = async (filename: string) => {
    if (!user?.email) return;
    const toastId = toast.loading(`Loading ${filename}...`);
    
    const data = await CloudAPI.readFile(filename);
    
    toast.dismiss(toastId);
    if (data.content) {
      setCode(data.content);
      setCurrentFilename(filename);
      setOutput(""); 
      
      if (filename.endsWith(".py")) setActiveLang(LANGUAGES[1]);
      else if (filename.endsWith(".js")) setActiveLang(LANGUAGES[2]);
      else setActiveLang(LANGUAGES[0]);
    }
  };

  // --- AI ASSISTANT ---
  const handleAskAI = async () => {
    if (!output) {
      toast.error("Run your code first to generate an output/error for the AI to analyze!");
      return;
    }
    
    setIsAiLoading(true);
    try {
      const res = await fetch("/api/hint", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code, error: output, language: activeLang.id }),
      });
      
      if (!res.ok) throw new Error("AI Service unavailable");
      const data = await res.json();
      setOutput((prev) => prev + "\n\n🤖 AI LAB ASSISTANT:\n" + data.hint);
    } catch (err) {
      toast.error("AI Assistant is offline.");
    } finally {
      setIsAiLoading(false);
    }
  };

  const onLanguageChange = (val: string) => {
    const selected = LANGUAGES.find(l => l.id === val) || LANGUAGES[0];
    setActiveLang(selected);
    setCode(selected.snippet);
    setOutput("");
  };

  return (
    <Dialog open={isOpen} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="!max-w-[95vw] !w-[95vw] h-[90vh] bg-[#1e1e1e] border-zinc-800 p-0 gap-0 flex flex-col overflow-hidden sm:rounded-xl shadow-2xl [&>button]:hidden">
        
        {/* --- HEADER --- */}
        <div className="h-14 bg-zinc-900 border-b border-border flex items-center justify-between px-4 shrink-0 select-none">
          <div className="flex items-center gap-6">
             <div className="flex flex-col">
               <DialogTitle className="text-foreground font-bold font-mono text-sm flex items-center gap-2">
                 <Cpu className="w-4 h-4 text-primary"/>
                 {station?.label || "IDE Environment"}
               </DialogTitle>
               <span className="text-[10px] text-muted-foreground font-mono flex items-center gap-1">
                 {currentFilename} 
                 {files.find(f => f.name === currentFilename) ? (
                    <Badge variant="outline" className="text-[9px] h-4 px-1 py-0 border-green-900 text-green-500">SAVED</Badge>
                 ) : (
                    <Badge variant="outline" className="text-[9px] h-4 px-1 py-0 border-orange-900 text-orange-500">UNSAVED</Badge>
                 )}
               </span>
             </div>

             <div className="hidden sm:block">
                <Select value={activeLang.id} onValueChange={onLanguageChange}>
                  <SelectTrigger className="w-[140px] h-8 text-xs font-mono bg-zinc-800 border-zinc-700 text-zinc-300 focus:ring-primary">
                    <SelectValue placeholder="Language" />
                  </SelectTrigger>
                  <SelectContent className="bg-zinc-800 border-zinc-700">
                    {LANGUAGES.map(lang => (
                      <SelectItem key={lang.id} value={lang.id} className="text-zinc-300 focus:bg-zinc-700 focus:text-white cursor-pointer font-mono text-xs">
                        {lang.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
             </div>
          </div>

          <div className="flex items-center gap-2">
            <Button 
              size="sm" 
              variant="outline"
              onClick={handleAskAI} 
              disabled={isAiLoading || !output}
              className="h-8 border-purple-500/30 text-purple-400 hover:bg-purple-900/20 hover:text-purple-300 font-mono text-xs"
            >
              {isAiLoading ? <Loader2 className="w-3.5 h-3.5 animate-spin"/> : <Bot className="w-3.5 h-3.5 sm:mr-2"/>}
              <span className="hidden sm:inline">AI Hint</span>
            </Button>

            <Button size="sm" variant="secondary" onClick={handleSave} className="h-8 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 font-mono text-xs">
              <Save className="w-3.5 h-3.5 mr-2"/> Save As
            </Button>

            <Button size="sm" onClick={handleRun} disabled={isRunning} className="h-8 bg-green-600 hover:bg-green-500 text-white shadow-[0_0_10px_rgba(22,163,74,0.4)] font-mono text-xs font-bold min-w-[80px]">
              {isRunning ? <Loader2 className="w-3.5 h-3.5 animate-spin"/> : <Play className="w-3.5 h-3.5 mr-2 fill-current"/>}
              RUN
            </Button>
            
            <div className="w-px h-5 bg-zinc-700 mx-1"/>
            
            <Button size="icon" variant="ghost" onClick={onClose} className="h-8 w-8 text-zinc-400 hover:text-red-400 hover:bg-red-500/10 rounded-full">
              <X className="w-5 h-5"/>
            </Button>
          </div>
        </div>

        {/* --- MAIN BODY --- */}
        <div className="flex-1 flex overflow-hidden">
          
          {/* LEFT: FILE EXPLORER SIDEBAR */}
          <div className="w-48 bg-zinc-950 border-r border-border flex flex-col shrink-0">
            <div className="h-8 flex items-center justify-between px-3 text-[10px] font-bold text-muted-foreground uppercase tracking-wider bg-zinc-900 border-b border-zinc-800 font-mono">
              <span>Cloud Files</span>
              <div className="flex items-center gap-2">
                {/* 🟢 CHANGE 3: "New File" Button */}
                  <button 
                    onClick={handleNewFile} 
                    title="New File" 
                    className="text-muted-foreground hover:text-green-400 transition-colors"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                  <button 
                    onClick={refreshFiles} 
                    title="Refresh Files" 
                    className={`text-muted-foreground hover:text-primary transition-colors ${isLoadingFiles ? 'animate-spin' : ''}`}
                  >
                    <RefreshCw className="w-3 h-3" />
                  </button>
              </div>
            </div>
            
            <ScrollArea className="flex-1">
               <div className="p-2 space-y-1">
                 
                 {/* 🟢 CHANGE 4: Visual Indicator for "Untitled" file */}
                 {currentFilename === "Untitled" && (
                    <button 
                       className="w-full flex items-center gap-2 px-2 py-1.5 rounded text-xs font-mono text-left transition-colors bg-primary/10 text-primary border border-primary/20 mb-1"
                    >
                       <FileText className="w-3.5 h-3.5 opacity-70"/>
                       <span className="truncate italic">Untitled</span>
                       <span className="ml-auto text-[9px] opacity-50 text-orange-400">*</span>
                    </button>
                 )}

                 {isLoadingFiles ? (
                   <div className="text-zinc-600 text-[10px] p-2 text-center font-mono">Syncing...</div>
                 ) : files.length === 0 && currentFilename !== "Untitled" ? (
                   <div className="text-zinc-600 text-[10px] p-2 text-center italic font-mono">No files</div>
                 ) : (
                   files.map((file) => (
                     <button 
                       key={file.name} 
                       onClick={() => loadFile(file.name)}
                       className={`w-full flex items-center gap-2 px-2 py-1.5 rounded text-xs font-mono text-left transition-colors ${
                         currentFilename === file.name 
                          ? "bg-primary/10 text-primary" 
                          : "text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200"
                       }`}
                     >
                       <FileText className="w-3.5 h-3.5 opacity-70"/>
                       <span className="truncate">{file.name}</span>
                     </button>
                   ))
                 )}
               </div>
            </ScrollArea>
          </div>

          {/* RIGHT: EDITOR + TERMINAL (No changes needed) */}
          <div className="flex-1 flex flex-col min-w-0">
            <div className="flex-1 relative bg-[#1e1e1e]">
               <Editor
                 height="100%"
                 language={activeLang.id}
                 theme="vs-dark"
                 value={code}
                 onChange={(value) => setCode(value || "")}
                 options={{
                   minimap: { enabled: false },
                   fontSize: 14,
                   lineNumbers: "on",
                   scrollBeyondLastLine: false,
                   automaticLayout: true,
                   padding: { top: 16 },
                   fontFamily: "'Space Mono', monospace"
                 }}
               />
            </div>

            <div className="h-48 bg-black border-t border-zinc-800 flex flex-col shrink-0">
              <div className="h-8 bg-zinc-900 border-b border-zinc-800 flex items-center px-4 justify-between select-none">
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-2 font-mono">
                  <Terminal className="w-3 h-3 text-primary"/> Console Output
                </span>
                <button onClick={() => setOutput("")} className="text-[10px] text-zinc-500 hover:text-zinc-300 font-mono hover:underline">Clear Log</button>
              </div>
              
              <ScrollArea className="flex-1 h-full w-full font-mono text-sm">
                <div className="p-4">
                  {output ? (
                    <>
                      <pre className="text-zinc-300 whitespace-pre-wrap break-words font-[inherit]">
                        {output}
                      </pre>
                      <div ref={terminalEndRef} className="h-px w-full" />
                    </>
                  ) : (
                    <div className="h-32 flex flex-col items-center justify-center text-zinc-800 space-y-2 select-none">
                      <Play className="w-8 h-8 opacity-20"/>
                      <span className="text-xs font-mono">Run code to see output</span>
                    </div>
                  )}
                </div>
              </ScrollArea>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}