import React, { useContext } from "react";
import { FaCalendar } from "react-icons/fa";
import AuthContext from "../../AuthContext";
import { NavItem } from "./NavItem";

export function VetNavbar() {

    const {user} = useContext(AuthContext);
    
    return (
        <>
            { user!.isVet &&
                <>
                    <NavItem path={`/calendar/${user?.id}`} title="Consultas marcadas" icon={<FaCalendar/>}/>
                </>
            }
        </>
    );
} 