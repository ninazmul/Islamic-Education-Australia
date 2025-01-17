import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
// import ScrollHeaderWrapper from "@/components/shared/ScrollHeaderWrapper";
import { Toaster } from "react-hot-toast";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col">
      <Toaster />
      <div className="fixed w-full mx-auto z-[40]">
        <Header />
      </div>
      <main className="flex-1 pt-40">{children}</main>
      <Footer />
    </div>
  );
}
