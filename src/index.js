import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import ExpertisePage from './routes/ExpertisePage'
import MissionPage from './routes/HealthcareRpoPage'
import CareersPage from './routes/CareersPage'
import ContactPage from './routes/ContactPage'
import Solutions from './routes/SolutionsPage';
import HealthcareRpoPage from './routes/HealthcareRpoPage';
import HealthcareExecutiveSearchPage from './routes/healthcareExecutiveSearchPage';


ReactDOM.render(
  <BrowserRouter basename={window.location.pathname || ''} >
    <Routes>
      <Route exact path='/' element={<App />} />
      <Route exact path='/expertise' element={<ExpertisePage />} />
      <Route exact path='/mission' element={<MissionPage />} />
      <Route exact path='/healthcare-recruitment-solutions' element={<Solutions />} />
      <Route exact path='/healthcare-rpo' element={<HealthcareRpoPage />} />
      <Route exact path='/healthcare-executive-search' element={<HealthcareExecutiveSearchPage />} />
      <Route exact path='/careers' element={<CareersPage />} />
      <Route exact path='/contact' element={<ContactPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

