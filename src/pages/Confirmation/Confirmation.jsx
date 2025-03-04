import React from 'react'
import './Confirmation.css'
import { Link } from "react-router-dom";

const Confirmation = () => {
  return (
    <>
    <div className='confirmation-container'>
        <h1 className='confirmation-text'>Thank you for your purchase!</h1>
        <Link to="/">
            <button className='confirmation-btn'>
                RETURN TO HOMEPAGE
            </button>
        </Link>
    </div>
    </>
  )
}

export default Confirmation;