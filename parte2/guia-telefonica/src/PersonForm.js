

const PersonForm = ({newName, setNewName, newNumber, setNewNumber, handlerClick}) => (
    <form>
        <div>
            Name: <input value={newName} onChange={ e => setNewName(e.target.value) }/>
        </div>
        <div> 
            Number: <input value={newNumber} onChange={ e => setNewNumber(e.target.value)} />  
        </div>
        <div>
            <button type="submit" onClick={ handlerClick }>add</button>
        </div>
    </form>
);

export default PersonForm;