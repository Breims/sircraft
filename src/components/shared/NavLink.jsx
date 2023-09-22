"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const NavLink = ({ href, text, activeClasses, defaultClasses, key, image, exec }) => {
  const path = usePathname();
  const isActive = path === href;

  return (
    <Link href={href} key={key}>
        <li className={`flex ${isActive ? activeClasses : defaultClasses }`}
        onClick={exec}
        >
           {image} {text}
        </li>
    </Link>
  );
};

export default NavLink;
