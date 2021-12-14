import { Alert, Button, VFlow } from "bold-ui";
import React, { useState } from "react";
import { Field, Form, FormRenderProps } from "react-final-form";
import { useHistory } from "react-router";
import { LoginMutation, useLoginMutation } from "../../generated/graphql";
import { TextFieldAdapter } from "../Adapters";
import { LOCAL_STORAGE_AUTH_TOKEN, LoginFormModel } from "./model";

export function LoginView() {
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const history = useHistory();

  const [login] = useLoginMutation({
    onError: () => {
      setShowAlert(true);
    },
    onCompleted: (data: LoginMutation) => {
      data.login?.token &&
        window.localStorage.setItem(LOCAL_STORAGE_AUTH_TOKEN, data.login.token);
      history.push("/searchCustomer");
    },
  });

  const handleSubmit = (values: LoginFormModel) =>
    login({
      variables: { input: { ...values } },
    });

  const renderForm = ({ handleSubmit }: FormRenderProps<LoginFormModel>) => {
    return (
      <form onSubmit={handleSubmit}>
        <VFlow>
          <Field
            component={TextFieldAdapter}
            name="username"
            label="Usuário"
            required
          />
          <Field
            component={TextFieldAdapter}
            name="password"
            label="Senha"
            required
          />
          <Button type="submit" kind="primary" size="small">
            Acessar
          </Button>
        </VFlow>
      </form>
    );
  };

  return (
    <VFlow style={{ margin: "1rem" }}>
      {showAlert && (
        <Alert type="danger" onCloseClick={() => setShowAlert(false)}>
          Credenciais inválidas, tente novamente
        </Alert>
      )}
      <Form<LoginFormModel> onSubmit={handleSubmit} render={renderForm} />
    </VFlow>
  );
}
