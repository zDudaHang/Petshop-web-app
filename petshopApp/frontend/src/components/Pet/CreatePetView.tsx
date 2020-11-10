import React from "react";
import { useMutation } from '@apollo/client';
import { CREATE_PET } from "../../graphql/mutations";
import { CreatePetResult } from "../../types/Pet";
import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { CustomerResult } from "../../types/Customer";
import { CUSTOMER } from "../../graphql/queries";

export function CreatePetView() {

    const history = useHistory();

    const {ownerId} = useParams<{ownerId: string}>();

    const {data} = useQuery<CustomerResult>(CUSTOMER, {
        variables: { id: ownerId }
    })

    const [newPet] = useMutation<CreatePetResult>(CREATE_PET);

    const [name, setName] = useState("")

    const [birthDate, setBirthDate] = useState("")

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        newPet({variables: {name: name, birthDate: birthDate, ownerId: ownerId}})
        if (data?.customer) {
            history.push(`/pets/${data?.customer.id}`)
        }

    }

    // const input1: InputProps = {label: "Nome", type: "text", value:"name", onChange:(e) => setName(e}

    return (
        <>
            <h2> Criando um pet para o(a) {data?.customer.name}" </h2>
            <form className="form" onSubmit={(e) => handleSubmit(e)}>
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