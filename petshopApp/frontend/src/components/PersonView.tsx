import React from 'react'
import { useQuery, useMutation } from '@apollo/client';
import { PERSON_PETS } from '../graphql/queries';
import { PersonPetsResult} from '../types/Pet';
import { PetView } from './PetView';
import { DELETE_PERSON } from '../graphql/mutations';
import { useHistory } from 'react-router-dom';
import { Person } from '../types/Person';

export interface PersonViewProps {
    person: Person;
}

export function PersonView(props: PersonViewProps) {

    const  {data} = useQuery<PersonPetsResult>(PERSON_PETS, 
        {variables: {id: props.person.id}
    });

    const [deletePerson] = useMutation(DELETE_PERSON);

    const history = useHistory();

    const routeUpdate = () => {
        history.push(`/updatePerson/${props.person.id}`)
    }

    const routeNewPet = () => {
        history.push(`/createPet/${props.person.id}`)
    }

    return(
        <div>
            <h3> Person #{props.person.id}</h3>
            <div> Name: {props.person.name} </div>
            <div> Birth Date: {props.person.birthDate} </div>

            <button onClick={routeUpdate}>Alterar</button>
            <button onClick={() => deletePerson( { variables: {id: props.person.id} } ) }>Deletar</button>
            <button onClick={routeNewPet}>Adicionar um pet</button>    
                {data?.personPets && data.personPets.map( (pet) => (
                    <div key={pet.id}>
                        <PetView pet={pet} owner={props.person}/>
                    </div>
                ))}
        </div>
    )

}


