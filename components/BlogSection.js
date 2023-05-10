import Image from "next/image";
import { SiChase } from "react-icons/si";

export default function BlogSection() {
  return (
    <section className="relative bg-gradient-to-b from-neutral-950 via-indigo-950 to-indigo-950  text-white  ">
      <div className="mx-auto max-w-md   px-6 py-8 sm:max-w-[38rem] sm:grid-cols-2 sm:py-16 sm:pt-24 lg:max-w-[82rem]">
        <h4 className=" flex flex-shrink gap-1  px-8 text-[1.8rem] tracking-tight">
          <SiChase
            className=" mx-1 mt-3 animate-spin-slow text-zinc-300"
            size={20}
          />
          <span className="">Mantenha-se Atualizado</span>
        </h4>
        <p className="mt-3 px-10 text-lg  text-gray-400 sm:text-[1.1rem]">
          Siga esses blogs oficiais para continuar acompanhando as novidades e
          atualizações dos frameworks
        </p>

        <div className=" mx-auto grid max-w-md grid-cols-1 justify-center gap-6 py-14 sm:max-w-[38rem] sm:py-24 md:px-6 lg:max-w-[82rem] lg:grid-cols-2  lg:px-10">
          <div className="flex flex-col items-center justify-center border-b border-gray-500 bg-transparent pb-10 lg:border-b-0 lg:border-r">
            <h5 className="-ml-2 flex w-full items-center justify-center gap-2  p-6 text-center  text-[1.85rem] tracking-wide">
              <Image
                src="/images/tailwind.png"
                width={50}
                height={50}
                style={{ filter: "grayscale(100%) brightness(150%)" }}
              />
              TAILWIND
            </h5>
            <p className="my-5 p-6 px-14 pl-20 text-left text-[1.2rem] text-gray-400 ">
              No blog oficial do Tailwind é encontrado as inovações e updates do
              framework, além de dicas e sujestões de como usar.
            </p>
            <a
              href="https://tailwindcss.com/blog"
              target="_blank"
              className="mb-2 mr-2 mt-2  flex w-40 items-center justify-center rounded-xl border border-blue-800 bg-transparent  px-5 py-2.5 text-center text-base font-semibold tracking-wide text-gray-300 transition duration-300 hover:border-blue-900 hover:bg-blue-900 hover:text-gray-100 md:px-10 md:py-4 md:text-xl"
            >
              <span>Checkar</span>
            </a>
          </div>
          <div className="flex flex-col items-center justify-center bg-transparent pb-10 ">
            <h5 className=" -ml-2 flex w-full items-center justify-center gap-2  p-6 text-center  text-[1.85rem] tracking-wide">
              <Image src="/images/next.png" width={50} height={50} />
              NEXT JS
            </h5>
            <p className="my-5 p-6 px-14 pl-20 text-left text-[1.2rem] text-gray-400 ">
              O Next JS blog é o lugar para se manter atualizado sobre as
              novidades do framework além de futuras updates e novas
              funcionalidades.
            </p>
            <a
              href="https://nextjs.org/blog"
              target="_blank"
              className="mb-2 mr-2 mt-2  flex w-40 items-center justify-center rounded-xl border border-blue-800 bg-transparent  px-5 py-2.5 text-center text-base font-semibold tracking-wide text-gray-300 transition duration-300 hover:border-blue-900 hover:bg-blue-900 hover:text-gray-100 md:px-10 md:py-4 md:text-xl"
            >
              <span>Checkar</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
