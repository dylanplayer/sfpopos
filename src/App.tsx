import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import data from './static/data/sfpopos-data.json';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import List from './components/List';

function App() {
  const spaces:any = data;

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<List spaces={spaces} />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
