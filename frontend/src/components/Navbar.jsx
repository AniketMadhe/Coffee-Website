import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Navbar() {
  useEffect(() => {
    console.log("fetching user details");
  }, []);
  return (
    <div className="flex sticky top-0 z-40 px-10 h-20  shadow-[0_4px_10px_rgba(0,0,0,0.4)] justify-between items-center bg-[#f4f4f4]">
      <h2>CoffeePlace</h2>
      <ul className="list-none flex justify-center items-center gap-4 ">
        <li>
          {" "}
          <Link to="/">Home</Link>
        </li>

        <li>
          {" "}
          <Link to="/popular">Popular</Link>
        </li>
        <li>
          {" "}
          <Link to="/login">Login</Link>
        </li>
        <li>
          {" "}
          <Link to="/signup">SignUp</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
