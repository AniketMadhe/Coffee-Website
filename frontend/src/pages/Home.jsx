import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { LoginContext } from "../App";
import { useNavigate } from "react-router-dom";

function Home() {
  return (
    <div className=" font-poppins pt-4">
      <div className="container text-primary-text flex justify-center items-center flex-col w-full h-full ">
        <h1 className="w-full h-20 font-bold text-7xl text-center pt-6 ">
          COLD COFFEE
        </h1>
        <div className="info flex justify-center gap-[5%] items-center w-full h-full">
          <div className="desc flex justify-center items-center flex-col  ml-[10%] w-[30%]">
            <p className=" text-primary-text p-3  text-wrap ">
              Find delicious hot and cold coffees with the best varieties calm
              the pleasure and enjoy a good coffee.order now.
            </p>
            <button className="py-2  cursor-pointer m-2 px-3 rounded-sm bg-green-400">
              Learn more...
            </button>
          </div>
          <img
            className="w-[35%]  scale-110 aspect-square "
            src="https://png.pngtree.com/png-clipart/20250111/original/pngtree-iced-coffee-with-splashing-chocolate-and-ice-cubes-png-image_19080904.png"
            alt="Cold coffee image"
          />
          <div className="logo aspect-square bg-no-repeat bg-contain bg-center    rounded-full w-[30%] bg-[url('https://www.freepnglogos.com/uploads/coffee-logo-png/coffee-house-cafe-logo-21.png')]"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
