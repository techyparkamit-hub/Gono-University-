import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/src/components/ui/Card";
import { Button } from "@/src/components/ui/Button";
import { Input } from "@/src/components/ui/Input";
import { Bell, KeyRound, UserCircle } from "lucide-react";

export function ProfileSettings() {
  const [activeTab, setActiveTab] = useState<'profile' | 'security' | 'notifications'>('profile');

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-10">
      <h2 className="text-2xl font-bold tracking-tight text-slate-900">Settings</h2>
      
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <Card className="w-full md:w-64 shrink-0 p-2 border-0 bg-transparent shadow-none md:bg-white md:border md:shadow-xl shadow-slate-100/20">
          <nav className="flex md:flex-col gap-1 overflow-x-auto pb-2 md:pb-0">
            {[
              { id: 'profile', label: 'Personal Info', icon: UserCircle },
              { id: 'security', label: 'Security & Password', icon: KeyRound },
              { id: 'notifications', label: 'Notifications', icon: Bell },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                  activeTab === tab.id 
                    ? "bg-primary-50 text-primary-700" 
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                <tab.icon className={`w-4 h-4 ${activeTab === tab.id ? 'text-primary-600' : 'text-slate-400'}`} />
                {tab.label}
              </button>
            ))}
          </nav>
        </Card>

        <div className="flex-1 w-full space-y-6">
          {activeTab === 'profile' && (
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-6 pb-6 border-b border-slate-100">
                  <div className="w-20 h-20 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center text-2xl font-bold bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary-200 to-primary-50">
                    JD
                  </div>
                  <div>
                    <Button variant="outline" size="sm">Change Avatar</Button>
                    <p className="text-xs text-slate-500 mt-2">JPG, GIF or PNG. Max size of 800K</p>
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-slate-700">First Name</label>
                    <Input defaultValue="John" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-slate-700">Last Name</label>
                    <Input defaultValue="Doe" />
                  </div>
                  <div className="space-y-1.5 sm:col-span-2">
                    <label className="text-sm font-medium text-slate-700">University Email</label>
                    <Input disabled defaultValue="john.doe@gono.edu" className="bg-slate-50 text-slate-500" />
                  </div>
                  <div className="space-y-1.5 sm:col-span-2">
                    <label className="text-sm font-medium text-slate-700">Personal Phone</label>
                    <Input defaultValue="+880 1711 000000" />
                  </div>
                </div>
                
                <div className="pt-4 flex justify-end">
                  <Button>Save Changes</Button>
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === 'security' && (
            <Card>
              <CardHeader>
                <CardTitle>Change Password</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700">Current Password</label>
                  <Input type="password" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700">New Password</label>
                  <Input type="password" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700">Confirm New Password</label>
                  <Input type="password" />
                </div>
                <div className="pt-4 flex justify-end">
                  <Button>Update Password</Button>
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === 'notifications' && (
            <Card>
              <CardHeader>
                <CardTitle>Communication Preferences</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {[
                  { title: "Academic Alerts", desc: "Grade postings, registration deadlines", default: true },
                  { title: "Financial Notices", desc: "Fee reminders, scholarship updates", default: true },
                  { title: "Campus Events", desc: "Clubs, symposiums, tech carnivals", default: false },
                ].map((item, i) => (
                  <div key={i} className="flex flex-row items-center justify-between rounded-lg border border-slate-200 p-4 shadow-sm bg-white">
                    <div className="space-y-0.5">
                      <label className="text-sm font-medium text-slate-900">{item.title}</label>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                    <div>
                      {/* Simple toggle switch representation */}
                      <div className={`w-11 h-6 rounded-full flex items-center p-1 cursor-pointer transition-colors ${item.default ? 'bg-primary-600' : 'bg-slate-200'}`}>
                        <div className={`w-4 h-4 bg-white rounded-full transition-transform ${item.default ? 'translate-x-5' : 'translate-x-0'}`} />
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
