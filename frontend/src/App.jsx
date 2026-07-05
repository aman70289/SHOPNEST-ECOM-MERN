import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Home from './pages/Home'
import ReactDOM from 'react-dom/client';
import App from '/App';

 
const App  = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
