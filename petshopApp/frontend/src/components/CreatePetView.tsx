import React from "react";
import { useMutation } from '@apollo/client';
import { CREATE_PET } from "../graphql/mutations";
import { CreatePetResult } from "../types/Pet";
import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { PersonResult } from "../types/Person";
import { PERSON } from "../graphql/queries";

export function CreatePetView() {

    const history = useHistory();

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
        if (data?.person) {
            history.push(`/pets/${data?.person.id}`)
        }

    }

    return (
        <>
            <h2> Criando um pet para o(a) {data?.person.name} </h2>
            <form className="form" onSubmit={(e) => handleSubmit(e, name, birthDate, ownerId)}>
                <label>
                    Nome:
                </label>
                <input type="text" value={name} onChange={e => setName(e.target.value)}/>
                <label>
                    Data de Nascimento:
                </label>
                <input type="text" value={birthDate} onChange={e => setBirthDate(e.target.value)}/>
                <input type="submit" value="Enviar"/>
            </form>
        </>
    );
}