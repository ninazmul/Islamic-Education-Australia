import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import ScrollHeaderWrapper from "@/components/shared/ScrollHeaderWrapper";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col">
      <ScrollHeaderWrapper>
        <Header />
      </ScrollHeaderWrapper>
      <main className="flex-1 pt-36">{children}</main>
      <Footer />
    </div>
  );
}
