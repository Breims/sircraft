"use client"

import { Link } from "react-scroll";
import { useState } from "react"
import Image from "next/image";
import sircraft from "@public/assets/logos/sircraft.png";
import hamburguesa from "@public/assets/icons/hamburguesa.svg";
import coffee from "@public/assets/icons/coffee.svg";
import coffeeLight from "@public/assets/icons/coffeeLight.svg";

const landingStyle =
"lg:mx-4 lg:p-3 p-6 mx-6 font-HelveticaRegular uppercase hover:underline hover:font-HelveticaBold decoration-2 cursor-pointer";
const navMobileStyle = "backdrop-blur-md lg:backdrop-blur-none bg-white lg:bg-transparent bg-opacity-70 lg:bg-opacity-100 shadow-md lg:shadow-none";

export const NavbarLanding = () => {
 
  const [openMenu, setOpenMenu] = useState("hidden");

  const toggleMenu = () => {
    setOpenMenu((prevState) => (prevState === "" ? "hidden" : ""));
  }; 
 
  return (
    <nav className="lg:flex fixed top-0 z-10 w-full backdrop-blur-md lg:bg-white lg:bg-opacity-90 shadow-lg">
      <section className={`${navMobileStyle} py-4 px-8 lg:py-0 flex justify-between items-center w-full lg:w-auto lg:ml-8`}>
        <Image
        className="w-14 lg:w-20" 
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
      <ul className={`${openMenu} ${navMobileStyle} grid lg:flex lg:sticky w-full  lg:justify-center lg:divide-transparent lg:my-4 divide-y divide-purple-900`}>
        <Link to="home" smooth={true} duration={500} className={landingStyle} onClick={() => toggleMenu()} >Inicio</Link>
        <Link to="aboutus" smooth={true} duration={500} className={landingStyle} onClick={() => toggleMenu()} >Sobre Nosotros</Link>
        <Link to="lines" smooth={true} duration={500} className={landingStyle} onClick={() => toggleMenu()} >Lineas</Link>
        <Link to="" smooth={true} duration={500} className={landingStyle} onClick={() => toggleMenu()} >Catalogo</Link>
        <Link to="" smooth={true} duration={500} className={landingStyle} onClick={() => toggleMenu()} >Servicios</Link>
        <Link to="contactus" smooth={true} duration={500} className={`flex lg:hidden items-center gap-2 ${landingStyle}`} onClick={() => toggleMenu()} >
          Contactanos
          <Image 
            src={coffeeLight}
            width={25}
            height={25}
            alt="coffee"
          />
          </Link>
      </ul>
      <Link 
      to="contactus"
      smooth={true} duration={500}
      className="hidden lg:flex items-center justify-center text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-HelveticaBold rounded-md px-10 mx-16 my-4 lg:gap-2">
        Contactanos
        <Image 
         src={coffee}
         width={25}
         height={25}
         alt="coffee"
        />
      </Link>
    </nav>
  );
};
