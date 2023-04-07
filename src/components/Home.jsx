import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import CityCard from './CityCard';

const Home = () => {

    const [city, setCity] = useState('');
    const [lat, setLat] = useState('');
    const [lon, setLon] = useState('');
    const [cityName, setCityName] = useState('');

    const findCityCoordinates = async () => {
        try {
            let response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=cfe6d20a473b39d3713d15795c315e84`);
            if (response.ok) {
                let data = await response.json();
                console.log('Città trovate dopo input:', data);
                console.log(data[0]);
                let cityObj = data[0];
                console.log('cityObj', cityObj);
                let cityObjLat = cityObj.lat.toString();
                let cityObjLon = cityObj.lon.toString();
                let cityObjName = cityObj.name;
                console.log('cityObjName', cityObjName);
                console.log('lat', cityObjLat);
                console.log('lon', cityObjLon);
                setLat(cityObjLat);
                setLon(cityObjLon);
                setCityName(cityObjName);
            }
            else {
                return new Error('Errore nella fetch.', response.status);
            }
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <Container className='py-5' id='homeContainer'>
            <Form className="d-flex" id='searchBar' onSubmit={
                (e) => {
                    e.preventDefault();
                    findCityCoordinates();
                    setCity('');
                }
            }>
                <Form.Control
                    type="search"
                    placeholder="Search city..."
                    className="me-2"
                    aria-label="Search"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    id="inputSearch"
                />
                <Button type="submit" variant="light"><i class="bi bi-search fs-5"></i></Button>
            </Form>
            {
                lat && lon && (
                    <CityCard city={cityName} lat={lat} lon={lon} />
                )
                    
            }

        </Container>
    )
}

export default Home;