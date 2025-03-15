import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Islamic Education Australia | Shaping Future Leaders",
  description:
    "Islamic Education Australia is dedicated to nurturing a generation of knowledgeable, compassionate, and ethically grounded individuals who embody the values of Islam in their daily lives.",
  keywords: [
    "Islamic Education",
    "Islamic Learning",
    "Islamic Schools Australia",
    "Muslim Community",
    "Quran Classes",
    "Islamic Studies",
  ],
  icons: {
    icon: "/assets/images/favicon.ico",
    shortcut: "/assets/images/favicon.ico",
    apple: "/assets/images/logo.png",
  },
  alternates: {
    canonical: "https://www.islamicedu.com.au",
  },
  openGraph: {
    title: "Islamic Education Australia | Shaping Future Leaders",
    description:
      "Join Islamic Education Australia in fostering ethical and knowledgeable individuals through comprehensive Islamic education.",
    url: "https://www.islamicedu.com.au",
    siteName: "Islamic Education Australia",
    images: [
      {
        url: "https://www.islamicedu.com.au/assets/images/Islamic Education Australia.jpg",
        width: 1200,
        height: 630,
        alt: "Islamic Education Australia",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Islamic Education Australia | Shaping Future Leaders",
    description:
      "Islamic Education Australia is committed to shaping a knowledgeable and ethically grounded Muslim community through education.",
    images: [
      "/assets/images/Islamic Education Australia.jpg",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={poppins.variable}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
