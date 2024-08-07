"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import useHover from "@/hooks/useHover";

const NavLink = ({item}) => {
    const [hoverRef, isHovered] = useHover();
    const pathName = usePathname();

    return (
        <Link href={item.path} className={`${" text-lg font-bold py-2 px-4 rounded-full transition-colors duration-300"} ${pathName === item.path ? "bg-slate-700 text-slate-100":""} ${isHovered ? "bg-gray-200": ""}`}><button>{item.title}</button></Link>
    )
};

export default NavLink;