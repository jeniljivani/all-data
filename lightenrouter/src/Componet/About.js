// ------------ STYLE CSS FILE IMPORT ----------- 
import '../App.css';

// ------------ BOOTSTRAP CSS FILE IMPORT -------
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col } from 'react-bootstrap';

// ------------ OWLCAROUSEL CSS FILE IMPORT -----
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';


// ------------ IMAGE IMPORT -=-=-=-=-=-=-=-=-=-=-=-=
import img2 from '../image/about.png';
import img3 from '../image/box1.png';
import img4 from '../image/box2.png';
import img5 from '../image/box3.png';
import img6 from '../image/box4.png';
import img7 from '../image/service1.png';
import img8 from '../image/service2.png';
import img9 from '../image/service3.png';
import img10 from '../image/service4.png';
import img11 from '../image/service5.png';
import img12 from '../image/service6.png';
import React from 'react'
import Header from './Header';
import Footer from './Footer';


function About() {
  return (
    <div>
      <Header/>
      {/* TITEL START */}
      <div className='about-titel' >
        <Container>
          <div className='titeltext'>
            <h1><b>ABOUT</b></h1>
          </div>
        </Container>
      </div>

      {/* TITEL END */}

      {/* Who is Lighte start */} 

      <div className='who'>
        <Container>
          <Row>
            <Col lg={6} className='cont'>
              <div className='aboutbox'>
                <img src={img2}></img>
              </div>
            </Col>
            <Col lg={6} className='cont'>
              <div className='aboutbox'>
                <h2><b>Who is Lighten</b></h2>
                <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum.</p>
                <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      
      {/* Who is Lighte end */}

      {/* WHY CHOOSE US START */}
      <div className='why'>
        <Container>
          <Row className='text-center'>
            <h1 className='m-0 '><span>WHY</span> CHOOSE US</h1>
            <p className='line m-auto'></p>
            <Row>
              <Col className='text-center'><p className='h-text'>Fastest repair service with best price!</p></Col>
            </Row>
          </Row>
        </Container>
      </div>

      {/* === WHY CHOOSE SECTION  START== */}

      <div className='choose'>
        <Container>
          <div className='cont'>
            <Row className='d-flex'>
              <Col lg={3} md={6} sm={12} className='my-3'>
                <div className='choose-box text-center'>
                  <i >
                    <img src={img3}></img>
                  </i>
                  <h3>Data recovery</h3>
                  <p>Perspiciatis eos quos totam cum minima autPerspiciatis eos quos</p>
                </div>
              </Col>
              <Col lg={3} md={6} sm={12} className='my-3'>
                <div className='choose-box text-center'>
                  <i >
                    <img src={img4}></img>
                  </i>
                  <h3>Computer repair</h3>
                  <p>Perspiciatis eos quos totam cum minima autPerspiciatis eos quos</p>
                </div>
              </Col>
              <Col lg={3} md={6} sm={12} className='my-3'>
                <div className='choose-box text-center'>
                  <i >
                    <img src={img5}></img>
                  </i>
                  <h3>Mobile service</h3>
                  <p>Perspiciatis eos quos totam cum minima autPerspiciatis eos quos</p>
                </div>
              </Col>
              <Col lg={3} md={6} sm={12} className='my-3'>
                <div className='choose-box text-center'>
                  <i >
                    <img src={img6}></img>
                  </i>
                  <h3>Network solutions</h3>
                  <p>Perspiciatis eos quos totam cum minima autPerspiciatis eos quos</p>
                </div>
              </Col>
              <Col md={12} className='text-center'>
                <a>Read more</a>
              </Col>
            </Row>
          </div>
        </Container>
      </div>

      {/* SERVICE PROCESS START  */}

      <div className='service'>
        <Container>
          <Row className='text-center titel'>
            <h1 className='m-0 '><span>SERVICE </span> PROCESS </h1>
            <hr className='line m-auto'></hr>
            <Row>
              <Col className='text-center'><p className='h-text'>Easy and effective way to get your device repair</p></Col>
            </Row>
          </Row>

          <Row className='d-flex'>
            <Col md={4} className='px-3'>
              <div className='service-box text-center'>
                <i>
                  <img src={img7}></img>
                </i>
                <h3>Fast service</h3>
                <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea</p>
              </div>
            </Col>
            <Col md={4} className='px-3'>
              <div className='service-box text-center'>
                <i>
                  <img src={img8}></img>
                </i>
                <h3>Secure payments</h3>
                <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea</p>
              </div>
            </Col>
            <Col md={4} className='px-3'>
              <div className='service-box text-center'>
                <i>
                  <img src={img9}></img>
                </i>
                <h3>Expert team </h3>
                <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea</p>
              </div>
            </Col>
            <Col md={4} className='px-3'>
              <div className='service-box text-center'>
                <i>
                  <img src={img10}></img>
                </i>
                <h3>Affordable services</h3>
                <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea</p>
              </div>
            </Col>
            <Col md={4} className='px-3'>
              <div className='service-box text-center'>
                <i>
                  <img src={img11}></img>
                </i>
                <h3>90 Days warranty</h3>
                <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea</p>
              </div>
            </Col>
            <Col md={4} className='px-3'>
              <div className='service-box text-center'>
                <i>
                  <img src={img12}></img>
                </i>
                <h3>Award winning</h3>
                <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* SERVICE PROCESS END */}
      <Footer/>

    </div>
  )
}

export default About