import logo from './logo.svg';
import './App.css';
// import Header from './Header';
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Posts from './Posts';
// import Comments from './Comments';
// import Albums from './Albums';
// import Photos from './Photos';
// import Todo from './Todo';
// import User from './User';
import Home from './Home';
import Getsingle from './Getsingle';


function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Home/:id" element={<Getsingle />} />
        {/* <Route path="/Posts" element={<Posts />} />
        <Route path="/Comments" element={<Comments />} />
        <Route path="/Albums" element={<Albums />} />
        <Route path="/Photos" element={<Photos />} />
        <Route path="/Todo" element={<Todo />} />
        <Route path="/User" element={<User />} /> */}

      </Routes>
    </div>
  );
}

export default App;
