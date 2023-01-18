// import { io } from 'socket.io-client';

import { useState } from 'react';

import Message from '../Message/Message';

import * as dialogueService from "../../services/dialogueService.js"

const MessageBox = (props) => {
  const [messages, setMessages] = useState(props.dialogue.messages);

  const [formData, setFormData] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    setMessages([{ sender: 'me', content: formData }, ...messages]);
    console.log(formData)
    try {
      await dialogueService.sendMessage(props.dialogue._id,formData)
    } catch (err) {
      console.log(err)
    }
    setFormData('');
  };

  const handleChange = (e) => {
    setFormData(e.target.value);
  };

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
        {props.dialogue.messages.map((message) => (
          <Message
            key={message._id}
            sender={message.sender}
            content={message.content}
            user={props.user}
          />
        ))}
      </div>
      <form id="input-area" onSubmit={handleSubmit}>
        <input
          type="text"
          name="messageInput"
          id="messageInput"
          onChange={handleChange}
          value={formData}
        />
        <button type="submit"> Send </button>
      </form>
    </div>
  );
};

export default MessageBox;
