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
              </div>
                  <span className="image-name" key={location.id}>{location.title}</span>
              <div className="image-distance">
                  <span key={location.id} className="distance">{location.distance}</span>
                </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default BottomSheetSwipe;
