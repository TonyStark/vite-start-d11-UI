import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import image1 from '../assets/c837a6_412c6d4e5a8f49f1bd70c5a9f60bd99d-mv2.jpg'
import image2 from '../assets/c837a6_3e8310c6d6474d42a3e2925a1f4ed3a3-mv2.jpg'
import image3 from '../assets/c837a6_3a03706bd90e4f289e7aed0d2f11c992-mv2.jpg'
function Hero() {
  return (
    <section className='hero-section'>
        <div className="top-part d-flex flex-column justify-content-center align-items-center">
            <h1>T SHOP</h1>
            <p className='fs-3'>There's One For Everyone</p>
        </div>
        <div className="slide-part">
            <Row>
                <Col sm={3}>
                    <div className="image1">
                        <img src={image1} alt="Hero Image 1" className='img-fluid'/>
                    </div>
                </Col>
                <Col sm={6}>
                    <img src={image2} alt="Hero Image 2" className='img-fluid'/>
                </Col>
                <Col sm={3}>
                    <img src={image3} alt="Hero Image 2" className='img-fluid'/>
                </Col>
            </Row>
        </div>
    </section>
  )
}

export default Hero
