import { Icon } from "bold-ui"
import React from "react"
import { NavItem } from "./NavItem"
import { BiCalendarPlus } from "react-icons/bi";
import { FaSearch, FaUserPlus } from "react-icons/fa";
import { DropDownItem } from "./DropDownItem";
import { DropDownMenu } from "./DropDownMenu";

export function Navbar(props: any) {

    return (
        <>
            <nav className="navbar">
                <ul className="navbar-nav">
                    <NavItem title="Buscar" icon={<FaSearch/>}>
                        <DropDownMenu>
                            <DropDownItem path="/searchPet" leftIcon={<Icon icon='petFilled'/>}> Pet </DropDownItem>
                            <DropDownItem path="/searchCustomer" leftIcon={<Icon icon='userFilled'/>}> Cliente </DropDownItem>
                        </DropDownMenu>
                    </NavItem>
                    {props.children}
                    <NavItem title="Adicionar um cliente" path="/createCustomer" icon={<FaUserPlus/>}/>
                    <NavItem path="/addAppointment" title="Adicionar uma nova consulta" icon={<BiCalendarPlus/>}/>
                    <NavItem path="/about" title="Sobre" icon={<Icon icon='infoDefault'/>}/>
                </ul>
            </nav>
        </>
    )
}