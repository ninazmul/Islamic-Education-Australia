import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import { Separator } from "../ui/separator";
import NavItems from "./NavItems";
import { Menu } from "lucide-react";
import Link from "next/link";

const MobileNav = () => {
  return (
    <nav className="lg:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
          <Menu />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 bg-white lg:hidden w-11/12">
          <Link href={"/"} className="flex items-center gap-2">
            <Image
              src="/assets/images/logo.png"
              alt="logo"
              width={30}
              height={30}
            />
            <h1 className="text-2xl md:text-3xl font-serif font-bold">
              One Soul Muslim
            </h1>
          </Link>
          <Separator className="border border-green-300" />
          <NavItems />
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
