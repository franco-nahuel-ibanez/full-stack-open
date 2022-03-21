const Number = ({persons, handlerDelete}) => {    
    return (
        <ul>
            {
                persons.map( person => (
                    <li key={person.number}> 
                        {person.name}
                        {person.number} 
                        <button onClick={ () => {handlerDelete(person)} }>Delete</button>    
                    </li>
                ))
            }
        </ul>
    )
}

export default Number