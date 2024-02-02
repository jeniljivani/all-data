
// ------------ STYLE CSS FILE IMPORT ----------- 
import '../App.css';

// ------------ BOOTSTRAP CSS FILE IMPORT -------
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button, Container, Row, Col, Nav, NavDropdown, Navbar } from 'react-bootstrap';

// ------------ OWLCAROUSEL CSS FILE IMPORT -----
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';

// ------------ ICON IMPORT ---------------------
// import { FaFacebookF, FaTwitter, FaInstagramSquare, FaLinkedinIn } from "react-icons/fa";

// ------------ IMAGE IMPORT -=-=-=-=-=-=-=-=-=-=-=-=
import img2 from '../image/slider.jpeg';
function Slider() {
     return(
     <div>

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

     </div>
     )
}

export default Slider