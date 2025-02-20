import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ChatPage.css';

const ChatPage = () => {
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      navigate('/alterPlaceList', { state: { query: inputValue } }); // 결과 페이지로 이동
    }, 3000); // 임시 로딩 시간
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <button className="back-button">←</button>
        <h1 className="header-title">클라우디와의 대화</h1>
      </div>

      <div className="chat-content">
        {isLoading ? <div className="loading-indicator">● ● ●</div> : <div className="message-bubble">
          비슷한 곳이 어딘지 물어보세요!</div>}
         <div className="cloud-container">
        <div className="glow-circle">
          <div className="cloud-character">
            <img
              src={isLoading ? "/imgs/loading_cloudy.png" : "/imgs/cloudy.png"}
              alt="클라우디"
              className="cloudy-image"
            />
          </div>
        </div>
      </div>
        {/* {isLoading &&  */}
      </div>
      
     

      <div className="chat-input-container">
        <input 
          type="text" 
          className="chat-input" 
          placeholder="메시지를 입력하세요"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
        />
        <button className="send-button" onClick={handleSendMessage}>
          {isLoading ? '■' : '↑'}
        </button>
      </div>
    </div>
  );
};

export default ChatPage;
