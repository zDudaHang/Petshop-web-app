import React, { useEffect } from "react";
import { CustomerResult, UpdateCustomerResult } from '../../types/Customer';
import { useQuery, useMutation } from '@apollo/client';
import { UPDATE_CUSTOMER } from "../../graphql/mutations";
import { useParams } from "react-router-dom";
import { CUSTOMER } from "../../graphql/queries";
import { useState } from "react";
import { formatDate } from "../../util/util";

import "../../styles/Form.css"

export function UpdateCustomerView() {

    const {customerId} = useParams<{customerId: string}>();

    const { loading, data } = useQuery<CustomerResult>(CUSTOMER, {
        variables: { id: customerId }
    });

    const [newName, setNewName] = useState("")

    const [updateCustomer, ] = useMutation<UpdateCustomerResult>(UPDATE_CUSTOMER);

    // Apos a primeira renderizacao vou alterar o newName
    useEffect( () => {
        if(data?.customer) {
            setNewName(data.customer.name)
        }
    }, [data])

    function handleSubmit(e: React.FormEvent, personId: String, newName: String) {
        e.preventDefault();
        updateCustomer({variables: {id: personId, newName: newName}})
    }

    if (data?.customer) {
        return (
            <>
                <h1> Atualizando dados do(a) {data.customer.name}</h1>
                <form className="form" onSubmit={(e) => handleSubmit(e, customerId, newName)}>
                    <label>
                        Nome:
                    </label>
                    <input type="text" value={newName} onChange={e => setNewName(e.target.value)}/>
                    <label>
                        Data de Nascimento:
                    </label>
                    <input type="text" value={formatDate(data.customer.birthDate)} disabled={true}/>
                    <input type="submit" value="Enviar"/>
                </form>

            </>
        );
    } else { 
        if (loading) 
            return (
                <h1> Carregando... </h1>
            );
        else {
            return (
                <h1> Opa, aconteceu algo errado :( </h1>
            );
        }
    }
}