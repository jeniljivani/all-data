import { useEffect, useState } from "react";
import Home from "../Home";
import axios from 'axios';


function Comments() {
     let [coment, setcoment] = useState([]);

     useEffect(() => {
          axios.get('https://jsonplaceholder.typicode.com/comments')
               .then(function (response) {
                    // handle success
                    console.log(response.data);
                    setcoment(response.data);

               })
               .catch(function (error) {
                    // handle error
                    console.log(error);
               })
     }, [])

     return (
          <div>
               <Home />
               <h1 className="head-name">COMMENTS</h1>
               
      <table border={1}>
        <tr>
          <th>Post id</th>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Body</th>
        </tr>
        {
          coment.map((ele , ind) => {
            return(
              <tr key={ind}>
                <td className="id">{ele.postId}</td>
                <td className="id">{ele.id}</td>
                <td className="text">{ele.name}</td>
                <td className="text">{ele.email}</td>
                <td className="text">{ele.body}</td>
              </tr>
            )
          })
        }
      </table>
          </div>
     )
}
export default Comments;