import logo from './imga/logo1.png';
import axios from 'axios';
import { Card, Col, Row, Container, Button } from 'react-bootstrap';
import './App.css';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { FaCartArrowDown, FaStar } from "react-icons/fa";

function Home() {
	let [data, setdata] = useState([])
	let [search, setsearch] = useState([])
	let [all, setall] = useState([])

	useEffect(() => {
		axios.get('https://dummyjson.com/products')
			.then(function (response) {

				console.log(response.data.products);
				console.log(response);
				setdata(response.data.products)
				setall(response.data.products)
				// setall(response.data.results)

			})
			.catch(function (error) {
				// handle error
				console.log(error);
			})

	}, [])
	const searchdata = (e) => {
		var serarr = [], j = 0, k;
		setdata(all);
		console.log(all)

		for (var i = 0; i < data.length; i++) {
			if (((data[i].title).includes(search)) || ((data[i].description).includes(search))) {
				serarr[j] = data[i];
				j++;
			}
		}
		console.log(serarr)
		setdata(serarr)
		// k = 1;
		setsearch('')

		// if(data.title)
		// const regex = /(^.*\son$)|(^on\s.*)|(^on$)|(^.*\son\s.*$)/i;
	}
	const alldata = () => {
		setdata(all);

	}
	return (
		<>
			<div className='header'>
				<Container>
					<Row className='justify-content-md-between align-items-center py-3'>
						<Col sm={12} md='auto'>
							<div className='text-center text-md-start'>
								<img src={logo} style={{ width: '70px', height: '60px' }} ></img>
							</div>
						</Col>
						<Col sm={12} md='auto' className='text-center'>
							<Link to='/'><button>HOME</button></Link>

							<button onClick={alldata}>ALL</button>
							<input type='text' value={search} placeholder='SEARCH HERE...' onChange={(e) => setsearch(e.target.value)}></input>
							<button onClick={searchdata}>SEARCH</button>
						</Col>
						<Col sm={12} md='auto' className='text-center text-md-end'>
							<a href=''><FaCartArrowDown></FaCartArrowDown></a>
						</Col>
					</Row>

				</Container>
			</div>
			<Container>
				<Row className='content'>
					<Col><h1>hyy</h1></Col>
					<Col xs={12} lg={10} className='text-end'>
						<Row>
							{
								data.map((ele, ind) => {
									return (
										<Col sm={12} xl={6} className='text-sm-center text-lg-start '>
											<Link to={`Home/${ele.id}`} style={{ color: 'white' }}>
												<div style={{ padding: '10px' }} className='my-4 boxes' >
													<Row className='align-items-center '>
														<Col lg={6}>
															<div><img src={ele.thumbnail} className='w-100' style={{ borderRadius: '20px', height: '300px', objectFit: 'cover' }}></img></div>
														</Col>
														<Col lg={6}>
															<h5 style={{  color: 'black', textDecorationLine: 'none' }} className='mt-sm-5 mt-lg-0 mb-4'> {ele.title} : -</h5>
															<p style={{lineHeight: '35px' }}><font style={{ borderBottom: '2px solid black', paddingBottom: '5px', fontFamily: 'forte' }}>About product : </font>"{ele.description}"</p>
														</Col>
													</Row>
												</div>
											</Link>
										</Col>
									)
								})
							}
						</Row>
					</Col>
				</Row>

			</Container>
		</>
	)
}

export default Home;