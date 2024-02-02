import { useEffect, useState } from "react";
import Home from "../Home";
import axios from 'axios';


function Albums() {
  let [albums, setalbums] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/albums')
      .then(function (response) {
        // handle success
        console.log(response.data);
        setalbums(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }, [])

  return (
    <div>
      <Home />
      <h1 className="head-name">ALBUMS</h1>
      <table border={1}>
        <tr>
          <th>Post id</th>
          <th>Id</th>
          <th>Titel</th>
          {/* <th>/Email</th> */}
          {/* <th>Body</th> */}
        </tr>
        {
          albums.map((ele, ind) => {
            return (
              <tr key={ind}>
                <td className="id">{ele.userId}</td>
                <td className="id">{ele.id}</td>
                <td className="text">{ele.title}</td>
                {/* <td className="text">{ele.url}</td> */}
                {/* <td className="text">{ele.body}</td> */}
              </tr>
            )
          })
        }
      </table>
    </div>
  )
}
export default Albums;