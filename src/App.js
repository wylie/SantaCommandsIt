import React, { useState } from 'react';
import './App.css';
import Santa from "./assets/santa.png";
import featureFlags from './config';

function App() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      console.log("I'd like", inputValue);
    }
  };

  return (
    <>
      {featureFlags.redesign ? (
        <div className="app flag">
          <div className="img">
            <img src={Santa} alt="Santa" />
          </div>
          <div className="chats">
            <p className="chat santa">Ho Ho Ho!</p>
            <p className="chat santa">Whataya want?</p>
            <p className="chat user">
              I'd like 
              <input 
                type="text" 
                placeholder="type what you want" 
                value={inputValue}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
              />
            </p>
          </div>
        </div>
      ) : (
        <div className="app main">
          <h1>Santa Commands It!</h1>
          <img src={Santa} alt="Santa" />
        </div>
      )}
    </>
  );
}

export default App;
