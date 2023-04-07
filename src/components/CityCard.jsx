import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState, useEffect } from 'react';

const CityCard = (props) => {

    const [cityWeather, setCityWeather] = useState(null);


    const findCityWeatherInfo = async () => {
        try {
            let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${props.lat}&lon=${props.lon}&appid=41e354b6aa739606011cbf7f6c8eb73f`);
            if (response.ok) {
                let data = await response.json();
                console.log(`Weather info for ${props.city}:`, data);
                setCityWeather(data);
                console.log(cityWeather);
            }
            else {
                return new Error("City not found");
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        console.log('Sono useEffect! (componentDidUpdate)');
        findCityWeatherInfo();

    }, [cityWeather]);

    return (

        <Card className='my-5 py-3 shadow'>
            {
                cityWeather && (
                    <Row>
                        <Col md={6} className='text-center'>
                            <h2>{props.city.toUpperCase()}</h2>
                            <Row className='align-items-center'>
                                <Col xs={6}>
                                    <Card.Img variant="top" src={`https://openweathermap.org/img/wn/${cityWeather.weather[0].icon}@2x.png`} />
                                </Col>
                                <Col xs={6}>
                                    <p className='fs-1 fw-bold m-0'>{Math.round(cityWeather.main.temp - 275.15)} °C</p>
                                    <p className='m-0'>{cityWeather.weather[0].main}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p className='m-0'>{cityWeather.weather[0].description}</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={6}>
                            <Card.Body>
                                <Row xs={3}>
                                    <Col className='border border-1 shadow-sm'>
                                        <p className='fw-bold m-0'>Feels Like:</p>
                                        <p className='m-0'>{Math.round(cityWeather.main.temp - 275.15)} °C</p>
                                    </Col>
                                    <Col className='border border-1 shadow-sm'>
                                        <p className='fw-bold m-0'>Temp. Min:</p>
                                        <p className='m-0'>{Math.round(cityWeather.main.temp_min - 275.15)} °C</p>
                                    </Col>
                                    <Col className='border border-1 shadow-sm'>
                                        <p className='fw-bold m-0'>Temp. Max:</p>
                                        <p className='m-0'>{Math.round(cityWeather.main.temp_max - 275.15)} °C</p>
                                    </Col>
                                    <Col className='border border-1 shadow-sm'>
                                        <p className='fw-bold m-0'>Pressure:</p>
                                        <p className='m-0'>{cityWeather.main.pressure}</p>
                                    </Col>
                                    <Col className='border border-1 shadow-sm'>
                                        <p className='fw-bold m-0'>Umidity:</p>
                                        <p className='m-0'>{cityWeather.main.humidity} %</p>
                                    </Col>
                                    <Col className='border border-1 shadow-sm'>
                                        <p className='fw-bold m-0'>Wind:</p>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Col>
                    </Row>

                )
            }
        </Card>
    );
}

export default CityCard;