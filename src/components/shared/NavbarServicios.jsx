"use client";

import Link from "next/link";
import { useState } from "react";

import Image from "next/image";
import sircraft from "@public/assets/logos/sircraft.webp";
import hamburguesa from "@public/assets/icons/hamburguesa.svg";
import coffee from "@public/assets/icons/coffee.svg";
import coffeeLight from "@public/assets/icons/coffeeLight.svg";

const NavbarServicios = () => {
  const [openMenu, setOpenMenu] = useState("hidden");

  const toggleMenu = () => {
    setOpenMenu((prevState) => (prevState === "" ? "hidden" : ""));
  };

  return (
    <nav className="fixed top-0 z-10 h-[80px] w-full xl:flex xl:justify-between xl:px-12 backdrop-blur-md bg-white bg-opacity-90 shadow-lg">
      <div
        className={`flex justify-between items-center h-full w-full xl:w-auto px-8 xl:px-0`}
      >
        <Link href="/" smooth={true} duration={500}>
          <figure className="flex items-center">
            <Image
              className="w-14"
              src={sircraft}
              width={70}
              height={70}
              alt="SirCraft"
            />
            <p className="text-3xl md:text-4xl font-HelveticaBold text-transparent bg-clip-text bg-gradient-to-l from-rose-400 via-fuchsia-500 to-indigo-500">
              SirCraft
            </p>
          </figure>
        </Link>
        <Image
          className="xl:hidden block w-10"
          onClick={() => toggleMenu()}
          src={hamburguesa}
          width={40}
          height={40}
          alt="hamburguesa"
        />
      </div>

      <ul
        className={`${openMenu} grid w-full xl:w-3/5 xl:flex xl:items-center xl:justify-center xl:sticky xl:divide-transparent divide-y divide-purple-900 uppercase font-HelveticaMedium xl:bg-transparent xl:backdrop-blur-none xl:shadow-none backdrop-blur-md bg-white bg-opacity-90 shadow-lg px-8`}
      > <Link
          href="/"
          smooth={true}
          duration={500}
          className="py-4 px-4 hover:underline hover:text-purple-700"
          onClick={() => toggleMenu()}
        >
         Inicio 
        </Link>
        <Link
          href="/catalogo"
          className="py-4 px-4 hover:underline hover:text-purple-700"
          onClick={() => toggleMenu()}
        >
          Catalogo
        </Link>
        <Link
          href="/servicios"
          className="py-4 px-4 hover:underline hover:text-purple-700"
          onClick={() => toggleMenu()}
        >
          Servicios
        </Link>
        <Link
          href="contactus"
          smooth={true}
          duration={500}
          className={`py-4 px-4 flex xl:hidden items-center gap-2`}
          onClick={() => toggleMenu()}
        >
          Contactanos
          <Image src={coffeeLight} width={25} height={25} alt="coffee" />
        </Link>
      </ul>
      <Link
        href="contactus"
        smooth={true}
        duration={500}
        className="hidden xl:flex items-center justify-center text-white bg-gradient-to-l from-rose-400 via-fuchsia-500 to-indigo-500 hover:bg-gradient-to-bl font-HelveticaBold rounded-md px-8 my-4 uppercase"
      >
        <p>Contactanos!!</p>
        <Image src={coffee} width={25} height={25} alt="coffee" />
      </Link>
    </nav>
  );
};

export default NavbarServicios;