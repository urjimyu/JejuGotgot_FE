import {React, useState, useEffect} from 'react';
import './MapPage.css';
import Map from '../../components/Map/Map';
import Search from '../../components/Search/Search';
import BottomSheet from '../../components/BottomSheet/BottomSheet';
import { useNavigate } from 'react-router-dom';

const MapPage = () => {
  const [currentPosition, setCurrentPosition] = useState(null);
const navigate = useNavigate();
  
    const defaultPosition = {
    lat: 33.450701,
    lng: 126.570667,
    radius: 500 // meters
  };

  // 위치 정보를 가져오는 함수
  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const newPosition = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            radius: defaultPosition.radius
          };
          setCurrentPosition(newPosition);
          console.log("현재 경도:", newPosition.lat);
          console.log("현재 위도:", newPosition.lng);
        },
        (error) => {
          console.error('Error getting current location:', error);
          setCurrentPosition(defaultPosition);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
      setCurrentPosition(defaultPosition);
    }
  };

  useEffect(() => {
    // 컴포넌트 마운트 시 한 번만 위치 정보 가져오기
    getCurrentLocation();
  }, []);
  

  return (
    <div className="page-container">
      <div className='map-container'>
        <Map/>
      </div>
      <div className="search-container">
        <Search placeholder='검색어를 입력하세요'/>
      </div>
        <div className="top-section">
          <div className="left-info-div">
            <div className="weather-container">
              <img src="/assets/rainy.png" alt="비 아이콘"/>
              <span>2°</span>
            </div>
            <img className="map-info" src="/assets/info.png" alt="안내 아이콘"/>
          </div>
        </div>
        <div className="icons-container">
          <img className="alert-icon" src="/assets/alert.png" alt="신고 아이콘"/>
          <img className="gps-icon" src="/assets/gps.png" alt="gps 아이콘"/>
        </div>

      <div className="bottom-sheet-container">
        <BottomSheet
          title="성산일출봉"
          address="제주특별자치도 서귀포시 성산읍 성산리 78"
          description="반경 150미터 이내의 현재와 최근 3시간 평균동안의 관광객 수와 도민 수"
        />
      </div>

      <button 
        className="cloudy-floating"
        onClick={() => navigate('/chat')}
      >
        <img src="/assets/floating.png" alt="채팅 이동 아이콘"/>
      </button>
    </div>
  );
};

export default MapPage;