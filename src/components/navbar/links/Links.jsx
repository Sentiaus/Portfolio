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
            title: "Resume",
            path: "/resume",
        },
        // {
        //     title: "Stories",
        //     path: "/stories",
        // },
        
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