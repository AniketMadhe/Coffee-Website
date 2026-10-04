import React, { useState, useEffect } from "react";
import axios from "axios";
import BASE_URL from "./configUrl";

function Products() {
  const [coffees, setCoffees] = useState([]);
  useEffect(() => {
    const fetchCoffee = async () => {
      const res = await axios.get(`${BASE_URL}/api/coffee`);
      console.log(res.data);
      setCoffees(res.data);
    };

    console.log(coffees);
    fetchCoffee();
  }, []);
  return (
    <div>
      <h1>All Coffees</h1>

      <ul className="w-full gap-8 min-h-screen flex justify-center flex-wrap items-center">
        {coffees.map((coffee) => (
          <div
            className="md:w-1/6  overflow-hidden aspect-square w-[40vw] h-[30vh] m-4 md:m-0 border   border-gray-500 shadow-[4px_4px_5px_rgba(0,0,0,0.8)]"
            key={coffee._id}
          >
            <li className="md:w-full w-full h-f object-cover md:h-[80%]">
              <img
                className="md:w-full md:h-full w-full h-full md:object-cover"
                src={coffee.imageUrl}
                alt=""
              />
              <h4 className="md:w-full md:h-[10%]  font-semibold md:text-center mt-2">
                {coffee.name}
              </h4>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Products;
