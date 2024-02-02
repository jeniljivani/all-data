// ============== WEB SITE LINK ===================
// https://themewagon.github.io/lighten/index.html



import { Routes, Route } from "react-router-dom"
import Home from "./Home";
import About from './Componet/About';
import Product from "./Componet/Product";
import Blog from "./Componet/Blog";
import Contact from "./Componet/Contact";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/contact" element={<Contact/>}/>       
      </Routes>

       
        {/* WHY CHOOSE US END */}

      
    </div>
  )
}

export default App