import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import data from './static/data/sfpopos-data.json';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import List from './components/List';
import About from './components/About';

function App() {
  const spaces:any = data;

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<List spaces={spaces} />}/>
        <Route path='/about' element={<About />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
