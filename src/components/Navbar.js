import React, { useState } from "react";
import { useEffect, useContext } from "react";
import { getSession, auth } from "../api/auth";
import { SessionContext } from "../context/SessionContext";

export default function Navbar() {
  // TODO: answer here
  // const { user, setUser, isLoggedIn, setIsLoggedIn } = useContext(SessionContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState("");

  const checkUser = async () => {
    const session = await getSession({ withCredentials: true });
    if (session) {
      setIsLoggedIn(true);
      setUser(session.data.user.name);
    } else {
      setIsLoggedIn(false);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark mb-4"
      style={{  backgroundColor: '#1f2937'}}
      aria-label="Navbar"
    >
      <div className="container">
        <div className="navbar-brand" aria-label="App Logo" style={{ fontFamily: "'Indie Flower', cursive" }}>
          Instagram
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a href="/" className="nav-link" aria-label="App Title">
                Home
              </a>
            </li>
            <li className="nav-item">
              {isLoggedIn ? (
                <span
                  className="nav-link active"
                  aria-label="Profile"
                  onClick={() => auth()}
                >
                  {user}
                </span>
              ) : (
                <button
                  className="btn btn-primary"
                  aria-label="Login"
                  onClick={() => auth()}
                >
                  Login
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
