import { motion } from "motion/react";
import { BookOpen, AlertCircle, Clock, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/Card";

export function AcademicWidget() {
  return (
    <Card className="h-full flex flex-col justify-between p-8">
      <div>
        <p className="text-slate-500 text-sm font-medium mb-1">Academic Status</p>
        <h2 className="text-4xl font-bold text-slate-900">
          3.84 <span className="text-lg text-slate-400 font-normal">CGPA</span>
        </h2>
      </div>

      <div className="space-y-4 mt-8">
        <div className="flex justify-between items-end">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Credits Completed</span>
          <span className="text-sm font-bold">105 / 144</span>
        </div>
        <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${(105/144)*100}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="h-full bg-primary-600 rounded-full"
          />
        </div>
      </div>
    </Card>
  );
}
