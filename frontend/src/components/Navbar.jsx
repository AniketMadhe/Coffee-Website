import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginContext } from "../App";
import axios from "axios";
import BASE_URL from "../pages/configUrl";

function Navbar() {
  const navigate = useNavigate();
  const { admin, login, setAdmin, setLogin } = useContext(LoginContext);
  useEffect(() => {
    console.log("fetching user details");
  }, [admin, login, setAdmin, setLogin]);

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await axios.get(`${BASE_URL / api / logout}`, {
        withCredentials: true,
      });
      console.log("Logged out successfully");
    } catch (error) {
      console.error(
        "Logout request failed, clearing local state anyway:",
        error,
      );
    } finally {
      // Runs whether the API call succeeds or fails
      setLogin(false);
      setAdmin(false);
      navigate("/login");
    }
  };
  return (
    <div className="flex text-primary-text  sticky top-0 z-40 px-10 h-20  shadow-[0_4px_10px_rgba(0,0,0,0.4)] justify-between items-center">
      <h2 className=" cursor-grab font-semibold hover:text-teal-strong">
        CoffeePlace
      </h2>
      <ul className="list-none font-medium flex justify-center  items-center gap-4 ">
        {/** If user is logged in */}
        {!login && !admin && (
          <>
            <li className="">
              {" "}
              <Link className="  hover:text-teal-strong" to="/popular">
                Popular
              </Link>
            </li>
            <li>
              {" "}
              <Link className=" hover:text-teal-strong" to="/login">
                Login
              </Link>
            </li>
            <li>
              {" "}
              <Link className=" hover:text-teal-strong" to="/signup">
                SignUp
              </Link>
            </li>
          </>
        )}
        {login && !admin && (
          <>
            <li>
              {" "}
              <Link className=" hover:text-teal-strong" to="/">
                Home
              </Link>
            </li>
            <li>
              {" "}
              <Link className=" hover:text-teal-strong" to="/about">
                About Us
              </Link>
            </li>
            <li>
              {" "}
              <Link className=" hover:text-teal-strong" to="/products">
                Products
              </Link>
            </li>
            <li>
              {" "}
              <Link className=" hover:text-teal-strong" to="/contact">
                Contact
              </Link>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="text-red-600 hover:text-red-800 font-bold bg-transparent border-none cursor-pointer"
              >
                Logout
              </button>
            </li>
          </>
        )}
        {login && admin && (
          <>
            <li className="  hover:text-teal-strong">
              <Link to="/coffee"> Add Coffee</Link>
            </li>
            <li className="">
              {" "}
              <Link className="  hover:text-teal-strong" to="/popular">
                Popular
              </Link>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="text-red-600 hover:text-red-800 font-bold bg-transparent border-none cursor-pointer"
              >
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}

export default Navbar;
