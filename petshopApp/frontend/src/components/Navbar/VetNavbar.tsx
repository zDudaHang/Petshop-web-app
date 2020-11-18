import React, { useContext } from "react";
import { FaUserPlus, FaSearch, FaCalendar } from "react-icons/fa";
import AuthContext from "../../AuthContext";
import { NavItem } from "./NavItem";

export function VetNavbar() {

    const {user} = useContext(AuthContext);
    
    return (
        <>
            { user!.isVet &&
                <>
                    <NavItem title="Buscar" path="/" icon={<FaSearch/>}/>
                    <NavItem title="Adicionar um cliente" icon={<FaUserPlus/>}/>
                    <NavItem path="/calendar/:vetId" title="Consultas marcadas" icon={<FaCalendar/>}/>
                </>
            }
        </>
    );
} 