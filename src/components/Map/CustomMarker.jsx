
import React, { useEffect } from 'react';
import './CustomMarker.css';

const CustomMapMarker = ({ map, position, radius }) => {
  useEffect(() => {
    if (!map || !position) return;

    // 메인 마커 생성
    const markerPosition = new window.kakao.maps.LatLng(position.lat, position.lng);
    
    // 커스텀 마커 이미지
    // const marker = new window.kakao.maps.CustomOverlay({
    //   position: markerPosition,
    //   content: `
    //     <div class="custom-marker">
    //       <div class="marker-pin"></div>
    //     </div>
    //   `
    // });

    const circles = [
      {
        radius: radius * 0.5,
        fillColor: 'rgb(255, 0, 0)',
        fillOpacity: 0.38
      },
      {
        radius: radius * 0.3,
        fillColor: 'rgb(255, 0, 0)',
        fillOpacity: 0.5
      },
      {
        radius: radius * 0.2,
        fillColor: 'rgb(255, 0, 0)',
        fillOpacity: 0.7
      },
      {
        radius: radius * 0.1,
        fillColor: 'rgb(255, 0, 0)',
        fillOpacity: 1
      }

    ].map(circleConfig => {
      return new window.kakao.maps.Circle({
        center: markerPosition,
        radius: circleConfig.radius,
        strokeWeight: 0,
        strokeColor: 'transparent',
        strokeOpacity: 0,
        strokeStyle: 'solid',
        fillColor: circleConfig.fillColor,
        fillOpacity: circleConfig.fillOpacity
      });
    });

    // 마커와 원형 오버레이를 지도에 표시
    // marker.setMap(map);
    circles.forEach(circle => circle.setMap(map));

    // 컴포넌트 언마운트 시 마커와 원형 제거
    return () => {
      // marker.setMap(null);
      circles.forEach(circle => circle.setMap(null));
    };
  }, [map, position, radius]);

  return null;
};

export default CustomMapMarker;