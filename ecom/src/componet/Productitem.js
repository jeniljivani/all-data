import { FaStar, FaStarHalf } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';

import axios from 'axios';

import React from 'react'
import Category from "./Category";
import { Link, useParams } from "react-router-dom";
import Header from "./Header";

function Productitem() {

  let [prod, setprod] = useState([]);
  let [prodimg , setprodimg]= useState([]);
  let { id } = useParams();
  let [singlimg , setsinglimg] = useState(' ');
  // console.log(id);

  useEffect(() => {
    // https://dummyjson.com/products/1
    axios.get(`https://dummyjson.com/products/${id}`)
      .then(function (response) {
       
        setprod(response.data);
        setprodimg(response.data.images);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }, [])
  // let img = prod.images;
  // let urlElements = window.location.href.split('/')
  // console.log(urlElements);
  return (
    <div>
      <Header />
      <Container>
        <div className="singalprod">
          <div className="my-3 ">
            <div className="prodbox d-flex">
              <div className="prodimg">
                <img src={singlimg==' ' ? prod.thumbnail:singlimg} ></img>
              </div>
              <div className="prodcont">
                <h2 style={{ color: '#044563' }}>{prod.title}</h2>
                <p><b>Abut product :~ </b>{prod.description}</p>
                <p><span className="pe-2">BRAND :~ <b style={{ fontSize: '18px' }}>{prod.brand} </b></span>| |
                  <span className="ps-2"> STOCK :~ <b style={{ fontSize: '18px' }}>{prod.stock}</b> </span></p>
                <p>
                  <span>PRICE :~  <b style={{ fontSize: '18px', color: 'green' }}>{prod.price}.00 ₹</b></span><br></br>
                  <span>DES. :~ <b>{prod.discountPercentage}%</b></span><br></br>
                  <span>RATING :~ <b>{prod.rating}</b></span>
                  <i className="ps-3 " style={{color:'#0C5273'}}>
                  <FaStar ></FaStar>
                  <FaStar ></FaStar>
                  <FaStar ></FaStar>
                  <FaStar ></FaStar>
                  <FaStarHalf ></FaStarHalf>
                  </i><br></br>
                  <span>CATEGORY :~ <b style={{ fontSize: '18px', textTransform: "uppercase" }}>{prod.category}</b></span>
                </p>
                <Row>
                  {
                    prodimg.map((ele , ind) => {
                      return (
                        <>
                        <Col >
                          <div className='mt-5' >
                            <img src={ele} className='w-100' onClick={()=> setsinglimg(ele)}></img>
                          </div>
                        </Col>
                        </>
                      )
                    })
                  }
                </Row>
              </div>
            </div>
          </div>
        </div>       
      </Container>
    </div>
  )
}
export default Productitem;
