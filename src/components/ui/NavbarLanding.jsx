"use client"

import { useState } from "react"
import Image from "next/image";
import sircraft from "@public/assets/logos/SirCraft-2.png";
import hamburguesa from "@public/assets/icons/hamburguesa.svg";
import coffee from "@public/assets/icons/coffee.svg";
import coffeeLight from "@public/assets/icons/coffeeLight.svg";

const landingStyle =
"lg:mx-4 lg:p-3 p-6 mx-6 font-HelveticaRegular uppercase hover:underline hover:font-HelveticaBold decoration-2 cursor-pointer";

export const NavbarLanding = () => {
 
  const [openMenu, setOpenMenu] = useState("hidden");

  const toggleMenu = () => {
    setOpenMenu((prevState) => (prevState === "" ? "hidden" : ""));
  }; 
 
  return (
    <nav className="lg:flex fixed top-0 z-10 w-full backdrop-blur-md lg:bg-white lg:bg-opacity-90 shadow-lg">
      <section className="py-4 px-8 lg:py-0 flex justify-between items-center w-full lg:w-auto backdrop-blur-md lg:backdrop-blur-none bg-white lg:bg-transparent bg-opacity-70 lg:bg-opacity-100 shadow-md lg:shadow-none">
        <Image 
         src={sircraft}
         width={70}
         height={70}
         alt="SirCraft"
        />
        <Image
          className="lg:hidden block"
          onClick={() => toggleMenu()} 
          src={hamburguesa}
          width={40}
          height={40}
          alt="hamburguesa"
          />
      </section>
      <ul className={`${openMenu} grid lg:flex lg:sticky w-full  lg:justify-center lg:divide-transparent my-4 divide-y divide-purple-900`}>
        <li className={landingStyle} onClick={() => toggleMenu()} >Inicio</li>
        <li className={landingStyle} onClick={() => toggleMenu()} >Sobre Nosotros</li>
        <li className={landingStyle} onClick={() => toggleMenu()} >Lineas</li>
        <li className={landingStyle} onClick={() => toggleMenu()} >Catalogo</li>
        <li className={landingStyle} onClick={() => toggleMenu()} >Servicios</li>
        <li className={`flex lg:hidden items-center gap-2 ${landingStyle}`} onClick={() => toggleMenu()} >
          Contactanos
          <Image 
            src={coffeeLight}
            width={25}
            height={25}
            alt="coffee"
          />
          </li>
      </ul>
      <button className="hidden lg:flex items-center justify-center text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-HelveticaBold rounded-md px-10 mx-8 my-4 lg:gap-2">
        Contactanos
        <Image 
         src={coffee}
         width={25}
         height={25}
         alt="coffee"
        />
      </button>
    </nav>
  );
};
