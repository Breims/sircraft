"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import dataLines from "../lines/Lines";
import NavLink from "./NavLink";
import Whatsapp from "../ui/Whatsapp";

import sircraft from "@public/assets/logos/sircraft.webp";

const liStyle =
  "p-4 md:p-6 lg:px-2 2xl:px-6 xl:py-[0.6rem] text-xs text-slate-800 uppercase hover:underline decoration-2 hover:font-semibold hover:text-pink-600";
const activeLiStyle =
  "p-4 md:p-6 lg:px-2 2xl:px-6 xl:py-[0.6rem] text-xs uppercase underline decoration-2 font-bold text-pink-600";

const Navbar = () => {
  const [Accordion, setAccordion] = useState("hidden");
  const openAccordion = () => {
    setAccordion((prevState) => (prevState === "" ? "hidden" : ""));
  };

  const [openMenu, setOpenMenu] = useState("hidden");

  const openHamburgerMenu = () => {
    setOpenMenu((prevState) => (prevState === "" ? "hidden" : ""));
    setAccordion("hidden");
  };

  const scrollToElement = (elementId) => {
    let element = document.getElementById(elementId);
    window.scrollTo({
      top: element.offsetTop,
      behavior: "smooth",
    });
  };

  const pathname = usePathname();
  const paths = pathname.split("/").filter((path) => path);

  return (
    <header className="fixed top-0 z-20 lg:grid w-full">
      <nav className="flex flex-wrap lg:flex-nowrap h-[55px] lg:h-[60px] w-full justify-between items-center backdrop-blur-md bg-slate-50 bg-opacity-90 shadow-lg">
        <section className="w-full flex justify-between px-8 xl:px-12">
          <Link
            href="/"
            className="flex items-center"
            onClick={openHamburgerMenu}
          >
            <Image
              className="w-8 lg:w-9"
              src={sircraft}
              width={50}
              height={50}
              alt="Logo SirCraft"
            />
            <p className="text-2xl md:text-4xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-l from-pink-500 via-sky-500 to-purple-800">
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
                className={`flex items-center lg:justify-center p-4 md:px-6 py-2 lg:px-2 2xl:px-6 xl:py-[0.6rem] text-xs text-slate-800 uppercase hover:underline decoration-2 hover:font-semibold hover:text-pink-600`}
              >
                <span>Lineas de Producción</span>
                <svg
                  className="w-6"
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M6 9l6 6l6 -6" />
                </svg>
              </section>
              <section
                className={`${Accordion} lg:absolute -left-1/2 top-[70px] lg:h-screen lg:w-screen lg:pl-[16.5rem] 2xl:pl-[24.5rem]`}
              >
                <ul
                  className={`lg:w-[300px] lg:rounded-xl grid px-8 py-4 lg:shadow-lg lg:bg-slate-50 lg:backdrop-blur-md lg:bg-opacity-95 font-semibold uppercase font-sans text-xs`}
                >
                  {dataLines.map((data) => (
                    <div key={data.id}>
                      <NavLink
                        href={`/${data.route}`}
                        activeClasses="underline px-6 py-4 grid place-items-start
                      font-bold text-purple-600 hover:bg-slate-100"
                        defaultClasses="grid place-items-start px-6 py-4 hover:bg-slate-100"
                        text={data.line}
                        logic={openHamburgerMenu}
                      />
                    </div>
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
            <section className="flex items-center xl:mr-6">
              <Whatsapp
                img={
                  <svg
                    className="text-pink-500 w-5 mr-4 lg:w-6 lg:mr-2 hover:text-pink-600"
                    width="50"
                    height="50"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144l-2.494.654l.666-2.433l-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931a6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646c-.182-.065-.315-.099-.445.099c-.133.197-.513.646-.627.775c-.114.133-.232.148-.43.05c-.197-.1-.836-.308-1.592-.985c-.59-.525-.985-1.175-1.103-1.372c-.114-.198-.011-.304.088-.403c.087-.088.197-.232.296-.346c.1-.114.133-.198.198-.33c.065-.134.034-.248-.015-.347c-.05-.099-.445-1.076-.612-1.47c-.16-.389-.323-.335-.445-.34c-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654c0 .977.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992c.47.205.84.326 1.129.418c.475.152.904.129 1.246.08c.38-.058 1.171-.48 1.338-.943c.164-.464.164-.86.114-.943c-.049-.084-.182-.133-.38-.232z" />
                  </svg>
                }
              />
              <Link
                href="https://www.facebook.com/SirCraft.Desing"
                target="_blank"
              >
                <svg
                  className="text-pink-500 h-5 w-5 mr-4 lg:w-6 lg:h-6 lg:mr-2 xl:mr-2 hover:text-pink-600"
                  viewBox="0 0 50 50"
                  width="50px"
                  height="50px"
                  fill="currentColor"
                  alt="Red social Facebook"
                >
                  <path d="M32,11h5c0.552,0,1-0.448,1-1V3.263c0-0.524-0.403-0.96-0.925-0.997C35.484,2.153,32.376,2,30.141,2C24,2,20,5.68,20,12.368 V19h-7c-0.552,0-1,0.448-1,1v7c0,0.552,0.448,1,1,1h7v19c0,0.552,0.448,1,1,1h7c0.552,0,1-0.448,1-1V28h7.222 c0.51,0,0.938-0.383,0.994-0.89l0.778-7C38.06,19.518,37.596,19,37,19h-8v-5C29,12.343,30.343,11,32,11z" />
                </svg>
              </Link>
              <Link
                href="https://www.instagram.com/sircraft.desing/"
                target="_blank"
              >
                <svg
                  className="text-pink-500 h-5 w-5 mr-4 lg:w-6 lg:h-7 lg:mr-2 hover:text-pink-600"
                  width="50"
                  height="50"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  alt="Red social instagram"
                >
                  <path d="M8 5.67C6.71 5.67 5.67 6.72 5.67 8S6.72 10.33 8 10.33S10.33 9.28 10.33 8S9.28 5.67 8 5.67ZM15 8c0-.97 0-1.92-.05-2.89c-.05-1.12-.31-2.12-1.13-2.93c-.82-.82-1.81-1.08-2.93-1.13C9.92 1 8.97 1 8 1s-1.92 0-2.89.05c-1.12.05-2.12.31-2.93 1.13C1.36 3 1.1 3.99 1.05 5.11C1 6.08 1 7.03 1 8s0 1.92.05 2.89c.05 1.12.31 2.12 1.13 2.93c.82.82 1.81 1.08 2.93 1.13C6.08 15 7.03 15 8 15s1.92 0 2.89-.05c1.12-.05 2.12-.31 2.93-1.13c.82-.82 1.08-1.81 1.13-2.93c.06-.96.05-1.92.05-2.89Zm-7 3.59c-1.99 0-3.59-1.6-3.59-3.59S6.01 4.41 8 4.41s3.59 1.6 3.59 3.59s-1.6 3.59-3.59 3.59Zm3.74-6.49c-.46 0-.84-.37-.84-.84s.37-.84.84-.84s.84.37.84.84a.8.8 0 0 1-.24.59a.8.8 0 0 1-.59.24Z" />
                </svg>
              </Link>
            </section>

            <section onClick={openHamburgerMenu}>
              <svg
                className="text-pink-500 lg:hidden block w-8 lg:w-10"
                width={44}
                height={44}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path stroke="none" fill="none" d="M0 0h24v24H0z" />
                <path d="M4 6l16 0" />
                <path d="M4 12l16 0" />
                <path d="M4 18l16 0" />
              </svg>
            </section>

            <button onClick={() => scrollToElement("footer")}>
              <div className="hidden lg:flex items-center justify-center text-white text-xs bg-pink-500 hover:bg-pink-600 rounded-md px-3 py-0 uppercase cursor-pointer">
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
      <section className="hidden lg:flex items-center w-full h-[10px] px-12 py-[2px] mr-auto backdrop-blur-md bg-slate-50 bg-opacity-90">
        <NavLink
          image={
            <svg
              className="w-3 h-3 mr-1"
              width={44}
              height={44}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M19 8.71l-5.333 -4.148a2.666 2.666 0 0 0 -3.274 0l-5.334 4.148a2.665 2.665 0 0 0 -1.029 2.105v7.2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-7.2c0 -.823 -.38 -1.6 -1.03 -2.105" />
              <path d="M16 15c-2.21 1.333 -5.792 1.333 -8 0" />
            </svg>
          }
          href="/"
          text={`Inicio`}
          activeClasses="px-1 text-[0.6rem] uppercase font-semibold text-pink-600"
          defaultClasses="px-1 text-[0.6rem] text-slate-900 uppercase hover:font-semibold hover:text-pink-600"
        />
        {paths.map((path, index) => (
          <div key={index}>
            <NavLink
              href={`/${paths.slice(0, index + 1).join("/")}`}
              text={`/ ${path}`}
              defaultClasses="px-1 text-[0.6rem] text-slate-900 uppercase hover:font-semibold hover:text-pink-600"
              activeClasses="px-1 text-[0.6rem] uppercase font-semibold text-pink-600"
            />
          </div>
        ))}
      </section>
    </header>
  );
};

export default Navbar;
