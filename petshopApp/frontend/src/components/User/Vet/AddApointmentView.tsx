import React from "react"
import { useMutation, useQuery } from "@apollo/react-hooks"
import { css } from "@emotion/core"
import { Alert, Button, Cell, Grid, Heading, HFlow, VFlow } from "bold-ui"
import { Field, Form, FormRenderProps } from "react-final-form"
import { PETS, VETS } from "../../../graphql/queries"
import { PetsResult } from "../../../types/Pet"
import { VetsResult } from "../../../types/User"
import { generateValidHours } from "../../../util/date"
import { DatePickerAdapter, SelectAdapter } from "../../Adapters"
import { LoadingView } from "../../Infos/LoadingView"
import { CreateAppointmentResult } from "../../../types/Appointment"
import { ADD_APPOINTMENT } from "../../../graphql/mutations"

export function AddApointmentView() {
  const { loading: loadingVets, data: vets } = useQuery<VetsResult>(VETS)

  const { loading: loadingPets, data: pets } = useQuery<PetsResult>(PETS)

  const [newAppointment, { data: appointment }] =
    useMutation<CreateAppointmentResult>(ADD_APPOINTMENT)

  if (loadingVets) {
    return <LoadingView msg="Carregando os veterinários..." />
  }

  if (loadingPets) {
    return <LoadingView msg="Carregando os pets..." />
  }

  function handleSubmit({ date, time, vet, pet }: any) {
    newAppointment({
      variables: {
        userId: vet.id,
        petId: pet.id,
        date: date.toLocaleDateString("br"),
        time: time,
      },
    })
  }

  function itemToString(item: any) {
    return item ? `${item.name}` : ""
  }

  const renderForm = (props: FormRenderProps) => {
    const {
      errors,
      handleSubmit,
      form: { reset },
    } = props

    return (
      <VFlow vSpacing={1}>
        {appointment?.newAppointment && (
          <Alert type="success">Consulta adicionada com sucesso !</Alert>
        )}
        <Heading level={1}>Adicionando uma nova consulta</Heading>
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
                component={SelectAdapter}
                name="time"
                label="Horário da consulta"
                items={generateValidHours()}
                itemsToString={(item: string) => item}
                required
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
    <HFlow
      style={css`
        margin: 1rem;
      `}
      justifyContent="center"
    >
      <Form
        onSubmit={handleSubmit}
        render={renderForm}
        validate={(values) => {
          const errors: { date: String | undefined } = { date: undefined }
          if (values.date < new Date(new Date().toDateString())) {
            errors.date = "A data precisa ser a partir de hoje"
          }
          return errors
        }}
      />
    </HFlow>
  )
}
