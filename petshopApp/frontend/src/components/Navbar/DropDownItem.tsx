import React from "react"

export function DropDownItem(props: any) {
    return (
        <a href={props.path} className="menu-item">
            <span className="icon-button">{props.leftIcon}</span>
            {props.children}
            <span className="icon-right">{props.rightIcon}</span>
        </a>
    )
}