"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
  Play, RotateCcw, Save, Loader2, Terminal, X, 
  ChevronDown, Code2, FileText, RefreshCw 
} from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useAuth } from "@/components/providers/AuthProvider"; // Assuming you have this
import { CloudFile, CloudAPI } from "@/lib/cloud-shell-api";
import { DialogTitle } from "@radix-ui/react-dialog";

// --- LANGUAGE CONFIG ---
const LANGUAGES = [
  { id: "cpp", label: "C++ (GCC)", snippet: "#include <iostream>\n\nint main() {\n\tstd::cout << \"Hello NetVerse\";\n\treturn 0;\n}" },
  { id: "python", label: "Python 3", snippet: "print('Hello NetVerse')" },
  { id: "javascript", label: "Node.js", snippet: "console.log('Hello NetVerse');" },
  { id: "go", label: "Go 1.20", snippet: "package main\nimport \"fmt\"\nfunc main() {\n\tfmt.Println(\"Hello\")\n}" },
];

interface CodeEditorWindowProps {
  isOpen: boolean;
  onClose: () => void;
  station: any;
}

export default function CodeEditorWindow({ isOpen, onClose, station }: CodeEditorWindowProps) {
  const { user } = useAuth();
  
  // State
  const [activeLang, setActiveLang] = useState(LANGUAGES[0]);
  const [code, setCode] = useState(LANGUAGES[0].snippet);
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  
  // File System State
  const [currentFilename, setCurrentFilename] = useState("main.cpp");
  const [files, setFiles] = useState<CloudFile[]>([]);
  const [isLoadingFiles, setIsLoadingFiles] = useState(false);

  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  // --- 1. INITIAL LOAD ---
  useEffect(() => {
    if (isOpen && user?.email) {
      refreshFiles();
    }
  }, [isOpen, user]);

  const refreshFiles = async () => {
    if (!user?.email) return;
    setIsLoadingFiles(true);
    const data = await CloudAPI.listFiles(user.email);
    if (data.files) setFiles(data.files);
    setIsLoadingFiles(false);
  };

  // --- 2. ACTIONS ---

  const handleRun = async () => {
    setIsRunning(true);
    setOutput("📡 Sending to Cloud VM...");
    
    // Call our new API
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
    
    // Simple prompt for new files (In a real app, use a proper modal input)
    let filename = currentFilename;
    if (filename === "untitled") {
      const input = prompt("Enter filename (e.g., solution.cpp):");
      if (!input) return;
      filename = input;
    }

    const toastId = toast.loading("Saving to cloud...");
    const res = await CloudAPI.saveFile(user.email, filename, code);
    
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
    
    const data = await CloudAPI.readFile(user.email, filename);
    
    toast.dismiss(toastId);
    if (data.content) {
      setCode(data.content);
      setCurrentFilename(filename);
      // Auto-detect language based on extension (simple check)
      if (filename.endsWith(".py")) setActiveLang(LANGUAGES[1]);
      else if (filename.endsWith(".js")) setActiveLang(LANGUAGES[2]);
      else if (filename.endsWith(".go")) setActiveLang(LANGUAGES[3]);
      else setActiveLang(LANGUAGES[0]);
    }
  };

  // Helper: Tab Indentation
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const start = e.currentTarget.selectionStart;
      const end = e.currentTarget.selectionEnd;
      const newValue = code.substring(0, start) + "  " + code.substring(end);
      setCode(newValue);
      setTimeout(() => {
        if (textAreaRef.current) textAreaRef.current.selectionStart = textAreaRef.current.selectionEnd = start + 2;
      }, 0);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(v) => !v && onClose()}>
      {/* FORCE FULL WIDTH/HEIGHT with !w-[95vw] */}
      <DialogContent className="!max-w-[95vw] !w-[95vw] h-[90vh] bg-[#1e1e1e] border-zinc-800 p-0 gap-0 flex flex-col overflow-hidden sm:rounded-xl shadow-2xl">
        
        {/* --- HEADER --- */}
        <div className="h-16 bg-[#252526] border-b border-black/40 flex items-center justify-between px-4 shrink-0 select-none">
          {/* Left: Title & File Name */}
          <div className="flex items-center gap-4">
             <div className="flex flex-col">
               <DialogTitle className="text-white font-bold text-sm flex items-center gap-2">
                 <Code2 className="w-4 h-4 text-blue-400"/>
                 {station?.label || "IDE"}
               </DialogTitle>
               <span className="text-[10px] text-zinc-400 font-mono flex items-center gap-1">
                 {currentFilename} {files.find(f => f.name === currentFilename) ? "(Saved)" : "(Unsaved)"}
               </span>
             </div>

             {/* Language Select */}
             <div className="relative ml-4">
                <select 
                  value={activeLang.id}
                  onChange={(e) => {
                    const selected = LANGUAGES.find(l => l.id === e.target.value) || LANGUAGES[0];
                    setActiveLang(selected);
                    setCode(selected.snippet); // <--- THIS LINE WAS MISSING!
                    setOutput("");             // Optional: Clear old output
                  }}
                  className="appearance-none bg-zinc-900 border border-zinc-700 text-zinc-300 text-xs rounded-md pl-3 pr-8 py-1.5 focus:outline-none focus:border-blue-500 cursor-pointer"
                >
                 {LANGUAGES.map(lang => (
                   <option key={lang.id} value={lang.id}>{lang.label}</option>
                 ))}
               </select>
               <ChevronDown className="absolute right-2 top-2 w-3 h-3 text-zinc-500 pointer-events-none"/>
             </div>
          </div>

          {/* Right: Buttons */}
          <div className="flex items-center gap-2">
            <Button size="sm" variant="ghost" onClick={() => setCode(activeLang.snippet)} className="text-zinc-400 hover:text-white hidden sm:flex">
              <RotateCcw className="w-4 h-4 mr-2"/> Reset
            </Button>
            
            <Button size="sm" variant="secondary" onClick={handleSave} className="bg-blue-900/20 text-blue-300 hover:bg-blue-900/40 border border-blue-500/30">
              <Save className="w-4 h-4 mr-2"/> Save
            </Button>

            <Button size="sm" onClick={handleRun} disabled={isRunning} className="bg-green-600 hover:bg-green-500 text-white min-w-[100px]">
              {isRunning ? <Loader2 className="w-4 h-4 animate-spin"/> : <Play className="w-4 h-4 mr-2 fill-current"/>}
              Run
            </Button>
            
            <div className="w-px h-6 bg-zinc-700 mx-2"/>
            <Button size="icon" variant="ghost" onClick={onClose} className="text-zinc-400 hover:text-white rounded-full w-8 h-8">
              <X className="w-5 h-5"/>
            </Button>
          </div>
        </div>

        {/* --- MAIN BODY --- */}
        <div className="flex-1 flex overflow-hidden">
          
          {/* LEFT: FILE EXPLORER SIDEBAR */}
          <div className="w-56 bg-[#181818] border-r border-black/40 flex flex-col shrink-0">
            <div className="h-8 flex items-center justify-between px-3 text-[11px] font-bold text-zinc-500 uppercase tracking-wider bg-[#1f1f1f]">
              <span>Cloud Files</span>
              <RefreshCw className={`w-3 h-3 cursor-pointer hover:text-white ${isLoadingFiles ? 'animate-spin' : ''}`} onClick={refreshFiles}/>
            </div>
            
            <div className="flex-1 overflow-auto p-2 space-y-1">
               {isLoadingFiles ? (
                 <div className="text-zinc-600 text-xs p-2 text-center">Syncing...</div>
               ) : files.length === 0 ? (
                 <div className="text-zinc-600 text-xs p-2 text-center italic">No files found</div>
               ) : (
                 files.map((file) => (
                   <div 
                     key={file.name} 
                     onClick={() => loadFile(file.name)}
                     className={`flex items-center gap-2 px-2 py-1.5 rounded text-xs cursor-pointer select-none transition-colors ${
                       currentFilename === file.name ? "bg-blue-600/20 text-blue-400" : "text-zinc-400 hover:bg-[#2a2a2a] hover:text-zinc-200"
                     }`}
                   >
                     <FileText className="w-3.5 h-3.5 opacity-70"/>
                     <span className="truncate">{file.name}</span>
                   </div>
                 ))
               )}
            </div>
          </div>

          {/* RIGHT: EDITOR + TERMINAL */}
          <div className="flex-1 flex flex-col min-w-0">
            
            {/* TOP: EDITOR */}
            <div className="flex-1 relative bg-[#1e1e1e] flex min-h-0">
              {/* Line Numbers */}
              <div className="w-10 bg-[#1e1e1e] border-r border-zinc-800 text-zinc-600 text-right pr-2 pt-4 text-xs font-mono select-none shrink-0">
                  {code.split('\n').map((_, i) => (
                    <div key={i} className="leading-6">{i + 1}</div>
                  ))}
              </div>

              <textarea
                ref={textAreaRef}
                value={code}
                onChange={(e) => setCode(e.target.value)}
                onKeyDown={handleKeyDown}
                spellCheck={false}
                className="flex-1 bg-[#1e1e1e] text-zinc-300 p-4 font-mono text-sm leading-6 resize-none focus:outline-none"
                style={{ tabSize: 2 }}
              />
            </div>

            {/* BOTTOM: TERMINAL */}
            <div className="h-48 bg-[#0d0d0d] border-t border-zinc-800 flex flex-col shrink-0">
              <div className="h-8 bg-[#1e1e1e] border-b border-black flex items-center px-4 justify-between select-none">
                <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-2">
                  <Terminal className="w-3 h-3"/> Console Output
                </span>
                <button onClick={() => setOutput("")} className="text-[10px] text-zinc-500 hover:text-zinc-300 underline">Clear</button>
              </div>
              
              <div className="flex-1 p-4 overflow-auto font-mono text-sm">
                {output ? (
                  <pre className="text-zinc-300 whitespace-pre-wrap font-[inherit]">{output}</pre>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center text-zinc-800 space-y-2 select-none">
                    <Play className="w-8 h-8 opacity-20"/>
                    <span className="text-xs">Run code to see output</span>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}