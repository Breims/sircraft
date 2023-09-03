"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import data from "../components/lines/Lines.js";

const Carrusel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === data.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative lg:h-screen overflow-hidden">
      <div
        className="flex w-full lg:h-screen transition-transform ease-in-out duration-500"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {data.map((image) => (
          <figure key={image.id} className="w-full lg:h-full flex-shrink-0">
            <Image
              src={image.cover}
              alt={`Slide ${image.id + 1}`}
              width={1366}
              height={768}
              className="w-screen lg:h-screen object-cover"
            />
          </figure>
        ))}
      </div>
    </div>
  );
};

export default Carrusel;
