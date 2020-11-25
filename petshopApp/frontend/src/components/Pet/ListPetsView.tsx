import React from "react";
import { CustomerPetsResult } from "../../types/Pet";
import { useQuery } from '@apollo/client';
import { useParams } from "react-router-dom";
import { CUSTOMER, CUSTOMER_PETS } from "../../graphql/queries";
import { CustomerResult } from "../../types/Customer";
import { Heading, HFlow, Table, TableBody, TableHead, TableHeader, TableRow, VFlow } from "bold-ui";
import { TablePetView } from "./TablePetView";
import { css } from "@emotion/core";
import { ErrorView } from "../Infos/ErrorView";

export function ListPetsView() {

    const { ownerId } = useParams<{ownerId: string}>();

    const { loading, data } = useQuery<CustomerPetsResult>(CUSTOMER_PETS, {
        variables: { id: ownerId }
    });

    const { data:owner } = useQuery<CustomerResult>(CUSTOMER, {
        variables: { id: ownerId }
    });

    if (data?.customerPets && owner?.customer) {
        if (data.customerPets.length > 0) {
            return (
                <VFlow style={css`margin-top: 1rem`}>
                    <Heading style={css`text-align: center`} color="normal" level={1}>
                        Pets do(a) {owner.customer.name}
                    </Heading>
                    <HFlow alignItems="center" justifyContent="center">
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableHeader>ID</TableHeader>
                                    <TableHeader>Nome</TableHeader>
                                    <TableHeader>Data de nascimento</TableHeader>
                                    {/* <TableHeader>Espécie</TableHeader> */}
                                    <TableHeader></TableHeader>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.customerPets.map( (p) => {
                                    return (
                                        <TablePetView key={p.id} pet={p}/>
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
                        {owner.customer.name} não tem pets
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
        )
    }


}