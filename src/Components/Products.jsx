import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import p1 from '../assets/c837a6_0ab9ff5bbc6f41a5b2dffae389cfb2b7-mv2.jpg'
import p2 from '../assets/c837a6_6a83893e75e048b3a61c7a8711b93da3-mv2.jpg'
import p3 from '../assets/c837a6_8ea5cc0a06664ef6a3c1cf64e1cb5a27-mv2.jpg'
import p4 from '../assets/c837a6_944cb31b5c7d4659b7a0c6612b4df573-mv2.jpg'
import p5 from '../assets/c837a6_2308b08ad22c4e4aa919906536a1b5d1-mv2.jpg'
import p6 from '../assets/c837a6_ce32dd298b274ba280efa267e075be21-mv2.jpg'
import p7 from '../assets/c837a6_f8d49ec34c8a4f95890362cc7a53f89b-mv2.jpg'
import p8 from '../assets/c837a6_fd300737ecf3406b83fd9be5d67463e4-mv2.jpg'

function Products() {
  return (
    <section className='products-section'>
        <Container>
            <h1>New Drops</h1>
            <Row className='gy-5'>
                <Col sm={3}>
                    <Card className='border-0 rounded-0'>
                        <Card.Img variant="top" src={p1} className='rounded-0' />
                        <Card.Body className='rounded-0'>
                            <Card.Title>Product 1</Card.Title>
                            <Card.Text className='fs-5'>
                                $15.00
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={3}>
                    <Card className='border-0 rounded-0'>
                        <Card.Img variant="top" src={p2} className='rounded-0' />
                        <Card.Body className='rounded-0'>
                            <Card.Title>Product 2</Card.Title>
                            <Card.Text className='fs-5'>
                                $15.00
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={3}>
                    <Card className='border-0 rounded-0'>
                        <Card.Img variant="top" src={p3} className='rounded-0' />
                        <Card.Body className='rounded-0'>
                            <Card.Title>Product 3</Card.Title>
                            <Card.Text className='fs-5'>
                                $15.00
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={3}>
                    <Card className='border-0 rounded-0'>
                        <Card.Img variant="top" src={p4} className='rounded-0' />
                        <Card.Body className='rounded-0'>
                            <Card.Title>Product 4</Card.Title>
                            <Card.Text className='fs-5'>
                                $15.00
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={3}>
                    <Card className='border-0 rounded-0'>
                        <Card.Img variant="top" src={p5} className='rounded-0' />
                        <Card.Body className='rounded-0'>
                            <Card.Title>Product 5</Card.Title>
                            <Card.Text className='fs-5'>
                                $15.00
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={3}>
                    <Card className='border-0 rounded-0'>
                        <Card.Img variant="top" src={p6} className='rounded-0' />
                        <Card.Body className='rounded-0'>
                            <Card.Title>Product 6</Card.Title>
                            <Card.Text className='fs-5'>
                                $15.00
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={3}>
                    <Card className='border-0 rounded-0'>
                        <Card.Img variant="top" src={p7} className='rounded-0' />
                        <Card.Body className='rounded-0'>
                            <Card.Title>Product 7</Card.Title>
                            <Card.Text className='fs-5'>
                                $15.00
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={3}>
                    <Card className='border-0 rounded-0'>
                        <Card.Img variant="top" src={p8} className='rounded-0' />
                        <Card.Body className='rounded-0'>
                            <Card.Title>Product 8</Card.Title>
                            <Card.Text className='fs-5'>
                                $15.00
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} className='text-center'>
                    <Button variant='warning' className='fs-4 px-4 py-2 rounded-0'>
                        Shop Now
                    </Button>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Products
