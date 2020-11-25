import React from "react";
import { PetResult, UpdatePetResult } from "../../types/Pet";
import { useQuery, useMutation } from '@apollo/client';
import { UPDATE_PET } from "../../graphql/mutations";
import { useParams } from "react-router-dom";
import { PET } from "../../graphql/queries";
import { formatDate } from "../../util/util";
import { Alert, Button, Cell, Grid, Heading, HFlow, VFlow } from "bold-ui";
import { Field, Form, FormRenderProps } from "react-final-form";
import { MaskedTextFieldAdapter, TextFieldAdapter } from "../Adapters";
import { css } from "@emotion/core";
import { ErrorView } from "../Infos/ErrorView";

export function UpdatePetView() {

    const {petId} = useParams<{petId: string}>();

    const { loading, data } = useQuery<PetResult>(PET, {
        variables: { id: petId }
    });

    const [updatePet, {data:pet}] = useMutation<UpdatePetResult>(UPDATE_PET);


    function handleSubmit({name}: any) {
        updatePet({variables: {id: petId, newName: name}})
    }

    if (loading) {
        return (
            <VFlow>
                <Heading style={css`text-align: center`} color="normal" level={1}>
                    Carregando...
                </Heading>
            </VFlow>
        );
    }

    if (data?.pet) {
        const renderForm = (props: FormRenderProps) => {
            return (
                <VFlow vSpacing={1}>
                    {pet?.updatePet &&
                        <Alert type='success'>
                            Pet alterado com sucesso !
                        </Alert>
                    }
                    <Heading level={1}>
                        Alterando os dados do(a) pet {data.pet.name}
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
                    initialValues={ { name: data.pet.name , birthdate: formatDate(data.pet.birthDate) } }
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