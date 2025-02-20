import React, { useState } from "react";
import "./BottomSheet.css";
import BottomSheetHeader from "./BottomSheetHeader";
import BottomSheetClosed from "./BottomSheetClosed";
// import BottomSheetOpened from "./BottomSheetOpened";

const BottomSheet = () => {
  // const [isOpen, setIsOpen] = useState(false);
  // const [startY, setStartY] = useState(-391);
  // const [currentY, setCurrentY] = useState(0);

  // const handleTouchStart = (e) => {
  //   setStartY(e.touches[0].clientY);
  // };

  // const handleTouchMove = (e) => {
  //   setCurrentY(e.touches[0].clientY);
  // };

  // const handleTouchEnd = () => {
  //   if (currentY - startY > 50) {
  //     setIsOpen(false); // 스와이프 내리기
  //   } else if (startY - currentY > 50) {
  //     setIsOpen(true); // 스와이프 올리기
  //   }
  // };

  return (
    <div
      className={`bottom-sheet`}
      // onTouchStart={handleTouchStart}
      // onTouchMove={handleTouchMove}
      // onTouchEnd={handleTouchEnd}
    >
      <div className="content">
        <BottomSheetHeader/>
          <BottomSheetClosed/>
      </div>
    </div>
  );
};

export default BottomSheet;
