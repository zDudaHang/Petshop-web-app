/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { useMutation } from '@apollo/client';
import { CREATE_PET } from "../../graphql/mutations";
import { CreatePetResult } from "../../types/Pet";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { CustomerResult } from "../../types/Customer";
import { CUSTOMER, SPECIES } from "../../graphql/queries";
import { Field, Form, FormRenderProps } from "react-final-form";
import { Alert, Button, Cell, Grid, Heading, HFlow, VFlow } from "bold-ui";
import { MaskedTextFieldAdapter, SelectAdapter, TextFieldAdapter } from '../Adapters';
import { ErrorView } from '../Infos/ErrorView';
import { SpeciesResult } from '../../types/Species';
import { LoadingView } from '../Infos/LoadingView';

export function CreatePetView() {

    const {ownerId} = useParams<{ownerId: string}>();

    const {loading:loadingOwner, data:owner} = useQuery<CustomerResult>(CUSTOMER, {
        variables: { id: ownerId }
    })

    const {loading:loadingSpecies, data:species} = useQuery<SpeciesResult>(SPECIES);

    const [newPet, {data:pet}] = useMutation<CreatePetResult>(CREATE_PET);

    if (loadingOwner) {
        return <LoadingView msg="Carregando os dados do dono..."/>
    }

    if (loadingSpecies) {
        return <LoadingView msg="Carregando as espécies..."/>
    }

    function handleSubmit({name, birthdate, species}: any) {
        if (species) {
            newPet({variables: {name: name, birthDate: birthdate, ownerId: ownerId, speciesId: species.id}})
        }
    }

    function itemToString(item: any) {
        if (item) {
            return `${item.name}`
        } else {
            return ""
        }
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
                        <Cell xs={6}>
                            <Field
                                component={SelectAdapter}
                                name="species"
                                label="Escolha uma espécie"
                                items={species?.allSpecies}
                                itemToString={itemToString}
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