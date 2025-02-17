import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; 
import './App.css';
import RoutesComponent from './components/Routes'; // Correct import path for RoutesComponent

const App = () => {
  return (
    <Router>
      <RoutesComponent />
    </Router>
  );
};

export default App;
