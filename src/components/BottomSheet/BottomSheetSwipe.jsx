import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './BottomSheetSwipe.css';

const MOCK_DATA = [
  {
    id: 1,
    category: '성산일출봉',
    title: '지미봉',
    url: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fo1KIw%2Fbtqu9mflPY6%2FrGk1mM3iugV1c6jj9Z3E80%2Fimg.jpg',
    distance: '500m',
  },
  {
    id: 2,
    category: '우도',
    title: '우도봉',
    url: 'https://blog.kakaocdn.net/dn/bCve6g/btqu9mNcrlI/bY83Kk9wakVEJTwknPmsQ1/img.jpg',
    distance: '700m',
  },
  {
    id: 3,
    category: '한라산',
    title: '백록담',
    url: '/api/placeholder/400/300',
    distance: '400m',
  }
];

const BottomSheetSwipe = () => {
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
                <img src={location.url} alt={location.title} />
                <button 
                  className="bookmark-button"
                  onClick={() => toggleBookmark(location.id)}
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
