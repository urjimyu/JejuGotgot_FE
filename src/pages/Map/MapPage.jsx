import React, { useEffect, useState } from 'react';
import './MapPage.css';
import Search from '../../components/Search/Search';

const MapPage = () => {
  const [kakaoMaps, setKakaoMaps] = useState(null);

  useEffect(() => {
    const KAKAO_MAP_SCRIPT_ID = 'kakao-map-script';
    const KAKAO_MAP_APP_KEY = import.meta.env.VITE_KAKAO_JAVASCRIPT_KEY;

    const mapScript = document.getElementById(KAKAO_MAP_SCRIPT_ID);

    if (mapScript && kakaoMaps) {
      return;
    }

    const script = document.createElement('script');
    script.id = KAKAO_MAP_SCRIPT_ID;
    script.type = 'text/javascript';
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_MAP_APP_KEY}&autoload=false`;
    
    script.onload = () => {
      if (window.kakao && window.kakao.maps) {
        window.kakao.maps.load(() => {
          setKakaoMaps(window.kakao.maps);
        });
      }
    };

    document.head.appendChild(script);

    return () => {
      const mapScript = document.getElementById(KAKAO_MAP_SCRIPT_ID);
      if (mapScript) {
        document.head.removeChild(mapScript);
      }
    };
  }, []);

  useEffect(() => {
    if (!kakaoMaps) return;

    const container = document.getElementById('map');
    const options = {
      center: new kakaoMaps.LatLng(33.450701, 126.570667),
      level: 3
    };

    const map = new kakaoMaps.Map(container, options);

    // 마커 생성
    const markerPosition = new kakaoMaps.LatLng(33.450701, 126.570667);
    const marker = new kakaoMaps.Marker({
      position: markerPosition
    });
    marker.setMap(map);

  }, [kakaoMaps]);

  return (
    <div className="map-container">
      <div id="map" className="map"></div>
      <div className="info-card">
        <h2 className="info-title">성산일출봉</h2>
        <p className="info-description">
          반경 150미터 이내의 현재와 최근 3시간 평균동안의 관광객 수와 도민 수
        </p>
      </div>
            <div className="search-overlay">
        <Search placeholder='검색어를 입력하세요'/>
      </div>
    </div>
  );
};

export default MapPage;