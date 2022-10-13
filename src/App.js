import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from './Pages/HomeScreen';
import LoginScreen from './Pages/LoginScreen';
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/useSlice";
import ProfileSreen from './Pages/ProfileSreen';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      }
      else {
        dispatch(logout);
      }
    })
    return unsubscribe;
  })
  return (
    <div className="app">
      <BrowserRouter >
        {
          !user ? (<LoginScreen />) : (
            <Routes>

              <Route path="/" element={<HomeScreen />} />

              <Route path="/profile" element={<ProfileSreen />} />

            </Routes>)
        }


      </BrowserRouter>
    </div>
  );
}

export default App;
