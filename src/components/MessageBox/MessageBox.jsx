const MessageBox = (props) => {
  return ( 
    <div id="message-box">
      <div id="past-messages">
        <p className="my-message"> Message 1</p>
        <p className='not-my-message'> Message 2</p>
      </div>
      <div id='input-area'>
        <input type="text" name="messageInput" id="messageInput" />
        <button type='submit'> Send </button>
      </div>
    </div>

  );
}

export default MessageBox;