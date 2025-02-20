import {useEffect} from 'react'

const Map = () => {
   useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new window.kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };

    // eslint-disable-next-line no-unused-vars
    const map = new window.kakao.maps.Map(container, options);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <section id="map-section" style="w-full h-[400px]">
        <div id="map" className="w-[375px] h-[250px] border border-gray-300 rounded-md"></div> {/* 지도 영역 */}
      </section>
    </div>
  )
}

export default Map
