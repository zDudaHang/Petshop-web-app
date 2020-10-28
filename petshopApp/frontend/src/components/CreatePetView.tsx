import React from "react";
import { useMutation } from '@apollo/client';
import { CREATE_PET } from "../graphql/mutations";
import { CreatePetResult } from "../types/Pet";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { PersonResult } from "../types/Person";
import { PERSON } from "../graphql/queries";

export function CreatePetView() {

    const {ownerId} = useParams<{ownerId: string}>();

    const {data} = useQuery<PersonResult>(PERSON, {
        variables: { id: ownerId }
    })

    const [newPet] = useMutation<CreatePetResult>(CREATE_PET);

    const [name, setName] = useState("")

    const [birthDate, setBirthDate] = useState("")

    function handleSubmit(e: React.FormEvent, name: String, birthDate: String, ownerId: String) {
        e.preventDefault();
        newPet({variables: {name: name, birthDate: birthDate, ownerId: ownerId}})

    }

    return (
        <>
            <h2> Criando um pet para {data?.person.name} </h2>
            <form onSubmit={(e) => handleSubmit(e, name, birthDate, ownerId)}>
                <label>
                    Nome:
                    <input type="text" name="name" value={name} onChange={e => setName(e.target.value)}/>
                </label> <br/>
                <label>
                    Data de Nascimento:
                    <input type="text" name="birthDate" value={birthDate} onChange={e => setBirthDate(e.target.value)}/>
                </label>
                <input type="submit" value="Enviar"/>
            </form>
        </>
    );
}