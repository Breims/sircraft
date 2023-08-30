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
      <section className="h-full xl:absolute xl:top-0 xl:w-1/2 px-8 xl:px-12 lg:rounded-ee-full bg-white">
        <div
          className={`h-full w-[16.5rem] md:w-[30rem] 2xl:w-[34rem] flex flex-col justify-center ${animation}`}
        >
          <p className="text-[4.4rem] md:text-9xl 2xl:text-[9rem] mb-2 font-HelveticaBold tracking-wide text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500">
            SirCraft
          </p>
          <p className="text-[0.9rem] md:text-lg font-HelveticaRegular text-black">
            Creando historias con nuestras manos!
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
