import React, { useContext } from "react";
import app from "../firebaseInit";
import { AuthContext } from "../Auth.js";

const Home = () => {

  const { currentUser } = useContext(AuthContext);

  let isloggedIn = currentUser 
    ? <div>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <button onClick={() => app.auth().signOut()}>Sign out</button> 
      </div>
    : "is not logged"

  return (
    <>
      <h1>Home</h1>
      <div>{isloggedIn}</div>
    </>
  );
};

export default Home;