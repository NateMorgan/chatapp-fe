
import { useState, useEffect } from 'react';

import Message from '../Message/Message';

import * as dialogueService from "../../services/dialogueService.js"

const MessageBox = (props) => {
  const [messages, setMessages] = useState(props.dialogue.messages);

  const [formData, setFormData] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    setMessages([{ sender: props.user.profile, content: formData }, ...messages]);
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

  useEffect(() => {
    setMessages(props.dialogue.messages)
  }, [props.dialogue.messages])

  return (
    <div id="message-box">
      <div id="past-messages">
        {messages.map((message) => (
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
