/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react'
import { useQuery } from '@apollo/client';
import { PERSON_PETS } from '../graphql/queries';
import { PersonPetsResult} from '../types/Pet';
import { PetView } from './PetView';

export interface PersonViewProps {
    id: number,
    name: string,
    birthDate: string
}

export function PersonView(props: PersonViewProps) {
    const  {data} = useQuery<PersonPetsResult>(PERSON_PETS, 
        {variables: {id: props.id}
    });

    console.log(`Data from person#${props.id}: ${data}\n Data.pets: ${data?.personPets}`)

    let timeout: NodeJS.Timeout;

    const handleSearch = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const value = evt.currentTarget.value;
        clearTimeout(timeout);
        timeout = setTimeout( () => console.log(value), 500)
    }

    return(
        <div css={css`
            background-color: grey;
        `}>
            <h3> Person #{props.id}</h3>
            <div> Name: {props.name} </div>
            <div> Birth Date: {props.birthDate} </div>
            Busca: <input type="text" name="busca" id="" onChange={handleSearch}/>
            <button onClick={() => console.log(`Alterar da pessoa c/ ID: ${props.id}`)}>Alterar</button>
            <button onClick={() => console.log(`Deletar a pessoa c/ ID: ${props.id}`)}>Deletar</button>
                {data?.personPets && data.personPets.map( (pet) => (
                    <div key={pet.id}>
                        <PetView id={pet.id} name={pet.name} birthDate={pet.birthDate}/>
                    </div>
                ))}
        </div>
    )

}


