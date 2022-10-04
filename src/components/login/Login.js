import React from 'react'
import './login.css'
import {
    Link
} from "react-router-dom";

const Login = () => {
    return (
        <>
            <div className='circle_top_login'></div>
            <div className='circle_bottom'></div>
            <div className='login_glass'></div>
                <h1 className='login_top_text'>LOGIN TO HIRING GENIE</h1>
                <input type="email" className='email_input' id="email" name="email" />
                <label for="name" class="input_label_email">Regeistered Email</label>

                <input className="password_input" type="password" id="password" name="password" />
                <label for="name" class="input_label_password">Password</label>
                <small className='forget_password'>Forget Password </small>
                <p className='remember_text'>Rembmember me on this device</p>
                <input className='remember_check' type="checkbox" id="remember" name="remember" value="true" />
                <button className='btn_login'>Login</button>
                <p className='dont_have_account'><Link to="/signUp">dont have account? sign up now</Link></p>
            
        </>
    )
}

export default Login