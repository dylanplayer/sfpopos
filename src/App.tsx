import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import data from './static/data/sfpopos-data.json';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import List from './components/List';
import About from './components/About';
import SpacePage from './components/SpacePage';

function App() {
  const spaces:any = data;

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<List spaces={spaces} />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/:slug' element={<SpacePage />} />
        <Route path='/random' element={<SpacePage random/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
