import axios from 'axios';
import {useEffect, useState} from 'react';


const Weater = ({query}) => {
    const [info, setInfo] = useState([])

    const URL = 'http://api.weatherstack.com/current?';
    const KEY = 'db42a278aff6426d9d1272062e877eb2';

    useEffect(() => {
        (async () => {
            const res = await axios.get(`${URL}access_key=${KEY}&query=${query}`)
            setInfo(res.data);
        })()
    }, [query])
    
    return (
        <div>
            {
                info.length !== 0 && (
                    <>
                        <h1> Water in {info.location.name} </h1>
                        <p>temperature: {info.current.temperature}</p>
                        <img src={info.current.weather_icons[0]} width="150" />
                        <p>wind: <span>{info.current.wind_speed} mph direction {info.current.wind_dir}</span></p>
                    </>
                 )
            }
        </div>
    )
}


export default Weater;