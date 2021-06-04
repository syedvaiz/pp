import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
      <div className="header-wraper">
          <div className="main-info">
              <h1 className="main-info-h1">MySELF</h1>
              <h1 className="my-name">SYED VAIZ</h1>
              <Typed className= "typed-text" 
                strings={["Student", "Avid Fitness Enthusiast", "Computer Science Enginner", "Foodie"]}
                typeSpeed={40}
                backSpeed={20}
                loop
              />
              <a href="#" className="btm-main-offer">contact me</a>
          </div>
      </div>
    )
}

export default Header
