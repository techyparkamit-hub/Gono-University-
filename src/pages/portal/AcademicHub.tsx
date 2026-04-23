import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/src/components/ui/Card";
import { Button } from "@/src/components/ui/Button";
import { Badge } from "@/src/components/ui/Badge";
import { CheckCircle2, ChevronDown, ChevronRight, FileText, Upload } from "lucide-react";

export function AcademicHub() {
  const [activeTab, setActiveTab] = useState<'grades' | 'registration'>('grades');
  const [expandedCourse, setExpandedCourse] = useState<string | null>(null);

  // Mock data
  const gradesData = [
    {
      id: "CSE301",
      name: "Database Systems",
      grade: "A",
      credits: 3,
      assignments: [
        { name: "Midterm Exam", score: "92/100", weight: "30%" },
        { name: "Project Phase 1", score: "100/100", weight: "20%" },
        { name: "Quiz 1", score: "18/20", weight: "10%" },
      ]
    },
    {
      id: "CSE303",
      name: "Computer Networks",
      grade: "A-",
      credits: 3,
      assignments: [
        { name: "Midterm Exam", score: "88/100", weight: "30%" },
        { name: "Lab Assignment 1", score: "100/100", weight: "15%" },
      ]
    }
  ];

  const availableCourses = [
    { id: "CSE305", name: "Software Engineering", credits: 3, slots: 5 },
    { id: "CSE307", name: "Artificial Intelligence", credits: 4, slots: 0 },
    { id: "MTH201", name: "Linear Algebra", credits: 3, slots: 12 },
  ];

  const [registeredCourses, setRegisteredCourses] = useState<string[]>([]);

  const handleRegister = (id: string) => {
    if (!registeredCourses.includes(id)) {
      setRegisteredCourses([...registeredCourses, id]);
    }
  };

  const handleDrop = (id: string) => {
    setRegisteredCourses(registeredCourses.filter(c => c !== id));
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-10">
      <div className="flex border-b border-slate-200">
        <button 
          onClick={() => setActiveTab('grades')}
          className={`px-6 py-3 font-medium text-sm border-b-2 transition-colors ${activeTab === 'grades' ? 'border-primary-600 text-primary-700' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
        >
          Detailed Grades
        </button>
        <button 
          onClick={() => setActiveTab('registration')}
          className={`px-6 py-3 font-medium text-sm border-b-2 transition-colors ${activeTab === 'registration' ? 'border-primary-600 text-primary-700' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
        >
          Course Registration
        </button>
      </div>

      {activeTab === 'grades' && (
        <div className="space-y-6">
          <h2 className="text-xl font-bold tracking-tight">Academic Performance</h2>
          <div className="space-y-4">
            {gradesData.map((course) => (
              <Card key={course.id} className="overflow-hidden">
                <div 
                  className="p-6 cursor-pointer hover:bg-slate-50/50 flex items-center justify-between transition-colors"
                  onClick={() => setExpandedCourse(expandedCourse === course.id ? null : course.id)}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center font-bold text-primary-600 text-lg">
                      {course.grade}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">{course.id}: {course.name}</h3>
                      <p className="text-sm text-slate-500">{course.credits} Credits</p>
                    </div>
                  </div>
                  <div>
                    {expandedCourse === course.id ? <ChevronDown className="text-slate-400" /> : <ChevronRight className="text-slate-400" />}
                  </div>
                </div>
                
                {expandedCourse === course.id && (
                  <div className="bg-slate-50 px-6 py-4 border-t border-slate-100">
                    <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Assignments & Assessments</h4>
                    <div className="space-y-3">
                      {course.assignments.map((assgn, i) => (
                        <div key={i} className="flex justify-between items-center bg-white p-3 rounded-lg border border-slate-200">
                          <div className="flex items-center gap-3">
                            <FileText className="w-4 h-4 text-slate-400" />
                            <span className="text-sm font-medium text-slate-700">{assgn.name}</span>
                            <Badge variant="secondary" className="px-1.5 py-0 text-[10px]">{assgn.weight}</Badge>
                          </div>
                          <span className="text-sm font-bold text-slate-900">{assgn.score}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'registration' && (
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-8 space-y-6">
            <div>
              <h2 className="text-xl font-bold tracking-tight">Available Courses</h2>
              <p className="text-sm text-slate-500 mt-1">Select courses for the upcoming Fall 2026 semester.</p>
            </div>
            
            <div className="space-y-4">
              {availableCourses.map(course => {
                const isRegistered = registeredCourses.includes(course.id);
                const isFull = course.slots === 0;
                return (
                  <Card key={course.id} className="p-5 flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-slate-900 flex items-center gap-2">
                        {course.id}: {course.name}
                        {isRegistered && <CheckCircle2 className="w-4 h-4 text-emerald-500" />}
                      </h3>
                      <p className="text-sm text-slate-500 mt-1">{course.credits} Credits &bull; {isFull ? <span className="text-rose-500 font-medium">Class Full</span> : <span>{course.slots} slots available</span>}</p>
                    </div>
                    <div>
                      {isRegistered ? (
                         <Button variant="outline" className="text-rose-600 border-rose-200 hover:bg-rose-50 hover:text-rose-700" onClick={() => handleDrop(course.id)}>Drop</Button>
                      ) : (
                         <Button disabled={isFull} onClick={() => handleRegister(course.id)}>{isFull ? 'Waitlist' : 'Add Course'}</Button>
                      )}
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
          
          <div className="md:col-span-4 space-y-6">
            <Card className="p-6 bg-slate-900 text-white border-0 shadow-xl relative overflow-hidden">
              <div className="absolute top-[-30px] right-[-30px] w-24 h-24 bg-primary-500/30 rounded-full blur-2xl"></div>
              <h3 className="text-lg font-bold mb-4 relative z-10">Your Schedule</h3>
              <div className="space-y-4 relative z-10">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Total Credits</span>
                  <span className="font-bold">{registeredCourses.length * 3} / 18</span>
                </div>
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-primary-500 rounded-full transition-all" style={{ width: `${(registeredCourses.length * 3 / 18) * 100}%` }}></div>
                </div>
                {registeredCourses.length > 0 ? (
                  <div className="mt-6 pt-6 border-t border-slate-800 space-y-3">
                    {registeredCourses.map(id => (
                      <div key={id} className="text-sm flex justify-between text-slate-300">
                        <span>{id}</span>
                        <span>3 CR</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-slate-500 text-center py-4">No courses selected</p>
                )}
                
                <Button className="w-full mt-4 bg-white text-slate-900 hover:bg-slate-100" disabled={registeredCourses.length === 0}>
                  Confirm Registration
                </Button>
              </div>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}
