import { Container } from 'react-bootstrap';
import '../App.css';
import logo from '../image/jiomaret.svg';
import { FaOpencart, FaUserFriends, FaSearch } from "react-icons/fa";
import { useState } from 'react';
import { Link } from 'react-router-dom';


function Header() {


 
  return (
    <div>
      <div className='nev'>
        <Container>
          <div className='topnev d-flex justify-content-between'>
            <div className='leftnev'>
              <a><img src={logo}></img></a>
            </div>
            <div className='centernev d-flex'>
              <div className='srchbox d-flex'>
              <button className='btn ms-3 px-3 my-auto' ><Link to="/" style={{textDecoration:'none', color:'white'}}>HOME</Link></button>
                <input type='text' className='srchtext p-1 ps-2' placeholder='Search'></input>
                <i className='srchicon'><FaSearch></FaSearch></i>
              </div>
              <button className='btn ms-3 px-3 my-auto' >Sreach</button>
            </div>
            <div className='rightnev d-flex'>
              <li className='px-4 py-2'><a><i className='pe-2'><FaOpencart></FaOpencart></i>Cart</a></li>
              <li className='px-3 py-2'><a><i className='pe-2'><FaUserFriends></FaUserFriends></i>Sing in</a></li>
            </div>
          </div>
        </Container>
      </div>
      <div>
        <hr className='heder-line'></hr>
      </div>
    </div>
  )
}
export default Header;