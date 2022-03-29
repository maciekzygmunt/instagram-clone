import React, { useEffect } from 'react';
import Home from './pages/Home';
import Feed from './components/Feed';
import classes from './App.module.css';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import { useSelector } from 'react-redux';

function App() {
  const isLogin = useSelector((state) => state.login.isLogin);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!isLogin && location.pathname === '/') {
      navigate('/login');
    }
  }, [isLogin]);

  return (
    <div className={classes.mainDiv}>
      {isLogin && <Home />}
      <Routes>
        {isLogin && <Route path="/" element={<Feed />} />}
        {!isLogin && <Route path="/login" element={<Login />} />}
        {!isLogin && <Route path="/signup" element={<Signup />} />}
      </Routes>
    </div>
  );
}

export default App;
