"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
const NavLink = ({ href, text, activeClasses, defaultClasses ,key, logic }) => {
  const path = usePathname();
  const isActive = path === href;

  return (
    <Link href={href} key={key} onClick={logic}>
        <li className={`${isActive ? activeClasses : defaultClasses }`}>
            {text}
        </li>
    </Link>
  );
};

export default NavLink;
