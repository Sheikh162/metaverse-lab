"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/providers/AuthProvider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, Calendar, FileSpreadsheet } from "lucide-react";
import { isTeacher } from "@/lib/game-config";

// Import Panels (We will create these next)
import ClassroomPanel from "@/components/dashboard/ClassroomPanel";
import CalendarPanel from "@/components/dashboard/CalendarPanel";
import SheetsPanel from "@/components/dashboard/SheetsPanel";

export default function DashboardPage() {
  const { user, accessToken, loading } = useAuth();
  const router = useRouter();
  const amITeacher = isTeacher(user?.email);

  useEffect(() => {
    if (!loading && !user) router.push("/");
  }, [user, loading, router]);

  if (loading || !user) return <div className="h-screen bg-black text-white flex items-center justify-center">Loading Dashboard...</div>;

  if (!accessToken) {
    return (
      <div className="h-screen bg-black text-white flex flex-col items-center justify-center gap-4">
        <p>Google Access Token missing.</p>
        <p className="text-sm text-zinc-400">Please logout and login again, ensuring you grant permissions.</p>
        <Button onClick={() => router.push("/")}>Return Home</Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-zinc-200 font-sans p-6">
      {/* Header */}
      <header className="flex justify-between items-center mb-8 border-b border-zinc-800 pb-4">
        <div>
          <h1 className="text-3xl font-black text-white tracking-tighter">
            NETVERSE <span className="text-blue-500">DASHBOARD</span>
          </h1>
          <p className="text-zinc-400 text-sm">
            {amITeacher ? "Prof. " : "Student: "}{user.displayName}
          </p>
        </div>
        <Button variant="outline" onClick={() => router.push("/")} className="border-zinc-700 text-zinc-300 hover:bg-zinc-800">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Metaverse
        </Button>
      </header>

      {/* Main Tabs */}
      <Tabs defaultValue="classroom" className="w-full">
        <TabsList className="bg-zinc-900 border border-zinc-800 mb-6">
          <TabsTrigger value="classroom" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
            <BookOpen className="w-4 h-4 mr-2" /> Classroom
          </TabsTrigger>
          <TabsTrigger value="calendar" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
            <Calendar className="w-4 h-4 mr-2" /> Schedule
          </TabsTrigger>
          <TabsTrigger value="sheets" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
            <FileSpreadsheet className="w-4 h-4 mr-2" /> {amITeacher ? "Gradebook" : "Performance"}
          </TabsTrigger>
        </TabsList>

        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 min-h-[500px]">
          <TabsContent value="classroom">
            <ClassroomPanel token={accessToken} isTeacher={amITeacher} />
          </TabsContent>
          
          <TabsContent value="calendar">
            <CalendarPanel token={accessToken} isTeacher={amITeacher} />
          </TabsContent>
          
          <TabsContent value="sheets">
            <SheetsPanel token={accessToken} isTeacher={amITeacher} user={user} />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}