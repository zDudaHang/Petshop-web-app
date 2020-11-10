import React from "react";
import { useMutation } from '@apollo/client';
import { CreateCustomerResult } from "../../types/Customer";
import { CREATE_CUSTOMER } from "../../graphql/mutations";
import { useState } from "react";
// import { useHistory } from "react-router-dom";

export function CreatePersonView() {

    // const history = useHistory();

    const [newCustomer, ] = useMutation<CreateCustomerResult>(CREATE_CUSTOMER);

    const [name, setName] = useState("")

    const [birthDate, setBirthDate] = useState("")

    function handleSubmit(e: React.FormEvent, name: String, birthDate: String) {
        e.preventDefault();
        newCustomer({variables: {name: name, birthDate: birthDate}});
        // history.push("/search");
    }

    return (
        <>
            <h1>Adicionar um novo cliente</h1>
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