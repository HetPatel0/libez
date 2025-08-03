import Dash from "@/components/dash";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

async function Dashboard() {
  const { isAuthenticated } = getKindeServerSession();
  const isLoggedIn = await isAuthenticated();
  if (!isLoggedIn) {
    redirect("api/auth/login");
  }
  return (
    // here dashboard changes
    <div>
      {/* // ek user dashbord banvanu ane ee conditionall ma nakhvanu */}
      <Dash />
      {/* // admin dashboard che */}
    </div>
  );
}

export default Dashboard;
