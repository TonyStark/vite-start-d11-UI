import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
function Footer() {
  return (
    <footer>
        <Container fluid className='p-0 border-top border-black'>
            <Row>
                <Col sm={4} className='bg-black text-white d-flex justify-content-center align-items-center py-5'>
                    <div className="address-sec d-flex flex-column">
                        <h1>T SHOP</h1>
                        <span>info@tshop.com</span>
                        <tel>Tel: 123-456-7890</tel>
                    </div>
                </Col>
                <Col className='d-flex justify-content-center align-items-center py-5'>
                    <div className="nav-sec d-flex flex-column">
                        <p className='fs-4'>Shop</p>
                        <a href="" className='text-decoration-none text-black fw-light'>New</a>
                        <a href="" className='text-decoration-none text-black fw-light'>Woman</a>
                        <a href="" className='text-decoration-none text-black fw-light'>Man</a>
                    </div>
                </Col>
                <Col className='d-flex justify-content-center align-items-center py-5'>
                    <div className="nav-sec d-flex flex-column">
                        <p className='fs-4'>Our Store</p>
                        <a href="" className='text-decoration-none text-black fw-light'>About Us</a>
                        <a href="" className='text-decoration-none text-black fw-light'>Subscribe</a>
                        <a href="" className='text-decoration-none text-black fw-light'>FAQ</a>
                    </div>
                </Col>
                <Col className='d-flex justify-content-center align-items-center py-5'>
                    <div className="nav-sec d-flex flex-column">
                        <p className='fs-4'>Terms & Conditions</p>
                        <a href="" className='text-decoration-none text-black fw-light'>Store Policy</a>
                        <a href="" className='text-decoration-none text-black fw-light'>Shipping & Returns</a>
                        <a href="" className='text-decoration-none text-black fw-light'>Payment Methods </a>
                    </div>
                </Col>
            </Row>
        </Container>

        <Container fluid className='p-0 border-top border-black'>
            <Row>
                <Col sm={4} className='d-flex justify-content-center align-items-center py-2 border-end border-black'>
                    <div className="social-sec d-flex fs-2 gap-4">
                        <a href="" className='text-decoration-none text-black'><i class='bx bxl-facebook'></i></a>
                        <a href="" className='text-decoration-none text-black'><i class='bx bxl-instagram' ></i></a>
                        <a href="" className='text-decoration-none text-black'><i class='bx bxl-pinterest'></i></a>
                        <a href="" className='text-decoration-none text-black'><i class='bx bxl-youtube'></i></a>
                        <a href="" className='text-decoration-none text-black'><i class='bx bxl-tiktok'></i></a>
                    </div>
                </Col>
                <Col sm={8} className='d-flex justify-content-center align-items-center footer-right'>
                    <span className='fs-5 fw-light text-black'>© 2035 by T Shop. Powered and secured by Wix</span>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer
