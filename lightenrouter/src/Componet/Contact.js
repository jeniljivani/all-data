import { Link } from "react-router-dom";

// ------------ STYLE CSS FILE IMPORT ----------- 
import '../App.css';

// ------------ BOOTSTRAP CSS FILE IMPORT -------
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col, Nav, NavDropdown, Navbar } from 'react-bootstrap';

// ------------ OWLCAROUSEL CSS FILE IMPORT -----
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';

// ------------ ICON IMPORT ---------------------
import { FaFacebookF, FaTwitter, FaInstagramSquare, FaLinkedinIn } from "react-icons/fa";
import Header from "./Header";
import Footer from "./Footer";



function Contact() {
  return (
    <div>
      <Header />

      {/* TITEL START */}
      <div className='contact-titel' >
        <Container>
          <div className='titeltext'>
            <h1><b>CONTACT</b></h1>
          </div>
        </Container>
      </div>
      {/* TITEL END */}

      {/* CONTACT SATRT */}
      <div className="contact">
        <Container>
          <Row>
            <Col md={12} className="main-form">
              <Row>
                <Col sm={6}>
                  <input type="text" placeholder="Your Name" className="contact-form"></input>
                </Col>
                <Col sm={6}><input type="text" placeholder="Email" className="contact-form"></input></Col>
                <Col md={12}><input type="text" placeholder="Phone" className="contact-form"></input></Col>
                <Col md={12}><textarea type="text" placeholder="Message" className="contact-form textarea"></textarea></Col>
                <Col md={12} className="text-center btn">
                  <Button className="send">Send</Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      {/* CONTACT END */}
      <Footer />
    </div>
  )
}

export default Contact