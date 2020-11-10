import React from 'react'
import { useMutation } from '@apollo/client';
import { DELETE_CUSTOMER } from '../../graphql/mutations';
import { useHistory } from 'react-router-dom';
import { Customer } from '../../types/Customer';
import { formatDate } from "../../util/util";
import "../../styles/CustomerView.css"

export interface CustomerViewProps {
    customer: Customer;
}

export function CustomerView(props: CustomerViewProps) {

    const [deleteCustomer] = useMutation(DELETE_CUSTOMER);

    const history = useHistory();

    const routeUpdate = () => {
        history.push(`/updateCustomer/${props.customer.id}`)
    }

    const routeNewPet = () => {
        history.push(`/createPet/${props.customer.id}`)
    }

    const routePets = () => {
        history.push(`/pets/${props.customer.id}`)
    }

    return(
        <div className="customerView">
            <div className="name"> {props.customer.name} </div>
            <div className="info"> Data de Nascimento: {formatDate(props.customer.birthDate)} </div>
            <button className="alterar" onClick={routeUpdate}>Alterar</button>
            <button className="deletar"onClick={() => deleteCustomer( { variables: {id: props.customer.id} } ) }>Deletar</button>
            <button onClick={routePets}>Ver pets</button>
            <button onClick={routeNewPet}>Adicionar um pet</button>    
        </div>
    )

}


