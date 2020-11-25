import React from "react"
import { useQuery } from "@apollo/react-hooks";
import { css } from "@emotion/core";
import { Button, Cell, Grid, Heading, HFlow, VFlow } from "bold-ui";
import { Field, Form, FormRenderProps } from "react-final-form";
import { PETS, VETS } from "../../../graphql/queries";
import { PetsResult } from "../../../types/Pet";
import { VetsResult } from "../../../types/User";
import { isValidHour } from "../../../util/util";
import { DatePickerAdapter, SelectAdapter, TimeFieldAdapter } from "../../Adapters";
import { LoadingView } from "../../Infos/LoadingView";

export function AddApointmentView() {

    const { loading:loadingVets, data:vets } = useQuery<VetsResult>(VETS);

    const { loading:loadingPets, data:pets } = useQuery<PetsResult>(PETS);
    
    if (loadingVets) {
        return <LoadingView msg="Carregando os veterinários..."/>
    }

    if (loadingPets) {
        return <LoadingView msg="Carregando os pets..."/>
    }

    function handleSubmit(value: any) {
        console.log(value.date)
        console.log(value.time)
        console.log(isValidHour(value.time))
    }

    function itemToString(item: any) {
        return item ? `${item.name}` : ""
    }

    const renderForm = (props: FormRenderProps) => {

        const {errors, handleSubmit, form: { reset }} = props

        return (
            <VFlow vSpacing={1}>
                <Heading level={1}>
                    Adicionando uma nova consulta
                </Heading>
                <form onSubmit={handleSubmit}>
                    <Grid wrap>
                        <Cell xs={6}>
                            <Field
                                component={DatePickerAdapter}
                                name="date"
                                label="Data da consulta"
                                required
                                error={errors.date}
                            />
                        </Cell>
                        <Cell xs={6}>
                            <Field
                                component={TimeFieldAdapter}
                                name="time"
                                label="Horário da consulta"
                                required
                                error={errors.time}
                            />
                        </Cell>
                        <Cell xs={6}>
                            <Field
                                component={SelectAdapter}
                                name="vet"
                                label="Veterinário" 
                                items={vets?.vets}
                                itemToString={itemToString}
                                required
                            />
                            </Cell>
                        <Cell xs={6}>
                            <Field
                                component={SelectAdapter}
                                name="pet"
                                label="Pet" 
                                items={pets?.pets}
                                itemToString={itemToString}
                                required
                            />
                        </Cell>
                        <Cell xs={12}>
                            <HFlow justifyContent="flex-start">
                                <Button type="reset" kind="normal" size="small" onClick={reset}>
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
                validate={values => {
                    const errors: {date: String | undefined, time: String | undefined} = {date: undefined, time: undefined}
                    if (values.date < new Date(new Date().toDateString())) {
                        errors.date = 'A data precisa ser a partir de hoje'
                    }
                    if (!isValidHour(values.time)) {
                        console.log('Não é uma hora válida :(')
                        errors.time = 'Escolha um horário válido'
                    }
                    return errors;
                }}
            />
        </HFlow>

    );
}
