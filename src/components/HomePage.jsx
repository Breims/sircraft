"use client";

import { useState } from "react";
import Image from "next/image";
import matero from "/public/assets/images/cover-materos.webp";
import whatsapp from "/public/assets/logos/whatsapp.svg";
import correo from "/public/assets/icons/correo.svg";

const animation =
  "animate-fade-right animate-once animate-duration-500 animate-delay-300 animate-ease-linear animate-normal animate-fill-backwards";

const HomePage = () => {
  const [openWhatsapp, setOpenWhatsapp] = useState("+573006045248");

  function toggleWhatsapp() {
    const url = `https://wa.me/${openWhatsapp}`;
    window.open(url, "_blank");
  }
  return (
    <header id="home" className="xl:relative xl:h-screen xl:mt-0 mt-28">
      <figure className="hidden xl:block w-full">
        <Image
          className="h-screen w-full object-cover"
          src={matero}
          alt="cover"
        />
      </figure>
      
      <section className="xl:absolute xl:top-0 xl:w-[55%] h-full px-8 xl:px-12 xl:rounded-ee-full bg-white">
        <div
          className={`h-full w-full lg:w-[32rem] grid place-content-center ${animation}`}
        >
          <div className="text-center lg:text-justify font-HelveticaBold tracking-wide text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500 uppercase grid place-content-center">
            <p className="text-[3.9rem] md:text-[7.1rem] xl:text-[6.3rem]">Creando</p>
            <span className="text-[3.8rem] md:text-[6.75rem] xl:text-[6rem]">Historias</span>
          </div>
          <p className="m-auto text-[0.9rem] md:text-3xl xl:text-[2.3rem] tracking-widest font-HelveticaRegular text-slate-600 uppercase">
             con nuestras manos!
          </p>
          <div className="mt-2 w h-1 bg-gradient-to-br from-purple-600 to-blue-500"></div>
          <div className="grid md:grid-flow-col place-items-start md:place-items-center place-content-start md:gap-10 mt-10">
            <button
              className="flex items-center text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-Titillium font-semibold rounded-md text-xs md:text-sm px-5 py-3 text-center mb-3 md:mb-0"
              onClick={toggleWhatsapp}
            >
              <Image className="w-6 mr-2" src={whatsapp} alt="whatsapp" />
              WhatsApp
            </button>
            <div>
              <span className="flex gap-2 items-center font-Titillium text-sm md:text-base text-black mb-2 md:mb-1">
                <Image className="w-6 md:text-base" src={correo} alt="gmail" />
                sircraft.desing@gmail.com
              </span>
              <span className="font-Titillium font-bold text-black">
                Escribenos!
              </span>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default HomePage;
