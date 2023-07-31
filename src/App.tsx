import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
// import './App.css';
// import type { RaceType, DeleteHandlerType, Races } from './types/races';
// import RaceList from './RaceList';
import MainPage from './MainPage';
import OneRaceCard from './OneRaceCard';
import Registr from './Registr';
// import { OneRace } from './types/races';




function App(): JSX.Element {



  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/:index" element={<OneRaceCard />} />
      <Route path="/:index/registr" element={<Registr />} />
    </Routes>
  )

}


export default App;
