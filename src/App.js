import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import EKKN from './components/pages/EKKN';
import HVAD from './components/pages/HVAD';
import COAD from './components/pages/COAD';
import ConfigData from "./ConfigData.json";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home data={ConfigData.projects} />} />
          <Route exact path='/About' element={<About />} />
          <Route path='/EKKN' exact element={<EKKN data={ConfigData.projects.EKKN} />} />
          <Route path='/HVAD' exact element={<HVAD data={ConfigData.projects.HVAD} />} />
          <Route path='/COAD' exact element={<COAD data={ConfigData.projects.COAD} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
