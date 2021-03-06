import React, { useContext } from "react";
import { FaUserPlus } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";
import { NavItem } from "./NavItem";
import AuthContext from "../../AuthContext";

export function AdminNavbar() {

    const {user} = useContext(AuthContext);
    
    return (
        <>
            { user!.isAdmin ?
                <>
                    <NavItem path="/createUser" title="Adicionar um funcionário" icon={<FaUserPlus/>}/>
                    <NavItem path="/users" title="Listar funcionários" icon={<BsPersonLinesFill/>}/>
                </>
            : null }
        </>
    );
} 