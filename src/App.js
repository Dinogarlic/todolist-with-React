import React from 'react';
import './App.css';
import Header from './component/Header';
import TodoBoard from './component/TodoBoard';

export default function App() {
  return (
    <div id='main'>
      <Header />
      <TodoBoard />
    </div>
  );
}