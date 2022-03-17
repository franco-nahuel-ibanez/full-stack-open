import {useState} from 'react';
import Weater from './Weater';

const ListCountries = ({countries}) => {
    const [query, setQuery] = useState('')
    
    return (
        <>
            <ul>
                {
                    countries.map( c => (
                        <li key={c.name}>
                            {c.name} 
                            <button onClick={() => setQuery(c.capital)}>
                                show
                            </button> 
                        </li>
                    ))
                }
            </ul>

            { query !== '' && ( < Weater query={query} />) }
        </>
    )
}

export default ListCountries;