import Image from "next/image";

export default function MainSection() {
  return (
    <div className="relative -mt-1 flex h-[calc(100vh-11rem)] min-h-[22rem] flex-col items-center justify-center overflow-hidden  bg-black   ">
      <Image
        src="/images/sky2.jpg"
        alt="background"
        fill
        sizes="(max-width: 768px) 66vw, (max-width: 1200px) 50vw, 33vw"
        style={{
          objectFit: "cover",
          opacity: 0.3,
        }}
        priority
        unoptimized
      />
      {/* Makes a gradient transition from the img to the next div */}
      <div className="absolute bottom-0 h-48 w-full bg-gradient-to-t from-neutral-950 to-transparent"></div>

      <div className="z-10 mx-auto rounded-lg px-4 py-2 text-center ">
        <h1 className="text-[2.3rem] font-bold tracking-tight  sm:text-[3rem] md:text-[4.2rem]">
          <span className="px-2 font-light text-zinc-100">
            Website criado com
          </span>
          <span className=" px-2  text-indigo-600  ">Next JS & Tailwind</span>
        </h1>
        <p className="mx-auto mt-3 max-w-md  text-gray-400 sm:text-lg md:mt-5 md:max-w-[50rem] md:text-xl">
          Esse site é um projeto pessoal criado com o objetivo de demonstrar o
          uso de Next.js e Tailwind CSS, que são duas das tecnologias mais
          usadas recentemente em Web Development.
        </p>
        <div className="mx-auto mt-5 max-w-xs sm:flex sm:justify-center md:mt-8">
          <div className="rounded-md shadow">
            <a
              href="#"
              className="mb-2 mr-2 flex w-full items-center justify-center rounded-xl border border-indigo-800 bg-indigo-900  px-5 py-2.5 text-center text-base font-semibold tracking-wide text-gray-300 transition duration-300 hover:border-indigo-950 hover:bg-indigo-800 hover:text-gray-100 md:px-10 md:py-4 md:text-xl"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
