import {useState, useEffect} from 'react';
import Number from './Number';
import Filter from './Filter';
import PersonForm from './PersonForm';
import axios from 'axios';


const App = () => {
    const [ persons, setPersons ] = useState([])
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber] = useState('');
    const [ query, setQuery ] = useState('');

    useEffect( () => {
        (async function() {
            const res = await axios.get('http://localhost:3001/persons');
            setPersons( res.data );
        })()
    }, [])


    const handlerClick = (e) => {
        e.preventDefault();
        const added = persons.some( person => person.name === newName.trim() );

        if(newName.trim() === '' || newNumber.trim() === '' ) return alert('All fields are required')
        if(added) return alert(`${newName} is alredy added to phonebook`);

        setPersons([
            ...persons,
            {name: newName, number: newNumber} 
        ]);

        setNewName('');
        setNewNumber('');
    }

    const personsToShow = query === '' 
        ? persons
        : persons.filter( person => person.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()) )

    
    return (
      <div>
        <h2>Phonebook</h2>

        <Filter query={query} setQuery={setQuery} />

        <h2>Add a New</h2>
        
        <PersonForm 
            newName={newName} 
            setNewName={setNewName} 
            newNumber={newNumber}
            setNewNumber={setNewNumber}
            handlerClick={handlerClick}
        />
        
        <h2>Numbers</h2>

        <Number persons={personsToShow} />

      </div>
    )
}
  
export default App;