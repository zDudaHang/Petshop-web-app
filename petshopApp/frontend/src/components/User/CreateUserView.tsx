import React, { useState } from "react";
import { useMutation } from '@apollo/client';
import { CREATE_USER } from "../../graphql/mutations";
import { Alert, Button, Cell, Grid, Heading, HFlow, VFlow } from "bold-ui";
import { Field, Form, FormRenderProps } from "react-final-form";
import { css } from "@emotion/core";
import { RadioFieldAdapter, TextFieldAdapter } from "../Adapters";
import { CreateUserResult } from "../../types/User";

export function CreateUserView() {

    const [newUser, {data:user}] = useMutation<CreateUserResult>(CREATE_USER)

    const [hide, setHide] = useState(true)

    function handleSubmit({username, password, userType, name}: any) {
        newUser({variables: {
            username: username,
            password: password,
            isAdmin: (userType === "isAdmin" ? true : false),
            isVet: (userType === "isVet" ? true : false),
            name: name,
            
        }})
    }

    const renderForm = (props: FormRenderProps) => {
        return (
            <VFlow vSpacing={1}>
                {user?.newUser &&
                    <Alert type='success'>
                        Funcionário adicionado com sucesso !
                    </Alert>
                }
                <Heading level={1}>
                    Adicionando um novo(a) funcionário(a)
                </Heading>
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
                                <Field
                                    component={RadioFieldAdapter}
                                    name="userType"
                                    value="isVet"
                                    required
                                    label="Veterinário"
                                    type="radio"
                                />
                                <Field
                                    component={RadioFieldAdapter}
                                    name="userType"
                                    value="isAdmin"
                                    required
                                    label="Administrador"
                                    type="radio"
                                />
                            </HFlow>
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