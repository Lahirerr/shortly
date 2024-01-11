import React from 'react';
import './App.css';
import Header from './components/Header';
import Second from './components/Second';
import Navbar from './components/Navbar';
import Third from './components/Third';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Second />
      <Third /> 
      <Footer/>
    </div>
  );
}

export default App;
