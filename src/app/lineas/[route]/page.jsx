import Image from "next/image";
import dataLines from "@/app/lineas/[route]/Lines.js";
import comillaS from "@public/assets/icons/comillasSup.svg";
import comillaD from "@public/assets/icons/comillasDown.svg";
import Carrusel from "@/components/ui/Carrusel";

export const metadata = {
  title: "SirCraft Lineas",
  description: "Lineas de producción SirCraft",
};

const Lines = ({ params }) => {
  const data = dataLines.find(
    (routes) => routes.route === `lineas/${params.route}`
  );

  return (
    <section key={data.id}>
      <header>
        <section className="relative mt-12 md:mt-0">
          <Carrusel />

          <div className="absolute h-full w-full top-0 bg-black opacity-70">
            <div className="h-full grid place-content-center animate-fade-down animate-once animate-duration-500 animate-delay-300">
              <div className="text-center grid place-content-center">
                <p className="text-[1.4rem] md:text-[3.5rem] lg:text-[4rem] 2xl:text-[5.5rem] font-bold text-transparent bg-clip-text bg-gradient-to-l from-pink-500 via-sky-500 to-purple-800 tracking-wide">
                  CREANDO HISTORIAS
                </p>
                <p className="text-[1.2rem] md:text-[2.9rem] lg:text-[3.4rem] 2xl:text-[4.6rem] tracking-widest font-thin text-slate-50">
                  ¡CON NUESTRAS MANOS!
                </p>
              </div>
              <div className="mt-2 h-0.5 bg-slate-50"></div>
              <p className="text-white font-bold text-xl md:text-5xl lg:text-[3.7rem] xl:text-[5rem] ">
                {data.title}
              </p>
            </div>
          </div>
        </section>
      </header>

      <section className="bg-slate-100 grid grid-flow-col place-content-start place-items-center py-8 gap-6 px-8 xl:px-12">
        <div className="w-10 md:w-20 h-10 md:h-20 m-auto rounded-full bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl"></div>
        <div className="w-10 md:w-20 h-10 md:h-20 m-auto rounded-full bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl"></div>
        <div className="w-10 md:w-20 h-10 md:h-20 m-auto rounded-full bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl"></div>
      </section>

      <main>
        <section className="bg-slate-100 flex flex-col lg:flex-row px-8 xl:px-12 py-6 gap-10">
          <div className="flex flex-col lg:flex-row lg:w-[60%] xl:w-[65%]">
            <Image
              className="mr-auto py-2 lg:py-0 lg:mb-auto w-8 xl:w-16"
              src={comillaS}
              width={70}
              height={70}
              alt="mugs1"
            />
            <div className="flex flex-col justify-center text-xs md:text-xl lg:text-sm xl:text-xl lg:p-4 xl:p-10">
              <p className="pb-4">{data.paragraph1}</p>
              <p className="pb-4">{data.paragraph2}</p>
              <p>{data.paragraph3}</p>
            </div>
            <Image
              className="ml-auto py-2 lg:py-0 lg:mt-auto w-8 xl:w-16"
              src={comillaD}
              width={70}
              height={70}
              alt="mugs1"
            />
          </div>
          <div className="lg:w-[40%] xl:w-[35%]">
            <Image
              className="h-full w-screen rounded-xl object-cover"
              src={data.img1}
              width={400}
              height={400}
              alt="mugs1"
            />
          </div>
        </section>

        <section className="grid grid-flow-col place-content-end place-items-center py-8 gap-6 px-8 xl:px-12">
          <div className="w-10 md:w-20 h-10 md:h-20 m-auto rounded-full bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl"></div>
          <div className="w-10 md:w-20 h-10 md:h-20 m-auto rounded-full bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl"></div>
          <div className="w-10 md:w-20 h-10 md:h-20 m-auto rounded-full bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl"></div>
        </section>

        <section className="flex flex-col lg:flex-row px-8 xl:px-12 py-6 gap-10">
          <div className="lg:w-[40%] xl:w-[35%] order-2">
            <Image
              className="h-full w-screen rounded-xl object-cover"
              src={data.img2}
              width="400"
              height="400"
              alt="mugs2"
            />
          </div>
          <div className="flex flex-col lg:flex-row lg:w-[60%] xl:w-[65%] lg:order-2">
            <Image
              className="mr-auto py-2 lg:py-0 lg:mb-auto w-8 xl:w-16"
              src={comillaS}
              width={70}
              height={70}
              alt="mugs1"
            />
            <div className="flex flex-col justify-center text-xs md:text-xl lg:text-sm xl:text-xl lg:p-4 xl:p-10">
              <p className="pb-4">{data.paragraph4}</p>
              <p className="pb-4">{data.paragraph5}</p>
              <p>{data.paragraph6}</p>
            </div>
            <Image
              className="ml-auto py-2 lg:py-0 lg:mt-auto w-8 xl:w-16"
              src={comillaD}
              width={70}
              height={70}
              alt="mugs1"
            />
          </div>
        </section>
      </main>
    </section>
  );
};

export default Lines;
