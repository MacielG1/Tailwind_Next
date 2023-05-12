import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import brSVG from "../public/images/br.svg";
import usSVG from "../public/images/us.svg";

export default function LanguageSwitcher() {
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
      {
        <Link
          href={redirectedPathName(lang === "pt" ? "en" : "pt")}
          shallow={true}
          scroll={false}
        >
          <Image
            src={lang === "pt" ? usSVG : brSVG}
            alt={lang}
            width={18}
            height={18}
          />
        </Link>
      }
    </p>
  );
}
