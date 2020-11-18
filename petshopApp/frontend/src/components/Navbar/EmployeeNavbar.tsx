import React, { useContext } from "react";
import { FaSearch, FaUserPlus } from "react-icons/fa";
import AuthContext from "../../AuthContext";
import { NavItem } from "./NavItem";

export function EmployeeNavbar() {

    const {user} = useContext(AuthContext);
    
    return (
        <>
            {(!user!.isAdmin && !user!.isVet) ?
                <>
                    <NavItem title="Buscar" path="/" icon={<FaSearch/>}/>
                    <NavItem title="Adicionar um cliente" path="/createCustomer" icon={<FaUserPlus/>}/>
                </>
            : null }
        </>
    );
} 