"use client";

import { usePathname } from "next/navigation";
import Link from "next/link"

const NavLink = ({item}) => {
    
    const pathName = usePathname();

    return (
        <Link href={item.path} className={`${" text-white font-bold py-2 px-4 rounded-full"} ${pathName === item.path && "bg-blue-500"}`}>{item.title}</Link>
    )
};

export default NavLink;