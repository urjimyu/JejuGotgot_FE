import React from 'react';
import "./BottomSheetHeader.css";
import MapTag from '../tag/MapTag';

const BottomSheetHeader = () => {
  const tag_props = {
  text: '혼잡', 
  backgroundColor : '#FFD700',
  textColor : '#000000',
  };

  return (
    <div className='bottom-sheet-header'>
      <div className='sheet-title-wrapper'>
        <span className='sheet-name'>성산일출봉</span>
        <MapTag text={tag_props.text} backgroundColor={tag_props.backgroundColor} textColor={tag_props.textColor} fontsize={tag_props.fontsize}/>
      </div>
<span>제주특별자치도 서귀포시 성산읍 성산리 78</span>
<div className='sheet-line'></div>
    </div>
  )
}

export default BottomSheetHeader;
