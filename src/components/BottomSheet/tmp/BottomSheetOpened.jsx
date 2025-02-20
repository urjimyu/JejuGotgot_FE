import React from 'react';
import BottomSheetSwipe from '../BottomSheetSwipe';


const BottomSheetOpened = () => {
  return (
      <div className='sheet-opened-container'>
            <span className='sheet-congestion-title'>반경 150미터 이내의 현재와 최근 3시간 평균동안의 관광객 수 와 도민 수</span>
            <p>내용내용</p>
            <span className='sheet-recommendation-title'>한적하지만 비슷한 명소</span>
<BottomSheetSwipe/>
          </div>
  )
}

export default BottomSheetOpened;
