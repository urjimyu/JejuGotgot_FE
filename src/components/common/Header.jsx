import React from 'react';
import './Header.css';

const Header = ({
  title, onClick
}) => {
  return (
    <div className="header-wrapper">
      <div className="section-wrapper">
        <img src="/assets/left-menu.png" className='header-icon' onClick={onClick}/> 
        <span className='title'>{title}</span>
      </div>
    </div>
  );
};

export default Header;
