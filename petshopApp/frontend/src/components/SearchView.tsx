import React, { useEffect }  from 'react'
import { useQuery } from '@apollo/client';
import { Customer, CustomersByNameLikeResult} from '../types/Customer';
import { CustomerView } from './Customer/CustomerView';
import { useLazyQuery} from '@apollo/client';

//  QUERIES:
import { CUSTOMERS_BY_NAME_LIKE, PETS_BY_NAME_LIKE, USER } from '../graphql/queries';
import { useState } from 'react';
import { Pet, PetsByNameLikeResult } from '../types/Pet';
import { PetView } from './Pet/PetView';
import "../styles/SearchView.css";
import { useParams } from 'react-router-dom';
import { UserResult } from '../types/User';

let timeout: NodeJS.Timeout;

export interface SearchViewProps {
    isLoggedIn: boolean,
    isAdmin: boolean | undefined
}

export function SearchView(props: SearchViewProps) {

    const { userId } = useParams<{userId: string}>();

    const { data } = useQuery<UserResult>(USER, {
        variables: { id: userId }
    });

    useEffect(() => {
        console.log(`[SEARCH VIEW] userId: ${userId} DATA:`)
        console.log(data)
    }, [data, userId])

    const [ findPets, { data:pets} ] = useLazyQuery<PetsByNameLikeResult>(PETS_BY_NAME_LIKE);

    const [ findCustomers, { data:customers} ] = useLazyQuery<CustomersByNameLikeResult>(CUSTOMERS_BY_NAME_LIKE);

    // Controlling results
    const [ resultCustomers, setCustomers ] = useState<Customer[]>([]);
    const [ resultPets, setPets ] = useState<Pet[]>([]);

    // Controlling check-boxes
    const [ isPetEnabled, setPetEnabled ] = useState(false);
    const [ isCustomerEnabled, setCustomerEnabled ] = useState(true);

    const [ text, setText ] = useState("");

    useEffect(() => {
        if (isCustomerEnabled) {
            findCustomers({variables: {name: text}})
        }
        if (isPetEnabled) {
            findPets({variables: {name: text}})
        }

        if (customers?.customersByNameLike) {
            setCustomers(customers.customersByNameLike);
        }
        if (pets?.petsByNameLike) {
            setPets(pets.petsByNameLike);
        }
        
    }, [customers, findCustomers, findPets, isCustomerEnabled, isPetEnabled, pets, props, resultCustomers, resultPets, text]);

    return (
        <>
            <div className="search">
                <label>
                Busca:
                </label>
                <input type="text" className="busca" id="" onChange={(e) => {
                    const value = e.currentTarget.value;
                    clearTimeout(timeout);
                    timeout = setTimeout(() => {setText(value)}, 200);
                }}/>
                <label>
                    <input type="checkbox" checked={isPetEnabled} onChange={() => setPetEnabled(!isPetEnabled)}/>
                    Pet
                </label>
                <label>
                    <input  type="checkbox" checked={isCustomerEnabled} onChange={() => setCustomerEnabled(!isCustomerEnabled)}/>
                    Cliente
                </label>
                <div className="home">
                    {resultCustomers ? resultCustomers.map( (customer) => (
                        <div key={customer.id}>
                                <CustomerView customer={customer}/>
                        </div>
                    )) : null }
                    {resultPets ? resultPets.map( (pet) => (
                        <div key={pet.id}>
                                <PetView pet={pet}/>
                        </div>
                    )) : null }
                </div>
            </div>
        </>
    );
}
