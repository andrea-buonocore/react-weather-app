import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'

const CustomNavbar = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark">
                <Container fluid className='d-flex justify-content-center'>
                    <Link to='/'>
                        <Navbar.Brand href="#home">
                            <img
                                alt="Logo"
                                src="https://openweathermap.org/themes/openweathermap/assets/img/logo_white_cropped.png"
                                width="100"
                            />
                        </Navbar.Brand>

                    </Link>
                </Container>
            </Navbar>
        </header>
    )

}

export default CustomNavbar;