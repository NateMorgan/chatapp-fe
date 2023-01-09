const Message = (props) => {

  const messageClass = props.user === 'me' ? "my-message" : "not-my-message"

  return ( 
    <p className={messageClass}> {props.text}</p>
  );
}

export default Message;