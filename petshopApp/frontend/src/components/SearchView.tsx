import React, { useEffect }  from 'react'
import { Person, PersonsByNameLikeResult} from '../types/Person';
import { PersonView } from './PersonView';
import { useLazyQuery} from '@apollo/client';

//  QUERIES:
import { PERSONS_BY_NAME_LIKE, PETS_BY_NAME_LIKE } from '../graphql/queries';
import { useState } from 'react';
import { Pet, PetsByNameLikeResult } from '../types/Pet';
import { PetView } from './PetView';
import "../styles/SearchView.css";

let timeout: NodeJS.Timeout;

export function SearchView(props: any) {

    const [ findPets, { data:pets} ] = useLazyQuery<PetsByNameLikeResult>(PETS_BY_NAME_LIKE);

    const [ findPersons, { data:persons} ] = useLazyQuery<PersonsByNameLikeResult>(PERSONS_BY_NAME_LIKE);

    // Controlling results
    const [ resultPersons, setPersons ] = useState<Person[]>([]);
    const [ resultPets, setPets ] = useState<Pet[]>([]);

    // Controlling check-boxes
    const [ isPetEnabled, setPetEnabled ] = useState(false);
    const [ isPersonEnabled, setPersonEnabled ] = useState(true);

    const [ text, setText ] = useState("");

    useEffect(() => {
        if (isPersonEnabled) {
            findPersons({variables: {name: text}})
        }
        if (isPetEnabled) {
            findPets({variables: {name: text}})
        }

        if (persons?.personsByNameLike) {
            setPersons(persons.personsByNameLike);
        }
        if (pets?.petsByNameLike) {
            setPets(pets.petsByNameLike);
        }
        
    }, [findPersons, findPets, isPersonEnabled, isPetEnabled, persons, pets, text]);

    return (
        <>
            <div className="search">
                <label>
                Busca:
                </label>
                <input type="text" className="busca" id="" onChange={(e) => {
                    const value = e.currentTarget.value;
                    clearTimeout(timeout);
                    timeout = setTimeout(() => {setText(value)}, 200);
                }}/>
                <label>
                    <input type="checkbox" checked={isPetEnabled} onChange={() => setPetEnabled(!isPetEnabled)}/>
                    Pet
                </label>
                <label>
                    <input  type="checkbox" checked={isPersonEnabled} onChange={() => setPersonEnabled(!isPersonEnabled)}/>
                    Pessoa
                </label>
                <div className="home">
                    {resultPersons ? resultPersons.map( (person) => (
                        <div key={person.id}>
                                <PersonView person={person}/>
                        </div>
                    )) : null }
                    {resultPets ? resultPets.map( (pet) => (
                        <div key={pet.id}>
                                <PetView pet={pet}/>
                        </div>
                    )) : null }
                </div>
            </div>
        </>
    );
}
