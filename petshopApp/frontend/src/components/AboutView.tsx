import { css } from "@emotion/core";
import { Heading, VFlow, Text } from "bold-ui";
import React from "react";

export function AboutView() {
    return (
        <VFlow style={css`align-items: center; margin-top: 1rem`} >
            <Heading level={1}>
                Sobre
            </Heading>
            <Text fontSize={1}>
                Essa aplicação foi desenvolvida para uma prova de conceito
                sobre React, Apollo, GraphQL, Spring Boot e Kotlin ;)
            </Text>
        </VFlow>
    );
}