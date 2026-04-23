import { AcademicWidget } from "@/src/components/portal/widgets/AcademicWidget";
import { FinancialWidget } from "@/src/components/portal/widgets/FinancialWidget";
import { RoutineWidget } from "@/src/components/portal/widgets/RoutineWidget";
import { Copy, Plus } from "lucide-react";
import { Button } from "@/src/components/ui/Button";
import { Link } from "react-router-dom";

export function PortalDashboard() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Welcome back, John!</h2>
          <p className="text-sm text-slate-500 mt-1">Here is a summary of your academic journey.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="gap-2 shrink-0 border-white/60 bg-white/40 hover:bg-white/60">
            <Copy className="h-4 w-4 text-slate-400" />
            <span className="hidden sm:inline">Student ID: 26-00342</span>
            <span className="sm:hidden">ID</span>
          </Button>
          <Link to="/portal/academic">
            <Button size="sm" className="gap-2 shrink-0 bg-primary-600 hover:bg-primary-700 text-white shadow-lg shadow-primary-600/20">
              <Plus className="h-4 w-4" />
              Add Course
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 auto-rows-fr">
        {/* Academic Widget */}
        <Link to="/portal/academic" className="col-span-1 group block transition-transform hover:-translate-y-1">
          <div className="h-full pointer-events-none">
            <AcademicWidget />
          </div>
        </Link>
        
        {/* Financial Widget */}
        <Link to="/portal/financials" className="col-span-1 group block transition-transform hover:-translate-y-1">
          <div className="h-full pointer-events-none">
            <FinancialWidget />
          </div>
        </Link>

        {/* Routine Widget */}
        <div className="col-span-1 md:col-span-2 xl:col-span-1">
          <RoutineWidget />
        </div>

        {/* Notice Board Widget */}
        <div className="col-span-1 md:col-span-2 xl:col-span-3 bg-white/40 backdrop-blur-lg rounded-[2rem] p-8 border border-white/60 mt-2">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold tracking-tight text-slate-800">University Notice Board</h3>
            <span className="text-primary-600 text-sm font-medium cursor-pointer">View Archive</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/80 p-5 rounded-2xl border border-white shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Admin</span>
              </div>
              <p className="text-sm font-bold leading-snug mb-1">Final Term Schedule Spring 2026</p>
              <p className="text-[10px] text-slate-500">Posted 2h ago</p>
            </div>
            <div className="bg-white/80 p-5 rounded-2xl border border-white shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-primary-400"></span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Academic</span>
              </div>
              <p className="text-sm font-bold leading-snug mb-1">New Course: Quantum Computing 101</p>
              <p className="text-[10px] text-slate-500">Posted Yesterday</p>
            </div>
            <div className="bg-white/80 p-5 rounded-2xl border border-white shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Event</span>
              </div>
              <p className="text-sm font-bold leading-snug mb-1">Tech Carnival 2026 - Registration Open</p>
              <p className="text-[10px] text-slate-500">Posted 3d ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
