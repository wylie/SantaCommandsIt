import React from 'react';
import './App.css';
import Santa from "./assets/santa.png";
import featureFlags from './config';

function App() {
  return (
    <>
      {featureFlags.redesign ? (
        <div className="app flag">
          <div className="img">
            <img src={Santa} alt="Santa" />
          </div>
          <div className="chats">
            <h1 className="chat santa">Ho Ho Ho!</h1>
            <h1 className="chat santa">Whataya want?</h1>
            <p className="chat user">I'd like a pony!</p>
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
