import { Link } from "react-router-dom";

const Header = (props) => {
  return ( 
    <header className="App-header">
      <Link to='/'>
          <h1> Basic Chat App </h1>
      </Link>
      {props.user ?
        <div className="corner-toggle">
          <h5> {props.user.name} </h5>
          <button onClick={props.handleLogout}> Log Out</button>

        </div>
      :
        <div className='corner-toggle'>
          <Link to='/login'> <button> LogIn </button> </Link>
          <Link to='signup'> <button> SignUp </button> </Link>
        </div>
      }
    </header>
  );
}

export default Header;