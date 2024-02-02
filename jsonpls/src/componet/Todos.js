import { useEffect, useState } from "react";
import Home from "../Home";
import axios from 'axios';

function Todos() {
  let[todos , settodos] = useState([]);

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(function (response) {
        // handle success
        console.log(response.data);
        settodos(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  },[]);

  return (
    <div>
      <Home/>
      <h1 className="head-name">TODOS</h1>
      <table border={1}>
        <tr>
          <th>User id</th>
          <th>Id</th>
          <th>Titel</th>
          <th>Completed</th>
        </tr>
        {
          todos.map((ele, ind) => {
            return (
              <tr key={ind}>
                <td className="id">{ele.userId}</td>
                <td className="id">{ele.id}</td>
                <td className="text">{ele.title}</td>
                <td className="id">{ele.completed}</td>
                {/* <td className="text">{ele.completed}</td> */}
                {/* <td className="text">{ele.body}</td> */}
              </tr>
            )
          })
        }
      </table>
      
    </div>
  )
}
export default Todos;