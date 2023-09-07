import Carrusel from "@/components/ui/Carrusel.jsx";
import Image from "next/image";
import { allServicios } from "./servicios.js";
import MenuFlotante from "@/components/ui/MenuFlotante.jsx";
import Button from "@/components/ui/Button.jsx";
import NavbarServicios from "@/components/shared/NavbarServicios.jsx";


const Servicios = () => {
  return (
    <>
      <header className="relative z-10 mt-20 md:mt-0">
        <NavbarServicios />
        <figure>
          <Carrusel />
        </figure>
        <div className="absolute h-full w-full top-0 bg-black opacity-70">
          <p className="h-full grid place-content-center place-items-center text-white font-HelveticaBold text-3xl md:text-5xl lg:text-[7rem] animate-fade-down animate-once animate-duration-500 animate-delay-300">
            ¡SERVICIOS!
          </p>
        </div>
      </header>

      <main className="grid lg:grid-cols-4">
        <section className="hidden lg:block col-span-1">
          <MenuFlotante />
        </section>
        <section className="lg:col-span-3 p-8 lg:p-10">
          {allServicios.map((servicio, index) => (
            <div
              className="flex flex-col p-4 lg:p-10 mt-10 shadow-lg bg-white rounded-xl"
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
                <p className="text-sm lg:text-lg px-2 py-4">{servicio.description}</p>
              </div>
              <Button titulo={servicio.title}/>
            </div>
          ))}
        </section>
      </main>
    </>
  );
};

export default Servicios;
