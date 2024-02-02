import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

import Header from './Header';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { FaRupeeSign } from 'react-icons/fa';
import Category from './Category';

 function Categryprod() {

  let {ele} = useParams()
  
  let [prod, setprod] = useState([]);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/category/${ele}`)
      .then(function (response) {
        // handle success
        // console.log(response.data.products);
        setprod(response.data.products);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })

  }, [ele])
  
  return (
    <div>
      <Header/>
      <Container>
        <Row className='product'>
          <Col md={3} >
            <Category />
          </Col>
          <Col md={9}>
            {/* <Productitem/> */}
            <div className="prodbar d-flex">
              {
                prod.map((ele, ind) => {
                  return (
                    <Link to={`/product/${ele.id}`} className="prodlink" >
                      <Card key={ind}>
                        <div className='imgbox'>
                          <Card.Img variant="top" src={ele.thumbnail} />
                        </div>

                        <Card.Body>
                          <Card.Title>{ele.title}</Card.Title>
                          <Card.Text><p>{ele.description}</p></Card.Text>
                          <div className=' d-flex'>
                            <p className='pri m-0'><i><FaRupeeSign ></FaRupeeSign></i>{ele.price} </p><hr></hr>
                            <p className='ret m-0'><b>Reting : </b>{ele.rating}</p>
                          </div>
                        </Card.Body>
                      </Card>
                    </Link>
                  )
                })
              }

            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
export default Categryprod;
