import Navy from "@/components/navbar";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navy />
      <main className="pt-0">{children}</main>
    </div>
  );
}

export default layout;
