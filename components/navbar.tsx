"use client";
import React from "react";
import FlowBtn from "./FlowBtn";
import Link from "next/link";
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import Image from "next/image";

function Navbar() {
  const { user, isAuthenticated } = useKindeBrowserClient();

  return (
    <div className="navbar bg-base-100 shadow-sm h-1">
      <div className="flex-1">
        <Link href="/">
          <div className=" ml-2 text-4xl font-semibold text-orange-600 ">
            LibEz
          </div>
        </Link>
      </div>
      <div className="text-orange-600 font-semibold mr-4">
        <Link href="/dashboard">dashboard</Link>
      </div>
      <div className="text-orange-600 font-semibold mr-4">
        <Link href="/items">items</Link>
      </div>

      <div className="flex-none mr-3">
        {isAuthenticated && (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle "
            >
              <div className="">
                {user && user?.picture && (
                  <div className="h-10 w-10 rounded-full my-auto mx-2 bg-orange-500 text-lg flex justify-center items-center text-white">
                    {user?.given_name?.[0]}
                  </div>
                )}
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                {/* //aya role devano */}
                <a>{user?.given_name}</a>
              </li>
              <li>
                <a className="justify-between">
                  {user?.email}
                  <span className="badge">User </span>
                </a>
              </li>
              <li>
                <LogoutLink>Logout</LogoutLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
