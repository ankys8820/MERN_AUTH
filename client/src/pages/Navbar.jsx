import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const isUserSignedIn = !!localStorage.getItem("token");
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <>
      <div>
        <nav className="flex justify-around p-3 border-b border-zinc-800 items-center bg-zinc-700 text-zinc-300">
          <Link to="/" className="text-3xl cursor-pointer">
            AuthDB
          </Link>
          <ul className="flex gap-6">
            {isUserSignedIn ? (
              <>
                <Link to="/account">
                  <li>Account</li>
                </Link>
                <li>
                  <button onClick={handleSignOut}>Sign Out</button>
                </li>
              </>
            ) : (
              <>
                <Link to="/login">
                  <li>Login</li>
                </Link>
                <Link to="/register">
                  <li>Register</li>
                </Link>
              </>
            )}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
