import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12 border-t border-gray-200">
      <div className="max-w-5xl mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo */}
          <div>
            <Link href="/">
              <Image
                src="/assets/images/logo.png"
                width={200}
                height={200}
                alt="IEA Logo"
                priority
                className="mx-auto lg:mx-0"
              />
            </Link>
          </div>

          {/* About Section */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-gray-800">
              About Muslim College Sydney
            </h4>
            <p className="text-gray-600">
              Muslim College Sydney fosters academic excellence and Islamic
              values, shaping confident Australian Muslims.
            </p>
          </div>

          {/* Projects Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-gray-800">
              Projects
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="https://www.facebook.com/OneSoul.bd"
                  target="_blank"
                  className="text-gray-600 hover:text-green-600 transition-colors flex items-center"
                >
                  School
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/oneSoul_bd"
                  target="_blank"
                  className="text-gray-600 hover:text-green-600 transition-colors flex items-center"
                >
                  Muslim Community Center (including Mosque)
                </Link>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-gray-800">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-green-600 transition-colors flex items-center"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-green-600 transition-colors flex items-center"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-green-600 transition-colors flex items-center"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-300" />

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between text-center lg:text-left gap-4">
          <p className="text-sm text-gray-500">
            &copy; 2025 Islamic Education Australia Ltd. All rights reserved.{" "}
            <Link href="/" className="text-green-600 hover:underline">
              Learn More
            </Link>
          </p>
          <p className="text-sm text-gray-500">
            Developed by{" "}
            <Link
              href="https://ninazmuldev.vercel.app"
              target="_blank"
              className="text-green-600 hover:underline"
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
