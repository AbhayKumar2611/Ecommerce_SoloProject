import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { auth, logout } from "../../firebase"; // Ensure auth is imported
import { onAuthStateChanged } from "firebase/auth";

const Navbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe(); // Cleanup subscription
  }, []);

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>

      {user ? (
        <div onClick={logout} style={{ cursor: "pointer" }}>
          Logout
        </div>
      ) : (
        <NavLink to="/login">Login</NavLink>
      )}
    </div>
  );
};

export default Navbar;
