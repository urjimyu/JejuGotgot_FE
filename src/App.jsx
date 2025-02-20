import "./App.css";
import './styles/reset.css'
import './styles/global.css'
import { Outlet } from "react-router-dom";


function App() {
  return (
      <div className="mobile">
         <Outlet />
      </div>

  );
}
export default App;