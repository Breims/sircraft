import Carrusel from "@/components/ui/Carrusel.jsx";
import Image from "next/image";
import { allServicios } from "./servicios.js";
import MenuFlotante from "@/components/ui/MenuFlotante.jsx";

const Servicios = () => {
  return (
    <>
      <header className="relative z-10 mt-14 md:mt-0">
        <figure>
          <Carrusel />
        </figure>

        <div className="absolute h-full w-full top-0 bg-slate-950 bg-opacity-70">
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
            <p className="text-white text-center font-bold text-3xl md:text-5xl lg:text-[7rem]">
              ¡SERVICIOS!
            </p>
          </div>
        </div>
      </header>

      <main className="grid lg:grid-cols-4">
        <section className="hidden lg:block col-span-1 text-slate-800">
          <MenuFlotante />
        </section>
        <section className="lg:col-span-3 p-8 lg:px-10 text-slate-800">
          {allServicios.map((servicio, index) => (
            <div
              className="flex flex-col p-4 lg:p-10 mt-10 shadow-lg bg-slate-50 rounded-xl"
              key={index}
            >
              <Image
                className="rounded-xl lg:w-full lg:h-96 object-cover"
                src={servicio.img}
                width={600}
                height={600}
                alt="servicio de craciones personalizadas SirCraft"
              />
              <div className="grid lg:py-10">
                <h1 className="text-xl lg:text-5xl px-2 py-4 uppercase font-bold">
                  {servicio.title}
                </h1>
                <p className="text-sm px-2 py-2">{servicio.description}</p>
                <button className="grid place-content-center w-40 border border-pink-500 mx-2 my-4 rounded-md text-slate-800 hover:bg-pink-600 hover:text-slate-50">
                  <span className="text-sm uppercase p-2">
                    {servicio.button}
                  </span>
                </button>
              </div>
            </div>
          ))}
        </section>
      </main>
    </>
  );
};

export default Servicios;
