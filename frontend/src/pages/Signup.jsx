import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BASE_URL from "./configUrl";

function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("innnn");

    try {
      const res = await axios.post(
        `${BASE_URL}/api/signup`,
        { username, email, password },
        { withCredentials: true },
      );
      console.log(res.data);
      alert("Signed up successfully!");
      navigate("/login");
    } catch (error) {
      console.error("Full Error Object:", error);

      if (error.response) {
        // The server responded with an error status code (4xx, 5xx)
        alert(error.response.data?.message || "Server rejected the request.");
      } else if (error.request) {
        // The request was made but no response was received (Backend is down or CORS blocked it)
        alert(
          "Network Error: Cannot connect to the server. Check if the backend is running and CORS is configured.",
        );
      } else {
        // Something else happened setting up the request
        alert("Error: " + error.message);
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen  bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-80 flex flex-col gap-4"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Sign Up
        </h2>

        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          className="px-4 py-2 border rounded border-gray-300 focus:outline-none focus:border-brand"
        />

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
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
          Register
        </button>
      </form>
    </div>
  );
}

export default Signup;
