import React, { useEffect, useContext } from "react";
import axios from "axios";
import { LoginContext } from "../App";
import { useNavigate } from "react-router-dom";
import BASE_URL from "./configUrl";

function Welcome() {
  const navigate = useNavigate();
  const { setLogin, setAdmin, admin, login } = useContext(LoginContext);

  useEffect(() => {
    const validateToken = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/home`, {
          withCredentials: true,
        });
        if (!response) {
          navigate("/login");
        }
        if (response.data.role === "admin") {
          setAdmin(true);
          setLogin(true);

          navigate("/popular");
        }
        if (response.data.role === "user") {
          setLogin(true);
          setAdmin(false);
          navigate("/home");
        }
      } catch (error) {
        // If promise fails (e.g., token is invalid, expired, or unauthorized)
        console.log("Token validation failed:", error);
        setLogin(false);
        setAdmin(false);
        navigate("/login");
      }
    };

    validateToken();
  }, [navigate, setLogin, admin, login, setAdmin]);

  return <div>Loading...</div>;
}

export default Welcome;
