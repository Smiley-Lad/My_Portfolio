import React from 'react';
import './footer.css';
import {FaFacebookF} from 'react-icons/fa';
import {AiFillInstagram} from 'react-icons/ai';
import {FaGithub} from 'react-icons/fa';

const footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>SMILEY._.LAD</a>
      
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#testimonial">Testimonial</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_social">
        <a href="https://facebook.com"><FaFacebookF /></a>
        <a href="https://instagram.com"><AiFillInstagram /></a>
        <a href="https://github.com"><FaGithub /></a>
      </div>
      
      <div className="footer_copyright">
        <small>&copy; SMILEY_LAD. All eights reserved.</small>
      </div>
    </footer>
  );
};

export default footer;