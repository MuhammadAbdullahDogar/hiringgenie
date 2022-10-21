import React from 'react'
import Navbar from '../navbar/Navbar'
import {
    Link
} from "react-router-dom"
import { Grid, Typography, FormControlLabel, Checkbox } from '@mui/material'
import GradientButton from '../../Style/GradientButton'
import MyTextField from '../../Style/MyTextField'
const Login_dark = () => {
    return (
        <>
            <div className='login_signup_container'>
                <div className='circle_top_login'></div>
                <div className='circle_bottom_login'></div>
                <div className='login_signup_glass'>
                    <Grid container spacing={2}>
                        <Grid item xs={12}></Grid>

                        <Grid item xs={12}><Navbar color='var(--color-text)' btnName='signup' /></Grid>

                        <Grid item xs={12} align="center"><Typography variant="hgTopHeading">LOGIN TO HIRING GENIE</Typography></Grid>

                        <Grid item xs={12} sm={false}> </Grid>
                        <Grid item xs={1} md={4.35}></Grid>
                        <Grid item xs={10} md={3.3} ><MyTextField label="Email Address" type="email" /></Grid>
                        <Grid item xs={1} md={4.35}></Grid>


                        <Grid item xs={1} md={4.35}></Grid>
                        <Grid item xs={10} md={3.3} ><MyTextField label="Password" type="password" autoComplete="current-password" /></Grid>
                        <Grid item xs={1} md={4.35}></Grid>

                        <Grid item xs={12} align="center"><FormControlLabel control={<Checkbox defaultChecked size="small" />} label="Remember me on this device" /></Grid>

                        <Grid item xs={12} align='center'><GradientButton>LOGIN</GradientButton></Grid>
                        <Grid item xs={12} align='center'><Typography variant="hgLink"><Link to="/signUp">dont have account? sign up now</Link></Typography></Grid>
                    </Grid>
                </div>
            </div>
        </>
    )
}

export default Login_dark