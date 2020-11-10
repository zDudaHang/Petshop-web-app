import React, { useContext, useEffect } from "react";
import { FaSearch, FaUserPlus } from "react-icons/fa";
import AuthContext from "../../AuthContext";
import { NavItem } from "./NavItem";

export function FuncNavbar() {

    const context = useContext(AuthContext);

    useEffect(() => {
        console.log("[FUNC NAVBAR] context")
        console.log(context)
    })

    return (
        <>
            {(context.isLoggedIn && !context?.user?.isAdmin && !context.user?.isVet) ?
                <>
                    <NavItem title="Buscar" path="/search" icon={<FaSearch/>}/>
                    <NavItem title="Adicionar um cliente" path="/createCustomer" icon={<FaUserPlus/>}/>
                </>
            : null }
        </>
    );
} 