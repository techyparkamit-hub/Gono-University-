import { ArrowRight, Book, CheckCircle2, ChevronRight, FileText, UserCircle } from "lucide-react";
import { Button } from "@/src/components/ui/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/Card";
import { Badge } from "@/src/components/ui/Badge";
import { motion } from "motion/react";

export function DepartmentGateway() {
  return (
    <div className="space-y-12 pb-16">
      {/* Dept Header */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-xl">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/20 blur-[100px] rounded-full translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-emerald-500/10 blur-[80px] rounded-full -translate-x-1/2 translate-y-1/2" />
        
        <div className="relative z-10 max-w-3xl space-y-6">
          <Badge className="bg-primary-500/20 text-primary-200 border-primary-500/30">Science & Engineering</Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Computer Science & Engineering (B.Sc.)</h1>
          <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
            Prepare for the future of technology with our comprehensive curriculum covering AI, systems architecture, and modern software engineering.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 ring-0 shadow-lg gap-2">
              Apply Now <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="ghost" className="text-white hover:bg-white/10 hover:text-white">
              Download Syllabus
            </Button>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Syllabus Overview */}
          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold tracking-tight">Syllabus Overview</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "Core Fundamentals", desc: "Data Structures, Algorithms, Discrete Math", icon: Book },
                { title: "Systems & Architecture", desc: "OS, Computer Networks, Database Systems", icon: ChevronRight },
                { title: "Advanced Topics", desc: "Machine Learning, Cloud Computing", icon: FileText },
                { title: "Capstone Project", desc: "Final year industry-grade software project", icon: CheckCircle2 }
              ].map((item, i) => (
                <Card key={i} className="hover:shadow-md transition-all group">
                  <CardContent className="p-5 flex gap-4">
                    <div className="h-10 w-10 shrink-0 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 group-hover:text-primary-600 transition-colors">{item.title}</h4>
                      <p className="text-sm text-slate-500 mt-1">{item.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Admission Req */}
          <section className="space-y-6">
             <Card className="border-emerald-100 bg-emerald-50/30">
               <CardHeader>
                 <CardTitle>Admission Requirements</CardTitle>
                 <CardDescription>What you need to join our next cohort.</CardDescription>
               </CardHeader>
               <CardContent>
                 <ul className="space-y-3">
                   {['GPA 3.5 in Science', 'Strong foundation in Math/Physics', 'Pass the admission entrance test'].map((req, i) => (
                     <li key={i} className="flex items-start gap-3">
                       <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                       <span className="text-slate-700">{req}</span>
                     </li>
                   ))}
                 </ul>
               </CardContent>
             </Card>
          </section>
        </div>

        {/* Faculty Highlights sidebar */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold tracking-tight">Key Faculty</h3>
          <div className="space-y-4">
            {[
              { name: "Dr. Alan Turing", role: "Head of Dept", spec: "Cryptography" },
              { name: "Dr. Grace Hopper", role: "Professor", spec: "Compilers" },
              { name: "Dr. Ada Lovelace", role: "Assoc. Prof", spec: "Algorithms" }
            ].map((faculty, i) => (
              <Card key={i}>
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                    <UserCircle className="h-8 w-8" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900 leading-tight">{faculty.name}</h4>
                    <p className="text-xs text-slate-500 mt-0.5">{faculty.role}</p>
                    <Badge variant="secondary" className="mt-2 text-[10px] px-1.5 py-0">
                      {faculty.spec}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
