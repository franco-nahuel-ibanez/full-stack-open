
const Filter = ({ query, setQuery}) => (
    <div>
        filter shown with <input value={query} onChange={ e => setQuery(e.target.value) }/>
    </div>
);

export default Filter;