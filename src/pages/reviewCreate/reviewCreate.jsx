import React from 'react';
import { useLocation } from 'react-router-dom'; // 🔹 useLocation 추가
import './reviewCreate.css';
import Card from '../../components/card/Card';

export default function ReviewCreate() {
  const location = useLocation();
  const placeData = location.state?.location || {}; // 🔹 받은 데이터가 없을 경우 빈 객체 처리

  return (
    <div>
      <div>
        <p>현재 년월일</p>
        <div>
          <div>{placeData.title || '가게 이름 없음'}</div>
          <div>{placeData.type || '가게 태그 없음'}</div>
        </div>
        <div>{placeData.subtitle || '가게 주소 없음'}</div>
      </div>
      <Card disableBookmark={true} location={placeData} />
    </div>
  );
}
