import { NextResponse } from 'next/server';
import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

export const languageSupported = ['en', 'pt']; // supported languages

function getUserLocation(request) {
  let negotiator = new Negotiator(request);

  let userLangs = negotiator.languages(languageSupported);

  return match(userLangs, languageSupported, 'en'); // matches the user languages with the supported languages and if none are matched, use en-US
}

export function middleware(request) {
  const pathname = request.nextUrl.pathname;

  const pathnameIsMissingLocale = languageSupported.every((lang) => !pathname.startsWith(`/${lang}/`) && pathname !== `/${lang}`);

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getUserLocation(request);

    // change the url to include the locale
    return NextResponse.redirect(new URL(`/${locale}/${pathname}`, request.url));
  }
}

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
