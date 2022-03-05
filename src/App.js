import './App.css';
import {useState, useEffect} from 'react'
import Navbar from './Navbar';
import { Routes, Route } from 'react-router';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Home from './Home';

function App() {

  return (
    <div className="App"> 
    <Navbar/>
    <Routes>
    <Route path="/resume" element={<Resume />}/>
    <Route path="/portfolio" element={<Portfolio />}/>
    <Route path="/home" element={<Home />}/>
    </Routes>
    </div>
  );
}

export default App;