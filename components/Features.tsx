import Image from 'next/image';
import nextIcon from '../public/images/next.png';
import tailwindIcon from '../public/images/tailwind.png';
import reactIcon from '../public/images/react.png';
import { Dictionary } from '@/utils/getDictionary';

export default function Features({ dictionary }: { dictionary: Dictionary }) {
  let items = [
    {
      title: 'Next.js',
      description: dictionary.Features.nextDescription,
      src: nextIcon,
    },
    {
      title: 'Tailwind CSS',
      description: dictionary.Features.TailwindDescription,
      src: tailwindIcon,
    },
    {
      title: 'React',
      description: dictionary.Features.reactDescription,
      src: reactIcon,
    },
  ];

  return (
    <section className=" bg-neutral-950 py-4 sm:px-4 sm:py-14 sm:pb-28">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-[38rem]  lg:max-w-[82rem] ">
        <h2 className="text-[3rem] font-semibold tracking-wide text-zinc-300">{dictionary.Features.h2}</h2>
        <p className="mt-3 text-lg font-semibold text-gray-400 sm:text-[1.5rem]">{dictionary.Features.P}</p>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:gap-10 lg:grid-cols-3 ">
          {items.map((i) => (
            <div
              key={i.title}
              className="flex flex-col rounded-3xl border border-white bg-neutral-950 p-12 shadow-sm transition duration-300 hover:border-gray-400 hover:bg-neutral-900"
            >
              <div>
                <span className="inline-flex items-center justify-center rounded-md bg-zinc-300/10 p-3 shadow-lg">
                  <Image src={i.src} alt={i.title} width={50} height={50} />
                </span>
              </div>
              <h3 className="mt-8 text-[1.5rem] font-medium tracking-tight text-gray-200 sm:text-[1.8rem]">{i.title}</h3>
              <p className=" mt-6 text-gray-400">{i.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
