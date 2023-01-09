import { useState } from 'react';

import * as authService from './services/authService'

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MessageBox from './components/MessageBox/MessageBox';

import './App.css';

function App() {

  const [user,setUser] = useState(authService.getUser())

  return (
    <div className="App">
      <Header/>
      <h4> {user ? user.name : "Guest"} </h4>
      <MessageBox/>
      <Footer/>
    </div>
  );
}

export default App;
