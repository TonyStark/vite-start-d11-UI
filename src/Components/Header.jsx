import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
function Header() {
  return (
    <header>
        <Container fluid className='p-0'>
            <Row>
                <Col sm={12}>
                    <div className="sub-header d-flex justify-content-center align-items-center text-white">
                        <p className='m-0 py-2'>Sale is on! 25% off sitewide using TEES25 at checkout</p>
                    </div>
                </Col>
                <Col sm={12} className='border-bottom border-black'>
                    <header className='d-flex justify-content-between align-items-center'>
                        <div className="my-logo d-flex">
                            <a href="" className='text-decoration-none text-black fs-4 px-5 py-3 border-end border-black fw-semibold'>TSHOP</a>
                        </div>
                        <nav className='d-flex'>
                            <a href="" className='text-decoration-none text-black fs-4 px-5 py-3 border-start border-black'>New</a>
                            <a href="" className='text-decoration-none text-black fs-4 px-5 py-3 border-start border-black'>Women</a>
                            <a href="" className='text-decoration-none text-black fs-4 px-5 py-3 border-start border-black'>Men</a>
                            <a href="" className='text-decoration-none text-black fs-4 px-5 py-3 border-start border-black'> <i className='bx bxs-user-circle align-middle'></i> My Account</a>
                        </nav>
                    </header>
                </Col>
            </Row>
        </Container>
    </header>
  )
}

export default Header
