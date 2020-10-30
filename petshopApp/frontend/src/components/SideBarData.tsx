import React from "react";
import { AiOutlineSearch, AiOutlineQuestionCircle } from "react-icons/ai";
import { MdPersonAdd } from "react-icons/md";

export const SidebarData = [
    {
        title:"Buscar",
        path:"/",
        icon:<AiOutlineSearch/>,
        className: "nav-text"
    },

    {
        title:"Adicionar uma nova pessoa",
        path:"/createPerson",
        icon: <MdPersonAdd/>,
        className: "nav-text"
    }, 

    {
        title:"Sobre",
        path:"/about",
        icon:<AiOutlineQuestionCircle/>,
        className: "nav-text"
    }
]