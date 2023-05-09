import "./globals.css";

import { Open_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
const font = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Tailwind & Next.js",
  description: "Website built with Tailwind & Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-white dark:bg-black `}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
