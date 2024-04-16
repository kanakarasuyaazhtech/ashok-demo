import React from 'react';
import './Navbar.css'; // Import CSS file for navbar styles
import image1 from '../assets/Cpl.png';
import image2 from '../assets/hundered.png';
import image3 from '../assets/nzc.png';
import image4 from '../assets/superSmach.png';

function Navbar() {
  return (
    <div>
      <div className="navbar">
       
        <div className='partnerFlex'>
          <div className="card">
            <img src={image1} className="card-img-top" alt="Image 1" />
            <div className="card-body">
             
            </div>
          </div>
          <div className="card">
            <img src={image2} className="card-img-top" alt="Image 2" />
            <div className="card-body">
              
            </div>
          </div>
          <div className="card">
            <img src={image3} className="card-img-top" alt="Image 3" />
            <div className="card-body">
          
            </div>
          </div>
          <div className="card">
            <img src={image4} className="card-img-top" alt="Image 4" />
            <div className="card-body">
             
            </div>
          </div>
          
        </div>

      </div>
    </div>
  );
}

export default Navbar;
