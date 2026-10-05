import React, { useState, useEffect } from "react";
import axios from "axios";

function Popular() {
  const [coffees, setCoffees] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const popCoffee = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/coffee", {
          withCredentials: true,
        });
        setCoffees(res.data);
        console.log("Fetched coffees:", res.data); // Logs the correct data right after it's fetched
      } catch (err) {
        console.error("Failed to fetch coffees:", err);
        setError("Could not load popular coffees.");
      }
    };

    popCoffee();
  }, []); // Runs once on component mount

  return (
    <div className="min-h-screen p-6 text-white">
      <h1 className="text-2xl font-bold mb-4">Popular Coffees</h1>

      {error && <p className="text-red-400">{error}</p>}

      {/* Example of how you can map and display the data */}
      <div className="flex  justify-around gap-12 flex-wrap ">
        {coffees.map((coffee) => (
          <div
            key={coffee._id || coffee.id}
            className="bg-teal-900 p-6 rounded aspect-square h-40  border border-teal-700"
          >
            <img
              className="object-cover w-full h-full"
              src={coffee.imageUrl}
              alt=""
            />
            <h3 className="font-semibold text-center">{coffee.name}</h3>
            <p className="text-sm line-clamp-2 text-center text-teal-200">
              {coffee.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Popular;
