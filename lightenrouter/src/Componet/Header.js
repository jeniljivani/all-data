import { Link } from "react-router-dom";

// ------------ BOOTSTRAP CSS FILE IMPORT -------
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col, Nav, NavDropdown, Navbar } from 'react-bootstrap';

// ------------ OWLCAROUSEL CSS FILE IMPORT -----
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';

// ------------ STYLE CSS FILE IMPORT ----------- 
import '../App.css'

// ------------ ICON IMPORT ---------------------
import { FaFacebookF, FaTwitter, FaInstagramSquare, FaLinkedinIn } from "react-icons/fa";

// ------------ IMAGE IMPORT -=-=-=-=-=-=-=-=-=-=-=-=
import img1 from '../image/logo.jpeg';



function Header() {
     return(
          <div>
                 {/* TOP NEV START */}

      <div className='topnev mb-3 d-none d-md-block '>
        <Container>
          <Row className="a-center" >
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
                <Link className="link p-md-3 p-lg-4">SIGNUP</Link>
              </Nav>
            </Navbar.Collapse>
            <div className='btn px-5 d-none d-lg-block col-2'>
              <a>login</a>
            </div>
          </Container>
        </Navbar>
      </div>

      {/* HEADER END */}

          </div>
     );

} 
export default Header