import React from 'react';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="FContainer">
      <span className="FAppName">
        {year}  My ToDo List 
      </span>
      <span className="FDesigned">
        Designed by Anton Melnikov
      </span>
    </footer>
  );
}

export default Footer;
