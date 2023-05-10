export default function Footer() {
  let currentYear = new Date().getFullYear();
  let logo = (
    <svg
      className="block h-8 w-auto cursor-pointer "
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 15 15"
    >
      {/* prettier-ignore */}
      <rect x="0.5" y="2.5" width="14" height="10" rx="1" fill="none" stroke="#fff"/>
      <line x1="4" y1="14.5" x2="11" y2="14.5" stroke="#fff" />
      <line x1="7.5" y1="12" x2="7.5" y2="14.5" stroke="#fff" />
    </svg>
  );

  return (
    <>
      <div className=" bg-gradient-to-b  from-indigo-950 to-[#18163b] pt-16">
        <div className="border-t border-neutral-300 "></div>
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
          <div className="flex flex-col items-center justify-center gap-6 text-gray-300">
            <div className="flex items-center gap-2 font-semibold">
              {logo} Website
            </div>
            <p className="text-neutral-300">
              © {currentYear} MacielG1. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
