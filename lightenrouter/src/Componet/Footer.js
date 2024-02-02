// ------------ STYLE CSS FILE IMPORT ----------- 
import '../App.css';

// ------------ BOOTSTRAP CSS FILE IMPORT -------
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col  } from 'react-bootstrap';

// ------------ OWLCAROUSEL CSS FILE IMPORT -----
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
// import OwlCarousel from 'react-owl-carousel';

// ------------ ICON IMPORT ---------------------
import { FaFacebookF, FaTwitter, FaInstagramSquare, FaLinkedinIn } from "react-icons/fa";




function Footer(){
     return(
     <div>
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
     )
}
export default Footer