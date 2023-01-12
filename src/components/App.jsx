import React, { Component } from 'react';
import Plantpage from './Plantpage.jsx';
import NewPlantInfo from './NewPlant.jsx';
import Navbar from './Navbar.jsx';
import '../styles.css';
import { Routes, Route } from 'react-router-dom';
// import { PlantsContextProvider } from '../context/PlantsContext'

function App() {
  return (
      // <PlantsContextProvider>
        <div>
          <Navbar />
          <h1>Happy Plants - Library</h1>
            <div className="pages"></div>
                {/* <Route path="/" element={<Plantpage />} />
                <Route path="/" element={<NewPlantInfo />} /> */}
                <NewPlantInfo />
                <Plantpage />
        </div>
      // </PlantsContextProvider>

  )
}

export default App;