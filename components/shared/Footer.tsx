import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className=" bg-gradient-to-r from-primary-900 to-primary-500 text-white dark:text-green-200 py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div>
            <Link href="/" className="flex items-center">
              <Image
                src={"/assets/images/logo.png"}
                width={100}
                height={100}
                alt="OneSoul Logo"
                className=""
                priority
              />
              <h1 className="text-2xl lg:text-4xl font-serif font-bold">
                One Soul Muslim Community Inc.
              </h1>
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {/* Organization Links */}
            <div>
              <h4 className="font-semibold mb-4 text-lg">Organization</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/events" className="hover:underline">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:underline">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Follow Us Links */}
            <div>
              <h4 className="font-semibold mb-4 text-lg">Follow us</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="https://www.facebook.com/OneSoul.bd"
                    target="_blank"
                    className="hover:underline flex items-center gap-2"
                  >
                    <Facebook className="h-4 w-4" />
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.instagram.com/oneSoul_bd"
                    target="_blank"
                    className="hover:underline flex items-center gap-2"
                  >
                    <Instagram className="h-4 w-4" />
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://x.com/OneSoul_BD"
                    target="_blank"
                    className="hover:underline flex items-center gap-2"
                  >
                    <Twitter className="h-4 w-4" />X
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="font-semibold mb-4 text-lg">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacyPolicy" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/termsAndConditions" className="hover:underline">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-t border-green-300" />
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-2 w-full">
          <p className="text-sm">
            Copyright © 2025 - All rights reserved by{" "}
            <Link href="/" className="hover:underline">
              One Soul Muslim Community Incorporation
            </Link>
          </p>
          <p className="text-sm flex items-center gap-2">
            Developed by{" "}
            <Link
              href="https://ninazmuldev.vercel.app"
              target="_blank"
              className="underline hover:text-green-300"
            >
              ArtistyCode Studio
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
