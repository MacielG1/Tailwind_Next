import { DiAptana } from "react-icons/di";

export default function MoreInfo() {
  return (
    <section className=" bg-gradient-to-b from-neutral-900 to-sky-700 px-4 py-8 text-white sm:py-16">
      <div className="max-w-md px-4  sm:max-w-[38rem] sm:grid-cols-2 lg:max-w-[82rem] ">
        <h1 className="flex items-center gap-2 px-8 text-[1.8rem] tracking-tight">
          <span>Mantenha-se Atualizado </span>
          <span>
            <DiAptana className="animate-spin-slow" />
          </span>
        </h1>
        <div className=" mx-auto grid grid-cols-1 flex-col justify-center py-14 sm:grid-cols-2 sm:py-24  "></div>
      </div>
      <p>lorem</p>
    </section>
  );
}
