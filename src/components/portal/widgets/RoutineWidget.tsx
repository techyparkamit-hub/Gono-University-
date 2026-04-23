import { useState } from "react";
import { CalendarDays, MapPin, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/src/components/ui/Card";
import { Badge } from "@/src/components/ui/Badge";
import { Button } from "@/src/components/ui/Button";

const initialRoutine = [
  { id: 1, time: "09:00", duration: "1.5h", course: "Database Systems", room: "Room 402 - Bldg A", type: "Lecture", attended: false, assignments: "Midterm next week" },
  { id: 2, time: "11:00", duration: "2h", course: "Computer Networks", room: "NetLab - Bldg B", type: "Lab", attended: false, assignments: "Quiz today" },
];

export function RoutineWidget() {
  const [routine, setRoutine] = useState(initialRoutine);

  const toggleAttendance = (id: number) => {
    setRoutine(routine.map(item => 
      item.id === id ? { ...item, attended: !item.attended } : item
    ));
  };

  return (
    <Card className="h-full p-8 flex flex-col justify-between shadow-slate-100/20 text-slate-900 border-white bg-white/60">
      <div>
        <div className="flex justify-between items-center mb-6">
          <p className="text-slate-500 text-sm font-medium flex items-center gap-2">
            <CalendarDays className="h-4 w-4" />
            Daily Routine
          </p>
          <span className="bg-primary-50 text-primary-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">TODAY</span>
        </div>
        
        <div className="space-y-4">
          {routine.map((item) => (
            <div key={item.id} className="flex gap-4 items-start">
              <div className="text-xs font-bold text-slate-400 w-12 shrink-0 pt-3">{item.time}</div>
              <div className={`flex-1 p-3 rounded-xl border shadow-sm transition-all ${item.attended ? 'bg-slate-50/50 border-slate-100 opacity-70' : 'bg-white border-white'}`}>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className={`text-sm font-bold ${item.attended ? 'line-through text-slate-500' : 'text-slate-900'}`}>{item.course}</p>
                    <p className="text-[10px] text-slate-400 font-medium">{item.room} &bull; {item.type}</p>
                  </div>
                  <button 
                    onClick={() => toggleAttendance(item.id)}
                    className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors border ${item.attended ? 'bg-emerald-50 border-emerald-200 text-emerald-500' : 'bg-slate-50 border-slate-200 text-slate-300 hover:text-slate-400'}`}
                  >
                    <CheckCircle2 className="w-4 h-4" />
                  </button>
                </div>
                {item.assignments && !item.attended && (
                  <div className="mt-2 bg-amber-50/50 text-amber-700 text-[10px] font-medium px-2 py-1 rounded-md inline-block">
                    {item.assignments}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
