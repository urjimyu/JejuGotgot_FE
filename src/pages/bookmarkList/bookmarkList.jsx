import { useNavigate } from 'react-router-dom'; // 🔹 useNavigate 추가
import ListBox from '../../components/listBox/ListBox';
import React from 'react';
import './bookmarkList.css';
import Header from '../../components/common/Header';

const mockLocations = [
  {
    id: 1,
    title: '백록담',
    subtitle: '제주 제주시 한라산길',
    status: '용장',
    type: '자연',
    condition: '핫플',
    image: 'https://cdn.newsian.co.kr/news/photo/202208/56264_33487_4742.jpg',
    date: '오늘'
  },
  {
    id: 2,
    title: '신선 목장',
    subtitle: '제주특별자치도 서귀포시',
    status: '농장',
    type: '자연',
    condition: '한적함',
    image: 'https://blog.kakaocdn.net/dn/bCve6g/btqu9mNcrlI/bY83Kk9wakVEJTwknPmsQ1/img.jpg',
    date: '23일 전'
  },
  {
    id: 3,
    title: '큰 넓게',
    subtitle: '제주특별자치도 서귀포시',
    status: '용장',
    type: '자연',
    condition: '조용함',
    image: 'https://cdn.newsian.co.kr/news/photo/202208/56264_33487_4742.jpg',
    date: '7일 전'
  }
];

const BookmarkList = () => {
  const navigate = useNavigate(); // 🔹 네비게이션 함수 사용

  const handleReviewClick = (location) => {
    navigate('/reviewCreate', { state: { location } }); // 🔹 해당 장소 데이터를 가지고 이동
  };

const handleClick = () => {
  navigate('/');
}
  return (
<>
    <Header title={'저장목록'} onClick={handleClick}/>
    <div className="bookmark-list-wrap">
      {mockLocations.map((location) => (
        <ListBox
          key={location.id}
          image={location.image}
          title={location.title}
          subtitle={location.subtitle}
          status={location.status}
          type={location.type}
          condition={location.condition}
          date={location.date}
          actionButton={
            <button className="bookmark-btn" onClick={() => handleReviewClick(location)}>
              후기작성
            </button>
          }
        />
      ))}
    </div>
    </>
  );
};

export default BookmarkList;
