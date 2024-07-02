import { useState } from 'react'
import "./index.css"
import { Col, Container, Row } from 'react-bootstrap';

import Header from './Components/Header';
import Hero from './Components/Hero';
import Products from './Components/Products';
import Hero2 from './Components/Hero2';
import Footer from './Components/Footer';
function App() {
  
  return (
    <>
      <Header />
      <Hero />
      <Products />
      <Hero2 />
      <Footer/>
    </>
  )
}

export default App
