/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { PublicLayout } from "@/src/layouts/PublicLayout";
import { PortalLayout } from "@/src/layouts/PortalLayout";
import { GatewayHome } from "@/src/pages/public/GatewayHome";
import { DepartmentGateway } from "@/src/pages/public/DepartmentGateway";
import { PortalDashboard } from "@/src/pages/portal/PortalDashboard";
import { AcademicHub } from "@/src/pages/portal/AcademicHub";
import { FinancialsLedger } from "@/src/pages/portal/FinancialsLedger";
import { ProfileSettings } from "@/src/pages/portal/ProfileSettings";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Module I: Public-Facing Gateway */}
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<GatewayHome />} />
          <Route path="departments" element={<DepartmentGateway />} />
          <Route path="about" element={<div className="py-20 text-center"><h1 className="text-3xl font-bold">About Gono University</h1><p className="text-slate-500 mt-2">Coming Soon.</p></div>} />
          <Route path="notices" element={<div className="py-20 text-center"><h1 className="text-3xl font-bold">All Notices</h1><p className="text-slate-500 mt-2">Check back later.</p></div>} />
        </Route>

        {/* Module II: Integrated Student Portal */}
        <Route path="/portal" element={<PortalLayout />}>
          <Route index element={<PortalDashboard />} />
          <Route path="academic" element={<AcademicHub />} />
          <Route path="financials" element={<FinancialsLedger />} />
          <Route path="routine" element={<div className="flex h-full items-center justify-center text-slate-500">Advanced Routine Planner</div>} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>
        
        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

