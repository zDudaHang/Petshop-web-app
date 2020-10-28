import React, { useEffect } from "react";
import { PersonResult, UpdatePersonResult } from "../types/Person";
import { useQuery, useMutation } from '@apollo/client';
import { UPDATE_PERSON } from "../graphql/mutations";
import { useParams } from "react-router-dom";
import { PERSON } from "../graphql/queries";
import { useState } from "react";

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
                <form onSubmit={(e) => handleSubmit(e, personId, newName)}>
                    <label>
                        Nome:
                        <input type="text" name="newName" value={newName} onChange={e => setNewName(e.target.value)}/>
                    </label>
                    <label>
                        Data de Nascimento:
                        <input type="text" name="birthDate" value={data?.person.birthDate} disabled={true}/>
                    </label>
                    <input type="submit" value="Enviar"/>
                </form>

            </>
        );
    } else { 
        return (
            <>
            <h3>Loading...</h3>
            </>
        );
    }
}