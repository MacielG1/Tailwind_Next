import "./globals.css";
import { Open_Sans } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const font = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Tailwind & Next.js",
  description: "Website built with Tailwind & Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${font.className} flex min-h-screen flex-col `}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
