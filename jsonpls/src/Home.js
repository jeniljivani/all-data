import './App.css'
import { Link } from "react-router-dom";


function Home() {
  return (
    <div className="App">
     

      <div className='head'>
        <h2>Resources</h2>
        <div className='head-text'>
          <li><Link to="/posts" className='link'>POSTS</Link></li>
          <li><Link to="/comment" className='link'>COMMENT</Link></li>
          <li><Link to="/albums" className='link'>ALBUMS</Link></li>
          <li><Link to="/photos" className='link'>PHOTOS</Link></li>
          <li><Link to="/todos" className='link'>TODOS</Link></li>
          <li><Link to="/user" className='link'>USER</Link></li>
        </div>
        {/* <p><Link to="/posts">Posts</Link></p>  */}
        
        
      </div>

    </div>
  )
}
export default Home;