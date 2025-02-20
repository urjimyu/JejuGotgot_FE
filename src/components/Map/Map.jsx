import React, { useEffect, useState } from 'react';
import './Map.css';
import CustomMarker from './CustomMarker';

const Map = () => {
  const [kakaoMaps, setKakaoMaps] = useState(null);
  const [map, setMap] = useState(null);
  
  // Example data
  const markerData = {
    lat: 33.450701,
    lng: 126.570667,
    radius: 500 // meters
  };

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
      center: new kakaoMaps.LatLng(markerData.lat, markerData.lng),
      level: 4
    };

    const mapInstance = new kakaoMaps.Map(container, options);
    setMap(mapInstance);

    // Create marker
    const markerPosition = new kakaoMaps.LatLng(markerData.lat, markerData.lng);
    const marker = new kakaoMaps.Marker({
      position: markerPosition
    });
    marker.setMap(mapInstance);

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

export default Map;