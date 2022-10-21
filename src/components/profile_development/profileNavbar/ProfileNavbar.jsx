import React from 'react'
import Stepper from './stepper';
import logo from'./logo.png'
import { Grid, Typography} from '@mui/material'
const ProfileNavbar = (props) => {
  return (
    <>
      <Grid container  spacing={1}>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}></Grid>

        <Grid item xs={0.5}></Grid>
        <Grid item xs={0.5}><img src={logo} alt='logo'></img></Grid>
        <Grid item xs={1.5}><Typography variant="profileLogoFont">Hiring Genie</Typography></Grid>
        
        <Grid item aligin='center' xs={6}> <Stepper step={props.step}></Stepper></Grid>
        <Grid item xs={3.5}></Grid>
    
        <Grid item xs={12}> <div className="progress" style={{ height: '0.7vmin' }}>
          <div className="progress-bar" role="progressbar" aria-label="Basic example" style={{ width: '33.33%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        </div></Grid>
      </Grid>


    </>
  )
};
export default ProfileNavbar