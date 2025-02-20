import { NavLink } from "react-router-dom";
import { useState } from "react";
import searchIcon from "/imgs/searchIcon.png";
import searchIconActive from "/imgs/searchIconActive.png";
import aiIcon from "/imgs/aiIcon.png";
import aiIconActive from "/imgs/aiIconActive.png";
import saveIcon from "/imgs/saveIcon.png";
import saveIconActive from "/imgs/saveIconActive.png";
import './Footer.css';

const Footer = () => {
  const [active, setActive] = useState(null);

  const menuItems = [
    { name: "검색", path: "/", icon: searchIcon, activeIcon: searchIconActive },
    { name: "AI 비서", path: "/chat", icon: aiIcon, activeIcon: aiIconActive },
    { name: "저장", path: "/bookmarkList", icon: saveIcon, activeIcon: saveIconActive }
  ];

  return (
    <footer className="footer">
      {menuItems.map((item, index) => (
        <NavLink 
          key={index} 
          to={item.path} 
          className={`footer-item ${active === item.path ? 'active' : ''}`}
          onClick={() => setActive(item.path)}
        >
          <img src={active === item.path ? item.activeIcon : item.icon} alt={item.name} className="icon" />
          <span className="label">{item.name}</span>
        </NavLink>
      ))}
    </footer>
  );
};

export default Footer;
