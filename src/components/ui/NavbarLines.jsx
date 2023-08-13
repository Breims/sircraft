"use client";

import { useState } from "react";
import { products } from "./ProductsCards/productsDetails";
import Image from "next/image";
import Link from 'next/link';
import sircraft from "@public/assets/logos/sircraft.png";
import hamburguesa from "@public/assets/icons/hamburguesa.svg";
import inicio from "@public/assets/icons/ingresar.svg";

const defaultStyle =
  "lg:mx-[0.78rem] lg:p-3 p-6 mx-6 font-HelveticaRegular uppercase hover:underline hover:font-HelveticaBold decoration-2 cursor-pointer";
const navMobileStyle =
  "backdrop-blur-md lg:backdrop-blur-none bg-white lg:bg-transparent bg-opacity-70 lg:bg-opacity-100 shadow-md lg:shadow-none";

const NavbarLines = () => {
  const [openMenuLineas, setOpenMenuLineas] = useState("hidden");
  const toggleMenuLineas = () => {
    setOpenMenuLineas((prevState) => (prevState === "" ? "hidden" : ""));
  };

  return (
    <nav className="lg:flex fixed top-0 z-10 w-full backdrop-blur-md lg:bg-white lg:bg-opacity-90 shadow-lg">
      <section
        className={`${navMobileStyle} py-2 px-8 lg:py-0 flex justify-between items-center w-full lg:w-auto lg:ml-8`}
      >
        <Image
          className="w-14 lg:w-[3.8rem]"
          src={sircraft}
          width={70}
          height={70}
          alt="SirCraft"
        />
        <Image
          className="lg:hidden block"
          onClick={() => toggleMenuLineas()}
          src={hamburguesa}
          width={40}
          height={40}
          alt="hamburguesa"
        />
      </section>
      <ul
        className={`${openMenuLineas} ${navMobileStyle} grid lg:flex lg:sticky w-full lg:justify-center lg:divide-transparent lg:my-4 divide-y divide-purple-900`}
      >
        {products.map((product, index) => (
          <Link
            key={index}
            href={product.ruteLine}
            className={defaultStyle}
            onClick={() => toggleMenuLineas()}
          >
            {product.linea}
          </Link>
        ))}
        <Link
            href={"/"}
            className={`flex text-purple-600 ${defaultStyle}`}
          >
            <Image className="w-6 mr-2" src={inicio}
            width={25}
            height={25}
            alt="inicio" />
            Inicio
          </Link>
      </ul>
    </nav>
  );
};

export default NavbarLines;