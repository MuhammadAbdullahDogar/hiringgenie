import React from 'react'
import './dev_nev.css'
import {
  Link
} from "react-router-dom";
const dev_nev = () => {
  return (
    <>
      <div className='dev_nev'>
        <ul>
          <Link to='/home'   >                   HOME _</Link>
          <Link to='/profile_about'>         ABOUT _</Link>
        </ul>
      </div>
    </>
  )
}

export default dev_nev