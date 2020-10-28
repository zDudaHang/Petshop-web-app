import React, { useEffect } from "react";
import { PetResult, UpdatePetResult } from "../types/Pet";
import { useQuery, useMutation } from '@apollo/client';
import { UPDATE_PET } from "../graphql/mutations";
import { useParams } from "react-router-dom";
import { PET } from "../graphql/queries";
import { useState } from "react";

export function UpdatePetView() {

    const {petId} = useParams<{petId: string}>();

    const { data } = useQuery<PetResult>(PET, {
        variables: { id: petId }
    });

    const [newName, setNewName] = useState("")

    const [updatePet, { data:newPet }] = useMutation<UpdatePetResult>(UPDATE_PET);

    // Apos a primeira renderizacao vou alterar o newName
    useEffect( () => {
        if(data?.pet) {
            setNewName(data.pet.name)
        }
    }, [data])

    function handleSubmit(e: React.FormEvent, petId: String, newName: String) {
        e.preventDefault();
        updatePet({variables: {id: petId, newName: newName}})
        console.log(`The pet #${newPet?.updatePet.id} has a new name ${newPet?.updatePet.name}`)
    }

    if (data?.pet) {
        return (
            <>
                <form onSubmit={(e) => handleSubmit(e, petId, newName)}>
                    <label>
                        Nome:
                        <input type="text" name="newName" value={newName} onChange={e => setNewName(e.target.value)}/>
                    </label>
                    <label>
                        Data de Nascimento:
                        <input type="text" name="birthDate" value={data?.pet.birthDate} disabled={true}/>
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