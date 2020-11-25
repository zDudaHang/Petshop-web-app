import { css } from "@emotion/core";
import { Heading, HFlow } from "bold-ui";
import React, { useContext } from "react";
import AuthContext from "../../AuthContext";

export function UserNavbarView() {

    const {user} = useContext(AuthContext);
    
    return (
        <HFlow alignItems="center" style={css`position: absolute; left: 1%; margin-top: 1rem`}>
            {user &&
                <Heading style={css`color: #dadce1`} level={2}>
                    Olá, {user!.username}
                </Heading>
            }
        </HFlow>
    );
}