// ============== WEB SITE LINK ===================
// https://themewagon.github.io/lighten/index.html

import { Link } from "react-router-dom";

// ------------ STYLE CSS FILE IMPORT ----------- 
import './App.css';

// ------------ BOOTSTRAP CSS FILE IMPORT -------
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col, Nav, NavDropdown, Navbar } from 'react-bootstrap';

// ------------ OWLCAROUSEL CSS FILE IMPORT -----
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';

// ------------ ICON IMPORT ---------------------
import { FaFacebookF, FaTwitter, FaInstagramSquare, FaLinkedinIn } from "react-icons/fa";

// ------------ IMAGE IMPORT -=-=-=-=-=-=-=-=-=-=-=-=
import img1 from './image/logo.jpeg';
import img2 from './image/slider.jpeg';
import img3 from './image/box1.png';
import img4 from './image/box2.png';
import img5 from './image/box3.png';
import img6 from './image/box4.png';
import img7 from './image/service1.png';
import img8 from './image/service2.png';
import img9 from './image/service3.png';
import img10 from './image/service4.png';
import img11 from './image/service5.png';
import img12 from './image/service6.png';
import img13 from './image/prod1.png';
import img14 from './image/prod2.png';
import img15 from './image/prod3.png';
import img16 from './image/prod4.png';
import img17 from './image/prod5.png';
import img18 from './image/prod6.png';
import img19 from './image/prod7.png';
import img20 from './image/teximg.png';
import img21 from './image/call.png';
import img22 from './image/map.jpeg';


function Home() {
  return (
    <div>
      
      {/* TOP NEV START */}

      <div className='topnev mb-3 d-none d-md-block a-center'>
        <Container>
          <Row >
            <Col>
              <ul className='d-flex ps-0'>
                <li className='pe-4'><a><FaFacebookF></FaFacebookF></a></li>
                <li className='pe-4'><a><FaTwitter></FaTwitter></a></li>
                <li className='pe-4'><a><FaInstagramSquare ></FaInstagramSquare ></a></li>
                <li><a><FaLinkedinIn ></FaLinkedinIn ></a></li>
              </ul>
            </Col>
            <Col className='text-end'>
              long established fact that a reader will be
            </Col>
          </Row>
        </Container>
      </div>

      {/* TOP NEV END */}

      {/* HEADER START  */}

      <div className='header py-2 pt-lg-0 '>
        <Navbar expand="md" >
          <Container >
            <Navbar.Brand href="#home" className='col-sm-3 col-12  py-2'>
              <div className='logo p-0 my-0 mx-auto'>
                <img src={img1}></img>
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className='text-end col' />

            <Navbar.Collapse id="basic-navbar-nav" className='col-sm-9 col-lg-7 col manu'>
              <Nav className="mx-auto a-center">
                <Link to="/home" className="link p-md-3 p-lg-4">HOME</Link>  
                <Link to="/about" className="link p-md-3 p-lg-4">ABOUT</Link>
                <Link to="/product" className="link p-md-3 p-lg-4">PRODUCT</Link>
                <Link to="/blog" className="link p-md-3 p-lg-4">BLOG</Link>
                <Link to="/contact" className="link p-md-3 p-lg-4">CONTACT</Link>
                <Link className="link p-md-3 p-lg-4">SINGUP</Link>
              </Nav>
            </Navbar.Collapse>
            <div className='btn px-5 d-none d-lg-block col-2'>
              <a>login</a>
            </div>
          </Container>
        </Navbar>
      </div>

      {/* HEADER END */}

      {/* SLIDER START  */}

      <div className='slider' >
        <OwlCarousel className='owl-theme' items={1} loop dots={false} autoplay autoplayTimeout={5000} >
          <div class='item '>
            <div className='contan'>
              <img src={img2}></img>
            </div>
            <div className='text'>
              <h1>OUR
                <div class="black_bold">LATEST</div>
                <div class="yellow_bold b">PRODUCT </div></h1>
              <p className='pt-sm-1 m-sm-0 d-none d-sm-block'><b>It is a long established fact that a r<br></br>
                eader will be distracted by the readable content of a page</b></p>
              <div className='btn p-0 mt-lg-3'>
                <a className='py-2 px-5  px-sm-0 py-lg-2 px-lg-5'>see more product</a>
              </div>
            </div>
          </div>
          <div class='item '>
            <div className='contan'>
              <img src={img2}></img>
            </div>
            <div className='text'>
              <h1>OUR
                <div class="black_bold">LATEST</div>
                <div class="yellow_bold b">PRODUCT </div></h1>
              <p className='pt-sm-1 m-sm-0 d-none d-sm-block'><b>It is a long established fact that a r<br></br>
                eader will be distracted by the readable content of a page</b></p>
              <div className='btn p-0 mt-lg-3'>
                <a className='py-2 px-5  px-sm-0 py-lg-2 px-lg-5'>see more product</a>
              </div>
            </div>
          </div>
        </OwlCarousel>
      
      </div>

      {/* SLIDER END */}

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

      {/* WHY CHOOSE US END */}

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

      {/* OUR PRODUCTS START */}

      <div className='our'>
        <Container>
          {/* <h1><span> OUR</span> PRODUCTS</h1> */}
          <h1 className='m-0 '><span>OUR </span> PRODUCTS </h1>
          <hr className='line m-0'></hr>
          <p>We package the products with best services to make you a happy customer.</p>
        </Container>
      </div>

      <div className='product-bg'>

        {/* PRODUCT IMG START */}

        <div className='product'>
            <Container>
              <Row className='d-flex'>
                <Col lg={3} md={6} className='px-3'>
                  <div className='prod-box text-center'>
                    <i>
                      <img src={img13}></img>
                    </i>
                    <h3>Norton Internet Security</h3>
                    <p>$ 25.00</p>
                  </div>
                </Col>
                <Col lg={3} md={6} className='px-3'>
                  <div className='prod-box text-center'>
                    <i>
                      <img src={img14}></img>
                    </i>
                    <h3>Norton Internet Security</h3>
                    <p>$ 25.00</p>
                  </div>
                </Col>
                <Col lg={3} md={6} className='px-3'>
                  <div className='prod-box text-center'>
                    <i>
                      <img src={img15}></img>
                    </i>
                    <h3>Norton Internet Security</h3>
                    <p>$ 25.00</p>
                  </div>
                </Col>
                <Col lg={3} md={6} className='px-3'>
                  <div className='prod-box text-center'>
                    <i>
                      <img src={img16}></img>
                    </i>
                    <h3>Norton Internet Security</h3>
                    <p>$ 25.00</p>
                  </div>
                </Col>
                <Col lg={3} md={6} className='px-3'>
                  <div className='prod-box text-center'>
                    <i>
                      <img src={img17}></img>
                    </i>
                    <h3>Norton Internet Security</h3>
                    <p>$ 25.00</p>
                  </div>
                </Col>
                <Col lg={3} md={6} className='px-3'>
                  <div className='prod-box text-center'>
                    <i>
                      <img src={img18}></img>
                    </i>
                    <h3>Norton Internet Security</h3>
                    <p>$ 25.00</p>
                  </div>
                </Col>
                <Col lg={3} md={6} className='px-3'>
                  <div className='prod-box text-center'>
                    <i>
                      <img src={img14}></img>
                    </i>
                    <h3>Norton Internet Security</h3>
                    <p>$ 25.00</p>
                  </div>
                </Col>
                <Col lg={3} md={6} className='px-3'>
                  <div className='prod-box text-center'>
                    <i>
                      <img src={img19}></img>
                    </i>
                    <h3>Norton Internet Security</h3>
                    <p>$ 25.00</p>
                  </div>
                </Col>
              </Row>
            </Container>
        </div>

        {/* PRODUCT IMG END */}

        {/* What Clients Say? START */}

        <div className='what'>
            <Container>
              <div className='text-md-start text-sm-center '>
                <div className='titel col-md-12 '>
                  <h1 className='m-0'>What Clients Say?</h1>
                </div>
                <div className='textimonal'>
                  <OwlCarousel className='owl-theme' loop items={1}>
                    <div class='item'>
                      <div className='teximg d-flex'>
                        <img src={img20}></img>
                        <p className='ps-5 pt-4'>Jone Due <br></br><span>29/12/2023</span></p>
                      </div>
                      <div className='text'>
                        <p>
                          You guys rock! Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. I am really satisfied with my first laptop service.<br></br>
                          You guys rock! Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. I am
                        </p>
                      </div>
                    </div>
                    <div class='item'>
                      <div className='teximg d-flex'>
                        <img src={img20}></img>
                        <p className='ps-5 pt-4'>Jone Due <br></br><span>29/12/2023</span></p>
                      </div>
                      <div className='text'>
                        <p>
                          You guys rock! Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. I am really satisfied with my first laptop service.<br></br>
                          You guys rock! Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. I am
                        </p>
                      </div>
                    </div>
                    <div class='item'>
                      <div className='teximg d-flex'>
                        <img src={img20}></img>
                        <p className='ps-5 pt-4'>Jone Due <br></br><span>29/12/2023</span></p>
                      </div>
                      <div className='text'>
                        <p>
                          You guys rock! Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. I am really satisfied with my first laptop service.<br></br>
                          You guys rock! Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. I am
                        </p>
                      </div>
                    </div>
                  </OwlCarousel>
                </div>
              </div>
            </Container>
        </div>

        {/* What Clients Say? END */}

        {/* REQUEST A FREE QUOTE start */}

        <Container>
            <Row className='requst'>
              <div className='col-md-7 col-12'>
                <h2 className='h2 pb-2 m-0 '>REQUEST A FREE QUOTE <i className='ps-2 '><img src={img21}></img></i></h2>
                <p>Get answers and advice from people you want it from.</p>
              </div>
              <div className='col-md-5 col-12 text-center'>
                <a>Get Quote</a>
              </div>

            </Row>
        </Container>

        {/* REQUEST A FREE QUOTE end */}

      </div>

      {/* PRODUCTS  END */}

      {/*  map start  */}

      <div className='map'>

        <div style={{
          width: '100%',
          height: '300px',
          backgroundImage: `url(${img22})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
        </div>
      </div>

      {/*  map end */}

      {/* FOOTER START */}

      <div className='footer'>
        <Container>
          <Row>
            <Col className='d-flex social justify-content-center' >
              <li className='px-2'><a><FaFacebookF></FaFacebookF></a></li>
              <li className='px-2'><a><FaTwitter></FaTwitter></a></li>
              <li className='px-2'><a><FaInstagramSquare></FaInstagramSquare></a></li>
              <li className='px-2'><a><FaLinkedinIn></FaLinkedinIn></a></li>
            </Col>
          </Row>
          <Row className='d-flex text-center text-sm-start' >
            <Col lg={3} md={6} sm={12}>
              <div className='content'>
                <h3>CONATCT US</h3>
                <p>123 Second Street Fifth Avenue,<br></br>
                    Manhattan, New York<br></br>
                    +987 654 3210                
                </p>                
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div className='content'>
                <h3>ADDITIONAL LINKS</h3>
                <div className='link'>
                  <li><a>About us</a></li>
                  <li><a>Terms and conditions</a></li>
                  <li><a>Privacy policy</a></li>
                  <li><a>News</a></li>
                  <li><a>Contact us</a></li>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div className='content'>
                <h3>SERVICE</h3>
                <div className='link'>
                  <li><a>Data recovery</a></li>
                  <li><a>Computer repair</a></li>
                  <li><a>Mobile service</a></li>
                  <li><a>Network solutions</a></li>
                  <li><a>Technical support</a></li>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div className='content'>
                <h3>ABOUT LIGHTEN</h3>
                <p>Tincidunt elit magnis nulla facilisis. Dolor Sapien nunc amet ultrices,</p>
              </div>
            </Col>
          </Row>
        </Container>
        
        <div className='copyright '>
          <Container>
            <Col className='text-center'>
            <p>Copyright 2019 All Right Reserved By Free html Templates Distributed By ThemeWagon</p>
            </Col>
          </Container>
        </div>
      </div>

      {/* FOOTER END */}
      
    </div>
  );
}

export default Home;
