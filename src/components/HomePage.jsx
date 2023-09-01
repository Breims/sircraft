"use client";

import Image from "next/image";
import matero from "/public/assets/images/cover-materos.webp";
import whatsapp from "/public/assets/logos/whatsapp.svg";
import correo from "/public/assets/icons/correo.svg";

const animation =
  "animate-fade-right animate-once animate-duration-500 animate-delay-300 animate-ease-linear animate-normal animate-fill-backwards";

const HomePage = () => {
  const openWhatsapp = () => {
    const url = `https://wa.me/+573006045248`;
    window.open(url, "_blank");
  };

  return (
    <header id="home" className="xl:relative h-screen md:mt-0">
      <figure className="hidden xl:block w-full">
        <Image
          className="h-screen w-full object-cover"
          src={matero}
          alt="cover"
        />
      </figure>

      <section className="xl:absolute xl:top-0 xl:w-[50%] 2xl:w-[45%] h-full px-8 xl:px-12 xl:rounded-ee-full bg-white">
        <div
          className={`h-full w-full xl:w-[32rem] grid place-content-center ${animation}`}
        >
          <div className="text-center text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500 grid place-content-center">
            <p className="text-[1.8rem] md:text-[4rem] lg:text-[5.5rem] xl:text-[2.96rem] font-HelveticaBlack">
              CREANDO HISTORIAS
            </p>
            <p className="text-[1.45rem] md:text-[3.2rem] lg:text-[4.45rem] xl:text-[2.37rem] tracking-widest font-HelveticaRegular text-slate-600">
              ¡CON NUESTRAS MANOS!
            </p>
          </div>

          <div className="mt-2 w h-0.5 bg-gradient-to-br from-purple-600 to-blue-500"></div>

          <div className="flex items-center justify-center md:justify-start gap-4 md:gap-10 mt-10">
            <button
              className="flex items-center text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-Titillium font-semibold rounded-md text-xs md:text-sm px-3 md:px-5 py-3 text-center"
              onClick={openWhatsapp}
            >
              <Image className="w-6 mr-2" src={whatsapp} alt="whatsapp" />
              WhatsApp
            </button>
            <div>
              <span className="flex gap-1 items-center font-Titillium text-sm md:text-base text-black mb-1">
                <Image
                  className="w-4 md:w-5 md:text-base"
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
