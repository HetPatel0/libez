"use client";
import React from "react";
import {
  IconBook,
  IconLibrary,
  IconSearch,
  IconUsers,
  IconArrowRight,
} from "@tabler/icons-react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { LoginButton } from "./auth";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";

const Herosec = () => {
  const { data: session, status } = useSession();
  const isLoading = status === "loading";
  const isAuthenticated = session;

  const features = [
    {
      icon: <IconBook className="w-6 h-6" />,
      title: "Book Management",
      description: "Efficiently manage your library's book collection",
    },
    {
      icon: <IconSearch className="w-6 h-6" />,
      title: "Quick Search",
      description: "Find books and resources instantly",
    },
    {
      icon: <IconUsers className="w-6 h-6" />,
      title: "User Management",
      description: "Manage library members and their access",
    },
    {
      icon: <IconLibrary className="w-6 h-6" />,
      title: "Inventory Control",
      description: "Track items and maintain accurate records",
    },
  ];

  const stats = [
    { value: "10,000+", label: "Books Managed" },
    { value: "500+", label: "Active Users" },
    { value: "99.9%", label: "Uptime" },
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce"></div>
          <div
            className="w-3 h-3 bg-blue-600 rounded-full animate-bounce"
            style={{ animationDelay: "0.1s" }}
          ></div>
          <div
            className="w-3 h-3 bg-blue-600 rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          {/* Welcome Message */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                LibEz
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              {isAuthenticated
                ? `Welcome back, ${
                    session.user?.name || "User"
                  }! Ready to manage your library?`
                : "The modern library management system that simplifies your workflow"}
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Streamline your library operations with our comprehensive
              management platform
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            {isAuthenticated ? (
              <>
                <Link href="/dashboard">
                  <Button
                    size="lg"
                    className="group bg-blue-600 hover:bg-blue-700 px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <span>Go to Dashboard</span>
                    <IconArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </Link>
                <Link href="/items">
                  <Button
                    variant="outline"
                    size="lg"
                    className="group px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <span>Browse Items</span>
                    <IconArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </Link>
              </>
            ) : (
              <div className="flex  justify-center bg-blue-600 rounded-xl hover:bg-blue-700 px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300">
                <LoginButton />
              </div>
            )}
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-border hover:border-blue-200"
              >
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-200">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-card border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <Badge
                  variant="secondary"
                  className="text-3xl font-bold text-blue-600 bg-transparent border-none p-0 h-auto"
                >
                  {stat.value}
                </Badge>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosec;
