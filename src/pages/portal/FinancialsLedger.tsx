import { Card, CardHeader, CardTitle, CardContent } from "@/src/components/ui/Card";
import { Button } from "@/src/components/ui/Button";
import { Badge } from "@/src/components/ui/Badge";
import { ArrowDownRight, ArrowUpRight, CreditCard, Download, Receipt } from "lucide-react";

export function FinancialsLedger() {
  const transactions = [
    { id: "TXN-8821", date: "Aug 15, 2026", desc: "Fall 2026 Tuition Installment", type: "charge", amount: "$1,100.00", status: "pending" },
    { id: "TXN-8743", date: "Aug 10, 2026", desc: "Library Late Fee", type: "charge", amount: "$15.00", status: "pending" },
    { id: "TXN-8102", date: "May 01, 2026", desc: "Spring 2026 Tuition Payment", type: "payment", amount: "$2,200.00", status: "completed" },
    { id: "TXN-8099", date: "Feb 10, 2026", desc: "Merit Scholarship Credit", type: "credit", amount: "$500.00", status: "completed" },
  ];

  return (
    <div className="space-y-8 max-w-6xl mx-auto pb-10">
      <div className="grid md:grid-cols-3 gap-6">
        {/* Outstanding Balance */}
        <Card className="bg-gradient-to-br from-rose-50 to-white border-rose-100">
          <CardContent className="p-6">
            <h3 className="text-sm font-medium text-slate-500 mb-2">Total Due Balance</h3>
            <div className="text-4xl font-bold text-rose-600 mb-4">$1,115.00</div>
            <Button className="w-full bg-rose-600 hover:bg-rose-700 text-white">Pay Balance Now</Button>
          </CardContent>
        </Card>
        
        {/* Breakdown */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="text-lg">Current Semester Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
             <div className="grid grid-cols-2 gap-4">
               <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                 <div className="text-sm text-slate-500 mb-1">Tuition Fees</div>
                 <div className="text-xl font-bold text-slate-900">$2,200.00</div>
               </div>
               <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                 <div className="text-sm text-slate-500 mb-1">Lab / Activity</div>
                 <div className="text-xl font-bold text-slate-900">$150.00</div>
               </div>
               <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                 <div className="text-sm text-emerald-600 mb-1">Scholarships/Aid</div>
                 <div className="text-xl font-bold text-emerald-700">-$500.00</div>
               </div>
               <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                 <div className="text-sm text-slate-500 mb-1">Other Fees</div>
                 <div className="text-xl font-bold text-slate-900">$15.00</div>
               </div>
             </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="border-b border-slate-100 pb-4">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">Transaction History</CardTitle>
            <Button variant="outline" size="sm" className="gap-2 text-slate-600 cursor-pointer">
              <Download className="w-4 h-4" /> Export CSV
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="divide-y divide-slate-100">
            {transactions.map((txn, i) => (
              <div key={txn.id} className="p-4 flex items-center justify-between hover:bg-slate-50/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${txn.type === 'charge' ? 'bg-rose-100 text-rose-600' : txn.type === 'payment' ? 'bg-indigo-100 text-indigo-600' : 'bg-emerald-100 text-emerald-600'}`}>
                     {txn.type === 'charge' ? <ArrowUpRight className="w-5 h-5" /> : <ArrowDownRight className="w-5 h-5" />}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">{txn.desc}</p>
                    <div className="flex items-center gap-2 text-xs text-slate-500 mt-0.5">
                      <span>{txn.date}</span> &bull; <span>{txn.id}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className={`font-bold text-right ${txn.type === 'charge' ? 'text-slate-900' : 'text-emerald-600'}`}>
                    {txn.type === 'charge' ? '' : '+'}{txn.amount}
                  </div>
                  <Badge variant={txn.status === 'completed' ? 'success' : 'warning'} className="w-20 justify-center uppercase text-[10px]">
                    {txn.status}
                  </Badge>
                  <button className="text-slate-400 hover:text-slate-600"><Receipt className="w-5 h-5" /></button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
