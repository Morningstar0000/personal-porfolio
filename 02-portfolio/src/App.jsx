import React, { useState } from 'react'
import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@radix-ui/themes/styles.css';
import SideBar, { MobileNavbar } from './components/Sidebar'
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Services from './components/Pages/Services/Services';
import Portfolio from './components/Pages/Portfolio/Portfolio';
import Contact from './components/Pages/Contact';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
// import ProgressBar from './components/ProgressBar';


function App() {
   const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
 <div className='App'>
 
  <SideBar collapsed={collapsed} toggleSidebar={toggleSidebar} />
      <MobileNavbar />
      
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='services' element={<Services />} />
          <Route path='portfolio' element={<Portfolio />} />
          <Route path='contact' element={<Contact />} />
        </Routes>
       
    </div>
   
    </>
  )
}

export default App
