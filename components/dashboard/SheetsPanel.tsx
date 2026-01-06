"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { createAttendanceSheet } from "@/lib/google-services"; 
import { FileSpreadsheet, Download, CheckCircle, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Card } from "@/components/ui/card";

export default function SheetsPanel({ token, isTeacher, user }: { token: string, isTeacher: boolean, user: any }) {
  const [loading, setLoading] = useState(false);

  const handleExport = async () => {
    if (!isTeacher) return;
    setLoading(true);
    try {
      const mockStudents = [{ username: user.displayName, id: user.uid }];
      const url = await createAttendanceSheet(token, "CS-101", mockStudents);
      window.open(url, "_blank");
      toast.success("Attendance Sheet Created!");
    } catch (err) {
      toast.error("Failed to create sheet");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
      
      {/* Icon Circle */}
      <div className="bg-primary/10 p-6 rounded-full border border-primary/20 shadow-lg shadow-primary/5">
        <FileSpreadsheet className="w-16 h-16 text-primary" />
      </div>
      
      <div className="space-y-2">
        <h2 className="text-2xl font-bold font-mono text-foreground">
          {isTeacher ? "FACULTY GRADEBOOK" : "STUDENT RECORDS"}
        </h2>
        <p className="text-muted-foreground font-mono text-sm max-w-md mx-auto">
          {isTeacher 
            ? "Generate attendance reports and export game activity directly to Google Sheets." 
            : "View your attendance records and academic performance stats."}
        </p>
      </div>

      {isTeacher ? (
        <Button 
          size="lg" 
          onClick={handleExport} 
          disabled={loading}
          className="font-mono shadow-md"
        >
          {loading ? <Loader2 className="animate-spin mr-2"/> : <Download className="mr-2"/>}
          EXPORT ATTENDANCE TO SHEETS
        </Button>
      ) : (
        <Card className="flex items-center gap-3 bg-muted/50 px-6 py-3 border-primary/20">
          <CheckCircle className="w-5 h-5 text-green-500" />
          <span className="font-mono text-sm text-foreground">Attendance Marked for Today</span>
        </Card>
      )}
    </div>
  );
}