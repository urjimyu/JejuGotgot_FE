import "./App.css";
import './styles/reset.css'
import './styles/global.css'
import { Outlet } from "react-router-dom";


function App() {
  return (
      <div className="mobile">
         <RouterProvider router={router} />
        <h1>Vite + React</h1>
         <Outlet />
      </div>

  );
}

export default App;
