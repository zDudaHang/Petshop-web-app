import React from 'react'
import { useMutation } from '@apollo/client';
import { DELETE_PET } from '../../graphql/mutations';
import { useHistory } from 'react-router-dom';
import { Pet } from '../../types/Pet';
import { formatDate } from "../../util/util";

import "../../styles/PetView.css"

export interface PetViewProps {
    pet: Pet;
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
                <div className="name"> {props.pet.name} </div>
                <div className="info"> Data de Nascimento: {formatDate(props.pet.birthDate)} </div>
                <button className="alterar" onClick={routeUpdate}>Alterar</button>
                <button className="deletar" onClick={() => deletePet( { variables: {id: props.pet.id} } ) }>Deletar</button>
            
            </div>
        </>
        )
}
