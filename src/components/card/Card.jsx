import React, { useState, useEffect } from 'react';
import Tag from '../../components/tag/Tag';
import './Card.css';

const Card = ({ location = {}, isBookmarked, onBookmarkToggle, disableBookmark, children }) => {
  const [uploadedImage, setUploadedImage] = useState(() => {
    return localStorage.getItem(`uploadedImage-${location.id}`) || null;
  });
  const [memo, setMemo] = useState(() => {
    return localStorage.getItem(`memo-${location.id}`) || "";
  });
  const [isMemoOpen, setIsMemoOpen] = useState(false);

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
        setIsMemoOpen(true); // 업로드 후 메모 입력 창 열기
      };
      reader.readAsDataURL(file);
    }
  };

  const handleMemoSave = () => {
    setIsMemoOpen(false); // 메모 입력 후 닫기
  };

  return (
    <>
      {/* 배경 어두워지게 */}
      {isMemoOpen && <div className="overlay"></div>}

      <div className='alterPlaceList-swiper-box'>
        <div className="image-author">
          {location.url ? location.author : "노제로"}
          <Tag 
            className='alterPlaceList-who-review'
            text={location.authorType ? location.authorType : "여행자"} 
            backgroundColor="#FCF1EB" 
            textColor="#B23E04" 
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

        {/* 이미지 표시 부분 */}
        {uploadedImage ? (
          <img className="image-placeholder" src={uploadedImage} alt="업로드된 이미지" />
        ) : location.url ? (
          <img className="image-placeholder" src={location.url} alt={location.caption} />
        ) : (
          <div className="image-placeholder" onClick={() => document.getElementById(`file-input-${location.id}`).click()}>
            <img 
              src="/imgs/file.png"
              alt="파일 이미지"
              style={{ cursor: "pointer" }}
            />
          </div>
        )}

        {/* 파일 업로드 input (숨김) */}
        <input 
          type="file" 
          id={`file-input-${location.id}`} 
          style={{ display: 'none' }} 
          accept="image/*"
          onChange={handleImageUpload}
        />

        {/* 메모 입력 모달 */}
        {isMemoOpen && (
          <div className="memo-modal">
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
            <button onClick={handleMemoSave} className="memo-save-btn">저장</button>
          </div>
        )}

        {children}
      </div>
    </>
  );
};

export default Card;
