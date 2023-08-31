"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import dataLines from "../lines/Lines.js";
import NavLink from "./NavLink.jsx";

import sircraft from "@public/assets/logos/sircraft.webp";
import hamburguesa from "@public/assets/icons/hamburguesa.svg";
import cruz from "@public/assets/icons/cruz.svg";
import inicio from "@public/assets/icons/ingresar.svg";

const NavbarLines = () => {
  const [openMenuLineas, setOpenMenuLineas] = useState("hidden");
  const toggleMenuLineas = () => {
    setOpenMenuLineas((prevState) => (prevState === "" ? "hidden" : ""));
  };

  return (
    <>
      <nav className="fixed top-0 z-10 flex flex-col justify-center w-full h-[80px] px-8 xl:px-12 bg-white backdrop-blur-md bg-opacity-90 shadow-lg">
        <div className="flex justify-between">
          <Image
            className="w-10"
            onClick={() => toggleMenuLineas()}
            src={hamburguesa}
            width={30}
            height={30}
            alt="hamburguesa"
          />
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
        </div>

        <section
          className={`${openMenuLineas} fixed top-0 left-0 w-full md:w-96 h-auto md:h-screen px-8 xl:px-12 py-3 backdrop-blur-md bg-white bg-opacity-90 shadow-lg`}
        >
          <div className="flex justify-between items-center mb-3">
            <Link key="inicio" href="/">
              <figure>
                <Image
                  className="w-14"
                  src={sircraft}
                  width={40}
                  height={40}
                  alt="SirCraft"
                />
              </figure>
            </Link>
            <Image
              className="mx-3"
              onClick={() => toggleMenuLineas()}
              src={cruz}
              width={30}
              height={30}
              alt="hamburguesa"
            />
          </div>
          <ul
            className={`w-full grid text-base uppercase divide-y-2 divide-purple-700`}
          >
            {dataLines.map((data) => (
              <NavLink
                key={data.id}
                href={`/${data.route}`}
                activeClasses="underline mx-3 p-3 md:py-6 lg:py-3 xl:py-6 grid place-items-start font-HelveticaBold text-purple-600 hover:bg-slate-100"
                defaultClasses="mx-3 p-3 md:py-6 lg:py-3 xl:py-6 grid place-items-start font-HelveticaMedium hover:bg-slate-100"
                text={data.line}
                onClick={() => toggleMenuLineas()}
              />
            ))}
            <Link
              href={"/"}
              className="flex items-center py-3 px-6 md:py-6 lg:py-3 xl:py-6 font-HelveticaMedium"
            >
              <Image
                className="w-6 mr-2"
                src={inicio}
                width={25}
                height={25}
                alt="inicio"
              />
              Inicio
            </Link>
          </ul>
        </section>
      </nav>
    </>
  );
};

export default NavbarLines;
