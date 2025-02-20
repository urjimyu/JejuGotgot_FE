import { useState } from "react";
import "./Search.css";

// eslint-disable-next-line react/prop-types
const Search = ({ placeholder , onSearch }) => {
  const [input, setInput] = useState("");

  const handleClear = () => setInput("");

  return (
    <div className="search-container">
      <div className="search-box">
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
            {/* X 아이콘 */}
          </button>
        )}
      </div>
    </div>
  );
};

export default Search;
