const Message = (props) => {

  const messageClass = props.sender === 'me' ? "my-message" : "not-my-message"

  return ( 
    <p className={messageClass}> {props.content}</p>
  );
}

export default Message;