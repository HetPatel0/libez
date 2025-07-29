"use client";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import React from "react";

function Dash() {
  const { user } = useKindeBrowserClient();
  return (
    <div className="mockup-browser border-base-300 border w-full h-full mt-3 my-2">
      <div className="mockup-browser-toolbar">  
        <div className="input"> hello, {user?.given_name}</div>
      </div>
      <div className="grid place-content-center border-t border-base-300 h-150"></div>
    </div>
  );
}

export default Dash;
