"use client";
import React, { useState } from "react";
import { GoogleAPI } from "@/lib/google-api";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FileSpreadsheet, Download, ShieldAlert } from "lucide-react";
import { toast } from "sonner";

export default function SheetsPanel({ token, isTeacher, user }: { token: string, isTeacher: boolean, user: any }) {
  const [createdSheetUrl, setCreatedSheetUrl] = useState("");

  const handleCreateAttendance = async () => {
    try {
      toast.loading("Creating Spreadsheet...");
      
      // 1. Create Sheet
      const sheet = await GoogleAPI.createSheet(token, `NetVerse Attendance - ${new Date().toLocaleDateString()}`);
      const spreadsheetId = sheet.spreadsheetId;
      
      // 2. Add Header Row
      await GoogleAPI.appendData(token, spreadsheetId, "Sheet1!A1", [
        ["Student Name", "Email", "Status", "Timestamp"]
      ]);

      // 3. Add Mock Data (In reality, you'd pull this from Firebase)
      await GoogleAPI.appendData(token, spreadsheetId, "Sheet1!A1", [
        [user.displayName, user.email, "Present", new Date().toISOString()]
      ]);

      setCreatedSheetUrl(sheet.spreadsheetUrl);
      toast.dismiss();
      toast.success("Attendance Sheet Created!");
    } catch (error) {
      toast.dismiss();
      toast.error("Failed to create sheet");
      console.error(error);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-start gap-4 p-4 bg-blue-900/20 border border-blue-500/20 rounded-lg">
        <FileSpreadsheet className="w-8 h-8 text-blue-400 shrink-0" />
        <div>
          <h3 className="font-bold text-blue-100">Google Sheets Integration</h3>
          <p className="text-sm text-blue-300/70 mt-1">
            Data is synced securely. Teachers have write access; Students have read access.
          </p>
        </div>
      </div>

      {isTeacher ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-zinc-950 border-zinc-800 p-6">
            <h3 className="font-bold text-white mb-2">Automated Attendance</h3>
            <p className="text-sm text-zinc-400 mb-4">
              Generate a new Google Sheet containing the current lobby attendance list.
            </p>
            <Button onClick={handleCreateAttendance} className="bg-green-700 hover:bg-green-600">
              <Download className="w-4 h-4 mr-2" /> Export to New Sheet
            </Button>

            {createdSheetUrl && (
              <div className="mt-4 p-2 bg-green-900/20 border border-green-500/30 rounded text-center">
                <a href={createdSheetUrl} target="_blank" className="text-green-400 hover:underline text-sm font-bold">
                  Open Created Sheet &rarr;
                </a>
              </div>
            )}
          </Card>

          <Card className="bg-zinc-950 border-zinc-800 p-6 opacity-75">
            <h3 className="font-bold text-white mb-2">Gradebook Sync</h3>
            <p className="text-sm text-zinc-400 mb-4">
              Sync grades from Google Classroom to the master gradebook.
            </p>
            <Button variant="outline" disabled className="w-full">Sync (Coming Soon)</Button>
          </Card>
        </div>
      ) : (
        // Student View
        <div className="flex flex-col items-center justify-center p-10 bg-zinc-950 border border-zinc-800 rounded-xl">
          <ShieldAlert className="w-10 h-10 text-zinc-600 mb-4" />
          <h3 className="text-lg font-bold text-zinc-300">Restricted Access</h3>
          <p className="text-zinc-500 text-center max-w-md mt-2">
            As a student, you cannot create or edit academic sheets. Please ask your Professor to share the class performance link.
          </p>
        </div>
      )}
    </div>
  );
}