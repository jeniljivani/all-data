

// ------------ BOOTSTRAP CSS FILE IMPORT -------
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

// ------------ OWLCAROUSEL CSS FILE IMPORT -----
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';

// ------------ STYLE CSS FILE IMPORT ----------- 
import '../App.css';

// ------------ ICON IMPORT ---------------------

// ------------ IMAGE IMPORT -=-=-=-=-=-=-=-=-=-=-=-=

import img13 from '../image/prod1.png';
import img14 from '../image/prod2.png';
import img15 from '../image/prod3.png';
import img16 from '../image/prod4.png';
import img17 from '../image/prod5.png';
import img18 from '../image/prod6.png';
import img19 from '../image/prod7.png';
import Header from './Header';
import Footer from './Footer';



function Product() {
  return (
    <div>

        <Header/>

      {/* TITEL START */}
      <div className='product-titel' >
        <Container>
          <div className='titeltext'>
            <h1><b>OUR PRODUCT</b></h1>
          </div>
        </Container>
      </div>

      {/* TITEL END */}

      {/* OUR PRODUCTS START */}

      <div className='our text-center'>
        <Container>
          {/* <h1><span> OUR</span> PRODUCTS</h1> */}
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
                    <img src={img13}></img>
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
            </Row>
          </Container>
        </div>
      </div>
      {/* PRODUCT IMG END */}

      <Footer/>
    </div>
  )
}
export default Product