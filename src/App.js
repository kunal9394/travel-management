import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import {BrowserRouter,Routes, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import About from './components/pages/About';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    
    <Routes> 
          <Route path ="/" element= {<Home />}/> 
          <Route path ="/services" element= {<Services />}/> 
          <Route path ="/about" element= {<About />}/> 
          <Route path ="sign-up" element= {<SignUp />}/> 
       </Routes> 
    
    </BrowserRouter>
    </>  
  );
}

export default App;