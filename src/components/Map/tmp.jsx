import React, { useEffect, useState } from 'react';
import './Map.css';
import CustomMarker from './CustomMarker';

const Tmp = () => {
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

  // 예시 데이터
  const markerData = {
    lat: 33.450701,
    lng: 126.570667,
    radius: 500 // 미터 단위
  };

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
      {map && (
        <CustomMarker
          map={map}
          position={{ lat: markerData.lat, lng: markerData.lng }}
          radius={markerData.radius}
        />
      )}
    </div>
  );
};

export default Tmp;