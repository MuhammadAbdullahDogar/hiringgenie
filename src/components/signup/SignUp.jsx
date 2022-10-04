import React, { useState } from 'react'
import './signup.css'
import {
  Link
} from "react-router-dom";
const SignUp = () => {
  const [changeNames, setChangeNames] = useState({ fName: 'First Name', lName: 'Last Name', btn_active_candiate: 'btn_active', btn_active_company: '' })
  const changeNameCompany = () => {
    setChangeNames({ fName: 'Company Name', lName: 'Domain', btn_active_company: 'btn_active', btn_active_candiate: '' });
  }
  const changeNameCanidate = () => {
    setChangeNames({ fName: 'First Name', lName: 'Last Name', btn_active_company: '', btn_active_candiate: 'btn_active' });
  }
  return (
    <>
    <div className='circle_top_signup'></div>
    <div className='circle_bottom_signup'></div>
    <div className='signup_glass'></div>
      <h1 className='signup_signup_top_text'>sign up for HIRING GENIE</h1>

      <button className={`signup_canidate_btn btn_company_candiate_text ${changeNames.btn_active_candiate}`} onClick={changeNameCanidate}>as a canidate</button>
      <button className={`signup_company_btn btn_company_candiate_text ${changeNames.btn_active_company}`} onClick={changeNameCompany}>as a company</button>

      <input type="text" className='signup_fname_input signup_input' id="fname" name="fname" />
      <label htmlFor="fname" className="signup_input_label_fname">{changeNames.fName}</label>

      <input type="text" className='signup_lname_input signup_input' id="lname" name="lname" />
      <label htmlFor="lname" className="signup_input_label_lname">{changeNames.lName}</label>

      <input type="email" className='signup_email_input signup_input' id="email" name="email" />
      <label htmlFor="email" className="signup_input_label_email">email address</label>

      <input type="number" className='signup_phone_input signup_input' id="phone" name="phone" />
      <label htmlFor="phone" className="signup_input_label_phone">phone number</label>

      <input className="signup_input signup_password_input" type="password" id="password" name="password" />
      <label htmlFor="password" className="signup_input_label_password">Password</label>

      <input className="signup_cpassword_input signup_input" type="password" id="cpassword" name="cpassword" />
      <label htmlFor="cpassword" className="signup_input_label_cpassword">confirm password</label>

      <button className='signup_btn_login'>Login</button>
      <p className='signup_have_account'><Link to="/login">Already have an account? LogIn Now</Link></p>
    </>
  )
}

export default SignUp