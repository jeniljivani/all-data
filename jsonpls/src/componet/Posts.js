import { useEffect, useState } from "react";
import Home from "../Home";
import axios from 'axios';

function Posts() {
  let [post , setpost] = useState([]);

  useEffect(() => {
  axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(function (response) {
    // handle success
    console.log(response.data);
    setpost(response.data);

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })  
  },[])
  return (
    <div> 
      <Home/>
      <h1 className="head-name">POSTS</h1>

      <table border={2}>
        <tr>
          <th>User id</th>
          <th>Id</th>
          <th>Titel</th>
          <th>Body</th>
        </tr>
        {
          post.map((ele , ind) => {
            return(
              <tr key={ind}>
                <td className="id">{ele.userId}</td>
                <td className="id">{ele.id}</td>
                <td className="text">{ele.title}</td>
                <td className="text">{ele.body}</td>
              </tr>
            )
          })
        }
      </table>

    </div>
  )
}
export default Posts;