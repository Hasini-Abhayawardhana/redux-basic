import React from 'react';
import './App.css';
import Button from './components/Button';
import PostList from './components/PostList';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Button />
      <br />
      <PostList />
    </div>
  );
}

export default App;
