import { Outlet, Link, useLocation } from "react-router-dom";
import { GraduationCap, ArrowRight } from "lucide-react";
import { Button } from "@/src/components/ui/Button";
import { motion, AnimatePresence } from "motion/react";

export function PublicLayout() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 relative overflow-hidden font-sans text-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary-100 via-transparent to-transparent opacity-50 pointer-events-none" />

      <header className="sticky top-0 z-50 w-full border-b border-white/40 bg-white/40 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-primary-600 text-white p-1.5 rounded-lg group-hover:bg-primary-700 transition-colors">
              <GraduationCap className="h-5 w-5" />
            </div>
            <span className="font-semibold text-lg tracking-tight text-slate-900">Gono University</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/about" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">About</Link>
            <Link to="/departments" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Departments</Link>
            <Link to="/notices" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Notices</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link to="/portal">
              <Button variant="ghost" className="hidden sm:inline-flex">Sign In</Button>
            </Link>
            <Button className="gap-2 group">
              Apply Now <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </Button>
          </div>
        </div>
      </header>
      
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="flex-1 container mx-auto px-4 py-8 relative z-10"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>

      <footer className="border-t border-slate-200/50 bg-white/50 backdrop-blur-sm mt-auto z-10">
        <div className="container mx-auto px-4 py-8 text-center text-sm text-slate-500">
          &copy; {new Date().getFullYear()} Gono University Platform. Built with React & Vite.
        </div>
      </footer>
    </div>
  );
}
