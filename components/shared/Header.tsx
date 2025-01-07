import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import NavItems from "./NavItems";
import { LogIn, Shield } from "lucide-react";
import MobileNav from "./MobileNav";
import Donation from "./Donation";
import { auth } from "@clerk/nextjs/server";
import { getUserEmailById } from "@/lib/actions/user.actions";
import { isAdmin } from "@/lib/actions/admin.actions";

export default async function Header() {
  const { sessionClaims } = await auth();
  const userId = sessionClaims?.userId as string;
  const email = await getUserEmailById(userId);
  const adminStatus = await isAdmin(email);

  return (
    <header className="w-full border-b bg-gray-50">
      {/* Top Section */}
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        {/* Logo and Title */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/assets/images/logo.png"
            width={50}
            height={50}
            alt="Islamic Education Australia Ltd logo"
          />
          <h1 className="hidden md:flex text-lg md:text-2xl font-serif font-bold text-gray-800">
            Islamic Education Australia Ltd
          </h1>
        </Link>

        {/* Donation Button */}
        <Donation />
      </div>

      <hr className="border-t border-gray-200" />

      {/* Navigation Section */}
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        {/* Navigation Links */}
        <div className="hidden lg:flex gap-8">
          <NavItems />
        </div>
        <MobileNav />

        {/* User Actions */}
        <div className="flex items-center gap-4">
          <SignedIn>
            {adminStatus && (
              <Button
                asChild
                variant="outline"
                size="sm"
                className="flex items-center gap-2 rounded-full border-gray-300 hover:bg-gray-100"
              >
                <Link href="/dashboard">
                  <Shield className="w-4 h-4" />
                  Admin
                </Link>
              </Button>
            )}
            <UserButton afterSwitchSessionUrl="/" />
          </SignedIn>
          <SignedOut>
            <Button
              asChild
              variant="outline"
              className="flex items-center gap-2 rounded-full border-gray-300 hover:bg-gray-100"
            >
              <Link href="/sign-in">
                <LogIn className="w-4 h-4" />
                <span>Login</span>
              </Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  );
}
