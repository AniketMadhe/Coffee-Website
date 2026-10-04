import React, { useState, useEffect } from "react";
import axios from "axios";

function Popular() {
  useEffect(() => {
    const popCoffee = async () => {
      const res = await axios.get("http://localhost:4000/api/coffee", {
        withCredentials: true,
      });
    };
  }, []);
  return <div>Popular</div>;
}

export default Popular;
