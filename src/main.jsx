import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import './index.css'
import App from './App.jsx'

const kakaoScript = document.createElement('script');
kakaoScript.type = 'text/javascript';
kakaoScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${import.meta.env.VITE_KAKAO_JAVASCRIPT_KEY}`;
document.head.appendChild(kakaoScript);
import router from "./Router";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
   <RouterProvider router={router} /> 
  </StrictMode>,
)