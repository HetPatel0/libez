"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  IconBook,
  IconUser,
  IconMenu2,
  IconX,
  IconDashboard,
  IconLibrary,
  IconLogout,
} from "@tabler/icons-react";
import { useSession } from "next-auth/react";
import LogoutButton from "./LogoutButton";
import { LoginButton, RegisterButton } from "./auth";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

function Navbar() {
  const { data: session, status } = useSession();
  const isAuthenticated = session;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    {
      href: "/dashboard",
      label: "Dashboard",
      icon: <IconDashboard className="w-5 h-5" />,
    },
    {
      href: "/items",
      label: "Items",
      icon: <IconLibrary className="w-5 h-5" />,
    },
    {
      href: "/about",
      label: "About",
      icon: null,
    },
  ];

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-lg border-b sticky top-0 z-50">
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
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center space-x-2 text-muted-foreground hover:text-blue-600 font-medium transition-colors duration-200"
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          {/* User Menu / Auth */}
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="flex items-center space-x-3">
                <div className="hidden sm:flex items-center space-x-2 text-sm text-muted-foreground">
                  <span>Welcome,</span>
                  <Badge variant="secondary" className="font-medium">
                    {session?.user?.name}
                  </Badge>
                </div>
                
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="relative h-10 w-10 rounded-full p-0 hover:bg-transparent"
                    >
                      <Avatar className="h-10 w-10 bg-gradient-to-br from-blue-500 to-blue-600 border-2 border-white shadow-md">
                        <AvatarFallback className="bg-gradient-to-br from-blue-500 to-blue-600 text-white font-semibold">
                          {session?.user?.name?.charAt(0)?.toUpperCase() || "U"}
                        </AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="end" forceMount>
                    <DropdownMenuLabel className="font-normal">
                      <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">
                          {session?.user?.name}
                        </p>
                        <p className="text-xs leading-none text-muted-foreground">
                          {session?.user?.email}
                        </p>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="cursor-pointer">
                      <IconLogout className="w-4 h-4 mr-2" />
                      <LogoutButton />
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <LoginButton />
                <RegisterButton />
              </div>
            )}

            {/* Mobile menu button */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  className="md:hidden p-2 h-auto"
                >
                  {isMobileMenuOpen ? (
                    <IconX className="w-6 h-6" />
                  ) : (
                    <IconMenu2 className="w-6 h-6" />
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                      <IconBook className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                      LibEz
                    </span>
                  </SheetTitle>
                  <SheetDescription>
                    Navigate through your library management system
                  </SheetDescription>
                </SheetHeader>
                <div className="mt-8 space-y-2">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center space-x-3 px-3 py-2 text-muted-foreground hover:text-blue-600 hover:bg-accent rounded-lg transition-colors duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;