import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import NavItems from "./NavItems";
import { LogIn, Shield, UserPen, UserPlus } from "lucide-react";
import MobileNav from "./MobileNav";
import Donation from "./Donation";
import { auth } from "@clerk/nextjs/server";
import { getUserEmailById } from "@/lib/actions/user.actions";
import { isAdmin } from "@/lib/actions/admin.actions";
import { isRegistered, isSubmitted } from "@/lib/actions/registration.actions";

export default async function Header() {
  const { sessionClaims } = await auth();
  const userId = sessionClaims?.userId as string;
  const email = await getUserEmailById(userId);
  const adminStatus = await isAdmin(email);
  const isSubmittedUser = await isSubmitted(userId);
  const isRegisteredUser = await isRegistered(userId);

  return (
    <header className="w-full text-primary-900 bg-gradient-to-r from-yellow-200 to-primary-500">
      {/* Top Section */}
      <div className="container mx-auto flex items-center justify-between py-2 px-4">
        {/* Logo and Title */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/assets/images/logo.png"
            width={100}
            height={100}
            alt="Islamic Education Australia logo"
          />
          <div className="relative flex flex-col justify-center">
            <h1 className="hidden md:flex text-lg md:text-2xl lg:text-4xl font-serif font-bold">
              Islamic Education Australia
            </h1>
            <h1 className="md:hidden text-lg md:text-2xl lg:text-4xl font-serif font-bold">
              Islamic <br /> Education <br /> Australia
            </h1>
            <i className="hidden md:flex absolute top-10 text-xs lg:text-sm w-full">
              Empowering Success through Faith, Knowledge, and Excellence
            </i>
          </div>
        </Link>

        {/* Donation Button */}
        <Donation />
      </div>

      <hr className="border-t border-gray-500" />

      {/* Navigation Section */}
      <div className="container mx-auto flex items-center justify-between py-2 px-4">
        {/* Navigation Links */}
        <div className="hidden lg:flex gap-8">
          <NavItems />
        </div>
        <MobileNav />

        {/* User Actions */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-4">
            <SignedIn>
              {isSubmittedUser || isRegisteredUser ? (
                <Button
                  asChild
                  size="sm"
                  className="flex items-center gap-2 rounded-full bg-yellow-400 hover:bg-yellow-600 text-primary-900"
                >
                  <Link href="/profile">
                    <UserPen className="w-4 h-4" />
                    My Profile
                  </Link>
                </Button>
              ) : (
                <Button
                  asChild
                  size="sm"
                  className="flex items-center gap-2 rounded-full bg-yellow-400 hover:bg-yellow-600 text-primary-900"
                >
                  <Link href="/profile">
                    <UserPlus className="w-4 h-4" />
                    <span className="flex items-center gap-1 text-xs">
                      Join Us: <i className="text-xs">Bismillah !!</i>
                    </span>
                  </Link>
                </Button>
              )}
            </SignedIn>
            <SignedOut>
              <Button
                asChild
                size="sm"
                className="flex items-center gap-2 rounded-full bg-yellow-400 hover:bg-yellow-600 text-primary-900"
              >
                <Link href="/profile">
                  <UserPlus className="w-4 h-4" />
                  Join Us
                </Link>
              </Button>
            </SignedOut>
          </div>
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
