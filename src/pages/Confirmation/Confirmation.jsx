import React from 'react'
import './Confirmation.css'
import { Link } from "react-router-dom";

const Confirmation = () => {
  return (
    <>
    <div className='confirmation-container'>
        <h1 className='confirmation-text'>Tack för ditt köp!</h1>
        <Link to="/">
            <button className='confirmation-btn'>
                ÅTERGÅ TILL STARTSIDAN
            </button>
        </Link>
    </div>
    </>
  )
}

export default Confirmation;