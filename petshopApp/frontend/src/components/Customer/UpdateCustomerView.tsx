import React from "react";
import { CustomerResult, UpdateCustomerResult } from '../../types/Customer';
import { useQuery, useMutation } from '@apollo/client';
import { UPDATE_CUSTOMER } from "../../graphql/mutations";
import { useParams } from "react-router-dom";
import { CUSTOMER } from "../../graphql/queries";
import { formatDate } from "../../util/util";
import { Alert, Button, Cell, Grid, Heading, HFlow, VFlow } from "bold-ui";
import { Field, Form, FormRenderProps } from "react-final-form";
import { css } from "@emotion/core";
import { MaskedTextFieldAdapter, TextFieldAdapter } from "../Adapters";
import { ErrorView } from "../Infos/ErrorView";

export function UpdateCustomerView() {

    const {customerId} = useParams<{customerId: string}>();

    const { loading, data } = useQuery<CustomerResult>(CUSTOMER, {
        variables: { id: customerId }
    });

    const [updateCustomer, {data:customer}] = useMutation<UpdateCustomerResult>(UPDATE_CUSTOMER);

    function handleSubmit({name}: any) {
        updateCustomer({variables: {id: customerId, newName: name}})
    }

    if (loading) {
        return (
            <VFlow>
                <Heading style={css`text-align: center`} level={1}>
                    Carregando...
                </Heading>
            </VFlow>
        );
    }

    if (data?.customer) {
        const renderForm = (props: FormRenderProps) => {
            return (
                <VFlow vSpacing={1}>
                    {customer?.updateCustomer &&
                        <Alert type='success'>
                            Cliente alterado com sucesso !
                        </Alert>
                    }
                    <Heading level={1}>
                        Alterando os dados do(a) cliente {data.customer.name}
                    </Heading>
                    <form onSubmit={props.handleSubmit}>
                        <Grid wrap>
                            <Cell xs={6}>
                                <Field
                                    component={TextFieldAdapter}
                                    name="name"
                                    label="Nome"
                                    required

                                />
                            </Cell>
                            <Cell xs={6}>
                                <Field
                                    component={MaskedTextFieldAdapter}
                                    disabled
                                    name="birthdate"
                                    guide
                                    required
                                    label="Data de Aniversário" 
                                    mask={[/\d/,/\d/,'/',/\d/,/\d/,'/',/\d/,/\d/,/\d/,/\d/]}
                                    placeholder="dd/mm/aaaa"
                                />
                            </Cell>
                            <Cell xs={12}>
                                <HFlow justifyContent="flex-start">
                                    <Button type="submit" kind="primary" size="small">
                                        Enviar
                                    </Button>
                                </HFlow>
                            </Cell>
                        </Grid>
                    </form>
                </VFlow>
            )
        }

        return (
            <HFlow style={css`margin: 1rem`} justifyContent="center">
                <Form
                    onSubmit={handleSubmit}
                    initialValues={ { name: data.customer.name , birthdate: formatDate(data.customer.birthDate) } }
                    render={renderForm}
                />
            </HFlow>
        );
    } else {
        return (
            <ErrorView/>
        );
    }
}