import {useState, useEffect} from 'react';
import Number from './Number';
import Filter from './Filter';
import PersonForm from './PersonForm';
import { getAll, addPerson, deleteById, update } from './services/index';

const App = () => {
    const [ persons, setPersons ] = useState([])
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber] = useState('');
    const [ query, setQuery ] = useState('');

    useEffect( () => {
        (async function() {
            const res = await getAll();
            setPersons( res );
        })()
    }, [])


    const handlerClick = async e => {
        e.preventDefault();

        const added = persons.some( person => person.name === newName.trim() );

        if(newName.trim() === '' || newNumber.trim() === '' ) return alert('All fields are required')
        const newPerson = {name: newName, number: newNumber}
        
        if(added) return replacePerson(newPerson)

        try {
            await addPerson(newPerson);
            setPersons([
                ...persons,
                newPerson 
            ]);
        } catch (error) {
            alert('No se pudo guardar el contacto. Intente nuevamente')
        }

        setNewName('');
        setNewNumber('');
    }

    const replacePerson = async newPerson => {
        const replace = window.confirm(`${newName} is al redy added to phonebook, replace the old number with a new one`);
        if (!replace) return;
        try {
            const oldContact = persons.filter( p => p.name === newPerson.name);
            const contacts = persons.filter( p => p.name !== newPerson.name);

            // console.log(oldContact[0].id)
            await update(oldContact[0].id, newPerson);
            
            setPersons([
                ...contacts,
                newPerson
            ])
        } catch (error) {
            console.log(error)
        }

    }

    const handlerDelete = async person => {
        const result = window.confirm(`Delete ${person.name}?`)
        console.log(person)
        if(!result) return;

        try {
            await deleteById(person.id);
            const newPersons = persons.filter(p => p.id !== person.id);
            setPersons(newPersons);
        } catch (error) {
            alert('An error ocurred. Try again!')
        }
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

        <Number persons={personsToShow} handlerDelete={handlerDelete} />

      </div>
    )
}
  
export default App;