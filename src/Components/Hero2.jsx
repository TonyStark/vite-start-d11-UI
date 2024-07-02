import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import i2 from '../assets/c837a6_2749f733af59407699862291aaef4b44-mv2.jpg'
function Hero2() {
  return (
    <section className='hero2-section'>
        <Container fluid>
            <Row>
                <Col sm={8} className='left-sec d-flex justify-content-center align-items-center'>
                    <div className="sale-sec d-flex flex-column justify-content-center text-center gap-4">
                        <p><i class='bx bxs-zap'></i></p>
                        <h3>SALE IS ON!</h3>
                        <h1>25% OFF</h1>
                        <p>25% off sitewide using TEES25 at checkout</p>
                    </div>
                </Col>
                <Col sm={4} className='right-sec p-0'>
                    <img src={i2} alt="" className='w-100'/>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Hero2
