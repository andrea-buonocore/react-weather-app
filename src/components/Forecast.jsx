import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState, useEffect } from 'react';

const Forecast = (props) => {

    const [forecast, setForecast] = useState(null);

    const findForecast = async () => {
        try {
            console.log('forza napoli', props.cityObj);
            let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${props.cityObj.coord.lat}&lon=${props.cityObj.coord.lon}&appid=cfe6d20a473b39d3713d15795c315e84`);
            if (response.ok) {
                let data = await response.json();
                console.log('ecco i dati che ho trovato:', data);
                setForecast(data);
            }
            else {
                return new Error('Errore durante la recupero dei dati', response.status);
            }
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
            <h2>Next 5 days in {props.cityObj.name}:</h2>
            {
                forecast && (
                    forecast.list.map((day, index) => {
                        return (
                            <Card className='my-3 p-2 shadow' key={index}>
                                <Row>
                                    <Col xs={4} md={6}>
                                        <Card.Img variant='top' src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} />
                                    </Col>
                                    <Col xs={8} md={6}>
                                        <Card.Body className='p-0'>
                                        <p className='fs-1 fw-bold m-0'>{Math.round(day.main.temp - 275.15)} °C</p>
                                        <p className='m-0'>{day.weather[0].description}</p>
                                        </Card.Body>
                                    </Col>
                                </Row>
                            </Card>

                        )
                    })
                )

            }

        </>
    )
}

export default Forecast;