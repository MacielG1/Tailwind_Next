import Image from 'next/image';

import sky2 from '../public/images/sky2.webp';
import { Dictionary } from '@/utils/getDictionary';

export default function MainSection({ dictionary }: { dictionary: Dictionary }) {
  return (
    <div className="relative -mt-1 flex h-[calc(100vh-11rem)] min-h-[22rem] flex-col items-center justify-center overflow-hidden  bg-black   ">
      <Image src={sky2} alt="background image" placeholder="blur" fill className=" object-cover opacity-30" priority />
      {/* Makes a gradient transition from the img to the next div */}
      <div className="absolute bottom-0 h-48 w-full bg-gradient-to-t from-neutral-950 to-transparent"></div>

      <div className="z-10 mx-auto rounded-lg px-4 py-2 text-center ">
        <h1 className="text-[2.3rem] font-bold tracking-tight  sm:text-[3rem] md:text-[4.2rem]">
          <span className="px-2 font-light text-zinc-100">
            {/* <div className="text-2xl font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient">
              {dictionary.MainSection.h1.span1}
            </div> */}
          </span>
          <span className=" px-2 text-indigo-600 ">
            <div className={'font-bold bg-gradient-to-r from-indigo-700 to-blue-500 to-danger bg-clip-text text-transparent'}>{dictionary.MainSection.h1.span2}</div>
          </span>
        </h1>
        <p className="mx-auto mt-3 max-w-md  text-gray-400 sm:text-lg md:mt-5 md:max-w-[50rem] md:text-xl">{dictionary.MainSection.P}</p>
        <div className="mx-auto mt-5 max-w-xs sm:flex sm:justify-center md:mt-8">
          <div className="rounded-md shadow">
            <a
              href="https://github.com/MacielG1/Tailwind_Next"
              target="_blank"
              className="mb-2 mr-2 flex w-full items-center justify-center rounded-xl border border-indigo-800 bg-indigo-900  px-4 py-2 text-center text-base font-semibold tracking-wide text-gray-300 transition duration-300 hover:border-indigo-950 hover:bg-indigo-800 hover:text-gray-100 md:px-10 md:py-4 md:text-xl"
            >
              Source
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
