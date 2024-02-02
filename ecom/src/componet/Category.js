import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Product from './Categryprod';
import { Link } from 'react-router-dom';
import Categryprod from './Categryprod';
function Category(props) {
  let [cetegory, setcetegory] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products/categories')
      .then(function (response) {
        // handle success
        setcetegory(response.data);

      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });

  }, [])



  return (
    <div>
      <div className="saidbar">
        <h3>Filters</h3>
        <hr style={{ height: "1px", width: '95%', backgroundColor: "gray" }}></hr>
        <h5 style={{fontSize:"22px", color:"#0C5273", textUnderlineOffset:"6px"}} className='ps-1 mb-2'>CATEGORY</h5>
        <ul className='ps-2'>
          {
            cetegory.map((ele, ind) => {
              return (
                <div key={ind}>                
                <li className='py-1' style={{ textTransform: "uppercase" }}><Link to={`/catagory/${ele}`} className='py-1' >{ele}</Link></li>
                </div>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default Category;
