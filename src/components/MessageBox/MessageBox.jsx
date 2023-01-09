import { io } from "socket.io-client";

import { useState } from "react";

import Message from "../Message/Message";



const MessageBox = (props) => {
  
  const [messages,setMessages] = useState([
    {
      user:'me',
      text:'Test Message 1'
    },
    {
      user:'you',
      text:'Response to Test Message 1'
    },
    {
      user:'me',
      text:'Response to the Response to Test Message 1'
    },
    {
      user:'you',
      text:'Response to Test Message 1'
    },
    {
      user:'me',
      text:'Response to the Response to Test Message 1'
    },
    {
      user:'you',
      text:'Response to Test Message 1'
    },
    {
      user:'me',
      text:'Response to the Response to Test Message 1'
    },
    {
      user:'you',
      text:'Response to Test Message 1'
    },
    {
      user:'me',
      text:'Response to the Response to Test Message 1'
    }
  ])
  
  const [formData,setFormData] = useState("")
  
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setMessages([{user:'me', text:formData},...messages])
    setFormData("")
  }
  
  const handleChange = (e) => {
    setFormData(e.target.value)
  }
  
  // const socket = io("ws://localhost:3001");
  
  // send a message to the server
  // socket.emit("hello from client", 5, "6", { 7: Uint8Array.from([8]) });
  
  // receive a message from the server
  // socket.on("hello from server", (...args) => {
    // ...
  // });
  
  
  return ( 
    <div id="message-box">
      <div id="past-messages">
        {messages.map( message =>
          <Message key={message.text} user={message.user} text={message.text}/>
        )}
      </div>
      <form 
        id='input-area'
        onSubmit={handleSubmit}
      >
        <input type="text" name="messageInput" id="messageInput" onChange={handleChange} value={formData}/>
        <button type='submit'> Send </button>
      </form>
    </div>

  );
}

export default MessageBox;