"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import dataLines from "../lines/Lines";
import NavLink from "./NavLink";

import sircraft from "@public/assets/logos/sircraft.webp";

const liStyle =
  "p-4 md:p-6 lg:px-2 2xl:px-6 xl:py-[0.6rem] text-xs 2xl:text-sm text-slate-800 uppercase hover:underline decoration-2 hover:font-semibold hover:text-pink-600";
const activeLiStyle =
  "p-4 md:p-6 lg:px-2 2xl:px-6 xl:py-[0.6rem] text-xs 2xl:text-sm text-slate-800 uppercase underline decoration-2 font-bold text-pink-600";

const Navbar = () => {
  const [Accordion, setAccordion] = useState("hidden");
  const openAccordion = () => {
    setAccordion((prevState) => (prevState === "" ? "hidden" : ""));
  };

  const [openMenu, setOpenMenu] = useState("hidden");

  const openHamburgerMenu = () => {
    setOpenMenu((prevState) => (prevState === "" ? "hidden" : ""));
  };

  const clearAllMenu = () => {
    openAccordion();
    openHamburgerMenu();
  };

  const scrollToElement = (elementId) => {
    let element = document.getElementById(elementId);
    window.scrollTo({
      top: element.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <>
      <nav className="fixed top-0 z-20 flex flex-wrap lg:flex-nowrap h-[55px] lg:h-[70px] w-full justify-between items-center backdrop-blur-md bg-slate-50 bg-opacity-90 shadow-lg">
        <section className="w-full flex justify-between px-8 xl:px-12">
          <Link href="/" className="flex items-center" onClick={openAccordion}>
            <Image
              className="w-8 lg:w-9 xl:w-10"
              src={sircraft}
              width={50}
              height={50}
              alt="Logo SirCraft"
            />
            <p className="text-2xl md:text-4xl lg:text-3xl xl:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-l from-pink-500 via-sky-500 to-purple-800">
              SirCraft
            </p>
          </Link>

          <ul
            className={`${openMenu} absolute lg:static flex flex-col lg:flex lg:flex-row justify-center lg:items-center w-full lg:w-auto top-[3.4rem] left-0 px-8 lg:px-0 font-semibold backdrop-blur-md lg:backdrop-blur-0 bg-white bg-opacity-90 lg:bg-transparent divide-y lg:divide-y-0 divide-pink-600`}
          >
            <NavLink
              href="/"
              activeClasses={activeLiStyle}
              defaultClasses={liStyle}
              text="Inicio"
              logic={openHamburgerMenu}
            />

            <li
              className={`flex flex-col lg:flex-row lg:items-center`}
              onClick={openAccordion}
            >
              <section
                className={`flex items-center lg:justify-center ${liStyle}`}
              >
                <span>Lineas de Producción</span>
                <svg
                  class="w-8 lg:w-6 xl:w-8"
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M6 9l6 6l6 -6" />
                </svg>
              </section>
              <section className={`${Accordion} lg:absolute top-[68px]`}>
                <ul
                  className={`lg:w-[300px] lg:rounded-xl grid px-8 py-4 lg:shadow-lg lg:bg-slate-50 lg:backdrop-blur-md lg:bg-opacity-95 font-semibold uppercase font-sans text-xs`}
                >
                  {dataLines.map((data) => (
                    <NavLink
                      key={data.id}
                      href={`/${data.route}`}
                      activeClasses="underline px-6 py-4 grid place-items-start
                      font-bold text-purple-600 hover:bg-slate-100"
                      defaultClasses="grid place-items-start px-6 py-4 hover:bg-slate-100"
                      text={data.line}
                      logic={clearAllMenu}
                    />
                  ))}
                </ul>
              </section>
            </li>

            <NavLink
              href="/servicios"
              activeClasses={activeLiStyle}
              defaultClasses={liStyle}
              text="Servicios"
              logic={openHamburgerMenu}
            />
            <NavLink
              href="/productos"
              activeClasses={activeLiStyle}
              defaultClasses={liStyle}
              text="Productos"
              logic={openHamburgerMenu}
            />
            <NavLink
              href="/nosotros"
              activeClasses={activeLiStyle}
              defaultClasses={liStyle}
              text="¿Quienes somos?"
              logic={openHamburgerMenu}
            />
            <li className={`flex items-center py-0 lg:hidden ${liStyle}`}>
              <span>Contactanos</span>
              <svg
                className="ml-1 w-4"
                viewBox="0 0 24 24"
                width="40"
                height="40"
                fill="currentColor"
              >
                <path d="M13.025,3V1a1,1,0,0,1,2,0V3A1,1,0,0,1,13.025,3Zm-3,1a1,1,0,0,0,1-1V1a1,1,0,0,0-2,0V3A1,1,0,0,0,10.025,4Zm-4,0a1,1,0,0,0,1-1V1a1,1,0,0,0-2,0V3A1,1,0,0,0,6.025,4ZM24,13.143A3.983,3.983,0,0,1,20,17H17.525a6.875,6.875,0,0,1-5.742,3H8.216a6.877,6.877,0,0,1-5.808-3.088C.992,14.653-2.453,6.371,3,6L17,6a3.1,3.1,0,0,1,2.882,4C22.353,10,24,11.205,24,13.143Zm-2,0c.088-.927-1.25-1.224-2.458-1.143a16.82,16.82,0,0,1-.954,3H20A1.984,1.984,0,0,0,22,13.143ZM19,22H1a1,1,0,0,0,0,2H19A1,1,0,0,0,19,22Z" />
              </svg>
            </li>
          </ul>

          <div className="flex items-center">
            <section className="flex items-center">
              <Link
                href="https://www.facebook.com/SirCraft.Desing"
                target="_blank"
              >
                <svg
                  className="text-pink-500 h-8 w-8 lg:w-9 lg:h-9 lg:mr-2 xl:mr-6 hover:text-pink-600"
                  width={50}
                  height={50}
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  alt="Red social Facebook"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                </svg>
              </Link>
              <Link
                href="https://www.instagram.com/sircraft.desing/"
                target="_blank"
              >
                <svg
                  className="text-pink-500 h-8 lg:h-9 lg:mr-2 xl:mr-6 hover:text-pink-600"
                  width={40}
                  height={40}
                  viewBox="0 0 15 15"
                  alt="Red social Instagram"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    d="M11 3.5h1M4.5.5h6a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4h-6a4 4 0 0 1-4-4v-6a4 4 0 0 1 4-4Zm3 10a3 3 0 1 1 0-6a3 3 0 0 1 0 6Z"
                  />
                </svg>
              </Link>
            </section>

            <section onClick={openHamburgerMenu}>
              <svg
                className="text-pink-500 lg:hidden block w-10 lg:w-10"
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
            </section>

            <button onClick={() => scrollToElement("footer")}>
              <div className="hidden lg:flex items-center justify-center text-white text-xs xl:text-sm bg-pink-500 hover:bg-pink-600  rounded-md px-3 py-0 xl:px-8 uppercase cursor-pointer">
                <span>Contactanos</span>
                <svg
                  className="ml-1 w-[1.25rem]"
                  viewBox="0 0 24 24"
                  width="40"
                  height="40"
                  fill="currentColor"
                >
                  <path d="M13.025,3V1a1,1,0,0,1,2,0V3A1,1,0,0,1,13.025,3Zm-3,1a1,1,0,0,0,1-1V1a1,1,0,0,0-2,0V3A1,1,0,0,0,10.025,4Zm-4,0a1,1,0,0,0,1-1V1a1,1,0,0,0-2,0V3A1,1,0,0,0,6.025,4ZM24,13.143A3.983,3.983,0,0,1,20,17H17.525a6.875,6.875,0,0,1-5.742,3H8.216a6.877,6.877,0,0,1-5.808-3.088C.992,14.653-2.453,6.371,3,6L17,6a3.1,3.1,0,0,1,2.882,4C22.353,10,24,11.205,24,13.143Zm-2,0c.088-.927-1.25-1.224-2.458-1.143a16.82,16.82,0,0,1-.954,3H20A1.984,1.984,0,0,0,22,13.143ZM19,22H1a1,1,0,0,0,0,2H19A1,1,0,0,0,19,22Z" />
                </svg>
              </div>
            </button>
          </div>
        </section>
      </nav>
    </>
  );
};

export default Navbar;
