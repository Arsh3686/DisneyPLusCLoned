import React from 'react';
import {
  Counter
} from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router,Route,Link,Routes } from 'react-router-dom';
import Detail from './components/Detail';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
    <Router>
      <Header/>
      <Routes>
        <Route path="/Detail" element={<Detail />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>    
    </div>
  )
}

export default App
