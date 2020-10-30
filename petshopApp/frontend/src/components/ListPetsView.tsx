import React from "react";
import { PersonPetsResult } from "../types/Pet";
import { useQuery } from '@apollo/client';
import { useParams } from "react-router-dom";
import { PERSON, PERSON_PETS } from "../graphql/queries";
import { PetView } from "./PetView";
import { PersonResult } from "../types/Person";
import "../styles/ListPetView.css";

export function ListPetsView() {

    const {ownerId} = useParams<{ownerId: string}>();

    const { data } = useQuery<PersonPetsResult>(PERSON_PETS, {
        variables: { id: ownerId }
    });

    const { data:owner } = useQuery<PersonResult>(PERSON, {
        variables: { id: ownerId }
    });

    if (data?.personPets && owner?.person) {
        if (data.personPets.length > 0) {
            return (
                <>
                    <h1> Pets do(a) {owner.person.name} </h1>
                        {data.personPets.map( (pet) => (
                            <div key={pet.id}>
                                <PetView pet={pet}/>
                            </div>
                        ))}
                </>
            );
        } else {
            return (
                <>
                    <h1>{owner.person.name} não tem pets </h1>
                </>
            );
        }
    }

    return (
        <h1> Carregando... </h1>
    );

}