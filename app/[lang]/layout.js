import "./globals.css";
import { Open_Sans } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { languageSupported } from "../../middleware";

const font = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Tailwind & Next.js",
  description: "Website built with Tailwind & Next.js",
};

export async function generateStaticParams() {
  // This function is called during build time instead of when the page is requested
  return languageSupported.map((lang) => ({ params: { lang } }));
}

export default function RootLayout({ children, params }) {
  let lang = params.lang;
  return (
    <html lang={lang}>
      <body className={`${font.className} `}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
