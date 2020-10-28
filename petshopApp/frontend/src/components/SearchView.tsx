import React  from 'react'
import { PersonsResult} from '../types/Person';
import { PersonView } from './PersonView';
import { useQuery } from '@apollo/client';

//  QUERIES:
import { PERSONS } from '../graphql/queries';

let timeout: NodeJS.Timeout;

const handleSearch = (evt: React.ChangeEvent<HTMLInputElement>) => {
  const value = evt.currentTarget.value;
  clearTimeout(timeout);
  timeout = setTimeout( () => console.log(value), 500)
}


export function SearchView(props: any) {
    const { data } = useQuery<PersonsResult>(PERSONS);

    if (data?.persons) {
        return (
            <>
                Busca: <input type="text" name="busca" id="" onChange={handleSearch}/>
                <div className="home">
                    {data.persons.map( (p) => (
                        <div key={p.id}>
                            <PersonView person={p}/>
                        </div>
                    ))}
                </div>
            </>
        );
    } else {
        return null;
    }
}