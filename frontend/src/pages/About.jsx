import React from "react";

function About() {
  return (
    <div className="w-full flex justify-center items-center min-h-screen">
      <div className="about aspect-square gap-4 flex justify-center items-center px-[8%] flex-col  w-3/5">
        <h2 className="text-primary-text text-4xl font-bold">
          LEARN MORE <br />
          ABOUT US
        </h2>
        <p className="text-primary-text">
          Welcome to StarCoffee, where coffee is pure passion, From bean to cup,
          we are dedicated to delivering excellence in every sip.Join us on a
          journey of flavor and quality, crafted with love to create the
          ultimate coffee experience.
        </p>
        <button className=" px-3 py-2 bg-teal-strong text-primary-text font-semibold ">
          The Best Coffees
        </button>
      </div>
      <div className="coffee flex justify-center items-center h-[80%]  w-2/4 aspect-square bg-no-repeat  bg-[url('https://png.pngtree.com/png-vector/20240914/ourmid/pngtree-free-coffee-bean-sacks-pull-png-image-png-image_12927292.png')]"></div>
    </div>
  );
}

export default About;
