import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import ContactUs from './ContactUs';
import AboutUs from './About';
import JobListing from './joblisting'
import SignIn from './signin';
import EmployersLandingPage from './employer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/jobs" element={<JobListing />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path='/employers' element={<EmployersLandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
