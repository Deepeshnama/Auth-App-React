import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logOutUser } from "../features/auth/authSlice";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch()

  const navigate = useNavigate()


  const handleLogOut =() => {
    dispatch(logOutUser())
    navigate("/login")
  }

  return (
    <nav className="navbar bg-dark">
      <div className="container-fluid">
        <Link to={"/"}>
          <span className="navbar-brand mb-0 h1 text-light">Auth App</span>
        </Link>

        <span>
          {
            !user ? (
            <>
              <Link
                to={"/register"}
                className="btn btn-sm btn-success rounded-0 mx-1"
              >
                Register
              </Link>
              <Link
                to={"/login"}
                className="btn btn-sm btn-warning rounded-0 mx-1"
              >
                Login
              </Link>
            </>
          ) : (
            <button className="btn btn-sm btn-danger rounded-0 mx-2" onClick={handleLogOut}>
              Logout
            </button>
          )
          }
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
