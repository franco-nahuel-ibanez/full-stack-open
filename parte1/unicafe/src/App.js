import {useState} from 'react';

const Button = ({handleClick, text}) => (
    <button onClick={ handleClick }>
        {text}
    </button>
)

const Statistics = ({ good, neutral, bad, total, average, positive }) => {
    if( good === 0 && neutral === 0 && bad === 0 ){
        return <p>No Feedback Give</p>           
    }

    return(
        <div>
                <Statistic text={'Bad'} value={ good } />
                <Statistic text={'Neutral'} value={ neutral } />
                <Statistic text={'Good'} value={ bad } />
                <Statistic text={'All'} value={ total } />
                <Statistic text={'Average'} value={ average } />
                <Statistic text={'Positive'} value={ positive } />
        </div>
    )

}

const Statistic = ({ text, value }) => (
    <p>{text} {value}</p>
)

const App = () => {
    
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    
    const handleToGood = () => {
        setGood( good + 1 );
    }

    const handleToNeutral = () => {
        setNeutral( neutral + 1 )
    }

    const handleToBad = () => {
        setBad( bad + 1 )
    }

    const total = good + neutral + bad;
    const average = (good - bad) / total || 0;
    const positive = (good * 100) / total || 0; 

    return (
        <>
            <h1>Give Feedback</h1>
            <Button handleClick={ handleToGood } text={"Good"} />
            <Button handleClick={handleToNeutral} text={"Neutral"} />
            <Button handleClick={handleToBad} text={"Bad"} />
            
            <h1>Statistics</h1>
            <Statistics good={good} neutral={neutral} bad={bad} total={total} average={average} positive={positive} />
        </>
    )
}

export default App