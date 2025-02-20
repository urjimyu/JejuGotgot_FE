import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // 🔹 useLocation 추가
import './reviewCreate.css';
import Card from '../../components/card/Card';
import { getFormattedDate } from '../../utils/dateUtils';
import Header from '../../components/common/Header';

export default function ReviewCreate() {
  const location = useLocation();
  const placeData = location.state?.location || {}; // 🔹 받은 데이터가 없을 경우 빈 객체 처리
  const navigate = useNavigate();

  const handleClick = ()=> {
    navigate('/');
  } 

  return (
    <>
      <Header title={''} onClick={handleClick}/>
    <div className='review-wrap'>
      <div className='review-info-wrap'>
        <p className='review-date'>{getFormattedDate()}</p>
        <div className='review-info'>
          <div className='review-store-title'>{placeData.title || '가게 이름 없음'}</div>
        </div>
        <div className='review-store-address'>{placeData.subtitle || '가게 주소 없음'}</div>
      </div>
      <div className='review-card-wrap'>
      <Card disableBookmark={true} location={placeData} />
      </div>
    </div>
</>
  );
}
