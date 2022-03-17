import Details from "./Details";
import ListCountries from "./ListCountries"


const Countries = ({countries}) => {
    
    if(countries.length === 1){
        return <Details countrie={countries[0]} />
    }else if(countries.length < 10){
        return <ListCountries countries={countries} /> 
    }else{
        return <p>Too many matches, specify another filter</p>
    }
}

export default Countries;