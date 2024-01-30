import React from 'react'
import "./index.css"

const footer = () => {
  return (
    <div>
    <div className="logo">
      <img src="your-logo.png" alt="Logo" />
      <span>Your Logo Name</span>
    </div>

    <ul className="links">
      <li><a href="#">Link 1</a></li>
      <li><a href="#">Link 2</a></li>
      <li><a href="#">Link 3</a></li>
      <li><a href="#">Link 4</a></li>
    </ul>

    <div className="icons">
      <a href="#"><img src="icon1.png" alt="Icon 1" /></a>
      <a href="#"><img src="icon2.png" alt="Icon 2" /></a>
      <a href="#"><img src="icon3.png" alt="Icon 3" /></a>
      <a href="#"><img src="icon4.png" alt="Icon 4" /></a>
    </div>
  </div>
);
}

export default footer