import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../App";
import BASE_URL from "./configUrl";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { admin, setAdmin, login, setLogin } = useContext(LoginContext);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the page from reloading
    try {
      const res = await axios.post(
        `${BASE_URL}/api/login`,
        { username, password },
        { withCredentials: true },
      );

      if (res.data.role === "user") {
        setLogin(true);
        setAdmin(false);
        navigate("/home");
      }
      if (res.data.role === "admin") {
        setAdmin(true);
        setLogin(true);
        navigate("/addCoffee");
      }
    } catch (e) {
      console.log("Incorrect details");
      navigate("/login");
    }
  };

  return (
    <div className="flex justify-center items-center h-full min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-80 flex flex-col gap-4"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center">Login</h2>

        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          className="px-4 py-2 border rounded border-gray-300 focus:outline-none focus:border-brand"
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className="px-4 py-2 border rounded border-gray-300 focus:outline-none focus:border-brand"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
