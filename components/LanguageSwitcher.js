import { usePathname } from "next/navigation";

import Link from "next/link";
import Image from "next/image";
import brSVG from "../public/images/br.svg";
import ukSVG from "../public/images/uk.svg";

export default function LanguageSwitcher({ size }) {
  const pathname = usePathname();
  let lang = pathname.split("/")[1];

  function redirectedPathName(lang) {
    // function that adds the language to the path
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = lang;

    return segments.join("/");
  }

  return (
    <p>
      <Link
        href={redirectedPathName(lang === "pt" ? "en" : "pt")}
        shallow={true}
      >
        <Image
          src={lang === "pt" ? ukSVG : brSVG}
          alt={lang}
          style={{ height: size, width: size }}
        />
      </Link>
    </p>
  );
}
