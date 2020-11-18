import { useMutation, useQuery } from "@apollo/react-hooks";
import { css } from "@emotion/core";
import { Alert, Button, Cell, Grid, Heading, HFlow, VFlow } from "bold-ui"
import React from "react"
import { Field, Form, FormRenderProps } from "react-final-form";
import { useParams } from "react-router-dom"
import { ADD_DEBT } from "../../graphql/mutations";
import { CUSTOMER } from "../../graphql/queries";
import { CustomerAddDebtResult, CustomerResult } from "../../types/Customer";
import { TextFieldAdapter } from "../Adapters";
import { ErrorView } from "../ErrorView";

export function AddDebtView() {

    const { customerId } = useParams<{customerId: string}>();

    const { loading, data } = useQuery<CustomerResult>(CUSTOMER, { 
        variables: { id: customerId }
    });

    const [addDebt, {data:customer}] = useMutation<CustomerAddDebtResult>(ADD_DEBT);

    function handleSubmit({value}: any) {
        addDebt({variables: {
            id: customerId,
            value: value
        }})
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
                    <Heading level={1}>
                        Adicionando um valor a pagar para {data.customer.name}
                    </Heading>
                    <form onSubmit={props.handleSubmit}>
                        <Grid wrap>
                            <Cell xs={12}>
                                <Field
                                    component={TextFieldAdapter}
                                    name="value"
                                    label="Valor a ser adicionado"
                                    placeholder="Digite um valor"
                                    required
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
            );
        }

        return (
            <VFlow>
                {customer?.addDebt &&
                    <Alert type='success'>
                        Valor adicionado com sucesso !
                    </Alert>
                }
                <HFlow style={css`margin: 1rem`} justifyContent="center">
                    <Form
                        onSubmit={handleSubmit}
                        initialValues={ { name: data.customer.name } }
                        render={renderForm}
                        validate={values => {
                            const errors: {value: String | undefined } = {value: undefined}
                            if (values.value) {
                                if (isNaN(values.value)) {
                                    errors.value = 'Precisa ser um número'
                                }
                                if (values.value[0] === '-') {
                                    errors.value = 'Precisa ser um número positivo'
                                }
                            }
                            return errors
                        }}
                    />
                </HFlow>
            </VFlow>
        );
    } else {
        return (
            <ErrorView/>
    );}
}