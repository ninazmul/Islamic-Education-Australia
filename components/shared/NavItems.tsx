"use client";

import { headerLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemsProps {
  onItemSelected?: () => void;
}

const NavItems = ({ onItemSelected }: NavItemsProps) => {
  const pathname = usePathname();

  return (
    <ul className="lg:flex-between flex w-full flex-col items-start gap-5 lg:flex-row font-serif">
      {headerLinks.map((link) => {
        const isActive = pathname === link.route;

        return (
          <li
            key={link.route}
            className={`${
              isActive && "lg:text-primary-900 border-b border-black lg:border-primary-900"
            } flex-center p-medium-16 whitespace-nowrap`}
          >
            <Link href={link.route} onClick={onItemSelected}>
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;
