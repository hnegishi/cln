import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './App.scss';
import { useAppDispatch, useAppSelector } from './app/hooks';
import Sidebar from './components/sidebar/Sidebar';
import Chat from './components/chat/Chat';
import Login from './components/login/Login';
import { auth } from './Firebase';
import { login, logout } from './features/userSlice';

function App() {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((loginUser) => {
      if (loginUser) {
        // user is logged in
        dispatch(
          login({
            uid: loginUser.uid,
            photo: loginUser.photoURL,
            email: loginUser.email,
            displayName: loginUser.displayName,
          })
        );
      } else {
        // user is logged out
        dispatch(logout());
      }
    });
  } , [dispatch])

  return (
    <div className="App">
      {user ? (
        <>
      { /* sidebar */}
      <Sidebar />

      { /* caht */}
      <Chat />
        </>
      ) : (
        <>
          <Login />
        </>
      )}
    </div>
  );
}

export default App;
