import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import app from "../firebaseInit";
import { AuthContext } from "../Auth.js";

const NavBar = () => {

  const { currentUser } = useContext(AuthContext);
  console.log("::::::",currentUser)

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        React Trivia {console.log("here", currentUser)}
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
          <NavLink className="nav-item nav-link" to="/">Home</NavLink>
          <NavLink className={currentUser ? "nav-item nav-link" : "hide"} to="/game">Game</NavLink>
          <NavLink className="nav-item nav-link" to="/contact">Contact</NavLink>
          <NavLink className="nav-item nav-link" to="/es610">ES features</NavLink>
          <NavLink className="nav-item nav-link" to="/realdatabase">Real database test</NavLink>
        </div>
      </div>
      <div className="form-inline my-2 my-lg-0">
          { currentUser 
          ? <div>
              <span> { currentUser.email} </span>
              <button
                className="btn btn-secondary btn-sm"
                onClick={() => app.auth().signOut()} >
                  Sign out
              </button>
            </div> 
          : <div>
              <Link className="" to="/login">Login</Link>
              <span> or </span> 
              <Link className="" to="/signup">Sign up</Link>
            </div>
          }
        {/* <button onClick={() => app.auth().signOut()}>Sign out</button> */}
      </div>
    </nav>
  );
};

export default NavBar;
