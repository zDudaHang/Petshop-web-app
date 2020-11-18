/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useMutation } from '@apollo/client';
import { CREATE_PET } from "../../graphql/mutations";
import { CreatePetResult } from "../../types/Pet";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { CustomerResult } from "../../types/Customer";
import { CUSTOMER } from "../../graphql/queries";
import { Field, Form, FormRenderProps } from "react-final-form";
import { Alert, Button, Cell, Grid, Heading, HFlow, VFlow } from "bold-ui";
import { MaskedTextFieldAdapter, TextFieldAdapter } from '../Adapters';
import { ErrorView } from '../ErrorView';

export function CreatePetView() {

    const {ownerId} = useParams<{ownerId: string}>();

    const {loading, data: owner} = useQuery<CustomerResult>(CUSTOMER, {
        variables: { id: ownerId }
    })

    const [newPet, {data:pet}] = useMutation<CreatePetResult>(CREATE_PET);

    function handleSubmit({name, birthdate}: any) {
        newPet({variables: {name: name, birthDate: birthdate, ownerId: ownerId}})
    }

    const renderForm = (props: FormRenderProps) => {
        return (
            <VFlow>
                {pet?.newPet &&
                    <Alert type='success'>
                        Pet criado com sucesso !
                    </Alert>
                }
                <Heading level={1}>
                    Criando um pet para o(a) {owner?.customer.name}
                </Heading>
                <form onSubmit={props.handleSubmit}>
                    <Grid wrap>
                        <Cell xs={6}>
                            <Field
                                component={TextFieldAdapter}
                                name="name"
                                label="Nome"
                                placeholder="Nome do Pet"
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

    if (loading) {
        return (
            <VFlow>
                <Heading style={{textAlign: 'center'}} color="normal" level={1}>
                    Carregando...
                </Heading>
            </VFlow>
        );
    } else {
        return (
            <HFlow style={css`margin: 1rem`} justifyContent="center">
                {owner  ? 
                    <Form
                        onSubmit={handleSubmit}
                        render={renderForm}/>
                :
                    <ErrorView/>
                }
            </HFlow>
        );
    }
}