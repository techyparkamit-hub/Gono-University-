import { Outlet, Link, useLocation } from "react-router-dom";
import { LayoutDashboard, BookOpen, CreditCard, Calendar, Bell, LogOut, GraduationCap, Settings } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/portal" },
  { icon: BookOpen, label: "Academic", path: "/portal/academic" },
  { icon: CreditCard, label: "Financials", path: "/portal/financials" },
  { icon: Calendar, label: "Routine", path: "/portal/routine" },
  { icon: Settings, label: "Settings", path: "/portal/settings" },
];

export function PortalLayout() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans text-slate-900 overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary-100 via-transparent to-transparent opacity-50 pointer-events-none" />

      {/* Sidebar Command Center */}
      <aside className="w-64 hidden lg:flex flex-col border-r border-white/40 bg-white/70 backdrop-blur-xl fixed h-full z-20">
        <div className="h-16 flex items-center px-6 border-b border-white/40">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold text-lg group-hover:bg-primary-700 transition-colors">
              G
            </div>
            <span className="font-bold tracking-tight text-lg text-slate-900">Gono University</span>
          </Link>
        </div>
        
        <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path || (location.pathname.startsWith(item.path) && item.path !== "/portal");
            const Icon = item.icon;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm transition-all ${
                  isActive 
                    ? "bg-primary-50 text-primary-700 font-semibold" 
                    : "text-slate-500 hover:text-slate-900 hover:bg-slate-100 font-medium"
                }`}
              >
                <Icon className={`h-5 w-5 ${isActive ? "text-primary-600" : "text-slate-400"}`} />
                {item.label}
              </Link>
            );
          })}
        </nav>
        
        <div className="p-6 border-t border-white/40">
          <div className="flex items-center justify-between px-3 py-2 rounded-2xl bg-white/40 hover:bg-white/60 cursor-pointer transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary-600 to-primary-400 flex items-center justify-center text-white font-medium text-xs">
                JD
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-slate-900 leading-tight">John Doe</span>
                <span className="text-xs text-slate-500">CS Dept</span>
              </div>
            </div>
            <LogOut className="h-4 w-4 text-slate-400 hover:text-slate-600 transition-colors" />
          </div>
        </div>
      </aside>

      {/* Main Secure Area */}
      <main className="flex-1 flex flex-col lg:pl-64 w-full z-10 relative">
        <header className="h-20 sticky top-0 z-10 bg-white/40 backdrop-blur-md border-b border-white/40 px-4 sm:px-10 flex items-center justify-between">
          <div className="flex items-center lg:hidden">
             {/* Mobile menu trigger could go here */}
             <span className="text-xl font-bold tracking-tight text-slate-900">Student Command Center</span>
          </div>
          <div className="hidden lg:block">
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">Student Command Center</h1>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-slate-400 hover:text-slate-600 transition-colors rounded-full hover:bg-slate-100">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1.5 right-2 w-2 h-2 rounded-full bg-red-500 border-2 border-white"></span>
            </button>
          </div>
        </header>
        
        <div className="flex-1 p-4 sm:p-6 lg:p-8 overflow-hidden relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="h-full"
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
