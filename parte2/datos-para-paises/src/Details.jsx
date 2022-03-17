import Weater from "./Weater";

const Details = ({countrie}) => {
    console.log(countrie)
    return (
        <>
            <h2>{countrie.name}</h2>
            <p>{countrie.capital}</p>

            <h3>Languages</h3>
            <ul>
                {
                    countrie.languages.map( l => (
                        <li key={l.name}>{l.name}</li>
                    ))
                }
            </ul>

            <img src={countrie.flag} width="200"/>

            <div>
                <Weater query={countrie.capital} />
            </div>
        </>
    )

}

export default Details;