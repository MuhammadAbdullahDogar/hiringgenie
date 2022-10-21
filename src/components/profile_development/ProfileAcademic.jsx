import React from 'react'
import { Link } from "react-router-dom";
import ProfileNavbar from './profileNavbar/ProfileNavbar'
import { Grid, Typography } from '@mui/material'
import MyTextField from '../../Style/MyTextField'
import AddIcon from '@mui/icons-material/AddCircleOutlined';
import RemoveIcon from '@mui/icons-material/RemoveCircleOutlined';
import GradientButton from '../../Style/GradientButton'
import { useState } from 'react';
const ProfileAcademic = () => {
  const [formFields, setFormFields] = useState([{ universityName: '', Major: '', startingYear: '', endignYear: '', obtainedCgpa: '', totalCgpa: '', learning: '' }])
  const handelFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  }
  const submit = () => {
    console.log(formFields)
  }

  const addFields = () => {
    let object = { universityName: '', Major: '', startingYear: '', endignYear: '', obtainedCgpa: '', totalCgpa: '', learning: '' }
    setFormFields([...formFields, object])
  }
  const removeFields = (index) => {
    let data = [...formFields];
    data.splice(index,1)
    setFormFields(data)
  }
  return (
    <div style={{ overflow: 'hidden', width: '100vw' }}>
      <Grid container spacing={2}>
        <Grid item xs={12}><ProfileNavbar step={1} /></Grid>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}></Grid>
        <Grid Grid item xs={0.1} md={0.4} ></Grid>
        <Grid item xs={2.1} md={2.5}><Typography variant="profileH1">Academic Information</Typography></Grid>
        <Grid item xs={9.1} md={7}><Typography variant="profileH2">Fill this form about the last degree that you did and you can add another university by tapping on add more</Typography></Grid>
        <Grid item xs={0.1} md={2} ></Grid>
        <form onSubmit={submit}>
          {formFields.map((form, index) => {
            return (

              <div key={index}>
                <Grid container spacing={2}>
                  <Grid item xs={12}></Grid>
                  <Grid item xs={12}></Grid>
                  <Grid item xs={0.1} md={0.5}></Grid>
                  <Grid item xs={2.1} md={2.5}><Typography variant="profileH2">Last Attended University</Typography></Grid>
                  <Grid item xs={4} md={4}  ><MyTextField name='universityName' value={form.universityName} label="University Name" variant="outlined" fullWidth onChange={event => handelFormChange(event, index)} /></Grid>
                  <Grid item xs={4} md={3}  ><MyTextField name='Major' value={form.Major} label="Major/Degree" variant="outlined" fullWidth onChange={event => handelFormChange(event, index)} /></Grid>
                  <Grid item xs={0.1} md={2}  >{index!==0 &&(<RemoveIcon fontSize='large' color='error' onClick={removeFields} />)}</Grid>

                  <Grid item xs={0.1} md={3}></Grid>
                  <Grid item xs={2.8} md={1.75}><MyTextField name='startingYear' value={form.startingYear} label="Starting Year" variant="outlined" fullWidth onChange={event => handelFormChange(event, index)} /></Grid>
                  <Grid item xs={2.8} md={1.75}><MyTextField name='endignYear' value={form.endignYear} label="Ending Year" variant="outlined" fullWidth onChange={event => handelFormChange(event, index)} /></Grid>
                  <Grid item xs={2.8} md={1.75}><MyTextField name='obtainedCgpa' value={form.obtainedCgpa} label="Obtained CGPA" variant="outlined" fullWidth onChange={event => handelFormChange(event, index)} /></Grid>
                  <Grid item xs={2.8} md={1.75}><MyTextField name='totalCgpa' value={form.totalCgpa} label="Total CGPA" variant="outlined" fullWidth onChange={event => handelFormChange(event, index)} /></Grid>
                  <Grid item xs={0.1} md={2}></Grid>

                  <Grid item xs={0.1} md={0.5}></Grid>
                  <Grid item xs={2.1} md={2.5}><Typography variant="profileH2">Learnings and Achievements</Typography><br />
                    <Typography variant="profileH3">It is okay to boast a bit, write here all of what you learnt and achieved throughout your university years.</Typography></Grid>
                  <Grid item xs={8} md={7}><MyTextField name='learning' value={form.learning} multiline fullWidth rows={5} onChange={event => handelFormChange(event, index)} /></Grid>
                  <Grid item xs={0.1} md={2}></Grid>
                </Grid>
              </div>
            )
          })}
        </form>
        <Grid item xs={3}></Grid>
        <Grid item xs={9}><AddIcon fontSize='large' color='secondary' onClick={addFields} /><Typography variant='profileH3'>Add Another University</Typography></Grid>
        <Grid item xs={12} align='center'><Link to='/profile_experience'><GradientButton onClick={submit}>NEXT</GradientButton></Link></Grid>
      </Grid>

    </div>
  );
}

export default ProfileAcademic;