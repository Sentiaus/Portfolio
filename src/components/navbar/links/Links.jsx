"use client";

import NavLink from "./navLink/NavLink";
import { useState } from "react";

const Links = () => {
    
    const links = [
        {
            title: "Home",
            path: "/",
        },
        {
            title: "Projects",
            path: "/projects",
        },
        {
            title: "Resume",
            path: "/resume",
        },
        {
            title: "Contact",
            path: "/contact",
        },
        
    ];

    const [open, setOpen] = useState(false);

    return(
        <>
        <div className="flex items-center justify-center md:justify-between gap-2 w-full md:auto">
            {links.map((link=>(
                <NavLink item = {link} key = {link.title} />)))}
        </div>
        </>
    )
};

export default Links;