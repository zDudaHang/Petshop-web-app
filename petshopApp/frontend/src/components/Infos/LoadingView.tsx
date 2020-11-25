import { css } from "@emotion/core";
import { Heading, Spinner, VFlow } from "bold-ui";
import React from "react"

export interface LoadingViewProps {
    msg: String
}

export function LoadingView(props: LoadingViewProps) {
    return (
        <VFlow style={css`margin-top: 1rem`}>
            <Heading style={css`text-align: center`} color="normal" level={1}>
                {props.msg}
            </Heading>
            <Spinner
                borderWidth={2}
                size={2}
            />
        </VFlow>
    );
}