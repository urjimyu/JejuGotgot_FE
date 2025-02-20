import React, { useState, useEffect } from 'react';
import Tag from '../../components/tag/Tag';
import './Card.css';

const Card = ({ location = {}, isBookmarked, onBookmarkToggle, disableBookmark, children,isReviewMode = false }) => {
  const [uploadedImage, setUploadedImage] = useState(() => {
    return localStorage.getItem(`uploadedImage-${location.id}`) || null;
  });
    
  const [memo, setMemo] = useState(() => {
    return localStorage.getItem(`memo-${location.id}`) || "";
  });
    
  const [isMemoOpen, setIsMemoOpen] = useState(false);
  const [showMemo, setShowMemo] = useState(() => {
    return !!localStorage.getItem(`memo-${location.id}`);
  });

  useEffect(() => {
    if (uploadedImage) {
      localStorage.setItem(`uploadedImage-${location.id}`, uploadedImage);
    }
  }, [uploadedImage, location.id]);

  useEffect(() => {
    localStorage.setItem(`memo-${location.id}`, memo);
  }, [memo, location.id]);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result);
        setIsMemoOpen(true);
        setShowMemo(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleMemoSave = () => {
    setIsMemoOpen(false);
    setShowMemo(true);
  };

  const handleReviewUpload = () => {
    // 후기 업로드 로직 구현
    console.log("Upload review for location:", location.id);
  };

  const renderMemoOrChildren = () => {
    if (children) {
      return children;
    }
    return showMemo && memo ? (
      <div className="memo-display">
        <div className="image-caption">
          {memo.split("").map((char, index) => 
            char === " " ? (
              <span key={index}>&nbsp;</span>
            ) : (
              <span key={index} className="char">{char}</span>
            )
          )}
        </div>
      </div>
    ) : null;
  };

  return (
    <>
      {isMemoOpen && <div className="overlay"></div>}
      
      <div className='alterPlaceList-swiper-box'>
        <div className="image-author">
          {location.url ? location.author : "노제로"}
          <Tag
            className='alterPlaceList-who-review'
            text={location.authorType ? location.authorType : "여행자"}
            backgroundColor="#EAEFF8"
            textColor="#1D4EAA"
          />
        </div>

        <div className="bookmark-wrapper">
          <img
            src={isBookmarked ? "/imgs/active-bookmark.png" : "/imgs/inactive-bookmark.png"}
            alt="북마크"
            className="bookmark-image"
            onClick={disableBookmark ? null : () => onBookmarkToggle(location.id)}
            style={{ cursor: disableBookmark ? "default" : "pointer" }}
          />
        </div>

        <div
          className="image-placeholder"
          onClick={() => !uploadedImage && document.getElementById(`file-input-${location.id}`).click()}
        >
          {uploadedImage ? (
            <img src={uploadedImage} alt="업로드된 이미지" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          ) : location.url ? (
            <img src={location.url} alt={location.caption} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          ) : (
            <img
              src="/imgs/file.png"
              alt="파일 이미지"
              style={{ cursor: "pointer" }}
            />
          )}
        </div>

        <input
          type="file"
          id={`file-input-${location.id}`}
          style={{ display: 'none' }}
          accept="image/*"
          onChange={handleImageUpload}
        />

        {renderMemoOrChildren()}



        {isMemoOpen && (
          <div className="memo-modal">
            <div className="memo-modal-content">
              <p className="tip">Tip</p>
              <p className="memo-info">메모는 최대 7글자 쓸 수 있어요.</p>
              <input
                type="text"
                maxLength="7"
                value={memo}
                onChange={(e) => setMemo(e.target.value)}
                placeholder="메모 입력..."
                className="memo-input"
              />
              <button onClick={handleMemoSave} className="memo-save-btn">
                저장
              </button>
            </div>
          </div>
        )}
      </div>

            {isReviewMode && showMemo && memo && (
  <button className="review-upload-btn" onClick={handleReviewUpload}>
    후기 업로드
  </button>
)}

    </>
  );
};

export default Card;