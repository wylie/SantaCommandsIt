import React from 'react';
import './App.css';
import Santa from "./assets/santa.png";
import featureFlags from './config';

function App() {
  return (
    <div className="app">
      {featureFlags.redesign ? (
        <>
          <h1>Ho Ho Ho!</h1>
          <img src={Santa} alt="Santa" />
        </>
    ) : (
        <>
          <h1>Santa Commands It!</h1>
          <img src={Santa} alt="Santa" />
        </>
      )}
    </div>
  );
}

export default App;
