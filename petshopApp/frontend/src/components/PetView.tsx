import React from 'react'
import { useMutation } from '@apollo/client';
import { DELETE_PET } from '../graphql/mutations';
import { Person } from '../types/Person';
import { useHistory } from 'react-router-dom';
import { Pet } from '../types/Pet';
import "../styles/PetView.css"

export interface PetViewProps {
    pet: Pet;
    owner: Person;
}

export function PetView(props: PetViewProps) {

    const history = useHistory();

    const [deletePet] = useMutation(DELETE_PET);

    const routeUpdate = () => {
        history.push(`/updatePet/${props.pet.id}`)
    }

    return(
        <>
            <div className="petView">
                <h3> Pet #{props.pet.id} </h3>
                <div> Name: {props.pet.name} </div>
                <div> Birth Date: {props.pet.birthDate} </div>
                <button onClick={routeUpdate}>Alterar</button>
                <button onClick={() => deletePet( { variables: {id: props.pet.id} } ) }>Deletar</button>
            </div>
        </>
        )
}
