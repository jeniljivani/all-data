import { useEffect, useState } from "react";
import Home from "../Home";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap';

function Photos() {

  let [photos, setphotos] = useState([]);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos')
      .then(function (response) {
        // handle success
        console.log(response.data);
        setphotos(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }, [])

  return (
    <div>
      <Home />
      <h1 className="head-name">PHOTOS</h1>
      <div className="box">
        {
          photos.map((ele, ind) => {
            return (

              <Card style={{ width: '18rem' }} className="card-box" key={ind}>
                <Card.Img variant="top" src={ele.url} />
                <Card.Body>
                  <Card.Title>{ele.title}</Card.Title>
                  <p><b>AlbumId : </b>{ele.albumId}</p>
                  <p><b>Id : </b>{ele.id}</p>
                  <div className="d-flex cardimgbox">
                    <p className="pt-2 pe-3"><b>Thumbnail img : </b></p>
                    <Card.Img variant="bottom" src={ele.thumbnailUrl} className="cardimg" />
                  </div>
                </Card.Body>

              </Card>
            )
          })
        }
      </div>
    </div>
  )
}
export default Photos;