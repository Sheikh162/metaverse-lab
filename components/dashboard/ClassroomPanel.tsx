// "use client";
// import React, { useState, useEffect } from "react";
// import { GoogleAPI } from "@/lib/google-api";
// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Loader2, ExternalLink } from "lucide-react";
// import { toast } from "sonner";

// export default function ClassroomPanel({ token, isTeacher }: { token: string, isTeacher: boolean }) {
//   const [courses, setCourses] = useState<any[]>([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     loadCourses();
//   }, []);

//   const loadCourses = async () => {
//     setLoading(true);
//     try {
//       const data = await GoogleAPI.getCourses(token);
//       setCourses(data);
//     } catch (error) {
//       toast.error("Failed to load courses");
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="space-y-6">
//       <div className="flex justify-between items-center">
//         <h2 className="text-xl font-bold text-white">Active Courses</h2>
//         <Button variant="outline" size="sm" onClick={loadCourses} disabled={loading}>
//           {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Refresh"}
//         </Button>
//       </div>

//       {/* Teacher Action Bar */}
//       {isTeacher && (
//         <div className="bg-yellow-500/10 border border-yellow-500/30 p-4 rounded-lg mb-4">
//           <p className="text-yellow-400 text-sm font-bold mb-2">Professor Controls</p>
//           <div className="flex gap-2">
//             <Button size="sm" className="bg-yellow-600 hover:bg-yellow-500 text-white">Create New Assignment</Button>
//             <Button size="sm" variant="secondary">Manage Students</Button>
//           </div>
//         </div>
//       )}

//       {/* Course Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {courses.length === 0 && !loading && (
//           <div className="col-span-full text-center text-zinc-500 py-10">No active Google Classroom courses found.</div>
//         )}
        
//         {courses.map((course) => (
//           <Card key={course.id} className="bg-zinc-950 border-zinc-800 p-4 flex flex-col justify-between hover:border-blue-500/50 transition-all">
//             <div>
//               <h3 className="text-lg font-bold text-white mb-1">{course.name}</h3>
//               <p className="text-sm text-zinc-400">{course.section}</p>
//               {course.descriptionHeading && <p className="text-xs text-zinc-500 mt-2">{course.descriptionHeading}</p>}
//             </div>
//             <div className="mt-4 pt-4 border-t border-zinc-800 flex justify-between items-center">
//               <span className="text-xs bg-blue-900/30 text-blue-400 px-2 py-1 rounded">
//                 {course.courseState}
//               </span>
//               <a href={course.alternateLink} target="_blank" rel="noreferrer" className="text-sm flex items-center gap-1 text-zinc-300 hover:text-white hover:underline">
//                 Open <ExternalLink className="w-3 h-3" />
//               </a>
//             </div>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// }

///////////////////////////////////////

// "use client";
// import React, { useState, useEffect } from "react";
// import { GoogleAPI } from "@/lib/google-api";
// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
// import { Loader2, ExternalLink, Plus, Users, School } from "lucide-react";
// import { toast } from "sonner";

// export default function ClassroomPanel({ token, isTeacher }: { token: string, isTeacher: boolean }) {
//   const [courses, setCourses] = useState<any[]>([]);
//   const [loading, setLoading] = useState(false);

//   // --- MODAL STATE ---
//   const [activeCourseId, setActiveCourseId] = useState<string | null>(null);
//   const [modalType, setModalType] = useState<"create_course" | "assignment" | "students" | null>(null);
  
//   // Inputs
//   const [newCourseName, setNewCourseName] = useState("");
//   const [newCourseSection, setNewCourseSection] = useState("");
//   const [assignTitle, setAssignTitle] = useState("");
//   const [assignDesc, setAssignDesc] = useState("");
  
//   // Student List
//   const [students, setStudents] = useState<any[]>([]);

//   useEffect(() => {
//     loadCourses();
//   }, []);

//   const loadCourses = async () => {
//     setLoading(true);
//     try {
//       const data = await GoogleAPI.getCourses(token);
//       setCourses(data);
//     } catch (error: any) {
//       toast.error("Error: " + error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // 1. HANDLE CREATE COURSE (NEW)
//   const handleCreateCourse = async () => {
//     if (!newCourseName) return;
//     toast.loading("Creating Classroom...");
//     try {
//       await GoogleAPI.createCourse(token, newCourseName, newCourseSection || "NetVerse Lab");
//       toast.dismiss();
//       toast.success("Classroom Created!");
//       closeModal();
//       loadCourses(); // Refresh list
//     } catch (error) {
//       toast.dismiss();
//       toast.error("Failed to create course. Ensure you are a verified teacher.");
//     }
//   };

//   // 2. HANDLE CREATE ASSIGNMENT
//   const handleCreateAssignment = async () => {
//     if (!activeCourseId || !assignTitle) return;
    
//     toast.loading("Publishing to Classroom...");
//     try {
//       await GoogleAPI.createAssignment(token, activeCourseId, assignTitle, assignDesc);
//       toast.dismiss();
//       toast.success("Assignment Created!");
//       closeModal();
//     } catch (error) {
//       toast.dismiss();
//       toast.error("Failed to create assignment");
//     }
//   };

//   // 3. HANDLE VIEW STUDENTS
//   const handleViewStudents = async (courseId: string) => {
//     setActiveCourseId(courseId);
//     setModalType("students");
//     setStudents([]); 

//     try {
//       const list = await GoogleAPI.getStudents(token, courseId);
//       setStudents(list);
//     } catch (error) {
//       toast.error("Could not fetch roster");
//     }
//   };

//   const closeModal = () => {
//     setActiveCourseId(null);
//     setModalType(null);
//     setNewCourseName("");
//     setNewCourseSection("");
//   };

//   return (
//     <div className="space-y-6">
//       <div className="flex justify-between items-center bg-zinc-900/50 p-4 rounded-lg border border-zinc-800">
//         <div>
//            <h2 className="text-xl font-bold text-white flex items-center gap-2">
//              <School className="w-6 h-6 text-blue-500" /> Active Classrooms
//            </h2>
//            <p className="text-xs text-zinc-500">Manage your virtual labs and students</p>
//         </div>
        
//         <div className="flex gap-2">
//            <Button variant="outline" size="sm" onClick={loadCourses} disabled={loading}>
//             {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Refresh"}
//            </Button>
           
//            {isTeacher && (
//              <Button size="sm" onClick={() => setModalType("create_course")} className="bg-green-600 hover:bg-green-500 text-white">
//                <Plus className="w-4 h-4 mr-2" /> New Class
//              </Button>
//            )}
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {courses.length === 0 && !loading && (
//           <div className="col-span-full flex flex-col items-center justify-center py-12 text-zinc-500 border-2 border-dashed border-zinc-800 rounded-xl">
//             <School className="w-12 h-12 mb-4 opacity-20" />
//             <p className="font-bold">No active courses found.</p>
//             {isTeacher && (
//                <Button variant="link" onClick={() => setModalType("create_course")} className="text-blue-400">
//                  Create your first Virtual Lab Class
//                </Button>
//             )}
//           </div>
//         )}
        
//         {courses.map((course) => (
//           <Card key={course.id} className="bg-zinc-950 border-zinc-800 p-4 flex flex-col justify-between hover:border-blue-500/50 transition-all group">
//             <div>
//               <div className="flex justify-between items-start mb-1">
//                  <h3 className="text-lg font-bold text-white truncate w-[80%]">{course.name}</h3>
//                  <a href={course.alternateLink} target="_blank" rel="noreferrer" className="text-zinc-600 hover:text-white transition-colors">
//                     <ExternalLink className="w-4 h-4" />
//                  </a>
//               </div>
//               <p className="text-sm text-zinc-400 mb-4">{course.section || "General"}</p>
              
//               {/* TEACHER CONTROLS */}
//               {isTeacher && (
//                 <div className="grid grid-cols-2 gap-2 mb-4 opacity-100 sm:opacity-40 group-hover:opacity-100 transition-opacity">
//                   <Button 
//                     size="sm" 
//                     className="bg-zinc-800 hover:bg-zinc-700 text-xs h-8 border border-zinc-700"
//                     onClick={() => handleViewStudents(course.id)}
//                   >
//                     <Users className="w-3 h-3 mr-1" /> Roster
//                   </Button>
//                   <Button 
//                     size="sm" 
//                     className="bg-blue-600 hover:bg-blue-500 text-xs h-8"
//                     onClick={() => { setActiveCourseId(course.id); setModalType("assignment"); }}
//                   >
//                     <Plus className="w-3 h-3 mr-1" /> Assign
//                   </Button>
//                 </div>
//               )}
//             </div>

//             <div className="pt-3 border-t border-zinc-900 flex justify-between items-center">
//               <span className={`text-[10px] px-2 py-0.5 rounded uppercase tracking-wider font-bold ${course.courseState === 'ACTIVE' ? 'bg-green-900/20 text-green-400' : 'bg-yellow-900/20 text-yellow-400'}`}>
//                 {course.courseState}
//               </span>
//               <span className="text-[10px] text-zinc-600 font-mono">ID: {course.id.slice(-4)}</span>
//             </div>
//           </Card>
//         ))}
//       </div>

//       {/* --- MODALS --- */}
//       <Dialog open={!!modalType} onOpenChange={(open) => !open && closeModal()}>
//         <DialogContent className="bg-zinc-900 border-zinc-800 text-white sm:max-w-md">
//           <DialogHeader>
//             <DialogTitle>
//               {modalType === 'create_course' && 'Create Virtual Lab Class'}
//               {modalType === 'assignment' && 'Create New Assignment'}
//               {modalType === 'students' && 'Student Roster'}
//             </DialogTitle>
//           </DialogHeader>

//           {/* 1. CREATE COURSE FORM */}
//           {modalType === 'create_course' && (
//             <div className="space-y-4 pt-4">
//                <div className="bg-blue-900/20 border border-blue-500/30 p-3 rounded text-xs text-blue-200">
//                   This will create a real Google Classroom course linked to this Metaverse account.
//                </div>
//                <div className="space-y-2">
//                 <label className="text-xs font-bold text-zinc-400">Class Name</label>
//                 <Input 
//                   value={newCourseName} 
//                   onChange={(e) => setNewCourseName(e.target.value)} 
//                   className="bg-black border-zinc-700"
//                   placeholder="e.g., CS101: Data Structures"
//                 />
//               </div>
//               <div className="space-y-2">
//                 <label className="text-xs font-bold text-zinc-400">Section (Optional)</label>
//                 <Input 
//                   value={newCourseSection} 
//                   onChange={(e) => setNewCourseSection(e.target.value)} 
//                   className="bg-black border-zinc-700"
//                   placeholder="e.g., Lab Group A"
//                 />
//               </div>
//               <Button onClick={handleCreateCourse} className="w-full bg-green-600 hover:bg-green-500 font-bold">
//                 Create Classroom
//               </Button>
//             </div>
//           )}

//           {/* 2. ASSIGNMENT FORM */}
//           {modalType === 'assignment' && (
//             <div className="space-y-4 pt-4">
//               <div className="space-y-2">
//                 <label className="text-xs font-bold text-zinc-400">Assignment Title</label>
//                 <Input 
//                   value={assignTitle} 
//                   onChange={(e) => setAssignTitle(e.target.value)} 
//                   className="bg-black border-zinc-700"
//                   placeholder="e.g., Lab Report 4"
//                 />
//               </div>
//               <div className="space-y-2">
//                 <label className="text-xs font-bold text-zinc-400">Description</label>
//                 <textarea 
//                   value={assignDesc} 
//                   onChange={(e) => setAssignDesc(e.target.value)} 
//                   className="w-full h-24 bg-black border border-zinc-700 rounded-md p-2 text-sm text-white focus:outline-none focus:border-blue-500 resize-none"
//                   placeholder="Instructions for students..."
//                 />
//               </div>
//               <Button onClick={handleCreateAssignment} className="w-full bg-blue-600 hover:bg-blue-500">
//                 Publish Assignment
//               </Button>
//             </div>
//           )}

//           {/* 3. STUDENT LIST */}
//           {modalType === 'students' && (
//             <div className="pt-2 max-h-[300px] overflow-y-auto space-y-2">
//               {students.length === 0 ? (
//                 <div className="text-center py-6">
//                    <Users className="w-8 h-8 text-zinc-700 mx-auto mb-2" />
//                    <p className="text-zinc-500 text-sm">No students enrolled yet.</p>
//                    <p className="text-xs text-zinc-600 mt-1">Share the Google Classroom code with students.</p>
//                 </div>
//               ) : (
//                 students.map((student) => (
//                   <div key={student.userId} className="flex items-center gap-3 p-2 bg-black/40 rounded border border-zinc-800">
//                     <div className="w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center text-xs font-bold text-zinc-400">
//                       {student.profile?.name?.fullName?.[0] || "?"}
//                     </div>
//                     <div>
//                       <p className="text-sm font-bold text-zinc-200">{student.profile?.name?.fullName}</p>
//                       <p className="text-[10px] text-zinc-500">{student.profile?.emailAddress}</p>
//                     </div>
//                   </div>
//                 ))
//               )}
//             </div>
//           )}
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }


"use client";
import React, { useState, useEffect } from "react";
import { GoogleAPI } from "@/lib/google-api";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Loader2, ExternalLink, Plus, Users, School, ChevronLeft } from "lucide-react";
import { toast } from "sonner";

export default function ClassroomPanel({ token, isTeacher }: { token: string, isTeacher: boolean }) {
  const [courses, setCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  // --- UI STATES ---
  // "view" replaces "modalType" for the main create actions to avoid nested dialogs
  const [view, setView] = useState<"list" | "create_course">("list");
  
  // MODAL STATES (For assignments/students only)
  const [activeCourseId, setActiveCourseId] = useState<string | null>(null);
  const [modalType, setModalType] = useState<"assignment" | "students" | null>(null);
  
  // Inputs
  const [newCourseName, setNewCourseName] = useState("");
  const [newCourseSection, setNewCourseSection] = useState("");
  const [assignTitle, setAssignTitle] = useState("");
  const [assignDesc, setAssignDesc] = useState("");
  
  // Student List
  const [students, setStudents] = useState<any[]>([]);

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    setLoading(true);
    try {
      const data = await GoogleAPI.getCourses(token);
      setCourses(data);
    } catch (error: any) {
      console.error("Load Courses Error:", error);
      toast.error("Error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  // 1. HANDLE CREATE COURSE
  const handleCreateCourse = async () => {
    if (!newCourseName) return;
    toast.loading("Creating Classroom...");
    
    try {
      // PROVISIONED = Draft mode. ACTIVE = Live.
      await GoogleAPI.createCourse(token, newCourseName, newCourseSection || "NetVerse Lab");
      toast.dismiss();
      toast.success("Classroom Created!");
      setView("list");
      setNewCourseName("");
      loadCourses(); 
    } catch (error: any) {
      toast.dismiss();
      console.error("CREATE COURSE ERROR:", error);
      
      // Specific error handling for Personal Gmail accounts
      if (error.message?.includes("403") || error.message?.includes("PERMISSION_DENIED")) {
        toast.error("Permission Denied: Personal Gmail accounts cannot create classes via API. Please create it manually at classroom.google.com and refresh.");
      } else {
        toast.error("Failed to create course. Check console for details.");
      }
    }
  };

  // 2. HANDLE CREATE ASSIGNMENT
  const handleCreateAssignment = async () => {
    if (!activeCourseId || !assignTitle) return;
    
    toast.loading("Publishing to Classroom...");
    try {
      await GoogleAPI.createAssignment(token, activeCourseId, assignTitle, assignDesc);
      toast.dismiss();
      toast.success("Assignment Created!");
      closeModal();
    } catch (error) {
      toast.dismiss();
      toast.error("Failed to create assignment");
    }
  };

  // 3. HANDLE VIEW STUDENTS
  const handleViewStudents = async (courseId: string) => {
    setActiveCourseId(courseId);
    setModalType("students");
    setStudents([]); 

    try {
      const list = await GoogleAPI.getStudents(token, courseId);
      setStudents(list);
    } catch (error) {
      toast.error("Could not fetch roster");
    }
  };

  const closeModal = () => {
    setActiveCourseId(null);
    setModalType(null);
  };

  // --- VIEW: CREATE COURSE FORM (Inline instead of Modal) ---
  if (view === "create_course") {
    return (
      <div className="space-y-6 animate-in slide-in-from-right-10 fade-in">
        <div className="flex items-center gap-2 mb-6">
          <Button variant="ghost" size="sm" onClick={() => setView("list")} className="text-zinc-400">
            <ChevronLeft className="w-4 h-4 mr-1" /> Back
          </Button>
          <h2 className="text-xl font-bold text-white">Create Virtual Lab Class</h2>
        </div>

        <Card className="bg-zinc-900 border-zinc-800 p-6 max-w-lg mx-auto">
          <div className="space-y-4">
             <div className="bg-blue-900/20 border border-blue-500/30 p-3 rounded text-xs text-blue-200">
                <strong>Note:</strong> If using a personal Gmail account (@gmail.com), Google blocks API course creation. You must use a Workspace account or create the class manually.
             </div>
             <div className="space-y-2">
              <label className="text-xs font-bold text-zinc-400">Class Name</label>
              <Input 
                value={newCourseName} 
                onChange={(e) => setNewCourseName(e.target.value)} 
                className="bg-black border-zinc-700 text-white"
                placeholder="e.g., CS101: Data Structures"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-zinc-400">Section (Optional)</label>
              <Input 
                value={newCourseSection} 
                onChange={(e) => setNewCourseSection(e.target.value)} 
                className="bg-black border-zinc-700 text-white"
                placeholder="e.g., Lab Group A"
              />
            </div>
            <Button onClick={handleCreateCourse} className="w-full bg-green-600 hover:bg-green-500 font-bold">
              Create Classroom
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  // --- VIEW: LIST COURSES ---
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center bg-zinc-900/50 p-4 rounded-lg border border-zinc-800">
        <div>
           <h2 className="text-xl font-bold text-white flex items-center gap-2">
             <School className="w-6 h-6 text-blue-500" /> Active Classrooms
           </h2>
           <p className="text-xs text-zinc-500">Manage your virtual labs and students</p>
        </div>
        
        <div className="flex gap-2">
           <Button variant="outline" size="sm" onClick={loadCourses} disabled={loading}>
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Refresh"}
           </Button>
           
           {isTeacher && (
             <Button size="sm" onClick={() => setView("create_course")} className="bg-green-600 hover:bg-green-500 text-white">
               <Plus className="w-4 h-4 mr-2" /> New Class
             </Button>
           )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.length === 0 && !loading && (
          <div className="col-span-full flex flex-col items-center justify-center py-12 text-zinc-500 border-2 border-dashed border-zinc-800 rounded-xl">
            <School className="w-12 h-12 mb-4 opacity-20" />
            <p className="font-bold">No active courses found.</p>
            {isTeacher && (
               <Button variant="link" onClick={() => setView("create_course")} className="text-blue-400">
                 Create your first Virtual Lab Class
               </Button>
            )}
          </div>
        )}
        
        {courses.map((course) => (
          <Card key={course.id} className="bg-zinc-950 border-zinc-800 p-4 flex flex-col justify-between hover:border-blue-500/50 transition-all group">
            <div>
              <div className="flex justify-between items-start mb-1">
                 <h3 className="text-lg font-bold text-white truncate w-[80%]">{course.name}</h3>
                 <a href={course.alternateLink} target="_blank" rel="noreferrer" className="text-zinc-600 hover:text-white transition-colors">
                    <ExternalLink className="w-4 h-4" />
                 </a>
              </div>
              <p className="text-sm text-zinc-400 mb-4">{course.section || "General"}</p>
              
              {/* TEACHER CONTROLS */}
              {isTeacher && (
                <div className="grid grid-cols-2 gap-2 mb-4 opacity-100 sm:opacity-40 group-hover:opacity-100 transition-opacity">
                  <Button 
                    size="sm" 
                    className="bg-zinc-800 hover:bg-zinc-700 text-xs h-8 border border-zinc-700"
                    onClick={() => handleViewStudents(course.id)}
                  >
                    <Users className="w-3 h-3 mr-1" /> Roster
                  </Button>
                  <Button 
                    size="sm" 
                    className="bg-blue-600 hover:bg-blue-500 text-xs h-8"
                    onClick={() => { setActiveCourseId(course.id); setModalType("assignment"); }}
                  >
                    <Plus className="w-3 h-3 mr-1" /> Assign
                  </Button>
                </div>
              )}
            </div>

            <div className="pt-3 border-t border-zinc-900 flex justify-between items-center">
              <span className={`text-[10px] px-2 py-0.5 rounded uppercase tracking-wider font-bold ${course.courseState === 'ACTIVE' ? 'bg-green-900/20 text-green-400' : 'bg-yellow-900/20 text-yellow-400'}`}>
                {course.courseState}
              </span>
              <span className="text-[10px] text-zinc-600 font-mono">ID: {course.id.slice(-4)}</span>
            </div>
          </Card>
        ))}
      </div>

      {/* --- MODALS --- */}
      <Dialog open={!!modalType} onOpenChange={(open) => !open && closeModal()}>
        <DialogContent className="bg-zinc-900 border-zinc-800 text-white sm:max-w-md">
          <DialogHeader>
            <DialogTitle>
              {modalType === 'assignment' && 'Create New Assignment'}
              {modalType === 'students' && 'Student Roster'}
            </DialogTitle>
            {/* ✅ FIX 1: Add DialogDescription to solve the warning */}
            <DialogDescription className="text-zinc-500 text-xs">
              {modalType === 'assignment' ? 'Post a new task to Google Classroom.' : 'View enrolled students.'}
            </DialogDescription>
          </DialogHeader>

          {/* 1. ASSIGNMENT FORM */}
          {modalType === 'assignment' && (
            <div className="space-y-4 pt-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-400">Assignment Title</label>
                <Input 
                  value={assignTitle} 
                  onChange={(e) => setAssignTitle(e.target.value)} 
                  className="bg-black border-zinc-700"
                  placeholder="e.g., Lab Report 4"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-400">Description</label>
                <textarea 
                  value={assignDesc} 
                  onChange={(e) => setAssignDesc(e.target.value)} 
                  className="w-full h-24 bg-black border border-zinc-700 rounded-md p-2 text-sm text-white focus:outline-none focus:border-blue-500 resize-none"
                  placeholder="Instructions for students..."
                />
              </div>
              <Button onClick={handleCreateAssignment} className="w-full bg-blue-600 hover:bg-blue-500">
                Publish Assignment
              </Button>
            </div>
          )}

          {/* 2. STUDENT LIST */}
          {modalType === 'students' && (
            <div className="pt-2 max-h-[300px] overflow-y-auto space-y-2">
              {students.length === 0 ? (
                <div className="text-center py-6">
                   <Users className="w-8 h-8 text-zinc-700 mx-auto mb-2" />
                   <p className="text-zinc-500 text-sm">No students enrolled yet.</p>
                   <p className="text-xs text-zinc-600 mt-1">Share the Google Classroom code with students.</p>
                </div>
              ) : (
                students.map((student) => (
                  <div key={student.userId} className="flex items-center gap-3 p-2 bg-black/40 rounded border border-zinc-800">
                    <div className="w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center text-xs font-bold text-zinc-400">
                      {student.profile?.name?.fullName?.[0] || "?"}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-zinc-200">{student.profile?.name?.fullName}</p>
                      <p className="text-[10px] text-zinc-500">{student.profile?.emailAddress}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}