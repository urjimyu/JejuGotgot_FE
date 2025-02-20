import React, { useState } from "react";
import "./BottomSheet.css"; // CSS 파일을 임포트하세요.

const BottomSheet = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [startY, setStartY] = useState(-391);
  const [currentY, setCurrentY] = useState(0);

  const handleTouchStart = (e) => {
    setStartY(e.touches[0].clientY);
  };

  const handleTouchMove = (e) => {
    setCurrentY(e.touches[0].clientY);
  };

  const handleTouchEnd = () => {
    if (currentY - startY > 50) {
      setIsOpen(false); // 스와이프 내리기
    } else if (startY - currentY > 50) {
      setIsOpen(true); // 스와이프 올리기
    }
  };

  return (
    <div
      className={`bottom-sheet ${isOpen ? "open" : ""}`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="content">
        {isOpen ? (
          <div>
            <h2>상단 내용</h2>
            <p>최대 높이로 스와이프 시 내용이 달라집니다.</p>
          </div>
        ) : (
          <div>
            <h2>하단 내용</h2>
            <p>초기 상태의 내용이 표시됩니다.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BottomSheet;
