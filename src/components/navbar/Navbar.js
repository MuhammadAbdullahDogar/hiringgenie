import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { makeStyles } from '@material-ui/core/styles'
import logo from './logo.svg'
import {
    Link
} from "react-router-dom";
import { Grid } from '@material-ui/core';
import { ClassNames } from '@emotion/react';
const useStyles = makeStyles({
    Font: {
        fontFamily: 'Comfortaa',
        fontWeight: 500,
        fontSize: '.9375rem',
        lineHeight: '1.0625rem'
    },
    navbar_sign: {
        width: '5.5625rem',
        height: '2.5625rem',
        border: '.18rem solid',
        borderRadius: '0.75rem',
        borderTopColor: '#32B126',
        borderRightColor: '#32B126',
        borderBottomColor: '#24A2E9',
        borderLeftColor: '#24A2E9',
        fontFamily: 'Comfortaa',
        fontWeight: 500,
        fontSize: '.9375rem',
        lineHeight: '1.0625rem',
        backgroundColor: 'Transparent',
        textTransform: 'uppercase'
    },
});
const Navbar = (props) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (

        <>
            <Grid container >
                <Grid item xs={1}><img src={logo} alt='logo' style={{marginLeft:'2rem'}}></img></Grid>
                <Grid item xs={9}>
                    <Tabs value={value} onChange={handleChange} centered>
                        <Tab component={Link} to='/home' className={ClassNames.Font} style={{ color: props.color }} label="Home" />
                        <Tab component={Link} to='/home' className={ClassNames.Font} style={{ color: props.color }} label="How it works?" />
                        <Tab component={Link} to='/home' className={ClassNames.Font} style={{ color: props.color }} label="Pricing" />
                        <Tab component={Link} to='/home' className={ClassNames.Font} style={{ color: props.color }} label="FAQs" />
                        <Tab component={Link} to='/home' className={ClassNames.Font} style={{ color: props.color }} label="About Us" />
                        <Tab component={Link} to='/home' className={ClassNames.Font} style={{ color: props.color }} label="Contact US" />
                    </Tabs>
                </Grid>
                <Grid item xs={1}><Link to={`/${props.btnName}`} ><button style={{marginLeft:'0rem', color: props.color}} className={classes.navbar_sign}>{props.btnName}</button></Link></Grid>
            </Grid>
        </>
    )
}
export default Navbar