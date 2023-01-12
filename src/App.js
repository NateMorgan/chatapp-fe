import { useState, useEffect } from 'react';

import * as authService from './services/authService'

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MessageBox from './components/MessageBox/MessageBox';

import * as dialogueService from './services/dialogueService'

import './App.css';

function App() {

  const [user,setUser] = useState(authService.getUser())

  const [dialogues,setDialogues] = useState([{
    "_id": {
      "$oid": "63be0bc0a3d0e72c305e6da8"
    },
    "name": "Failure Chat",
    "users": [
      {
        "$oid": "63be0287e9d05dca510431f9"
      }
    ],
    "messages": [{sender:"No-One", content:"Failure"}],
    "createdAt": {
      "$date": "2023-01-11T01:07:12.666Z"
    },
    "updatedAt": {
      "$date": "2023-01-11T01:07:12.666Z"
    },
    "__v": 0
  }])

  useEffect(() => {
    const fetchDialogues = async () => {
      const data = await dialogueService.index()
      setDialogues(data)
    }
    fetchDialogues()
  }, [user])

  return (
    <div className="App">
      <Header/>
      <h4> {user ? user.name : "Guest"} </h4>
      <h4> {dialogues[0].name} </h4>
      <MessageBox dialogue={dialogues[0]}/>
      <Footer/>
    </div>
  );
}

export default App;
