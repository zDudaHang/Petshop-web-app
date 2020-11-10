import React from "react";

export function DropDownMenu(props: any) {
    
    return (
        <div className="dropdown">
            {props.children}
        </div>
    );
}