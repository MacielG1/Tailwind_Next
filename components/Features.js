import Image from "next/image";

let items = [
  {
    title: "Next.js",
    description:
      "Next.js é um framework de React que facilita a criação de aplicações Web, com suporte a SSR e SSG que melhoram a performance do site.",
    src: "/images/next.png",
  },
  {
    title: "Tailwind CSS",
    description:
      "Tailwind CSS é um framework CSS que é usado para criar estilização de sites, aprimorando a aparência e a responsividade.",
    src: "/images/tailwind.png",
  },
  {
    title: "React",
    description:
      "React é uma library de JavaScript usada para criar componentes de UI, que podem ser reutilizados em diferentes partes do site.",
    src: "/images/react.png",
  },
];

export default function Features() {
  return (
    <section className=" bg-neutral-950 py-4 sm:px-4 sm:py-14 sm:pb-28">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-[38rem]  lg:max-w-[82rem] ">
        <h3 className="text-[3rem] font-semibold tracking-wide text-zinc-300">
          Tecnologias
        </h3>
        <p className="mt-3 text-lg font-semibold text-zinc-500 sm:text-[1.5rem]">
          Descrição das tecnologias utilizadas
        </p>

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
              <h3 className="mt-8 text-[1.5rem] font-medium tracking-tight text-gray-200 sm:text-[1.8rem]">
                {i.title}
              </h3>
              <p className=" mt-6 text-gray-400">{i.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
