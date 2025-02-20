import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './alterPlaceList.css';
import Tag from '../../components/tag/Tag'

const mockData = [
  {
    id: 1,
    category: '성산일출봉',
    title: '지미봉',
    badge: '여유',
    address: '제주 서귀포시 성산읍 성산리 1',
    url: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fo1KIw%2Fbtqu9mflPY6%2FrGk1mM3iugV1c6jj9Z3E80%2Fimg.jpg',
    author: 'cloudL_',
    authorType: '주민',
    caption: '산 책 하 기 좋 아 요'
  },
  {
    id: 2,
    category: '우도',
    title: '우도봉',
    badge: '인기',
    address: '제주 제주시 우도면 우도봉길 105',
    url: 'https://blog.kakaocdn.net/dn/bCve6g/btqu9mNcrlI/bY83Kk9wakVEJTwknPmsQ1/img.jpg',
    author: 'jejuLover',
    authorType: '주민',
    caption: '전 망 이 멋 져 요'
  },
  {
    id: 3,
    category: '한라산',
    title: '백록담',
    badge: '핫플',
    address: '제주 제주시 한라산길 220',
    url: '/api/placeholder/400/300',
    author: 'traveler',
    authorType: '여행자',
    caption: '공 기 가 맑 아 요'
  }
];

const AlterPlaceList = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex); // realIndex를 사용하여 무한 루프에서도 올바른 인덱스 추적
  };

  const currentLocation = mockData[activeIndex];

  return (
    <div className="detail-container">
      <div className="alterPlaceList-top-detail">
        <div className="location-category">
          <span>{currentLocation.category} 
             <span className="location-category-span">과 유사한 곳</span>
          </span>
        </div>
        <div className="location-title">
          {currentLocation.title}
          <span className="badge">
            <Tag 
          text={`${currentLocation.badge}`}  // 템플릿 리터럴 필요 없음
          backgroundColor="#D5E8E5" 
          textColor="#075E50"/>
        </span>
        </div>
        <div className="location-address">{currentLocation.address}
      </div>
</div>
      <div className="swiper-container">
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          onSlideChange={handleSlideChange}
        >
          {mockData.map((location) => (
            <SwiperSlide key={location.id}>
              <div className='alterPlaceList-swiper-box'>
                 <div className="image-author">
                  {location.author} 
                  <div className='alterPlaceList-who-review'>
                  <Tag 
                    text={`${location.authorType}`}  // 템플릿 리터럴 필요 없음
                    backgroundColor="#FCF1EB" 
                    textColor="#B23E04"/></div>
                </div>
              <img src={location.url} alt={location.caption} />
              <div className="image-caption">
                  {location.caption.split("").map((char, index) => 
                    char === " " ? (
                      <span key={index}>&nbsp;</span> // 공백은 스타일 없이 처리
                    ) : (
                      <span key={index} className="char">{char}</span> // 문자만 스타일 적용
                    )
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default AlterPlaceList;