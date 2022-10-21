import './App.css';
import React from 'react'
import Home from './components/home/Home'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from './components/login/Login';
import SignUp from './components/signup/SignUp';
import DevNev from './components/dev_nav/dev_nev';
import ProfileAcademic from './components/profile_development/ProfileAcademic';
import ProfileAbout from './components/profile_development/ProfileAbout';
import ProfileExperience from './components/profile_development/ProfileExperience';



function App() {
  return (
    <>
      <div className='App'>
        <BrowserRouter>
          <DevNev />
          <Routes>
            <Route       path="/hiringgenie" element={<Navigate to="/home" replace />}/>
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/signUp" element={<SignUp />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/profile_about" element={<ProfileAbout />} />
            <Route exact path="/profile_academic" element={<ProfileAcademic />} />
            <Route exact path="/profile_experience" element={<ProfileExperience />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
