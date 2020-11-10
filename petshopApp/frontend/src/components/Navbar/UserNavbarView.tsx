import React from "react";
import { User } from "../../types/User";

export interface UseNavBarViewProps {
    user?: User,
}

export function UserNavbarView(props: UseNavBarViewProps) {
    return (
        <div className="navbar-user">
            {props?.user && 
                <p>Olá, {props.user?.username}</p>
            }
        </div>
    );
}