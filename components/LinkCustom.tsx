'use client';
import { useParams } from 'next/navigation';
import Link from 'next/link';

// Custom Link component that adds the language prefix to the href

type LinkCustomProps = {
  children: React.ReactNode;
  href: string;
  className: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  target?: '_blank' | '_self' | '_parent' | '_top' | '';
};

export default function LinkCustom({ children, href, className, target, ...props }: LinkCustomProps) {
  let { lang } = useParams();

  const newURL = href.startsWith('http') ? href : `/${lang}/${href}`;
  return (
    <Link href={newURL} {...props} className={className} target={target}>
      {children}
    </Link>
  );
}
