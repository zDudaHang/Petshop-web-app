import React from 'react'
import { useMutation } from '@apollo/client';
import { DELETE_PERSON } from '../graphql/mutations';
import { useHistory } from 'react-router-dom';
import { Person } from '../types/Person';
import { formatDate } from '../util';
import "../styles/PersonView.css"

export interface PersonViewProps {
    person: Person;
}

export function PersonView(props: PersonViewProps) {

    const [deletePerson] = useMutation(DELETE_PERSON);

    const history = useHistory();

    const routeUpdate = () => {
        history.push(`/updatePerson/${props.person.id}`)
    }

    const routeNewPet = () => {
        history.push(`/createPet/${props.person.id}`)
    }

    const routePets = () => {
        history.push(`/pets/${props.person.id}`)
    }

    return(
        <div className="personView">
            <div className="name"> {props.person.name} </div>
            <div className="info"> Data de Nascimento: {formatDate(props.person.birthDate)} </div>
            <button className="alterar" onClick={routeUpdate}>Alterar</button>
            <button className="deletar"onClick={() => deletePerson( { variables: {id: props.person.id} } ) }>Deletar</button>
            <button onClick={routePets}>Ver pets</button>
            <button onClick={routeNewPet}>Adicionar um pet</button>    
        </div>
    )

}


