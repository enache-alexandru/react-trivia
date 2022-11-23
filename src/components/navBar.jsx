import { AuthContext } from "../Auth.js";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {

  //const  currentUser  = useContext(AuthContext);


  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        React Trivia
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" to="/">
            Home
          </NavLink>
          <NavLink className="nav-item nav-link" to="/game">
            Game
          </NavLink>
        </div>
      </div>
      <div className="form-inline my-2 my-lg-0">
        <AuthContext.Consumer>
          { AuthContext => AuthContext.userEmail ? 
            <div>Welcome {AuthContext.userEmail}</div> : 
            <div>
              <Link className="" to="/login">Login</Link>
              <span> or </span> 
              <Link className="" to="/signup">Sign up</Link>
            </div>
          }
        </AuthContext.Consumer>
        {/* <button onClick={() => app.auth().signOut()}>Sign out</button> */}
      </div>
    </nav>
  );
};

export default NavBar;