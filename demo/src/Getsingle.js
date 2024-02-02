import logo from './imga/logo1.png';
import axios from 'axios';
import { Card, Col, Row, Container, Button } from 'react-bootstrap';
import './App.css';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";



import { FaCartArrowDown, FaStar } from "react-icons/fa";
import { MdCategory } from "react-icons/md";

function Getsingle() {
    
    let [data, setdata] = useState([])
    useEffect(() => {
        axios.get('https://dummyjson.com/products')
            .then(function (response) {

                // console.log(response.data.products);
                setdata(response.data.products)
                // setall(response.data.products)

                // setall(response.data.results)

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    }, [])
    return (
        <>
            <div className='header'>
                <Container>
                    <Row className='justify-content-between align-items-center py-3 '>
                        <Col sm='auto'>
                            <div>
                                <img src={logo} style={{ width: '70px',height:'60px' }} ></img>
                            </div>
                        </Col>
                        <Col sm='auto' className='text-center '>
                            {/* <button onClick={alldata}>ALL</button> */}
                            <Link to='/'><button>HOME</button></Link>

                            {/* <input type='text' placeholder='SEARCH HERE...'></input>
                            <button>SEARCH</button> */}
                        </Col>
                        <Col sm='auto' className='text-end'>
                            <a href=''><FaCartArrowDown></FaCartArrowDown></a>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>
                <Row className='content'>
             
                    <Col>
                        <Row>
                            {
                                data.map((ele, ind) => {
                                    return (
                                            <Col lg={12} key={ind}>
                                                <div style={{ padding: '10px' }} className='mt-2 boxes' >
                                                    <Row className='align-items-center'>
                                                        <Col xs={12} lg={6} className='text-center'>
                                                            <div >
                                                                <img  src={ele.thumbnail} className='me-4' style={{ borderRadius: '20px',width:'60%', objectFit: 'cover' }}></img>
                                                            </div>
                                                        </Col>
                                                        <Col lg={6}>
                                                            <h5 className='mt-3' style={{ fontFamily: 'forte' }}> {ele.title} : -</h5>
                                                            <p className='mt-3' style={{ lineHeight: '30px' }}><font style={{ borderBottom: '2px solid black', paddingBottom: '5px', fontFamily: 'forte' }}>About product : </font>"{ele.description}"</p>
                                                            <h6 className='mt-3'>Price : {ele.price} ₹ ||  Des : {ele.discountPercentage} % </h6>
                                                            <h6 className='mt-3'>Rating : {ele.rating} </h6>
                                                            <h6 className='mt-3'>Stock : {ele.stock} . . . </h6>
                                                            <h6 className='mt-3'>Brand : {ele.brand}</h6>
                                                            <h6 className='mt-3'>Category : {ele.category} <i style={{ color: '#CB6545' }} className='ms-2'><MdCategory></MdCategory> </i></h6>
                                                            <Row>
                                                                {
                                                                    ele.images.map((ele) => {
                                                                        return (
                                                                            <Col >
                                                                                <div className='mt-5' >
                                                                                    <img src={ele} className='w-100' ></img>
                                                                                </div>
                                                                            </Col>
                                                                        )
                                                                    })
                                                                }
                                                            </Row>

                                                        </Col>
                                                    </Row>
                                                </div>
                                            </Col>

                                    )
                                })
                            }
                        </Row></Col>
                </Row>

            </Container>
        </>
    )
}

export default Getsingle;