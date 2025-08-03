"use client";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import React from "react";
import {
  IconBook,
  IconUsers,
  IconLibrary,
  IconTrendingUp,
  IconCalendar,
  IconClock,
  IconSearch,
} from "@tabler/icons-react";

function Dash() {
  const { user } = useKindeBrowserClient();

  const stats = [
    {
      title: "Total Books",
      value: "1,234",
      change: "+12%",
      icon: <IconBook className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Active Users",
      value: "89",
      change: "+5%",
      icon: <IconUsers className="w-6 h-6" />,
      color: "from-green-500 to-green-600",
    },
    {
      title: "Available Items",
      value: "987",
      change: "+8%",
      icon: <IconLibrary className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Monthly Growth",
      value: "23%",
      change: "+2%",
      icon: <IconTrendingUp className="w-6 h-6" />,
      color: "from-orange-500 to-orange-600",
    },
  ];

  const recentActivities = [
    {
      action: "New book added",
      item: "The Great Gatsby",
      time: "2 hours ago",
      user: "John Doe",
    },
    {
      action: "Item checked out",
      item: "1984 by George Orwell",
      time: "4 hours ago",
      user: "Jane Smith",
    },
    {
      action: "User registered",
      item: "New member",
      time: "6 hours ago",
      user: "Mike Johnson",
    },
    {
      action: "Book returned",
      item: "To Kill a Mockingbird",
      time: "8 hours ago",
      user: "Sarah Wilson",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {user?.given_name || "User"}! 👋
          </h1>
          <p className="text-gray-600">
            Here's what's happening with your library today.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">
                    {stat.title}
                  </p>
                  <p className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </p>
                  <p className="text-sm text-green-600 font-medium">
                    {stat.change} from last month
                  </p>
                </div>
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center text-white`}
                >
                  {stat.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Quick Actions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button className="flex items-center space-x-3 p-4 bg-blue-50 hover:bg-blue-100 rounded-lg border border-blue-200 transition-all duration-200 group">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-200">
                    <IconBook className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium text-gray-900">Add New Book</p>
                    <p className="text-sm text-gray-600">Register a new item</p>
                  </div>
                </button>

                <button className="flex items-center space-x-3 p-4 bg-green-50 hover:bg-green-100 rounded-lg border border-green-200 transition-all duration-200 group">
                  <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-200">
                    <IconUsers className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium text-gray-900">Manage Users</p>
                    <p className="text-sm text-gray-600">
                      View and edit members
                    </p>
                  </div>
                </button>

                <button className="flex items-center space-x-3 p-4 bg-purple-50 hover:bg-purple-100 rounded-lg border border-purple-200 transition-all duration-200 group">
                  <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-200">
                    <IconSearch className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium text-gray-900">Search Items</p>
                    <p className="text-sm text-gray-600">
                      Find books and resources
                    </p>
                  </div>
                </button>

                <button className="flex items-center space-x-3 p-4 bg-orange-50 hover:bg-orange-100 rounded-lg border border-orange-200 transition-all duration-200 group">
                  <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-200">
                    <IconCalendar className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium text-gray-900">View Reports</p>
                    <p className="text-sm text-gray-600">
                      Analytics and insights
                    </p>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Recent Activity
            </h2>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg"
                >
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <IconClock className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">
                      {activity.action}
                    </p>
                    <p className="text-xs text-gray-600">{activity.item}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      by {activity.user} • {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* System Status */}
        <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            System Status
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-600">Database: Online</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-600">API: Operational</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-600">
                Authentication: Active
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dash;
