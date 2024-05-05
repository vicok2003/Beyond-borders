import React from 'react';
import './ComingSoon.css'; 
import logo from '../Img_assets/Beyond-Borders-logo-Teal.svg'; 
import facebookIcon from '../Img_assets/logo Vector 2.png'; 
import twitterIcon from '../Img_assets/logo vector.png'; 
import instagramIcon from '../Img_assets/Instagram logo.png'; 
import linkedinIcon from '../Img_assets/linkedin logo.png'; 
import youtubeIcon from '../Img_assets/Subtract.png'; 
import leftBoxImage from '../Img_assets/Block01.png' ;
import rightBoxImage from '../Img_assets/Block02.png';
import longBlock from '../Img_assets/Block03.png';
import tractorImg from '../Img_assets/Building.png';

export default function ComingSoon() {
  return (
    <div className="coming-soon-container">
      <div className="top-header">
      <img src={logo} alt="Logo" className="logo" />
      <button className="notify-me-btn">Notify Me</button>
      </div>

      <div className="comingsoon-message">
        <h1 className="heading">Coming Soon!</h1>
        <p className="paragraph">Our mission is to equip individuals with the skills, resources, mentorship, and community that they need to achieve their career and educational goals.</p>
        
        <div className="social-icons-container">
        <a href="#">
            <img src={facebookIcon} alt="Facebook" />
          </a>
          <a href="#">
            <img src={twitterIcon} alt="Twitter" />
          </a>
          <a href="#">
            <img src={youtubeIcon} alt="Instagram" />
          </a>
          <a href="#">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
          <a href="#">
            <img src={instagramIcon} alt="YouTube" />
          </a>
        </div>
      </div>


      <img src={leftBoxImage} alt="Left Box" className="left-box" />
      <img src={rightBoxImage} alt="Right Box" className="right-box" />
      <img src={longBlock} alt="Right Box" className="long-block" />
      <img src={tractorImg} alt="Tractor on site" className="tractor" />


      <div className="greybox-one">
        <div className="grey-A greys"></div>
        <div className="grey-B greys"></div>
      </div>

      <div className="greybox-two">
      <div className="grey-C greys"></div>
      <div className="grey-D greys"></div>
      </div>

      <div className="greybox-three">
      <div className="grey-E greys"></div>
      <div className="grey-F greys"></div>
      <div className="grey-G greys"></div>
      </div>

    </div>
  );
}
