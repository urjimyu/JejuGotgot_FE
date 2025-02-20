import React from 'react';
import './Tag.css'

const Tag = ({ 
  text, 
  backgroundColor = '#FFD700', // default gold color
  textColor = '#000000',      // default black text
  className = '',             // additional classes
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

export default Tag;