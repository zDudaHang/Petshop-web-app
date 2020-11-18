import { css } from "@emotion/core";
import { Heading, VFlow } from "bold-ui";
import React from "react"
import { BiSad } from "react-icons/bi";

export function ErrorView() {
    return (
        <VFlow style={css`margin-top: 1rem`}>
            <Heading style={css`text-align: center`} color="normal" level={1}>
                Opa, algo deu errado <BiSad/>
            </Heading>
        </VFlow>
    );
}