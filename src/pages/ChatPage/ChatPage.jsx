import MessageBox from '../../components/MessageBox/MessageBox.jsx';

const ChatPage = (props) => {
  return ( 
    <>
      <h4> {props.chat.name} </h4>
      <MessageBox dialogue={props.chat} user={props.user}/>
    </>
  );
}

export default ChatPage;