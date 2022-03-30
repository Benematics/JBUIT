import React from 'react';
import {BrowserRouter, Link, Routes, Outlet, Route} from "react-router-dom";
import Home from './pages/Home'
import Footer from './components/Footer';
import Header from './components/Header';
import Navigation from './components/Navigation';


const App = () => {
  return(
  <>
  <BrowserRouter>
      <header>
        <Navigation />
        <Header />
      </header>
       <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      <Footer />
  </BrowserRouter>
  </>
    )
}

export default App;