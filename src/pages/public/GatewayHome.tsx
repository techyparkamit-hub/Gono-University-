import { ArrowRight, BookOpen, GraduationCap, MapPin, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/src/components/ui/Button";
import { Badge } from "@/src/components/ui/Badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/Card";
import { motion } from "motion/react";

const notices = [
  { id: 1, title: "Fall 2026 Registration Opens", date: "Aug 15", category: "Academic", badge: "default" },
  { id: 2, title: "Semester Fee Payment Deadline", date: "Aug 20", category: "Financial", badge: "warning" },
  { id: 3, title: "Campus Tech Symposium", date: "Sep 05", category: "Event", badge: "success" }
];

export function GatewayHome() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center pt-10 pb-8 md:pt-20 md:pb-16 max-w-4xl mx-auto space-y-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-sm font-medium mb-4"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
          </span>
          Admissions for Fall 2026 are now open
        </motion.div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]">
          Shape Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-400">Future</span> at Gono University
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Experience world-class education, cutting-edge research, and a community dedicated to innovation and excellence.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button size="lg" className="w-full sm:w-auto text-base gap-2 group">
            Apply Now
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Link to="/departments">
            <Button size="lg" variant="outline" className="w-full sm:w-auto text-base">
              Explore Programs
            </Button>
          </Link>
        </div>
      </section>

      {/* Notice Board Widget (Headless CMS Ready) */}
      <section className="grid md:grid-cols-12 gap-8 items-start">
        <div className="md:col-span-8 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold tracking-tight">University Notice Board</h2>
            <Button variant="ghost" size="sm" className="text-primary-600">View All</Button>
          </div>
          <div className="space-y-4">
            {notices.map((notice, i) => (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                key={notice.id}
              >
                <Card className="hover:shadow-md transition-shadow cursor-pointer group hover:border-primary-200">
                  <div className="flex items-center p-4 gap-6">
                    <div className="flex-shrink-0 flex flex-col items-center justify-center w-14 h-14 rounded-lg bg-slate-50 border border-slate-100">
                      <span className="text-sm font-medium text-slate-500 uppercase">{notice.date.split(' ')[0]}</span>
                      <span className="text-lg font-bold tracking-tight text-slate-900">{notice.date.split(' ')[1]}</span>
                    </div>
                    <div className="flex-1 min-w-0 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <h3 className="font-semibold text-slate-900 truncate group-hover:text-primary-600 transition-colors">
                          {notice.title}
                        </h3>
                      </div>
                      <Badge variant={notice.badge as any} className="self-start sm:self-auto shrink-0">
                        {notice.category}
                      </Badge>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quick Stats / Info */}
        <div className="md:col-span-4 space-y-4">
          <Card className="bg-slate-900 text-white border-0 shadow-lg relative overflow-hidden">
             <div className="absolute top-[-50px] right-[-50px] w-[150px] h-[150px] rounded-full sm:blur-[60px] blur-[40px] bg-primary-500/30 opacity-70"></div>
            <CardHeader className="relative z-10 pb-4">
              <CardTitle className="text-white text-xl">Faculty Spotlights</CardTitle>
              <CardDescription className="text-slate-400">Discover our distinguished educators.</CardDescription>
            </CardHeader>
            <CardContent className="relative z-10 space-y-4">
               <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                 <div className="flex items-center gap-3">
                   <div className="bg-slate-800 p-2 rounded-lg text-primary-400"><Users className="w-4 h-4" /></div>
                   <span className="font-medium text-sm">200+ Faculty</span>
                 </div>
               </div>
               <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                 <div className="flex items-center gap-3">
                   <div className="bg-slate-800 p-2 rounded-lg text-emerald-400"><GraduationCap className="w-4 h-4" /></div>
                   <span className="font-medium text-sm">30+ Programs</span>
                 </div>
               </div>
               <div className="flex items-center justify-between pb-2">
                 <div className="flex items-center gap-3">
                   <div className="bg-slate-800 p-2 rounded-lg text-amber-400"><MapPin className="w-4 h-4" /></div>
                   <span className="font-medium text-sm">Central Campus</span>
                 </div>
               </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
