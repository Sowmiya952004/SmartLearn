import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Dashboard from './Dashboard';
import CertiHub from './CertiHub';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';

const RoutesComponent = () => {
  return (
    <Routes>
      {/* Default route redirects to Home */}
      <Route path="/" element={<Navigate to="/home" />} />

      {/* Route for Home page */}
      <Route path="/home" element={<Home />} />

      {/* Route for Login page */}
      <Route path="/login" element={<Login />} />

      {/* Route for Dashboard page */}
      <Route path="/dashboard" element={<Dashboard />} />

      {/* Route for CertiHub */}
      <Route path="/certihub" element={<CertiHub />} />

      {/* Route for Page2 */}
      <Route path="/page2" element={<Page2 />} />

      {/* Route for Page3 */}
      <Route path="/page3" element={<Page3 />} />

      {/* Route for Page4 */}
      <Route path="/page4" element={<Page4 />} />
    </Routes>
  );
};

export default RoutesComponent;
