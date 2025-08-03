"use client";

import React, { useState } from "react";
import { IconBook, IconCheck, IconX } from "@tabler/icons-react";

interface RentalButtonProps {
  itemId: number;
  isAvailable: boolean;
  patronId: number;
}

const RentalButton: React.FC<RentalButtonProps> = ({
  itemId,
  isAvailable,
  patronId,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isRented, setIsRented] = useState(!isAvailable);

  const handleRentalAction = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(`/api/items/${itemId}/rent`, {
        method: isRented ? "DELETE" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ patronId }),
      });

      if (response.ok) {
        setIsRented(!isRented);
        // Refresh the page to update the UI with new data
        window.location.reload();
      } else {
        const errorData = await response.json();
        console.error("Rental error:", errorData);
        alert(
          `Error: ${errorData.error || "Failed to process rental request"}`
        );
      }
    } catch (error) {
      console.error("Rental error:", error);
      alert("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <button
        disabled
        className="w-full bg-gray-400 text-white font-medium px-4 py-3 rounded-lg shadow-md cursor-not-allowed flex items-center justify-center space-x-2"
      >
        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
        <span>Processing...</span>
      </button>
    );
  }

  if (isRented) {
    return (
      <button
        onClick={handleRentalAction}
        className="w-full bg-orange-600 hover:bg-orange-700 text-white font-medium px-4 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2"
      >
        <IconX className="w-5 h-5" />
        <span>Return Item</span>
      </button>
    );
  }

  return (
    <button
      onClick={handleRentalAction}
      className="w-full bg-green-600 hover:bg-green-700 text-white font-medium px-4 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2"
    >
      <IconBook className="w-5 h-5" />
      <span>Rent This Item</span>
    </button>
  );
};

export default RentalButton;
