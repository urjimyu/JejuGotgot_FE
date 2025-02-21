import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './BottomSheetSwipe.css';

import { useNavigate } from 'react-router-dom'; 

const MOCK_DATA = [
  {
    id: 1,
    category: '성산일출봉',
    title: '지미봉',
    url: 'https://mblogthumb-phinf.pstatic.net/MjAyNDA0MTRfMTcg/MDAxNzEzMTA0MjA3Mzc1.2fHG_NDnJVVfOcHjWjqQ5NhUGyoaNALqsL0Khwbxw3og.gz5lRYzyhCUHySjaV3pU9BL-BTmngK8mSVNBVbTyeNgg.JPEG/SE-d78cb0bc-89f5-45da-893a-c347838c402c.jpg?type=w800',
    distance: '500m',
  },
  {
    id: 2,
    category: '우도',
    title: '우도봉',
    url: 'https://api.cdn.visitjeju.net/photomng/imgpath/202112/08/6afd1026-cf48-4208-97f5-f822a73e8b76.JPG',
    distance: '700m',
  },
  {
    id: 3,
    category: '한라산',
    title: '백록담',
    url: 'https://cdn.newsian.co.kr/news/photo/202208/56264_33487_4742.jpg',
    distance: '400m',
  }
];

const BottomSheetSwipe = () => {
  const navigate = useNavigate();
  const [bookmarks, setBookmarks] = useState(
    MOCK_DATA.reduce((acc, location) => ({
      ...acc,
      [location.id]: false
    }), {})
  );

  const toggleBookmark = (id) => {
    setBookmarks(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
<div className="detail-container">
      <div className="swiper-container">
        <Swiper
          modules={[Navigation]}
           navigation={false} 
          spaceBetween={11}
          slidesPerView={1.2}
          loop={true}
        >
          {MOCK_DATA.map((location) => (
            <SwiperSlide key={location.id} className='slide-img'>
              <div className='img-div'>
                <img src={location.url} alt={location.title} 
                onClick={() => navigate('/alterPlaceList')} />
                <button 
                  className="bookmark-button"
                   onClick={(e) => {
                    e.stopPropagation(); // 부모의 클릭 이벤트 방지
                    toggleBookmark(location.id);
                  }}
                  
                >
                  {bookmarks[location.id] ? (
                    <img src="/assets/save.png" alt="저장 상태 아이콘" className="bookmark-icon filled" />
                  ) : (
                    <img src="/assets/unsave.png" alt="미저장 상태 아이콘" className="bookmark-icon" />
                  )}
                </button>
              </div>
              <div className="info-wrapper">
                <div className="location-info">
                  <p className="distance-info">현재 거리로부터</p>
                  <p className="distance">{location.distance}</p>
                </div>
                <p className="image-name">{location.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default BottomSheetSwipe;
