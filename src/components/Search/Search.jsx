import { useState } from "react";
import "./Search.css";

// eslint-disable-next-line react/prop-types
const Search = ({ placeholder , onSearch }) => {
  const [input, setInput] = useState("");

  const handleClear = () => setInput("");

  return (
    <div className="search-container">
      <div className="search-box">
        <img src="/assets/search.png" alt="검색 아이콘" className="search-icon" />
        <input
          type="text"
          className="search-input"
          placeholder={placeholder}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onSearch(input)}
        />
        {input && (
          <button onClick={handleClear} className="clear-button">
        <img src="/assets/delete.png" alt="삭제 아이콘" className="delete-icon" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Search;
