import axios from "axios";
import { useState, useEffect } from "react";
import Countries from "./Countries";
import Details from "./Details";
import ListCountries from "./ListCountries";


const App = () => {  
  const [countries, setCountries] = useState([])
  const [query, setQuery] = useState('');

  useEffect(() => {
    ( async () =>{
      const res = await axios.get('https://restcountries.com/v2/all');
      setCountries(res.data);
    })()

  }, [])
  
  const showCountries = query.length > 0
    ? countries.filter( c => c.name.toLowerCase().includes(query.toLocaleLowerCase()) )
    : null
  
  return (
    <div>
      <div>
        find countries <input type="text" value={query} onChange={e => setQuery(e.target.value)} />
      </div>

      {
        showCountries && (<Countries countries={showCountries} />)
      }
      
    </div>


  )
}

export default App
