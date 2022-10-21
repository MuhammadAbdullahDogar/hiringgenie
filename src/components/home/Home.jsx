import React from 'react'
import men_img from './home-img/men_img.svg'
import women_img from './home-img/women_img.svg'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@mui/material'
import Navbar from '../navbar/Navbar'

const useStyles = makeStyles({
  Home_bg: {
    background: '#0A0D4E',
    borderRadius: '1.875rem',
    height: '29.0625rem'
  },
  home_top_text: {
    textAlign: 'center',
    marginTop: '3.5rem',
    fontFamily: 'Comfortaa',
    fontSize: '3.75rem',
    fontWeight: 600,
    lineHeight: '4.1875rem',
    color: '#EBEFFF',
    animation: 'tracking-in-contract 1s cubic-bezier(0.215, 0.610, 0.355, 1.000) both'
  },
  home_text: {
    marginTop: '.9375',
    fontFamily: 'Urbanist',
    fontSize: '1.125rem',
    lineHeight: '1.625rem',
    fontWeight: 400,
    textAlign: 'center',
    letterSpacing: '0.04em',
    color: '#CBD4FF',
  },
  Home_register_btn: {
    background: 'var(--hg-gradient)',
    outline: 0,
    borderRadius: '.8125rem',
    border: 'none',
    fontFamily: 'Comfortaa',
    fontSize: '1.25rem',
    fontWeight: 600,
    lineHeight: '1.375',
    cursor: 'pointer',
    color: '#FFFFFF',
    width: '10.4375rem',
    height: '3.125rem',
    gap: '.625rem',
    padding: '.875rem'
  },
  Home_Book_tour: {
    background: 'none',
    outline: 0,
    border: 'none',
    fontFamily: 'Comfortaa',
    fontSize: '1.25rem',
    fontWeight: 600,
    lineHeight: '1.375',
    cursor: 'pointer',
    width: '10.4375rem',
    height: '3.125rem',
    textDecoration: 'underline',
    color: '#fff'
  },
  circle_green: {
    position: 'absolute',
    marginTop: "2rem",
    width: "10rem",
    height: "10rem",
    background: 'rgba(49, 177, 39, 0.63)',
    borderRadius: "100%",
    zIndex: '-1'
  },
  circle_blue: {
    position: "absolute",
    margin: "2rem 0 0 10.6875rem",
    width: "10rem",
    height: "10rem",
    background: 'rgba(36, 162, 233, 0.38)',
    borderRadius: "100%",
    zIndex: '-1',

  },
  green_circle_glass: {
    position: 'absolute',
    margin: '4rem 0 0 3.187rem',
    width: "18.1875rem",
    height: "13.9375rem",
    background: 'rgba(236, 236, 236, 0.34)',

    backdropFilter: 'blur(.625rem)',
    borderRadius: '1.5625rem',
    cursor: 'pointer',
    '&:hover': {
    },
  },
  blue_circle_glass: {
    position: 'absolute',
    margin: '4rem 0 0 0',
    width: "18.1875rem",
    height: "13.9375rem",
    background: 'rgba(236, 236, 236, 0.34)',
    boxShadow: 'inset 0px 4px 7px rgba(255, 255, 255, 0.25)',
    backdropFilter: 'blur(.625rem)',
    borderRadius: '1.5625rem',
    cursor: 'pointer'
  },

  men_image: {
    position: "absolute",
    margin: "2rem 0 0 3.187rem",
    width: '6.5625rem',
    zIndex: '3',
    height: '12.375rem'
  },
  women_img: {
    position: "absolute",
    margin: "2rem 0 0 11.25rem",
    zIndex: '3',
    width: '6.5625rem',
    height: '12.375rem'
  },
  green_glass_text: {
    margin: '7.4375rem 0 0 8rem'
  },
  blue_glass_text: {
    margin: '7.4375rem 0 0 1.875rem'
  }
});
const Home = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container direction="column">
        <Grid item container>

          <Grid item xs={.3}></Grid>
          <Grid item xs={11.4} className={classes.Home_bg} sx={{ marginTop: '1.825rem' }}>
            <Grid item xs={11.4} sx={{ marginTop: '1.5rem' }}><Navbar color='#CDD5F9' btnName='login' /></Grid>
            <p className={classes.home_top_text}>HIRING GENIE</p>
            <p className={classes.home_text}>Developed to simplify the recruitment tasks as well as give the hiring manager a<br />better detailed insight about the candidates being interviewed.</p>
            <Grid container sx={{ marginTop: '2.8125rem' }}>
              <Grid item xs={3} md={4} />
              <Grid item xs={3} md={2}><Link to='/login'><button className={classes.Home_register_btn}>Register Now</button></Link></Grid>
              <Grid item xs={3} md={2}><button className={classes.Home_Book_tour}>Book a Tour</button></Grid>
              <Grid item xs={3} md={4} />
            </Grid>
          </Grid>
          <Grid item xs={.3}></Grid>

          <Grid item xs={.3} md={.7}></Grid>
          <Grid item xs={4} md={4} sx={{ marginTop: '4rem' }}>
            <Typography variant='HomeH2'>Say hello to hiring with ease<br /></Typography>
            <Typography variant='HomeH3'>Continue with Hiring Genie to get<br />all the <b>Pro Features</b> free for 1<br />month!</Typography>
          </Grid>
          <Grid item xs={3.7} md={3.3}>
            <div className={classes.circle_green}> </div>
            <img className={classes.men_image} src={men_img} alt="" />
            <div style={{ position: 'absolute', margin: '4rem 0 0 3.187rem', background: 'linear-gradient(91.17deg, rgba(50, 177, 38, 0.3) -1.88%, rgba(36, 162, 233, 0.3) 104.89%)', width: "18.1875rem", height: "13.9375rem", borderRadius: '1.5625rem' }}></div>
            <div className={classes.green_circle_glass}>
              <div className={classes.green_glass_text}><Typography variant='HomeGlassText'>START<br />AS A<br />COMPANY</Typography></div>
            </div>
          </Grid>
          <Grid item xs={3.7} md={3.3}>
            <div className={classes.circle_blue}></div>
            <img className={classes.women_img} src={women_img} alt="" />
            <div style={{ position: 'absolute', margin: '4rem 0 0 0', background: 'linear-gradient(91.17deg, rgba(50, 177, 38, 0.3) -1.88%, rgba(36, 162, 233, 0.3) 104.89%)', width: "18.1875rem", height: "13.9375rem", borderRadius: '1.5625rem' }}></div>
            <div className={classes.blue_circle_glass}>
              <div className={classes.blue_glass_text}><Typography variant='HomeGlassText'>START<br />AS A<br />CANDIDATE</Typography></div>
            </div>
          </Grid>
          <Grid item xs={.3} md={.7}></Grid>

        </Grid>
      </Grid>
    </>
  )
}

export default Home