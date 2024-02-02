import Category from "./componet/Category";
import Header from "./componet/Header";
import logo from './image/jiomaret.svg';

import { Card, Col, Container, Row } from 'react-bootstrap';
import { FaOpencart, FaRupeeSign, FaSearch, FaUserFriends } from "react-icons/fa";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

function Home() {

  let [prod, setprod] = useState([]);
  let [srch, setsrch] = useState();
  let [alldata, setalldata] = useState([]);



  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(function (response) {
        // handle success
        console.log(response.data.products);
        setprod(response.data.products);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }, [])

  const srchhendal = () => {
    if (srch == '') {
      setprod(prod)
    } else {
      setalldata(prod);
      let srchdata = prod.filter((ele, ind) => {
        return ele.title == srch
      })
      setsrch('')
      setprod(srchdata)
    }
  }

  const alldatahendal = () => {

    setprod(alldata);
  }

  return (
    <div>

      {/* >>>>>>>>>>>> HEADER START ********** */}
      <div className='nev'>
        <Container>
          <div className='topnev d-flex justify-content-between'>
            <div className='leftnev'>
              <a><img src={logo}></img></a>
            </div>
            <div className='centernev d-flex'>
              <div className='srchbox d-flex'>
                <button className='btn ms-3 px-3 my-auto' ><Link to="/" style={{ textDecoration: 'none', color: 'white' }}>HOME</Link></button>
                <input type='text' className='srchtext p-1 ps-2' placeholder='Search' value={srch} onChange={(e) => setsrch(e.target.value)}></input>
                <i className='srchicon'><FaSearch></FaSearch></i>
              </div>
              <button className='btn ms-3 px-3 my-auto' onClick={srchhendal} >Sreach</button>
              <button className='btn ms-3 px-3 my-auto' onClick={alldatahendal} >All</button>
            </div>
            <div className='rightnev d-flex'>
              <li className='px-4 py-2'><a><i className='pe-2'><FaOpencart></FaOpencart></i>Cart</a></li>
              <li className='px-3 py-2'><a><i className='pe-2'><FaUserFriends></FaUserFriends></i>Sing in</a></li>
            </div>
          </div>
        </Container>
      </div>
      {/* >>>>>>>>>>>> HEADER END ********** */}


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
                        <div className="buyprod mb-4 m-auto ">
                          <button className="buybtn py-1 px-5  mx-3" style={{fontWeight:'500'}}> Add Product</button>
                          </div>                       
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
export default Home;