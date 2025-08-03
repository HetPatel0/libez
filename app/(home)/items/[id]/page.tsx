import { PrismaClient } from "@/app/generated/prisma";
import { notFound } from "next/navigation";
import React from "react";
import {
  IconBook,
  IconUser,
  IconCalendar,
  IconClock,
  IconArrowLeft,
  IconEye,
  IconCheck,
  IconX,
  IconHeart,
  IconShare,
} from "@tabler/icons-react";
import Link from "next/link";
import RentalButton from "@/components/RentalButton";

interface PageProps {
  params: {
    id: string;
  };
}

async function ItemDetailPage({ params }: PageProps) {
  const prisma = new PrismaClient();

  try {
    const itemId = parseInt(params.id);

    // Fetch item with related transactions and patron information
    const item = await prisma.item.findUnique({
      where: { ItemID: itemId },
      include: {
        itemtransaction: {
          include: {
            patron: {
              include: {
                users: true,
              },
            },
          },
          orderBy: {
            ItemTranID: "desc",
          },
        },
      },
    });

    if (!item) {
      notFound();
    }

    // Calculate availability status
    const currentTransaction = item.itemtransaction[0];
    const isAvailable = currentTransaction?.IsAvailable ?? true;
    const assignedTo = currentTransaction?.patron;

    // Get recent transaction history (last 5)
    const recentTransactions = item.itemtransaction.slice(0, 5);

    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-4xl mx-auto">
          {/* Header with Back Button */}
          <div className="mb-8">
            <div className="flex items-center space-x-4 mb-6">
              <Link
                href="/items"
                className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
              >
                <IconArrowLeft className="w-5 h-5" />
                <span>Back to Library</span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Item Information */}
            <div className="lg:col-span-2 space-y-6">
              {/* Item Header Card */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-start space-x-6">
                  {/* Item Image or Placeholder */}
                  <div className="w-32 h-40 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                    {item.ItemImage ? (
                      <img
                        src={item.ItemImage}
                        alt={item.ItemTitle}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    ) : (
                      <IconBook className="w-16 h-16 text-blue-600" />
                    )}
                  </div>

                  <div className="flex-1">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                      {item.ItemTitle}
                    </h1>
                    <p className="text-lg text-gray-600 mb-4">
                      by {item.ItemAuthor || "Unknown Author"}
                    </p>

                    <div className="flex items-center space-x-4 mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                        {item.ItemType || "Book"}
                      </span>
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                          isAvailable
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {isAvailable ? "Available" : "Currently Rented"}
                      </span>
                    </div>

                    {item.ItemPrice && (
                      <p className="text-lg font-semibold text-gray-900">
                        Value: Rs {item.ItemPrice.toString()}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Item Details */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center space-x-2">
                  <IconBook className="w-6 h-6 text-blue-600" />
                  <span>Item Details</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-1">
                      Title
                    </h3>
                    <p className="text-lg font-semibold text-gray-900">
                      {item.ItemTitle}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-1">
                      Author
                    </h3>
                    <p className="text-lg text-gray-900">
                      {item.ItemAuthor || "Unknown"}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-1">
                      Type
                    </h3>
                    <p className="text-lg text-gray-900">
                      {item.ItemType || "Book"}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-1">
                      Item ID
                    </h3>
                    <p className="text-lg font-mono text-gray-900">
                      #{item.ItemID}
                    </p>
                  </div>
                </div>
              </div>

              {/* Current Status */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center space-x-2">
                  <IconEye className="w-6 h-6 text-green-600" />
                  <span>Current Status</span>
                </h2>

                {isAvailable ? (
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-lg font-medium text-gray-900">
                        Available for rental
                      </span>
                    </div>
                    <p className="text-gray-600">
                      This item is currently available and ready to be rented.
                      You can check it out now!
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span className="text-lg font-medium text-gray-900">
                        Currently rented out
                      </span>
                    </div>
                    <p className="text-gray-600">
                      This item is currently being used by another patron. You
                      can place a hold or check back later.
                    </p>

                    {assignedTo && (
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h3 className="text-sm font-medium text-gray-500 mb-2">
                          Currently with:
                        </h3>
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                            <IconUser className="w-5 h-5 text-blue-600" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">
                              {assignedTo.PatronFirstName}{" "}
                              {assignedTo.PatronLastName}
                            </p>
                            <p className="text-sm text-gray-600">
                              {assignedTo.PatronDepartment} •{" "}
                              {assignedTo.PatronSemester}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center space-x-2">
                  <IconClock className="w-6 h-6 text-purple-600" />
                  <span>Recent Activity</span>
                </h2>

                <div className="space-y-4">
                  {recentTransactions.length > 0 ? (
                    recentTransactions.map((transaction, index) => (
                      <div
                        key={transaction.ItemTranID}
                        className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg"
                      >
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          {transaction.IsAvailable ? (
                            <IconCheck className="w-4 h-4 text-green-600" />
                          ) : (
                            <IconX className="w-4 h-4 text-red-600" />
                          )}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900">
                            {transaction.IsAvailable
                              ? "Returned"
                              : "Checked out"}
                          </p>
                          {transaction.patron && (
                            <p className="text-xs text-gray-600">
                              by {transaction.patron.PatronFirstName}{" "}
                              {transaction.patron.PatronLastName}
                            </p>
                          )}
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500 text-center py-4">
                      No recent activity
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Sidebar - User Actions */}
            <div className="space-y-6">
              {/* Rental Actions */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Rental Options
                </h3>

                <div className="space-y-4">
                  {/* Rental Button Component */}
                  <RentalButton
                    itemId={item.ItemID}
                    isAvailable={isAvailable}
                    patronId={1} // Default patron ID for demo
                  />

                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2">
                    <IconHeart className="w-5 h-5" />
                    <span>Add to Wishlist</span>
                  </button>

                  <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium px-4 py-3 rounded-lg border border-gray-300 transition-all duration-200 flex items-center justify-center space-x-2">
                    <IconShare className="w-5 h-5" />
                    <span>Share Item</span>
                  </button>
                </div>
              </div>

              {/* Item Statistics */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Item Info
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Total Rentals</span>
                    <span className="font-semibold text-gray-900">
                      {item.itemtransaction.length}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">
                      Current Status
                    </span>
                    <span
                      className={`font-semibold ${
                        isAvailable ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {isAvailable ? "Available" : "Rented"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Item Type</span>
                    <span className="font-semibold text-gray-900">
                      {item.ItemType || "Book"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Similar Items */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Similar Items
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Other items you might be interested in
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                    <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                      <IconBook className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">
                        Similar Book Title
                      </p>
                      <p className="text-xs text-gray-600">by Author Name</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                    <div className="w-8 h-8 bg-green-100 rounded flex items-center justify-center">
                      <IconBook className="w-4 h-4 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">
                        Another Related Book
                      </p>
                      <p className="text-xs text-gray-600">by Another Author</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <Link
                    href="/items"
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    Browse more items →
                  </Link>
                </div>
              </div>

              {/* Quick Info */}
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  Rental Information
                </h3>
                <div className="space-y-2 text-sm text-blue-800">
                  <p>• Standard rental period: 14 days</p>
                  <p>• Maximum 3 items at a time</p>
                  <p>• Late fees: Rs 5 per day</p>
                  <p>• Renewals allowed if available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching item:", error);
    notFound();
  } finally {
    await prisma.$disconnect();
  }
}

export default ItemDetailPage;
