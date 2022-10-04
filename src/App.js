import './App.css';
import React from 'react'
import Home from './components/home/Home'
import About from './components/about/About'
import Contactus from './components/contactus/Contactus'
import Features from './components/features/Features'
import Pricing from './components/pricing/Pricing'
import Faqs from './components/faqs/Faqs'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './components/login/Login';
import Navbar from './components/navbar/Navbar';
import SignUp from './components/signup/SignUp';



function App() {
  return (
    <>
      <div className='App'>
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/pricing" element={<Pricing />} />
            <Route exact path="/signUp" element={<SignUp />} />
            <Route exact path="/faqs" element={<Faqs />} />
            <Route exact path="/features" element={<Features />} />
            <Route exact path="/contactus" element={<Contactus />} />
            <Route exact path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
