import React from "react";
import { useQuery } from '@apollo/client';
import { USERS } from "../../graphql/queries";
import { Heading, HFlow, Table, TableBody, TableHead, TableHeader, TableRow, VFlow } from "bold-ui";
import { css } from "@emotion/core";
import { UserView } from "./UserView";
import { UsersResult } from "../../types/User";
import { ErrorView } from "../ErrorView";

export function ListUserView() {

    const { loading, data } = useQuery<UsersResult>(USERS);

    if (data?.users) {
        if (data.users.length > 0) {
            return (
                <VFlow style={css`margin-top: 1rem`}>
                    <Heading style={css`text-align: center`} color="normal" level={1}>
                        Lista de usuários
                    </Heading>
                    <HFlow alignItems="center" justifyContent="center">
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableHeader>ID</TableHeader>
                                    <TableHeader>Usuário</TableHeader>
                                    {/* <TableHeader>Salário</TableHeader> */}
                                    <TableHeader>Função</TableHeader>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.users.map( (u) => {
                                    return (
                                        <UserView key={u.id} user={u}/>
                                    )
                                }) }
                            </TableBody>
                        </Table>
                    </HFlow>
                </VFlow>
            );
        } else {
            return (
                <VFlow>
                    <Heading style={css`text-align: center`} color="normal" level={1}>
                        Não há usuários :(
                    </Heading>
                </VFlow>
            );
        }
    } else {
        if (loading) {
            return (
                <VFlow>
                    <Heading style={css`text-align: center`} color="normal" level={1}>
                        Carregando...
                    </Heading>
                </VFlow>
            );
        }
        return (
            <ErrorView/>
        );
    }


}