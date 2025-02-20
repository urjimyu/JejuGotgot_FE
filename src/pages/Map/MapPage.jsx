import { useState, useEffect, useCallback } from 'react';
import './MapPage.css';
import Map from '../../components/Map/Map';
import Search from '../../components/Search/Search';
import BottomSheet from '../../components/BottomSheet/BottomSheet';
import { useNavigate } from 'react-router-dom';
import useGetNearId from '../../hooks/map/useGetNearId';
import useGetPlace from '../../hooks/map/useGetPlace';

const MapPage = () => {
  const [coordinates, setCoordinates] = useState({
    lat: 33.450701,
    lng: 126.570667
  });
  const [nearId, setNearId] = useState(null); // nearId를 상태로 관리
  const navigate = useNavigate();

  const getCurrentLocation = useCallback(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCoordinates({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        (error) => {
          console.error('Error getting current location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  useEffect(() => {
    getCurrentLocation();
  }, [getCurrentLocation]);

  // nearIdResponse 가져오기
  const { response: nearIdResponse, isLoading: isNearIdLoading } = useGetNearId(
    coordinates.lng,
    coordinates.lat
  );

  // nearIdResponse가 업데이트되면 nearId 상태 업데이트
  useEffect(() => {
    console.log("nearIdResponse:", nearIdResponse);
    if (nearIdResponse?.id) {
      setNearId(nearIdResponse.id); // nearId 상태 업데이트
      console.log("AAA");
    }
  }, [nearIdResponse]); // nearIdResponse가 변경될 때마다 실행

  // useGetPlace 훅은 nearId가 있을 때만 호출
  const { response: placeResponse, loading: placeLoading } = useGetPlace(nearId);

  // placeData 가져오기
  const placeData = placeResponse;
console.log("PLACE", placeData);
  return (
    <div className="page-container">
      <div className='map-container'>
        <Map coordinates={coordinates} />
      </div>
      <div className="search-container">
        <Search placeholder='검색어를 입력하세요' />
      </div>
      <div className="top-section">
        <div className="left-info-div">
          <div className="weather-container">
            <img src="/assets/rainy.png" alt="비 아이콘" />
            <span>2°</span>
          </div>
          <img className="map-info" src="/assets/info.png" alt="안내 아이콘" />
        </div>
      </div>
      <div className="icons-container">
        <img className="alert-icon" src="/assets/alert.png" alt="신고 아이콘" />
        <img 
          className="gps-icon" 
          src="/assets/gps.png" 
          alt="gps 아이콘"
          onClick={getCurrentLocation}
        />
      </div>

      <div className="bottom-sheet-container">
        {placeData ? (
          <BottomSheet
            title={placeData.name}
            description={placeData.description}
          />
        ) : (
          <BottomSheet
            title="성산일출봉"
            address="제주특별자치도 서귀포시 성산읍 성산리 78"
            description="반경 150미터 이내의 현재와 최근 3시간 평균동안의 관광객 수와 도민 수"
          />
        )}
      </div>

      <button
        className="cloudy-floating"
        onClick={() => navigate('/chat')}
      >
        <img src="/assets/floating.png" alt="채팅 이동 아이콘" />
      </button>
    </div>
  );
};

export default MapPage;
