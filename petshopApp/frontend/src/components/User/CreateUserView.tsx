import React, { useState } from "react";
import { Alert, Button, Cell, Grid, Heading, HFlow, VFlow } from "bold-ui";
import { Field, Form, FormRenderProps } from "react-final-form";
import { css } from "@emotion/core";
import { TextFieldAdapter } from "../Adapters";
import { useCreateUserMutation } from "../../generated/graphql";
import { useHistory } from "react-router";

export function CreateUserView() {
  const history = useHistory();

  const [newUser, { data: user }] = useCreateUserMutation({
    onCompleted: () => {
      history.push("/");
    },
  });

  const [hide, setHide] = useState(true);

  function handleSubmit({ username, password, name }: any) {
    newUser({
      variables: {
        input: {
          username,
          password,
          name,
        },
      },
    });
  }

  const renderForm = (props: FormRenderProps) => {
    return (
      <VFlow vSpacing={1}>
        {user?.newUser && (
          <Alert type="success">Funcionário adicionado com sucesso !</Alert>
        )}
        <Heading level={1}>Adicionando um novo(a) funcionário(a)</Heading>
        <form onSubmit={props.handleSubmit}>
          <Grid wrap>
            <Cell xs={6}>
              <Field
                component={TextFieldAdapter}
                name="name"
                label="Nome"
                placeholder="Nome do funcionário"
                required
              />
            </Cell>
            <Cell xs={6}>
              <Field
                component={TextFieldAdapter}
                name="username"
                label="Usuário"
                placeholder="Nome de Usuário"
                required
              />
            </Cell>
            <Cell xs={6}>
              <Field
                component={TextFieldAdapter}
                name="password"
                required
                label="Senha"
                type={hide ? "password" : "text"}
                icon={hide ? "eyeHiddenFilled" : "eyeFilled"}
                onIconClick={() => setHide(!hide)}
              />
            </Cell>
            <Cell xs={12}>
              <HFlow justifyContent="flex-start">
                <Button
                  type="reset"
                  kind="normal"
                  size="small"
                  onClick={props.form.reset}
                >
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
  };

  return (
    <HFlow
      style={css`
        margin: 1rem;
      `}
      justifyContent="center"
    >
      <Form onSubmit={handleSubmit} render={renderForm} />
    </HFlow>
  );
}
