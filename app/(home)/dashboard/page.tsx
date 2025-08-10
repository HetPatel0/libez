import { authOptions } from "@/lib/auth";
import Dash from "@/components/dash";
// import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("api/auth/signin");
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
