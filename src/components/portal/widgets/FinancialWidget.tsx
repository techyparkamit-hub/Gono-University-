import { CreditCard, DollarSign, DownloadCloud, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/src/components/ui/Card";
import { Button } from "@/src/components/ui/Button";

export function FinancialWidget() {
  return (
    <Card className="h-full flex flex-col shadow-rose-100/20 justify-between p-8 border-white">
      <div>
        <p className="text-slate-500 text-sm font-medium mb-1">Outstanding Balance</p>
        <h2 className="text-4xl font-bold text-rose-600">
          $450<span className="text-2xl">.00</span>
        </h2>
        <p className="text-xs text-rose-400 mt-1 font-medium">Due date: Oct 24, 2026</p>
      </div>

      <div className="mt-8">
        <button className="w-full bg-slate-900 text-white py-3 rounded-xl font-bold text-sm tracking-tight hover:scale-[1.02] active:scale-95 transition-all shadow-lg">
          Pay Now &bull; Stripe Secure
        </button>
      </div>
    </Card>
  );
}
