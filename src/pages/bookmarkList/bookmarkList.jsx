import ListBox from '../../components/listBox/ListBox'
import React from 'react';
import './bookmarkList.css'

const mockLocations = [
  {
    id: 1,
    title: '큰 넓게',
    subtitle: '제주특별자치도 서귀포시',
    status: '용장',
    type: '예네',
    condition: '조용함',
    image: 'https://blog.kakaocdn.net/dn/o1KIw/btqu9mflPY6/rGk1mM3iugV1c6jj9Z3E80/img.jpg',
    date: '7일 전'
  },
  {
    id: 2,
    title: '신선 목장',
    subtitle: '제주특별자치도 서귀포시',
    status: '농장',
    type: '예네',
    condition: '조용함',
    image: 'https://postfiles.pstatic.net/MjAyNTAxMjJfMjk0/MDAxNzM3NTU0MDY3NDc4.jNn9Fj-DztrDaKt-Paua0x1VOvCaJE5mhVvHqIiT2JAg.52P9QUGNlEM7-b56kj-xgo1kGq1C90WXuhVEBObbbXkg.JPEG/900%EF%BC%BF20230102%EF%BC%BF131456.jpg?type=w3840',
    date: '7일 전'
  },
  {
    id: 3,
    title: '큰 넓게',
    subtitle: '제주특별자치도 서귀포시',
    status: '용장',
    type: '예네',
    condition: '조용함',
    image: '/api/placeholder/80/80',
    date: '7일 전'
  }
];

// 메인 LocationList 컴포넌트
const BookmarkList = () => {
 return (
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
            <button className="bookmark-btn">
              후기작성
            </button>
          }
        />
      ))}
    </div>
  );
};

export default BookmarkList;