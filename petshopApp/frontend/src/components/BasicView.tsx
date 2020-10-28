import React from 'react'
import { PersonsResult } from '../types/Person';
import { PersonView } from './PersonView';
// import { Pet } from '../types/Pet';

//  QUERIES:
import { PERSONS } from '../graphql/queries';

import { useQuery } from '@apollo/client';

export function BasicView(props: any) {
    const { data } = useQuery<PersonsResult>(PERSONS);

    if (data?.persons) {
        return (
            <>
                {data.persons.map( (p) => (
                    <div key={p.id}>
                        <PersonView id={p.id} name={p.name} birthDate={p.birthDate}/>
                    </div>
                ))}
            </>
        );
    } else {
        return null;
    }
}