import React from 'react'
import logo from "../sv_logo.jpg";
//react font awesome import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className='container'>

             <a className="navbar-brand" href="#"><img className='logo' src={logo} alt= "logo..."/></a>
                 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{color: "#ffff"}}/>
                 </button>

                   <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span class="sr-only"></span></a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">About me</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">skillset</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">education</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">achievements</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">interest</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">contact</a>
                      </li>
      
                     </ul>
    
                     </div>
          </div>
        </nav>
    )
}

export default navbar
