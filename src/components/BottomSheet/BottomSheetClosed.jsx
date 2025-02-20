import React from 'react';
import "./BottomSheetClosed.css"
import BottomSheetSwipe from './BottomSheetSwipe'

const BottomSheetClosed = () => {
  return (
      <div className='sheet-closed-container'>
            <span>한적하지만 비슷한 명소</span>
            <BottomSheetSwipe/>
          </div>
  )
}

export default BottomSheetClosed;
