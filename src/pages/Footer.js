
import React from 'react';
import './Footer.css'; 
import image1 from '../assets/footer_logo.png';
import image2 from '../assets/facebook1.png';
import image3 from '../assets/instagram.png';
import image4 from '../assets/linkedin1.png';
import image5 from '../assets/fifs_footer.png';
import image7 from '../assets/fp-logo.png';
import image6 from '../assets/twitter1.png';


function Footer() {
  return (
    <footer className="footer">
      <div>
      <img className="image_align" src={image1} />
      </div>
      <div className="flex items-center">
      <img className='imgfoot' src={image2} />
      <img className='imgfoot' src={image3} />
      <img className='imgfoot' src={image4} />
      <img className='imgfoot' src={image6} />
      
        <ul className='ul1'>
        <li><a href="/">Fantasy Cricket</a></li>
            <li><a href="/about">Fantasy Football</a></li>
            <li><a href="/contact">Fantasy Sports</a></li>
            <li><a href="/contact">Fantasy Cricket App Download</a></li>
            <li><a href="/contact">Dream11 Team Today</a></li>
            <li><a href="/contact">Fantasy Cricket App Download</a></li>
        </ul>
        <ul className='ul1'>
        <li><a href="/">Dream11 winners</a></li>
            <li><a href="/about">Private Contest</a></li>
            <li><a href="/contact">About Us</a></li>
            <li><a href="/contact">Jobs</a></li>
            <li><a href="/contact">Help & Support</a></li>
            <li><a href="/contact">Dream11 Tech</a></li>
        </ul>
        <ul className='ul1'>
        <li><a href="/about">FOUNDING MEMBER</a></li>
        <img className='imgfoot' src={image5} />
            <li><a href="/contact">FAIRPLAY POLICY</a></li>
            <img className='imgfoot' src={image7} />
        </ul>
        </div>
      <div className="footer-content">
        <div className="footer-links">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          
          </ul>
        </div>
        <div className="copyright">
          &copy; 2024 Your Website. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
