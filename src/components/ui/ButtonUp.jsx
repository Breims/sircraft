"use client";

import { useEffect, useState } from "react";
import up from "@public/assets/icons/up.svg";
import Image from "next/image";

const ButtonUp = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`fixed bottom-10 right-10 rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl ${
        showButton ? "visible" : "invisible"
      }`}
      onClick={scrollToTop}
    >
      <Image className="p-1" src={up} alt="up" width="40" height="40" />
    </button>
  );
};

export default ButtonUp;
