"use client";
import { signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

export const LoginButton = () => {
  const router = useRouter();

  // Use router.push to go to your custom sign-in page
  return (
    <button
      onClick={() => router.push("/auth/signin")}
      className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-150 ease-in-out"
    >
      Sign In
    </button>
  );
};

export const RegisterButton = () => {
  const router = useRouter();

  // Use router.push to go to your custom registration page
  return (
    <button
      onClick={() => router.push("/auth/register")}
      className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition duration-150 ease-in-out"
    >
      Register
    </button>
  );
};

export const LogoutButton = () => {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/" })}
      className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md transition duration-150 ease-in-out"
    >
      Sign Out
    </button>
  );
};
