"use client";

import React, { useEffect, useState } from "react";
import { fetchCourses, createCourse } from "@/lib/google-services"; 
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, ExternalLink, Book, Plus } from "lucide-react";
import { toast } from "sonner";

export default function ClassroomPanel({ token, isTeacher }: { token: string, isTeacher: boolean }) {
  const [courses, setCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Creation State
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [newName, setNewName] = useState("");
  const [newSection, setNewSection] = useState("");

  const loadCourses = async () => {
    try {
      setLoading(true);
      const data = await fetchCourses(token);
      setCourses(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCourses();
  }, [token]);

  const handleCreateClass = async () => {
    if (!newName) return;
    setIsCreating(true);
    try {
      await createCourse(token, newName, newSection || "Metaverse Lab");
      toast.success("Classroom Request Sent Succesfully!");
      setIsCreateOpen(false);
      setNewName("");
      setNewSection("");
      // Refresh list
      await loadCourses();
    } catch (error) {
      toast.error("Failed to create course");
    } finally {
      setIsCreating(false);
    }
  };

  if (loading && courses.length === 0) return <div className="flex items-center justify-center h-full text-primary font-mono"><Loader2 className="animate-spin mr-2"/> SYNCING G-SUITE...</div>;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-border pb-4">
        <h2 className="text-xl font-bold font-mono text-foreground flex items-center gap-2">
          <Book className="text-primary"/> ACTIVE COURSES
        </h2>
        
        {isTeacher && (
          <Dialog open={isCreateOpen} onOpenChange={setIsCreateOpen}>
            <DialogTrigger asChild>
              <Button size="sm" className="font-mono gap-2">
                <Plus className="w-4 h-4" /> CREATE CLASS
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-background border-border">
              <DialogHeader>
                <DialogTitle className="font-mono text-foreground">INITIALIZE NEW CLASSROOM</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="name" className="font-mono text-xs">COURSE NAME</Label>
                  <Input 
                    id="name" 
                    value={newName} 
                    onChange={(e) => setNewName(e.target.value)} 
                    className="font-mono" 
                    placeholder="e.g. Physics 101"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="section" className="font-mono text-xs">SECTION / ROOM</Label>
                  <Input 
                    id="section" 
                    value={newSection} 
                    onChange={(e) => setNewSection(e.target.value)} 
                    className="font-mono" 
                    placeholder="e.g. Lab A"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button onClick={handleCreateClass} disabled={isCreating} className="font-mono w-full">
                  {isCreating && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  CONFIRM CREATION
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        )}
      </div>

      {courses.length === 0 ? (
        <div className="text-muted-foreground font-mono text-center mt-10">NO ACTIVE COURSES DETECTED</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {courses.map((course) => (
            <Card key={course.id} className="bg-card border-border hover:border-primary/50 transition-all group shadow-sm">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start gap-2">
                  <CardTitle className="text-sm font-mono text-card-foreground truncate group-hover:text-primary transition-colors">
                    {course.name}
                  </CardTitle>
                  <Badge variant="outline" className="text-[10px] shrink-0">
                    {course.courseState || "ACTIVE"}
                  </Badge>
                </div>
                <CardDescription className="font-mono text-[10px] truncate">
                  {course.section ? `Section: ${course.section}` : "No Section ID"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-end pt-2">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="h-7 text-xs font-mono gap-1 hover:bg-primary hover:text-primary-foreground transition-colors" 
                    onClick={() => window.open(course.alternateLink, "_blank")}
                  >
                    OPEN <ExternalLink className="w-3 h-3"/>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}