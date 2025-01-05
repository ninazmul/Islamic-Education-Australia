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
    <header className="w-full border-b text-white bg-gradient-to-r from-primary-900 to-primary-500">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/images/logo.png"
            width={30}
            height={30}
            alt="One Soul Muslim logo"
          />{" "}
          <h1 className="text-lg md:text-3xl font-serif font-bold">
            One Soul Muslim Community Inc.
          </h1>
        </Link>
        <Donation />
      </div>

      <hr className=" border-t border-green-300" />

      <div className="wrapper flex items-center justify-between">
        <div>
          <nav className="lg:flex-between hidden w-full max-w-xs">
            <NavItems />
          </nav>
          <MobileNav />
        </div>

        <div className="flex items-center gap-x-2">
          <div className="flex items-center gap-3">
            <SignedIn>
              {adminStatus && (
                <Button
                  asChild
                  variant={"outline"}
                  size={"sm"}
                  className="rounded-full"
                >
                  <Link href="/dashboard">
                    <Shield />
                    Admin
                  </Link>
                </Button>
              )}
              <UserButton afterSwitchSessionUrl="/" />
            </SignedIn>
            <SignedOut>
              <Button asChild variant={"outline"} className="rounded-full">
                <Link href="/sign-in">
                  <LogIn />
                  <span className="">Login</span>
                </Link>
              </Button>
            </SignedOut>
          </div>
        </div>
      </div>
    </header>
  );
}
