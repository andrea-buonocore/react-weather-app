import Container from 'react-bootstrap/Container';

const CustomFooter = () => {
    return (
        <footer className='fixed-bottom py-3'>
            <Container>
                <p className='text-center text-light m-0'>&copy; Andrea Buonocore 2023</p>
            </Container>
        </footer>
    )
}

export default CustomFooter;