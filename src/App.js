import React from 'react';
import logo from './logo.svg';
import './App.css';
import Movies from './Movies';

function App() {
  return (
    <div>
      <h1>Favorite Movies</h1>
      <Movies title="#1: Avengers" />
      <Movies title="#2: Gone With The Wind" />
      <Movies title="#3: Stuart Little" />
    </div>
  );
}

export default App;
