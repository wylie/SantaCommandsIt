import React, { useState, useRef, useEffect } from 'react';

import './App.css';
import Santa from "./assets/santa.png";

function App() {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    // Set focus on the input element after the component renders
    inputRef.current.focus();
  }, []);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      console.log("I'd like", inputValue);
    }
  };

  return (
    <div className="app">
      <div className="top flag">
        <div className="img">
          <img src={Santa} alt="Santa" />
        </div>
        <div className="chats">
          <p className="chat santa">
            Ho Ho Ho!
            Whataya want?
          </p>
          <p id="input" style={{display: "none"}} className="chat user"></p>
        </div>
      </div>
      <div className="user-input" style={{position: "relative", bottom: "-50px"}}>
        <input
          type="text"
          ref={inputRef}
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
          placeholder="Tell Santa what you want!"
        />
      </div>
    </div>
  );
}

export default App;
