import React from 'react';
import './App.css';
import Header from './pages/Header';
import Table from './pages/Table';
import Footer from './pages/Footer';
import Navbar from './pages/Navbar';
import Forms from './pages/Forms';
import image from '../src/assets/Dream11Cover.png';
import Body from './pages/Body';
import AppRating from './AppRating';
import FAQ from './pages/Faqs';

function App() {
  return (
    <div className="App">   
       <Header/>
      <div>
      <img src={image} className='img'></img>
      <div>
          <h1 className="universal_heading">
            "Official "
            <span className='partnerColor'>Partner</span>
          </h1>
        </div>
        {/* <Table/>
        <Forms/> */}
      </div>
      <Navbar/>
      <Body/>
      <AppRating/>
      <FAQ/>
      <Footer/>
     
    </div>


  );
}

export default App;
