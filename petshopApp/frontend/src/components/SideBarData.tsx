import React from "react";
import { AiOutlineHome, AiOutlineQuestionCircle } from "react-icons/ai";
import { MdPersonAdd, MdPets } from "react-icons/md";

export const SidebarData = [
    {
        title:"Home",
        path:"/",
        icon:<AiOutlineHome/>,
        className: "nav-text"
    },

    {
        title:"Create a person",
        path:"/createPerson",
        icon: <MdPersonAdd/>,
        className: "nav-text"
    }, 

    {
        title:"About",
        path:"/about",
        icon:<AiOutlineQuestionCircle/>,
        className: "nav-text"
    }
]