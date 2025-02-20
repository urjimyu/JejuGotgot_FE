import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './alterPlaceList.css';
import Tag from '../../components/tag/Tag'
import Card from '../../components/card/Card';

const mockData = [
  {
    id: 1,
    category: '성산일출봉',
    title: '지미봉',
    badge: '여유',
    address: '제주 서귀포시 성산읍 성산리 1',
    url: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fo1KIw%2Fbtqu9mflPY6%2FrGk1mM3iugV1c6jj9Z3E80%2Fimg.jpg',
    author: 'zer0',
    authorType: '주민',
    caption: '산 책 하 기 좋 아 요'
  },
  {
    id: 2,
    category: '성산일출봉',
    title: '우도봉',
    badge: '인기',
    address: '제주 제주시 우도면 우도봉길 105',
    url: 'https://blog.kakaocdn.net/dn/bCve6g/btqu9mNcrlI/bY83Kk9wakVEJTwknPmsQ1/img.jpg',
    author: 'Noaaaaaaa',
    authorType: '주민',
    caption: '전 망 이 멋 져 요'
  },
  {
    id: 3,
    category: '성산일출봉',
    title: '백록담',
    badge: '핫플',
    address: '제주 제주시 한라산길 220',
    url: 'https://cdn.newsian.co.kr/news/photo/202208/56264_33487_4742.jpg',
    author: 'Cloudy_zzang',
    authorType: '여행자',
    caption: '공 기 가 맑 아 요'
  }
];

const AlterPlaceList = ({ disableBookmark = false }) => {
  const [activeIndex, setActiveIndex] = useState(0);
    const [bookmarkedPlaces, setBookmarkedPlaces] = useState(new Set());

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex); // realIndex를 사용하여 무한 루프에서도 올바른 인덱스 추적
  };


  const handleBookmarkToggle = (locationId) => {
    if (disableBookmark) return; 


    setBookmarkedPlaces(prev => {
      const newBookmarks = new Set(prev);
      if (newBookmarks.has(locationId)) {
        newBookmarks.delete(locationId);
      } else {
        newBookmarks.add(locationId);
      }
      return newBookmarks;
    });
  };

  const currentLocation = mockData[activeIndex];

  return (
    <div className="alter-detail-container">
      <div className='back_gray'></div>
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
            <SwiperSlide key={location.id}  className="temp-swiper-slide">
               <Card 
                  location={location} 
                  isBookmarked={bookmarkedPlaces.has(location.id)}
                  onBookmarkToggle={handleBookmarkToggle}
                  disableBookmark={disableBookmark}
                  isReviewMode={false} // 특정 페이지에서는 true로 전달
                 >
                <div className="image-caption">
                  {location.caption.split(" ").map((char, index) => 
                    char === " " ? (
                      <span key={index}>&nbsp;</span>
                    ) : (
                      <span key={index} className="char">{char}</span>
                    )
                  )}
                </div>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default AlterPlaceList;