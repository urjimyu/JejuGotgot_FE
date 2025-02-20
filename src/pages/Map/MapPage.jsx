import React from 'react';
import './MapPage.css';
import Map from '../../components/Map/Map';
import Search from '../../components/Search/Search';
import BottomSheet from '../../components/BottomSheet/BottomSheet';

const MapPage = () => {
 
  return (
    <div className="page-container">
      <div className='map-container'>
        <Map/>
      </div>
      <div className="search-container">
        <Search placeholder='검색어를 입력하세요'/>
      </div>   
      <div className="bottom-sheet-container">
      <BottomSheet
        title="성산일출봉"
        address="제주특별자치도 서귀포시 성산읍 성산리 78"
        description="반경 150미터 이내의 현재와 최근 3시간 평균동안의 관광객 수와 도민 수"
      >
      </BottomSheet>
      </div>
    </div>
  );
};

export default MapPage;