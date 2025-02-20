import React from 'react';
import './MapTag.css'

const MapTag = ({ 
  text, 
  backgroundColor = '#FFD700',
  textColor = '#000000',
  className = '',
}) => {
  return (
    <span 
      className={`${className} tag`}
      style={{
        backgroundColor,
        color: textColor,
      }}
    >
      {text}
    </span>
  );
};

export default MapTag;