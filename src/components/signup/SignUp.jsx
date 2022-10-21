import React, { useState } from 'react'
import signup_line from './signup_line.svg'
import Navbar from '../navbar/Navbar'
import './signup.css'
import {
  Link
} from "react-router-dom";
import { Grid,Typography} from '@mui/material'
import MyTextField from '../../Style/MyTextField'
import GradientButton from '../../Style/GradientButton'
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
      <div className='login_signup_container'>
        <div className='circle_top_signup'></div>
        <div className='circle_bottom_signup'></div>
        <div className='login_signup_glass'>
          <Grid container spacing={1.8}>
            <Grid item xs={12}></Grid>
            <Grid item xs={12}><Navbar color='var(--color-text)' btnName='login' /></Grid>

            <Grid item xs={12} align='center'><Typography variant="hgTopHeading">SIGN UP FOR HIRING GENIE</Typography></Grid>

            <Grid item xs={12} align="center">
              <div>
                <button className={`signup_canidate_btn ${changeNames.btn_active_candiate}`} onClick={changeNameCanidate}>as a canidate</button>
                <button className={`signup_company_btn ${changeNames.btn_active_company}`} onClick={changeNameCompany}>as a company</button>
              </div>
            </Grid>
            <Grid item xs={1} md={3}></Grid>
            <Grid item xs={5} md={3}><MyTextField id="outlined-basic" label={changeNames.fName} fullWidth variant="outlined" /></Grid>

            <Grid item xs={5} md={3}><MyTextField id="outlined-basic" label={changeNames.fName} fullWidth variant="outlined" /></Grid>
            <Grid item xs={1} md={3}></Grid>

            <Grid item xs={1} md={3}></Grid>
            <Grid item xs={5} md={3}><MyTextField id="outlined-basic" label="Phone Number" fullWidth variant="outlined" /></Grid>
            <Grid item xs={5} md={3}><MyTextField id="outlined-basic" label="Email Address" fullWidth variant="outlined" /></Grid>
            <Grid item xs={1} md={3}></Grid>

            <Grid item xs={1} md={3}></Grid>
            <Grid item xs={5} md={3}><MyTextField id="outlined-password-input" label="Password" type="password" autoComplete="current-password" fullWidth /></Grid>
            <Grid item xs={5} md={3}><MyTextField id="outlined-password-input" label="Confirm Password" type="password" autoComplete="current-password" fullWidth /></Grid>
            <Grid item xs={1} md={3}></Grid>

            <Grid item xs={12} align='center'><GradientButton>SIGN UP</GradientButton></Grid>
            <Grid item xs={12} align='center'><Typography variant="hgLink"><Link to="/login">dont have account? sign up now</Link></Typography></Grid>
          </Grid>

        </div>
        <img className='signup_line' src={signup_line} alt='' />
      </div>
    </>
  )
}

export default SignUp