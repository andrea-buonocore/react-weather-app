import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom'

const WeatherDetails = (props) => {

    const navigate = useNavigate();

    return (
        <Container className='my-5 text-center'>
            <h3 className='text-light'>🛠️ STILL UNDER MAINTENANCE 🛠️ </h3>
            <Button variant="light" onClick={() => {
                navigate('/')
            }}>Go Home</Button>
        </Container>
    )
}

export default WeatherDetails;