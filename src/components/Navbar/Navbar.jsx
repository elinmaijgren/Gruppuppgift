import React from 'react'
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <nav>
      <h1>Navbar</h1>
      <ul>
        <li><Link to="/" >Hem</Link></li>
        <li><Link to="/kundvagnSida" >Kundvagn</Link></li>
      </ul>
    </nav>
  )
}

export default navbar