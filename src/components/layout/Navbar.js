import { useState } from "react";
import {Link} from "react-router-dom";
import "../style/Navbar.css";
import  logo  from '../../assets/logo.png'

export function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
         <Link to="/" activeclassName="active" className="nav-logo">
            <img  className="logo" src={logo} alt="logo"  />
        </Link>
        <div className="nav-container">
            <ul className={click ? "nav-menu active" : "nav-menu"}>
               <li className="nav-item">
                  <Link to="/" activeclassName="active" className="nav-links" onClick={handleClick}>Home</Link>
               </li>
               <li className="nav-item">
                  <Link to="instructions" activeclassName="active" className="nav-links" onClick={handleClick}>Instructions</Link>
               </li>
               <li className="nav-item">
                  <Link to="terms" activeclassName="active" className="nav-links" onClick={handleClick}>Terms</Link>
               </li>
            </ul>
        </div>
        <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </nav>
    </>
  );
}


