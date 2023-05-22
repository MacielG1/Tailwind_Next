"use client";
import { useParams } from "next/navigation";
import Link from "next/link";

// Custom Link component that adds the language prefix to the href
export default function LinkCustom({ children, href, ...props }) {
  let { lang } = useParams();

  const newURL = href.startsWith("http") ? href : `/${lang}/${href}`;
  return (
    <Link href={newURL} {...props}>
      {children}
    </Link>
  );
}
