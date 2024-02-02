import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from 'react-bootstrap/Spinner';
import { useDebugValue, useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Row } from 'react-bootstrap';

function App() {

  let [data, setdata] = useState([]);
  let [loading, setLoading] = useState(true);
  let[srch , setsrch] = useState('');
  let[all , setall] = useState([]);


  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then(function (response) {
        // handle success
        console.log(response.data.results);
        setdata(response.data.results);
        setLoading(false)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })

  }, [])

  const searchhendal = () => {
    setall(data);
    const search = data.filter((ele , ind) => {
      return ele.name==srch
    })
    setdata(search);
    setsrch('');
  }
  const allhendal = () => {
    setdata(all);
  }

  return (
    <div className='App'>
      <div className='head'>
        <div className='contenar'>
          <div className='nev'>
            <div className='leftnev'>Logo</div>
            <div className='rightnev d-flex'>
              <li><a>Docs</a></li>
              <li><a>About</a></li>
              <button>SUPPORT US</button>
            </div>
          </div>
          <div className='headname'>
            <h1>The Rick and Morty API</h1>
          </div>
        </div>
      </div>
      <div className='contect'>
        
        <div className='contenar'>
        <div >
          <input type='text' placeholder='Search name' value={srch} onChange={(e) =>setsrch(e.target.value)}></input>
          < input type='button' value='Search' className='px-4 py-1 ms-4' onClick={searchhendal}></input>
          < input type='button' value='All' className='px-4 py-1 ms-4' onClick={allhendal}></input>
        </div>
          <Row>
            {
                loading ? <Spinner animation="border" style={{ margin: "auto", marginTop: "20%" }} variant="primary" /> :
              data.map((ele, ind) => {
                return (
                  <Col sm={12} lg={6} key={ind} className='p-0'>
                    <div className='cont'>
                      <div className='imgbox'>
                        <img src={ele.image}></img>
                      </div>
                      <div className='text'>
                        <div className='secion'>
                          <a><h2 className='m-0'>{ele.name}</h2></a>
                          <div className='d-flex a-center m-0'>
                            <p style={{ backgroundColor: ele.status == 'Alive' ? 'green' : ele.status == 'Dead' ? 'red' : 'gray', borderRadius: '50%', height: "10px", width: "10px" }} className='my-auto me-2'></p><p className='m-0'>{ele.status} - {ele.species}</p>
                          </div>
                        </div>
                        <div className='secion1 secion'>
                          <p className='m-0 color-grey'>Last known location:</p>
                          <p className='m-0'><a>{ele.location.name}</a></p>
                        </div>
                        <div className='secion'>
                          <p className='m-0 color-grey'>First seen in:</p>
                          <p className='m-0'><a>{ele.origin.name}</a></p>
                        </div>
                      </div>
                    </div>
                  </Col >
                )
              })
            }
          </Row>
        </div>
      </div>
      <div className='footer'>
        <div className='f-head'>
          <ul className='d-flex '>
            <li><a>CHARACTERS: 826</a></li>
            <li><a>LOCATIONS: 126</a></li>
            <li><a>EPISODES: 51</a></li>
          </ul>
          <a><span>SERVER STATUS</span><span className='icon  '></span></a>
          <div>
            <li><a></a></li>
          </div>
        </div>
      </div>
    </div>
  )
}
export default App;














  // import logo from './logo.svg';
  // import './App.css';
  // import { useEffect, useState } from 'react';
  // import axios from 'axios';
  // import { Button, Container, Row, Col, CircleLoader } from 'react-bootstrap';
  
  // // import { IoLogoGithub,IoMdHeart,IoLogoTwitter } from "react-icons/io";


  // function App() {

  //   let [data, setdata] = useState([]);
  //   let [loading, setLoading] = useState(true)

  //   useEffect(() => {
  //     axios.get('https://rickandmortyapi.com/api/character   ')

  //       .then(function (response) {
  //         console.log(response.data.results);
  //         setdata(response.data.results);
  //         setLoading(false)

  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //       })

  //   }, []);

  //   return (
  //     <div style={{ backgroundColor: "#272B33" }}>
  //       <Row className='mx-5'>
  //         {
  //           loading ? <Spinner animation="border" style={{ margin: "auto", marginTop: "20%" }} variant="primary" /> :
  //             data.map((ele, ind) => {
  //               return (
  //                 <Col xs={12} lg={6}>
  //                   <div key={ind} className='d-flex my-4 my-sm-4  m-sm-auto m-lg-block' style={{ width: "100%", height: "270px", borderRadius: "10px", backgroundColor: "#3C3E44" }}>
  //                     <img src={ele.image} className='object-fit-cover' style={{ width: "250px", borderRadius: "10px 0 0 10px" }}></img>

  //                     <div className='ps-3 main'>

  //                       <h3>{ele.name}</h3>
  //                       <div className='d-flex align-items-center'>

  //                         <span className='fw-bolder' style={{ backgroundColor: ele.status == 'Alive' ? 'green' : ele.status == 'Dead' ? 'red' : 'gray', borderRadius: '50%', height: "10px", width: "10px" }}></span>

  //                         <p className='m-0 ms-1' style={{ fontSize: "16px", color: "white", lineHeight: ".6" }}>{ele.status} - {ele.species}</p>

  //                       </div>

  //                       <div className='py-4 sub'>
  //                         <p className='pt-2' style={{ color: "#9E9E9E", lineHeight: ".08" }}>Last known location :</p>
  //                         <h5>{ele.origin.name}</h5>
  //                       </div>

  //                       <div className='pt-1 peta'>
  //                         <p className='pt-2' style={{ color: "#9E9E9E", lineHeight: ".08" }}>First seen in :</p>
  //                         <h5>{ele.location.name}</h5>
  //                       </div>
  //                     </div>
  //                   </div>
  //                 </Col>
  //               )
  //             })
  //         }
  //       </Row>

  //       <div style={{ backgroundColor: "#202329", padding: "80px 0 80px 0" }}>
  //         <Container>
  //           <Row>
  //             <Col className='f1 d-flex justify-content-center'>
  //               <h6 className='pe-4'>CHARACTERS: 826</h6>
  //               <h6>LOCATIONS: 126</h6>
  //               <h6 className='ps-4'>EPISODES: 51</h6>
  //             </Col>
  //             <div className='f2 pt-2 text-center'>
  //               <h6>SERVER STATUS</h6>
  //             </div>
  //             <div className='icon pt-3 text-center'>
  //               {/* <a><i><IoLogoGithub></IoLogoGithub></i></a> */}
  //               {/* <a className='px-3'><i><IoLogoTwitter></IoLogoTwitter></i></a> */}
  //               {/* <a><i><IoMdHeart></IoMdHeart></i></a> */}
  //             </div>
  //             <div className='f3 text-center pt-5'>
  //               <p>❮ ❯ by <span>Axel Fuhrmann</span> 2024</p>
  //             </div>
  //           </Row>
  //         </Container>
  //       </div>

  //     </div>
  //   );
  // }

  // export default App;













// function App() {
//   let[data , setdata] = useState("hello");
//   let[data1 , setdata1] = useState("hello 1");

//   useEffect(() => {
//     console.log("hello");
//   },[data1]);

//   const datahendal = () => {
//     setdata("heloo welcome");
//   }
//   const datahendal1 = () => {
//     setdata1("heloo welcome");
//   }

//   return (
//     <div className="App">
//       <h1 >{data}</h1>
//       <h1 >{data1}</h1>
//       <input type='button' value="click" onClick={datahendal}></input>
//       <input type='button' value="click" onClick={datahendal1}></input>

//       </div>
//   );
// }

// export default App;


// import axios from 'axios';
// import './App.css';
// import { useEffect, useState } from 'react';
// import { Row, Col, Container } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function App() {

//   let [data, setdata] = useState([]);
//   // let [data1,setdata1] = useState('hello welcome');

//   // function datahandler() {
//   //   console.log(data);
//   //   setdata(data);
//   // }
//   // function datahandler1() {
//   //   console.log(data1);
//   //   setdata(data1);
//   // }

//   useEffect(() => {
//     axios.get('https://rickandmortyapi.com/api/character')
//       .then(function (response) {
//         // handle success
//         console.log(response.data.results);
//         setdata(response.data.results);
//       })
//       .catch(function (error) {
//         // handle error
//         console.log(error);
//         // if('status' == alive)
//         // {

//         // }
//       })
//   }, [])
//   return (
//     <div className="App">
//       {/* <h1>{data}</h1> */}
//       {/* <input type="button" value='click here' onClick={datahandler} />
//       <input type="button" value='click here' onClick={datahandler1} /> */}
//       <Container>
//         <Row>
//           {
//             data.map((ele, ind) => {
//               return (
//                 <Col lg={6}>
//                   <span key={ind} className='col'>
//                     <img src={ele.image}></img>
//                     <div className='parent' style={{width: '100%'}}>
//                       <div className='section ps-3'>
//                         <h2 style={{ fontWeight: '800' }}>{ele.name}</h2>
//                         <div className='alive'><p style={{ fontSize: '18px' }}>{ele.status}</p></div>
//                       </div>
//                       <div className='section ps-3'>
//                         <p>Last known location:</p>
//                         <p style={{fontSize: '20px'}}>{ele.location.name}</p>
//                       </div>
//                       <div className='section ps-3'>
//                           <p>First seen in:</p>
//                           <p>The Rickshank Rickdemption</p>
//                       </div>
//                     </div>
//                   </span>
//                 </Col>
//               )
//             })
//           }
//         </Row>
//       </Container>
//     </div>
//   );
// }

// export default App;