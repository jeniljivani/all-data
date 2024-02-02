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

// // ------------ IMAGE IMPORT -=-=-=-=-=-=-=-=-=-=-=-=
import img1 from '../image/blog1.jpg';
import img2 from '../image/blog2.jpg';
import img3 from '../image/blog3.jpg';
import img4 from '../image/blog4.jpg';

// -------------- COMPONET IMPORT -----------------
import Footer from "./Footer"
import Header from "./Header"


function Blog() {
  return (
    <div>
      <Header/>

       {/* TITEL START */}
       <div className='blog-titel' >
        <Container>
          <div className='titeltext'>
            <h1><b>BLOG</b></h1>
          </div>
        </Container>
      </div>
      {/* TITEL END */}

      {/* BLOG NEWS START */}
      <div className="blog">
        <Container>
          <Row>
            <div className="blog-text">
            It is a long established fact that a reader will be distracted by the readable<br></br>
            content of a page when looking at its layout. The point of using Lorem
            </div>
          </Row>
          <Row>
            <Col lg={4} md={6} className="cont" >
              <div className="newsbox">
                <div className="newsimg">
                  <img src={img1}></img>
                </div>
                <h3>Live With Music</h3>
                <span>March 20</span>
                <span>Comment</span>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
              </div>
            </Col>
            <Col lg={4} md={6} className="cont" >
              <div className="newsbox">
                <div className="newsimg">
                  <img src={img3}></img>
                </div>
                <h3>Live With Music</h3>
                <span>March 20</span>
                <span>Comment</span>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
              </div>
            </Col>
            <Col lg={4} md={6} className="cont" >
              <div className="newsbox">
                <div className="newsimg">
                  <img src={img2}></img>
                </div>
                <h3>Best Music</h3>
                <span>March 20</span>
                <span>Comment</span>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
              </div>
            </Col>
            <Col lg={4} md={6} className="cont" >
              <div className="newsbox">
                <div className="newsimg">
                  <img src={img3}></img>
                </div>
                <h3>Live With Music</h3>
                <span>March 20</span>
                <span>Comment</span>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
              </div>
            </Col>
            <Col lg={4} md={6} className="cont" >
              <div className="newsbox">
                <div className="newsimg">
                  <img src={img4}></img>
                </div>
                <h3>Best Music</h3>
                <span>March 20</span>
                <span>Comment</span>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
              </div>
            </Col>
            <Col lg={4} md={6} className="cont" >
              <div className="newsbox">
                <div className="newsimg">
                  <img src={img1}></img>
                </div>
                <h3>Live With Music</h3>
                <span>March 20</span>
                <span>Comment</span>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
              </div>
            </Col>

          </Row>
        </Container>        
      </div>
      {/* BLOG NEWS END */}

      <Footer/>
    </div>
  )
}
export default Blog