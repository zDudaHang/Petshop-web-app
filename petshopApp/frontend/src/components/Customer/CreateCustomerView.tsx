import React from "react";
import { useMutation } from '@apollo/client';
import { CreateCustomerResult } from "../../types/Customer";
import { CREATE_CUSTOMER } from "../../graphql/mutations";
import { Alert, Button, Cell, Grid, Heading, HFlow, VFlow } from "bold-ui";
import { Field, Form, FormRenderProps } from "react-final-form";
import { css } from "@emotion/core";
import { MaskedTextFieldAdapter, TextFieldAdapter } from "../Adapters";

export function CreateCustomerView() {

    const [newCustomer, {data:customer}] = useMutation<CreateCustomerResult>(CREATE_CUSTOMER)

    function handleSubmit({name, birthdate}: any) {
        newCustomer({variables: {
            name: name, birthDate: birthdate
        }});
    }

    const renderForm = (props: FormRenderProps) => {
        return (
            <VFlow vSpacing={1}>
                {customer?.newCustomer &&
                    <Alert type='success'>
                        Cliente criado com sucesso !
                    </Alert>
                }
                <Heading level={1}>
                    Adicionando um novo cliente
                </Heading>
                <form onSubmit={props.handleSubmit}>
                    <Grid wrap>
                        <Cell xs={6}>
                            <Field
                                component={TextFieldAdapter}
                                name="name"
                                label="Nome"
                                placeholder="Nome do cliente"
                                required
                            />
                        </Cell>
                        <Cell xs={6}>
                            <Field
                                component={MaskedTextFieldAdapter}
                                name="birthdate"
                                guide
                                required
                                label="Data de Aniversário" 
                                mask={[/\d/,/\d/,'/',/\d/,/\d/,'/',/\d/,/\d/,/\d/,/\d/]}
                                placeholder="dd/mm/aaaa"
                                disabled={false}
                            />
                        </Cell>
                        <Cell xs={12}>
                            <HFlow justifyContent="flex-start">
                                <Button type="reset" kind="normal" size="small" onClick={props.form.reset}>
                                    Limpar
                                </Button>
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
                render={renderForm}
            />
        </HFlow>

    );
}