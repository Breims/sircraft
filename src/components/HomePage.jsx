"use client";

import { useState } from "react";
import Image from "next/image";
import matero from "/public/assets/images/matero.jpg";
import whatsapp from "/public/assets/logos/whatsapp.svg";
import correo from "/public/assets/icons/correo.svg";
import Decoration from "./ui/Decoration";

const animation =
  "animate-fade-right animate-once animate-duration-500 animate-delay-300 animate-ease-linear animate-normal animate-fill-backwards";

const HomePage = () => {
  const [openWhatsapp, setOpenWhatsapp] = useState("+573006045248");

  function toggleWhatsapp() {
    const url = `https://wa.me/${openWhatsapp}`;
    window.open(url, "_blank");
  }
  return (
    <header className="lg:relative lg:h-screen lg:mt-0 mt-36">

      <figure className="hidden lg:block w-full">
        <Image className="object-fill ml-auto" src={matero} alt="cover" />
        <section className="mt-6">
          <Decoration />
        </section>
      </figure>

      <section className="h-full lg:absolute lg:top-0 lg:w-1/2 px-8 md:px-16 lg:rounded-ee-full bg-white">
        
        <div className={`h-full flex flex-col justify-center ${animation}`}>
          <p className="text-7xl md:text-9xl mb-2 font-HelveticaBold tracking-wide text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500">
          SirCraft
        </p>
        <p className="md:text-lg font-HelveticaRegular text-black">
          Creando historias con nuestras manos!
        </p>
        <div className="mt-2 w-5/6 h-1 bg-gradient-to-br from-purple-600 to-blue-500"></div>
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
              <Image
                className="w-6 md:text-base"
                src={correo}
                alt="gmail"
              />
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
