import React from 'react'
import { useState } from 'react';
import { Link } from "react-router-dom";
import ProfileNavbar from './profileNavbar/ProfileNavbar'
import { Grid, Typography, Select, MenuItem, InputLabel, FormControl } from '@mui/material'
import AddIcon from '@mui/icons-material/AddCircleOutlined';
import RemoveIcon from '@mui/icons-material/RemoveCircleOutlined';
import GradientButton from '../../Style/GradientButton'
import Countryselect from './Countryselect';
import MyTextField from '../../Style/MyTextField';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
const ProfileAbout = () => {
  const [formFields, setFormFields] = useState([{ linkType: '', portfolioLink: '' }])
  const handelFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  }
  const submit = () => {
    console.log(formFields)
  }

  const addFields = () => {
    let object = { linkType: '', portfolioLink: '' }
    setFormFields([...formFields, object])
  }
  const removeFields = (index) => {
    let data = [...formFields];
    data.splice(index,1)
    setFormFields(data)
  }
  return (
    <div style={{ overflow: 'hidden', width: '100vw' }}>
      <Grid container spacing={2} >
        <Grid item xs={12}><ProfileNavbar step={0} /></Grid>

        <Grid item xs={1}></Grid>
        <Grid item xs={2.5}><Typography variant="profileH1">About You</Typography></Grid>
        <Grid item xs={7}><IconButton color="primary" aria-label="upload picture" component="label">
          <input hidden accept="image/*" type="file" />
          <PhotoCamera />
        </IconButton></Grid>
        <Grid item xs={1} md={1.5}></Grid>

        <Grid item xs={1}></Grid>
        <Grid item xs={2.5}><Typography variant="profileH2">Personal Information</Typography></Grid>
        <Grid item md={1} xs={2} >
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Title</InputLabel>
            <Select labelId="demo-simple-select-label" id="demo-simple-select" label="Gender">
              <MenuItem value="Mr  ">Mr  </MenuItem>
              <MenuItem value="Mrs ">Mrs </MenuItem>
              <MenuItem value="Miss">Miss</MenuItem>
              <MenuItem value="Ms  ">Ms  </MenuItem>
              <MenuItem value="Mx  ">Mx  </MenuItem>
            </Select>
          </FormControl></Grid>
        <Grid item xs={3}><MyTextField id="outlined-basic" label="First Name" variant="outlined" fullWidth /></Grid>
        <Grid item xs={3}><MyTextField id="outlined-basic" label="Last Name" variant="outlined" fullWidth /></Grid>
        <Grid item xs={1} md={1.5}></Grid>

        <Grid item xs={3.5}></Grid>
        <Grid item xs={3.5}><MyTextField id="outlined-basic" label="Email Address" variant="outlined" fullWidth /></Grid>
        <Grid item xs={3.5}><MyTextField id="outlined-basic" label="Phone Number" variant="outlined" fullWidth /></Grid>
        <Grid item xs={1.5} md={1.5}></Grid>

        <Grid item xs={3.5}></Grid>
        <Grid item md={2.33} xs={3}><MyTextField id="outlined-basic" label="Date Of Birth" variant="outlined" fullWidth /></Grid>
        <Grid item md={2.33} xs={3}><MyTextField id="outlined-basic" label="City" variant="outlined" fullWidth /></Grid>
        <Grid item md={2.33} xs={2}><Countryselect></Countryselect></Grid>
        <Grid item xs={1} md={1.5}></Grid>

        <Grid item xs={12}></Grid>
        <Grid item xs={12}></Grid>


        <Grid item xs={1}></Grid>
        <Grid item xs={2.5}><Typography variant="profileH2">Portfolio / Website</Typography></Grid>

        <Grid item xs={8.5}>
          <form onSubmit={submit}>
            {formFields.map((form, index) => {
              return (
                <div key={index}>
                  <Grid container spacing={1}>
                    <Grid item xs={12}></Grid>
                    <Grid item md={3.5} xs={3}><MyTextField name='linkType' value={form.linkType} label="Link Type" variant="outlined" fullWidth onChange={event => handelFormChange(event, index)} /></Grid>
                    <Grid item md={6.4} xs={5}><MyTextField name='portfolioLink' value={form.portfolioLink} label="Portfolio Link" variant="outlined" fullWidth onChange={event => handelFormChange(event, index)} /></Grid>
                    
                      <Grid item xs={1} md={2.1} sx={{ marginTop: ".5rem" }}>{index!==0 &&(<RemoveIcon fontSize='large' color='error' onClick={removeFields} />)}</Grid>

                  </Grid>
                </div>
              )
            })}
          </form>
        </Grid>
        <Grid item xs={3.5}></Grid>
        <Grid item xs={8.5}><AddIcon fontSize='large' color='secondary' onClick={addFields} /><Typography variant='profileH3'>Add Another Link</Typography></Grid>

        <Grid item xs={1}></Grid>
        <Grid item xs={2.5}><Typography variant="profileH2">Brief Description</Typography><br />
          <Typography variant="profileH3">Describe who you are, and what makes you stand out of all the candidates.</Typography></Grid>
        <Grid item md={7} xs={8}><MyTextField id="outlined-multiline-static" multiline fullWidth rows={5} /></Grid>
        <Grid item xs={1} md={1.5}></Grid>

        <Grid item xs={12} align='center'><Link to='/profile_academic'><GradientButton onClick={submit}>NEXT</GradientButton></Link></Grid>
      </Grid>
    </div>
  )
}

export default ProfileAbout