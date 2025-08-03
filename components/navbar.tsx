"use client";
import React, { useState } from "react";
import FlowBtn from "./FlowBtn";
import Link from "next/link";
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import {
  IconBook,
  IconUser,
  IconMenu2,
  IconX,
  IconDashboard,
  IconLibrary,
} from "@tabler/icons-react";

function Navbar() {
  const { user, isAuthenticated } = useKindeBrowserClient();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                <IconBook className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                LibEz
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/dashboard"
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              <IconDashboard className="w-5 h-5" />
              <span>Dashboard</span>
            </Link>
            <Link
              href="/items"
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              <IconLibrary className="w-5 h-5" />
              <span>Items</span>
            </Link>
            <a className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
              About
            </a>
          </div>

          {/* User Menu / Auth */}
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="relative">
                <div className="flex items-center space-x-3">
                  <div className="hidden sm:flex items-center space-x-2 text-sm text-gray-600">
                    <span>Welcome,</span>
                    <span className="font-medium text-gray-900">
                      {user?.given_name}
                    </span>
                  </div>
                  <div className="dropdown dropdown-end">
                    <div
                      tabIndex={0}
                      role="button"
                      className="btn btn-ghost btn-circle"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold shadow-md hover:shadow-lg transition-all duration-200">
                        {user?.given_name?.charAt(0).toUpperCase() || "U"}
                      </div>
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu bg-white rounded-xl shadow-lg border border-gray-200 z-[1] w-52 p-2 mt-2"
                    >
                      <li className="px-3 py-2 text-sm text-gray-500 border-b border-gray-100">
                        {user?.email}
                      </li>
                      <li>
                        <LogoutLink className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                          <IconUser className="w-4 h-4" />
                          <span>Logout</span>
                        </LogoutLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <LoginLink>
                <button className="btn btn-primary bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-200">
                  Sign In
                </button>
              </LoginLink>
            )}

            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden btn btn-ghost btn-circle"
            >
              {isMobileMenuOpen ? (
                <IconX className="w-6 h-6" />
              ) : (
                <IconMenu2 className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/dashboard"
                className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <IconDashboard className="w-5 h-5" />
                <span>Dashboard</span>
              </Link>
              <Link
                href="/items"
                className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <IconLibrary className="w-5 h-5" />
                <span>Items</span>
              </Link>
              <a className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                <span>About</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
