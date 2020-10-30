import React from "react";
import { useMutation } from '@apollo/client';
import { CreatePersonResult } from "../types/Person";
import { CREATE_PERSON } from "../graphql/mutations";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export function CreatePersonView() {

    const history = useHistory();

    const [newPerson, {data}] = useMutation<CreatePersonResult>(CREATE_PERSON);

    const [name, setName] = useState("")

    const [birthDate, setBirthDate] = useState("")

    function handleSubmit(e: React.FormEvent, name: String, birthDate: String) {
        e.preventDefault();
        newPerson({variables: {name: name, birthDate: birthDate}});
    }

    return (
        <>
            <h1>Adicionar uma nova pessoa</h1>
            <form className="form" onSubmit={(e) => handleSubmit(e, name, birthDate)}>
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