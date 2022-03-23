import React from 'react';
import Home from './pages/Home';
import Feed from './components/Feed';
import classes from './App.module.css';

function App() {
  return (
    <div className={classes.mainDiv}>
      <Home />
      <Feed />
    </div>
  );
}

export default App;
