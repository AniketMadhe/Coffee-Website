import React, { useState, useEffect } from "react";
import axios from "axios";

function Coffee() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:4000/api/coffee",
        {
          name,
          price,
          description,
          imageUrl,
        },
        {
          withCredentials: true,
        },
      );
      if (res) {
        alert("Added");
        setName("");
        setDescription("");
        setPrice("");
        setImageUrl("");
      }
    } catch (e) {
      console.log("Incorrect credentials");
    }
  };

  return (
    <div className="flex justify-center items-center h-full min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-80 flex flex-col gap-4"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Add Coffee
        </h2>

        <input
          type="text"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="px-4 py-2 border rounded border-gray-300 focus:outline-none focus:border-brand"
        />

        <input
          type="number"
          placeholder="Price"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
          className="px-4 py-2 border rounded border-gray-300 focus:outline-none focus:border-brand"
        />
        <input
          type="text"
          placeholder="description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="px-4 py-2 border rounded border-gray-300 focus:outline-none focus:border-brand"
        />
        <input
          type="text"
          placeholder="imageUrl"
          onChange={(e) => setImageUrl(e.target.value)}
          value={imageUrl}
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

export default Coffee;
