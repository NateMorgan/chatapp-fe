import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import { io } from 'socket.io-client';

import * as authService from './services/authService.js';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

import Landing from './pages/Landing/Landing';
import ChatPage from './pages/ChatPage/ChatPage';
import SignUp from './pages/SignUp/SignUp';
import LogIn from './pages/LogIn/LogIn';

import * as dialogueService from './services/dialogueService';

import './App.css';

function App() {
  const [user, setUser] = useState(authService.getUser());
  const navigate = useNavigate();

  const [dialogues, setDialogues] = useState([
    {
      _id: {
        $oid: '63be0bc0a3d0e72c305e6da8',
      },
      name: 'Failure Chat',
      users: [
        {
          $oid: '63be0287e9d05dca510431f9',
        },
      ],
      messages: [{ sender: 'No-One', content: 'Failure' }],
      createdAt: {
        $date: '2023-01-11T01:07:12.666Z',
      },
      updatedAt: {
        $date: '2023-01-11T01:07:12.666Z',
      },
      __v: 0,
    },
  ]);

  const handleLogout = () => {
    authService.logout();
    setUser(null);
    navigate('/');
  };

  const handleSignupOrLogin = () => {
    setUser(authService.getUser());
  };

  const socket = io("ws://localhost:3003");

  // send a message to the server
  socket.emit("hello from client", 5, "6", { 7: Uint8Array.from([8]) });

  // receive a message from the server
  socket.on("hello from server", (...args) => {
    console.log("Received a message from the server!")
  });

  useEffect(() => {
    const fetchDialogues = async () => {
      const data = await dialogueService.index();
      setDialogues(data);
    };
    fetchDialogues();
  }, [user]);

  return (
    <div className="App">
      <Header user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} chat={dialogues[0]}/>} />
        <Route
          path="/login"
          element={<LogIn handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/signup"
          element={<SignUp handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/chat"
          element={
            <ProtectedRoute user={user}>
              <ChatPage user={user} chat={dialogues[0]} />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
