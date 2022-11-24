import './assets/scss/App.scss';
import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from './components/navBar';
import Home from './components/home';
import Login from './Login';
import Game from './components/game';
import Contact from './components/contact';
import EsFeatures from './components/es610';
import Trivia from './components/trivia';
import SignUp from './SignUp';
import { AuthProvider } from './Auth';
import PrivateRoute from './utils/privateRoute';

// const PrivateRoute = () => {
//   const auth = true;
//   return auth ? <Outlet /> : <Navigate to="/login" />;
// }

class App extends Component {
  state = {
    currentAnswer: 0,
    answers: [],
    gameOver: false,
  }



  render() {
    return (
      <AuthProvider>
        <div className="trivia-app">
          <NavBar />
          <main className="container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/game" element={<PrivateRoute><Game /></PrivateRoute>} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/es610" element={<EsFeatures />} />
                {/* <Route path="/game" element={<Game />} /> */}
                <Route path="/signup" element={<SignUp />} />
                <Route path="/trivia" element={<Trivia />} />
              </Routes>
          </main>
        </div>
      </AuthProvider>
    );
  }
}

export default App;
