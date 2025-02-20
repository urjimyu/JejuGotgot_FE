import React from 'react';
import './ListBox.css'; // CSS 파일 임포트

const ListBox = ({ 
  image, 
  title, 
  subtitle, 
  status, 
  type, 
  condition, 
  date, 
  actionButton 
}) => {
  return (
    <div className="list-box">
      <img 
        src={image} 
        alt={title}
        className="list-box-image"
      />
      <div className="list-box-content">
        <div className="list-box-header">
          <div>
            <h3 className="list-box-title">{title}</h3>
            <p className="list-box-subtitle">{subtitle}</p>
            <div className="list-box-tags">
              <span>{status}</span>
              <span>{type}</span>
              <span>{condition}</span>
            </div>
          </div>
          <span className="list-box-date">{date}</span>
        </div>
        {actionButton && (
          <div className="list-box-action">
            {actionButton}
          </div>
        )}
      </div>
    </div>
  );
};

export default ListBox;
