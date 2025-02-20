import ListBox from '../../components/listBox/ListBox'

// 메인 LocationList 컴포넌트
const BookmarkList = () => {
  // API로부터 받아올 데이터 구조 예시
  const [locations, setLocations] = React.useState([]);
  
  // API 호출 예시
  React.useEffect(() => {
    const fetchLocations = async () => {
      try {
        // API 호출 로직
        const response = await fetch('your-api-endpoint');
        const data = await response.json();
        setLocations(data);
      } catch (error) {
        console.error('Failed to fetch locations:', error);
      }
    };
    
    fetchLocations();
  }, []);

  return (
    <div className="max-w-2xl mx-auto bg-white">
      {locations.map((location) => (
        <ListBox key={location.id} location={location} />
      ))}
    </div>
  );
};

export default BookmarkList;