import React from 'react'
import './Navbar.css'

const tagIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M502.9 266v69.7c0 62.1-50.3 112.4-112.4 112.4-61.8 0-112.4-49.8-112.4-111.3v-70.2l34.3 16 51.1-15.2V338c0 14.7 12 26.5 26.7 26.5S417 352.7 417 338v-72h85.9zm-224.7-58.2l34.3 16 51.1-15.2V173c0-60.5-51.1-109-112.1-109-60.8 0-112.1 48.2-112.1 108.2v162.4c0 14.9-12 26.7-26.7 26.7S86 349.5 86 334.6V266H0v69.7C0 397.7 50.3 448 112.4 448c61.6 0 112.4-49.5 112.4-110.8V176.9c0-14.7 12-26.7 26.7-26.7s26.7 12 26.7 26.7v30.9z"/></svg>

const Navbar = () => {
    const [ toggler,setToggler] = React.useState(false);
    window.addEventListener('resize',()=>{
      if(window.innerWidth>645){
        setToggler(false);
      }
    });
  return (
    <nav>
    <div id="tag">{tagIcon}</div>
   
    <div  id="hamburger" onClick={()=>setToggler(!toggler)}>
      <span className="h-span"></span>
      <span className="h-span"></span>
      <span className="h-span"></span>
    </div>


  <div id={toggler?"trans-div":" "}>
    <div className={toggler?"nav-container-mobile":"nav-links-container"}>
      <a href="https://localhost" className="nav-links">HOME</a>
      <a href="https://localhost" className="nav-links">CONTACT</a>
      <a href="https://localhostlocalhostt" className="nav-links">LOGIN</a>
    </div>
  </div>
    
  </nav>
  )
}

export default Navbar