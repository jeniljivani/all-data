import { Routes, Route } from "react-router-dom"
// import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home";
import Productitem from "./componet/Productitem";
import Categryprod from "./componet/Categryprod";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/product/:id" element={ <Productitem/> } />
        <Route path="/catagory/:ele" element={ <Categryprod/> }  />
        {/* <Route path="/:id" element={ <Productitem/> } /> */}
      </Routes>
    </div>
  );
}

export default App;
