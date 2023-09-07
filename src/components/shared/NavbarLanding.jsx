"use client";

import { Link } from "react-scroll";
import { useState } from "react";

import Image from "next/image";
import sircraft from "@public/assets/logos/sircraft.webp";
import coffee from "@public/assets/icons/coffee.svg";
import coffeeLight from "@public/assets/icons/coffeeLight.svg";

const NavbarLanding = () => {
  const [openMenu, setOpenMenu] = useState("hidden");

  const toggleMenu = () => {
    setOpenMenu((prevState) => (prevState === "" ? "hidden" : ""));
  };

  return (
    <nav className="fixed top-0 z-10 h-[60px] lg:h-[80px] w-full flex flex-wrap lg:flex-nowrap justify-between items-center xl:px-12 backdrop-blur-md bg-white bg-opacity-90 shadow-lg">
      
      <Link to="home" smooth={true} duration={500}>
        <figure className="flex items-center justify-center ml-8 lg:ml-0 cursor-pointer">
          <Image
            className="w-7 lg:w-12"
            src={sircraft}
            width={70}
            height={70}
            alt="SirCraft logo"
          />
          <p className="text-2xl md:text-4xl font-poppins font-bold text-transparent bg-clip-text bg-gradient-to-l from-pink-500 via-sky-500 to-purple-800">
            SirCraft
          </p>
        </figure>
      </Link>

      <section className="flex items-center justify-center mr-8 lg:mr-0 gap-4 lg:gap-8 lg:order-3">
        <svg
          className="text-pink-500 h-6 lg:h-10"
          width={40}
          height={40}
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
        </svg>

        <svg
          className="text-pink-500 h-6 lg:h-10"
          width={40}
          height={40}
          viewBox="0 0 15 15"
        >
          <path
            fill="none"
            stroke="currentColor"
            d="M11 3.5h1M4.5.5h6a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4h-6a4 4 0 0 1-4-4v-6a4 4 0 0 1 4-4Zm3 10a3 3 0 1 1 0-6a3 3 0 0 1 0 6Z"
          />
        </svg>

        <figure onClick={toggleMenu}>
          <svg
            className="xl:hidden block w-7 lg:w-10"
            width={44}
            height={44}
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 6l16 0" />
            <path d="M4 12l16 0" />
            <path d="M4 18l16 0" />
          </svg>
        </figure>

        <Link
          to="contactus"
          smooth={true}
          duration={500}
          className="hidden xl:flex items-center justify-center text-white bg-pink-500 hover:bg-gradient-to-br font-poppins rounded-md px-8 py-3 uppercase cursor-pointer"
        >
          <p>Contactanos!!</p>
          <Image src={coffee} width={25} height={25} alt="coffee" />
        </Link>
      </section>

      <ul
        className={`${openMenu} flex flex-col w-full xl:w-auto lg:flex-row justify-center sticky xl:divide-transparent divide-y divide-purple-900 uppercase font-poppins xl:bg-transparent xl:backdrop-blur-none xl:shadow-none backdrop-blur-md bg-white bg-opacity-90 shadow-lg px-8`}
      >
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="py-4 px-4 hover:underline hover:font-semibold"
          onClick={() => toggleMenu()}
        >
          Inicio
        </Link>
        <Link
          to="aboutus"
          smooth={true}
          duration={500}
          className="py-4 px-4 grid hover:underline hover:font-semibold"
          onClick={() => toggleMenu()}
        >
          Sobre Nosotros
        </Link>
        <Link
          to="lines"
          smooth={true}
          duration={500}
          className="py-4 px-4 hover:underline hover:font-semibold"
          onClick={() => toggleMenu()}
        >
          Lineas
        </Link>
        <a
          href="/catalogo"
          className="py-4 px-4 hover:underline hover:font-semibold"
          onClick={() => toggleMenu()}
        >
          Catalogo
        </a>
        <a
          href="/servicios"
          className="py-4 px-4 hover:underline hover:font-semibold"
          onClick={() => toggleMenu()}
        >
          Servicios
        </a>
        <Link
          to="contactus"
          smooth={true}
          duration={500}
          className={`py-4 px-4 flex xl:hidden items-center gap-2`}
          onClick={() => toggleMenu()}
        >
          Contactanos
          <Image src={coffeeLight} width={25} height={25} alt="coffee" />
        </Link>
      </ul>
    </nav>
  );
};

export default NavbarLanding;
