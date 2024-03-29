import React from 'react';
import './App.css';
import Header from './pages/Header';
import Table from './pages/Table';
import Footer from './pages/Footer';

function App() {
  return (
    <div className="App">
       <Header/>
      <div>
        <h4>Table</h4>
        <Table/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
