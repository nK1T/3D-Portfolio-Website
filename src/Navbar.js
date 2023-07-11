import { useState } from 'react'
import logo from './images/logo.png'
import search from './images/search.png'
function Navbar() {
  const [status,setStatus] = useState(false);
  // const [name,setName] = useState("Hire Me");
  return (
    <div className='navbar'>
      <div className='navbar-items'>
        <a href='google.com'><img alt="logo" src={logo}></img></a>
        <ul>
          <li>Home</li>
          <li>Work</li>
          <li>Contact</li>
          <li>Us</li>
        </ul>
      </div>
      <div className='search-container'>
        <img alt="search-icon" src={search}></img>
        <button  style={{backgroundColor:status&&"#da4ea2"}} onClick={()=>{
          setStatus(!status);
        }}>{status?"Hired":"Hire Me"}</button>
      </div>
    </div>
  )
}

export default Navbar;
