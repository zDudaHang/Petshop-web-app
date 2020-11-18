import React, { useState } from "react";

export function NavItem(props: any) {

    const [isOpen, setOpen] = useState(false);

    return (
        <li className="nav-item">
            <a href={props.path} className="icon-button" title={props.title} onClick={() => setOpen(!isOpen)}>
                <span className="icon-button">{props.icon}</span>
            </a>
            {isOpen && props.children}
        </li>
    );
}