import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';
import ScrollToTop from './components/ScrollToTop';
import './styles/App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <SolarSystem />
      <Missions />
      <ScrollToTop></ScrollToTop>
    </div>
  );
}
 
export default App;

