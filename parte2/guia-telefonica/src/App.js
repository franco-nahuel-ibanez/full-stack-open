import {useState} from 'react';
import Number from './Number';
import Filter from './Filter';
import PersonForm from './PersonForm';

const App = () => {
    
    const [ persons, setPersons ] = useState([
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Ada Lovelace', number: '39-44-5323523' },
        { name: 'Dan Abramov', number: '12-43-234345' },
        { name: 'Mary Poppendieck', number: '39-23-6423122' }
    ])

    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber] = useState('');
    const [ query, setQuery ] = useState('');

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