import './App.css'

import { Routes, Route } from "react-router-dom"
import Posts from "./componet/Posts"
import Photos from "./componet/Photos"
import Comment from "./componet/Comments"
import Home from "./Home"
import Albums from "./componet/Albums"
import Todos from "./componet/Todos"
import User from "./componet/User"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/> } />
        <Route path="/posts" element={ <Posts/> } />
        <Route path="/comment" element={ <Comment/> } />
        <Route path="/photos" element={ <Photos/> } />
        <Route path="/albums" element={ <Albums/> } />
        <Route path="/todos" element={ <Todos/>} />
        <Route path="/user" element={ <User/>} />
      </Routes>
    </div>
  )
}

export default App