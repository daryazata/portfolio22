import React from 'react';

import './App.css';
import AboutComponent from './components/About';
import AppBar from './components/AppBar';
import Footer from './components/Footer';
import HomeComponent from './components/Home';
import ProjectsComponent from './components/Projects';
import ToTopComponent from './components/ToTopComponent';

function App() {
  return (
    <div className='App'>
      <AppBar />
      <HomeComponent />
      <AboutComponent />
      <ProjectsComponent />
      <ToTopComponent />
      <Footer />
    </div>
  );
}

export default App;
