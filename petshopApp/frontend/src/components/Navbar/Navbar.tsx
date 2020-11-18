import { Icon } from "bold-ui"
import React from "react"
import { NavItem } from "./NavItem"

export function Navbar(props: any) {

    return (
        <>
            <nav className="navbar">
                <ul className="navbar-nav">
                    {props.children}
                    <NavItem path="/about" title="Sobre" icon={<Icon icon='infoDefault'/>}/>
                </ul>
            </nav>
        </>
    )
}