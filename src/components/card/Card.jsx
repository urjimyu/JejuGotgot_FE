import React from 'react';
import Tag from '../../components/tag/Tag';
import './Card.css';

const Card = ({ location = {}, isBookmarked, onBookmarkToggle, disableBookmark,children }) => {
  return (
    <div className='alterPlaceList-swiper-box'>
        <div className="image-author">
          {location.url ? location.author : "노제로"}
    
          <Tag 
            className='alterPlaceList-who-review'
            text={location.authorType ? location.authorType : "주민"} 
            backgroundColor="#FCF1EB" 
            textColor="#B23E04" 
          />
        <div>
        
        </div>
      <div className="bookmark-wrapper">
          
        <img 
          src={isBookmarked ? "/imgs/active-bookmark.png" : "/imgs/inactive-bookmark.png"}
          alt="북마크"
          className="bookmark-image"
          onClick={disableBookmark ? null : () => onBookmarkToggle(location.id)} // disableBookmark가 true면 클릭 막음
          style={{ cursor: disableBookmark ? "default" : "pointer" }} // 비활성화 시 클릭 스타일 변경
        />
      </div>
      
    
      </div>
       {location.url ? (
        <img className="image-placeholder" src={location.url} alt={location.caption} />
      ) : (
        <div className="image-placeholder">
            <img 
          src="/imgs/file.png"
          alt="파일 이미지"
          onClick={disableBookmark ? null : () => onBookmarkToggle(location.id)} // disableBookmark가 true면 클릭 막음
          style={{ cursor: disableBookmark ? "default" : "pointer" }} // 비활성화 시 클릭 스타일 변경
        />
        </div>
      )}


       {children}
    </div>
  );
};

export default Card;
