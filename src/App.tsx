import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import OneRaceCard from './OneRaceCard';
import Registr from './Registr';





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
