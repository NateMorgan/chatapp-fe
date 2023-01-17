import { Link } from "react-router-dom";

const Landing = (props) => {
  return ( 
    <div id="landing">
      {props.user ?
      <>
        <h3> Select Chat Below:</h3>
        <Link to='/chat'> <button> {props.chat.name} </button> </Link>
      </>
      :
      <>
        <h3> This is a simple chat app coded in React</h3>
        <h4> Please login or sign up to continue </h4>
        <div>
          <Link to='/login'> <button>Log In</button> </Link>
          <br />
          <br />
          <Link to='/signup'> <button> Sign Up</button> </Link>
        </div>
      </>
      }
    </div>
  );
}

export default Landing;