import React from 'react';
import '../styles/ComingSoon.css'; 
import logo from '../Img_assets/Beyond-Borders-logo-Teal.svg'; 
import linkedinIcon from '../Img_assets/linkedin logo.svg'; 
import instagramIcon from '../Img_assets/Instagram logo.svg'; 
import linkTree from '../Img_assets/linktree.svg';
import block from '../Img_assets/Blocks.svg'; 


export default function ComingSoon() {
  return (
    <div className="coming-soon-container">
      <div className="top-header">
      <img src={logo} alt="Logo" className="logo" />
      <a href=' hello@beyondbordersnet.com' target="_blank" rel="noopener noreferrer" className='contact-us'>Contact Us</a>
      </div>

      <div className="comingsoon-message">
        <h1 className="heading">Coming Soon!</h1>
        <p className="paragraph">Beyond Borders is a digital Network for Black Professionals to advance their careers, passion and business.</p>
        
        <div className="social-icons-container">
          <a href="https://www.linkedin.com/company/beyond-borders-hq/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
          <a href="https://www.instagram.com/beyondbordershq/" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" />
          </a>
          <a href="https://linktr.ee/beyondbordershq" target="_blank" rel="noopener noreferrer">
            <img src={linkTree} alt="linkTree" />
          </a>
        </div>
        <a href="https://subscribepage.io/beyondbordersletters" target="_blank" rel="noopener noreferrer">
        <button className="join-btn ">Join the Community</button>  
        </a>
      </div>

      <img src={block} alt="building blocks" className="blocks"></img>
      
      {/* 
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
      
      */}

    </div>
  );
}
