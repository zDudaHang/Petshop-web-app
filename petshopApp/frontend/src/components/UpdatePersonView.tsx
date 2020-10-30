import React, { useEffect } from "react";
import { PersonResult, UpdatePersonResult } from "../types/Person";
import { useQuery, useMutation } from '@apollo/client';
import { UPDATE_PERSON } from "../graphql/mutations";
import { useParams } from "react-router-dom";
import { PERSON } from "../graphql/queries";
import { useState } from "react";
import "../styles/Form.css"
import { formatDate } from "../util";

export function UpdatePersonView() {

    const {personId} = useParams<{personId: string}>();

    const { data } = useQuery<PersonResult>(PERSON, {
        variables: { id: personId }
    });

    const [newName, setNewName] = useState("")

    const [updatePet, { data:newPerson }] = useMutation<UpdatePersonResult>(UPDATE_PERSON);

    // Apos a primeira renderizacao vou alterar o newName
    useEffect( () => {
        if(data?.person) {
            setNewName(data.person.name)
        }
    }, [data])

    function handleSubmit(e: React.FormEvent, personId: String, newName: String) {
        e.preventDefault();
        updatePet({variables: {id: personId, newName: newName}})
        console.log(`The person #${newPerson?.updatePerson.id} has a new name ${newPerson?.updatePerson.name}`)
    }

    if (data?.person) {
        return (
            <>
                <h1> Atualizando dados do(a) {data.person.name}</h1>
                <form className="form" onSubmit={(e) => handleSubmit(e, personId, newName)}>
                    <label>
                        Nome:
                    </label>
                    <input type="text" value={newName} onChange={e => setNewName(e.target.value)}/>
                    <label>
                        Data de Nascimento:
                    </label>
                    <input type="text" value={formatDate(data.person.birthDate)} disabled={true}/>
                    <input type="submit" value="Enviar"/>
                </form>

            </>
        );
    } else { 
        return (
            <h1> Carregando... </h1>
        );
    }
}