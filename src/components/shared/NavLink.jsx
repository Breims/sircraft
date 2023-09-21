"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const NavLink = ({ href, text, activeClasses, defaultClasses, key, logic, image }) => {
  const path = usePathname();
  const isActive = path === href;

  return (
    <Link href={href} key={key} onClick={logic}>
        <div className={`flex ${isActive ? activeClasses : defaultClasses }`}>
           {image} {text}
        </div>
    </Link>
  );
};

export default NavLink;
