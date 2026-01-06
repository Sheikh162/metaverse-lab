"use client";

import React, { useEffect, useState } from "react";
import { fetchUpcomingEvents, createCalendarEvent } from "@/lib/google-services";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, CalendarClock, Clock, Plus } from "lucide-react";
import { toast } from "sonner";

export default function CalendarPanel({ token, isTeacher }: { token: string, isTeacher: boolean }) {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Booking State
  const [isBookOpen, setIsBookOpen] = useState(false);
  const [isBooking, setIsBooking] = useState(false);
  const [eventTitle, setEventTitle] = useState("Metaverse Lab Session");
  const [eventStart, setEventStart] = useState("");

  const loadEvents = async () => {
    try {
      setLoading(true);
      const data = await fetchUpcomingEvents(token);
      setEvents(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadEvents();
  }, [token]);

  const handleBookSession = async () => {
    if (!eventStart) return;
    setIsBooking(true);
    try {
      await createCalendarEvent(token, eventTitle, eventStart);
      toast.success("Lab Session Booked!");
      setIsBookOpen(false);
      setEventTitle("Metaverse Lab Session");
      setEventStart("");
      await loadEvents();
    } catch (error) {
      toast.error("Failed to book session");
    } finally {
      setIsBooking(false);
    }
  };

  if (loading && events.length === 0) return <div className="flex items-center justify-center h-full text-primary font-mono"><Loader2 className="animate-spin mr-2"/> DOWNLOADING SCHEDULE...</div>;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-border pb-4">
        <h2 className="text-xl font-bold font-mono text-foreground flex items-center gap-2">
          <CalendarClock className="text-primary"/> UPCOMING AGENDA
        </h2>

        {isTeacher && (
           <Dialog open={isBookOpen} onOpenChange={setIsBookOpen}>
             <DialogTrigger asChild>
               <Button size="sm" className="font-mono gap-2">
                 <Plus className="w-4 h-4" /> BOOK LAB
               </Button>
             </DialogTrigger>
             <DialogContent className="sm:max-w-[425px] bg-background border-border">
               <DialogHeader>
                 <DialogTitle className="font-mono text-foreground">SCHEDULE LAB SESSION</DialogTitle>
               </DialogHeader>
               <div className="grid gap-4 py-4">
                 <div className="grid gap-2">
                   <Label htmlFor="title" className="font-mono text-xs">EVENT TITLE</Label>
                   <Input 
                     id="title" 
                     value={eventTitle} 
                     onChange={(e) => setEventTitle(e.target.value)} 
                     className="font-mono" 
                   />
                 </div>
                 <div className="grid gap-2">
                   <Label htmlFor="start" className="font-mono text-xs">START TIME</Label>
                   <Input 
                     id="start" 
                     type="datetime-local"
                     value={eventStart} 
                     onChange={(e) => setEventStart(e.target.value)} 
                     className="font-mono" 
                   />
                 </div>
               </div>
               <DialogFooter>
                 <Button onClick={handleBookSession} disabled={isBooking || !eventStart} className="font-mono w-full">
                   {isBooking && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                   CONFIRM BOOKING (1 HR)
                 </Button>
               </DialogFooter>
             </DialogContent>
           </Dialog>
        )}
      </div>

      <div className="space-y-3">
        {events.length === 0 ? (
          <p className="text-muted-foreground font-mono italic">No upcoming events found.</p>
        ) : (
          events.map((evt) => {
            const date = new Date(evt.start.dateTime || evt.start.date);
            return (
              <Card key={evt.id} className="bg-card border-border p-4 flex items-center gap-4 hover:bg-accent/50 transition-colors shadow-sm">
                <div className="flex flex-col items-center justify-center bg-muted border border-border rounded p-2 min-w-[60px]">
                  <span className="text-xs font-mono text-muted-foreground uppercase">{date.toLocaleString('default', { month: 'short' })}</span>
                  <span className="text-xl font-bold font-mono text-foreground">{date.getDate()}</span>
                </div>
                <div>
                  <h4 className="font-bold text-card-foreground font-mono text-sm line-clamp-1">{evt.summary}</h4>
                  <p className="text-xs text-muted-foreground font-mono flex items-center gap-1 mt-1">
                    <Clock className="w-3 h-3"/> {date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </Card>
            );
          })
        )}
      </div>
    </div>
  );
}