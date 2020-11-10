import React from "react";
import { CustomerPetsResult } from "../types/Pet";
import { useQuery } from '@apollo/client';
import { useParams } from "react-router-dom";
import { CUSTOMER, CUSTOMER_PETS } from "../graphql/queries";
import { PetView } from "./Pet/PetView";
import { CustomerResult } from "../types/Customer";
import "../styles/ListPetView.css";

export function ListPetsView() {

    const { ownerId } = useParams<{ownerId: string}>();

    const { data } = useQuery<CustomerPetsResult>(CUSTOMER_PETS, {
        variables: { id: ownerId }
    });

    const { data:owner } = useQuery<CustomerResult>(CUSTOMER, {
        variables: { id: ownerId }
    });

    if (data?.customerPets && owner?.customer) {
        if (data.customerPets.length > 0) {
            return (
                <>
                    <h1> Pets do(a) {owner.customer.name} </h1>
                        {data.customerPets.map( (pet) => (
                            <div key={pet.id}>
                                <PetView pet={pet}/>
                            </div>
                        ))}
                </>
            );
        } else {
            return (
                <>
                    <h1>{owner.customer.name} não tem pets </h1>
                </>
            );
        }
    } else {
        return (
            <>
                <h1>Opa, aconteceu algo errado :( </h1>
            </>
        );
    }


}