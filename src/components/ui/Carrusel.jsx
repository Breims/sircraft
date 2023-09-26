"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import data from "../../app/lineas/[route]/Lines.js";

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
    <div className="relative lg:h-[70vh] overflow-hidden bg-slate-800">
      <div
        className="flex w-full transition-transform ease-in-out duration-500"
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
              height={400}
              className="m-auto"
            />
          </figure>
        ))}
      </div>
    </div>
  );
};

export default Carrusel;
