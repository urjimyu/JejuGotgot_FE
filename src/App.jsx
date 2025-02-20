import "./App.css";
import './styles/reset.css';
import './styles/global.css';
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/common/Footer";

function App() {
  const location = useLocation();
  const hideFooterPages = ["/chat"]; // 푸터를 숨길 경로 리스트

  return (
    <div className="mobile">
      <Outlet />
      {!hideFooterPages.includes(location.pathname) && <Footer />}
    </div>
  );
}

export default App;
