import React from "react";
import { useMutation } from '@apollo/client';
import { CreatePersonResult } from "../types/Person";
import { CREATE_PERSON } from "../graphql/mutations";
import { useState } from "react";

export function CreatePersonView() {

    const [newPerson, {data}] = useMutation<CreatePersonResult>(CREATE_PERSON);

    const [name, setName] = useState("")

    const [birthDate, setBirthDate] = useState("")

    function handleSubmit(e: React.FormEvent, name: String, birthDate: String) {
        e.preventDefault();
        newPerson({variables: {name: name, birthDate: birthDate}});
        console.log(`[NEW] Person #${data?.newPerson.id} Name: ${data?.newPerson.name} BirthDate: ${data?.newPerson.birthDate}`)
    }

    return (
        <>
            <h2>Create a person</h2>
            <form onSubmit={(e) => handleSubmit(e, name, birthDate)}>
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