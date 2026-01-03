"use client";
import React, { useState, useEffect } from "react";
import { GoogleAPI } from "@/lib/google-api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, Plus } from "lucide-react";
import { toast } from "sonner";

export default function CalendarPanel({ token, isTeacher }: { token: string, isTeacher: boolean }) {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  // New Event State (Teacher Only)
  const [newEventTitle, setNewEventTitle] = useState("");

  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = async () => {
    setLoading(true);
    try {
      const data = await GoogleAPI.getEvents(token);
      setEvents(data);
    } catch (error) {
      toast.error("Failed to sync calendar");
    } finally {
      setLoading(false);
    }
  };

  const handleCreateEvent = async () => {
    if (!newEventTitle) return;
    try {
      // Create a 1-hour event starting now
      const start = new Date();
      const end = new Date(start.getTime() + 60 * 60 * 1000); // +1 hour
      
      await GoogleAPI.addEvent(token, newEventTitle, "Created via NetVerse", start.toISOString(), end.toISOString());
      toast.success("Event Added!");
      setNewEventTitle("");
      loadEvents();
    } catch (e) {
      toast.error("Failed to create event");
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-6">
      {/* List Section */}
      <div className="flex-1 space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-white">Upcoming Schedule</h2>
          <Button variant="ghost" size="sm" onClick={loadEvents} disabled={loading} className="text-zinc-400">Sync</Button>
        </div>

        <div className="space-y-2 max-h-[500px] overflow-y-auto">
          {events.length === 0 && !loading && <p className="text-zinc-500">No upcoming events.</p>}
          
          {events.map((event) => (
            <div key={event.id} className="p-3 bg-zinc-950 border border-zinc-800 rounded flex gap-4 hover:bg-zinc-900">
              <div className="flex flex-col items-center justify-center bg-zinc-800 min-w-[50px] rounded p-1">
                <span className="text-[10px] text-zinc-400 uppercase">
                  {event.start?.dateTime ? new Date(event.start.dateTime).toLocaleString('default', { month: 'short' }) : 'ALL'}
                </span>
                <span className="text-lg font-bold text-white">
                  {event.start?.dateTime ? new Date(event.start.dateTime).getDate() : 'DAY'}
                </span>
              </div>
              <div>
                <h4 className="font-bold text-zinc-200">{event.summary}</h4>
                <p className="text-xs text-zinc-500">
                  {event.start?.dateTime ? new Date(event.start.dateTime).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) : 'All Day'}
                </p>
                {event.htmlLink && (
                  <a href={event.htmlLink} target="_blank" className="text-[10px] text-blue-500 hover:underline">View in Calendar</a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Teacher Create Section */}
      {isTeacher && (
        <div className="w-full md:w-80 bg-zinc-950 border border-yellow-500/20 p-4 rounded-xl h-fit">
          <h3 className="text-yellow-400 font-bold mb-4 flex items-center gap-2">
            <Plus className="w-4 h-4"/> Schedule Lab
          </h3>
          <div className="space-y-3">
            <Input 
              placeholder="Lab Session Title" 
              className="bg-black border-zinc-700"
              value={newEventTitle}
              onChange={(e) => setNewEventTitle(e.target.value)}
            />
            <p className="text-xs text-zinc-500">
              Creates a 1-hour session starting now.
            </p>
            <Button onClick={handleCreateEvent} className="w-full bg-yellow-600 hover:bg-yellow-500 text-white">
              Add to Calendar
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}