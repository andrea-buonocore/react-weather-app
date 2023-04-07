import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState, useEffect } from 'react';

const Forecast = (props) => {


    const findForecast = async () => {
        try {
            console.log('forza napoli', props.cityObj);
            let response = await fetch(`api.openweathermap.org/data/2.5/forecast?lat=${props.cityObj.coord.lat}&lon=${props.cityObj.coord.lon}&appid=cfe6d20a473b39d3713d15795c315e84`);
            let data = await response.json();
            console.log(data);
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        findForecast();
    }, [])

    return (
        <>
            <h2>Next 5 days in ...</h2>
        </>
    )
}

export default Forecast;