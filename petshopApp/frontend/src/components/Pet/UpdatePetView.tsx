import React, { useEffect } from "react";
import { PetResult, UpdatePetResult } from "../../types/Pet";
import { useQuery, useMutation } from '@apollo/client';
import { UPDATE_PET } from "../../graphql/mutations";
import { useParams } from "react-router-dom";
import { PET } from "../../graphql/queries";
import { useState } from "react";
import { formatDate } from "../../util/util";

import "../../styles/Form.css";

export function UpdatePetView() {

    const {petId} = useParams<{petId: string}>();

    const { loading, data } = useQuery<PetResult>(PET, {
        variables: { id: petId }
    });

    const [newName, setNewName] = useState("")

    const [updatePet, ] = useMutation<UpdatePetResult>(UPDATE_PET);

    // Apos a primeira renderizacao vou alterar o newName
    useEffect( () => {
        if(data?.pet) {
            setNewName(data.pet.name)
        }
    }, [data])

    function handleSubmit(e: React.FormEvent, petId: String, newName: String) {
        e.preventDefault();
        updatePet({variables: {id: petId, newName: newName}})
    }

    if (data?.pet) {
        return (
            <>
                <h1> Atualizando dados do(a) {data.pet.name}</h1>
                <form className="form" onSubmit={(e) => handleSubmit(e, petId, newName)}>
                    <label>
                        Nome:
                    </label>
                    <input type="text" value={newName} onChange={e => setNewName(e.target.value)}/>
                    <label>
                        Data de Nascimento:
                    </label>
                    <input type="text" value={formatDate(data.pet.birthDate)} disabled={true}/>
                    <input type="submit" value="Enviar"/>
                </form>

            </>
        );
    } else { 
        if (loading) {   
            return (
                <h1> Carregando... </h1>
            );
        }

        else {
            return (
                <h1> Opa, algo deu errado :( </h1>
            );
        }
    }
}