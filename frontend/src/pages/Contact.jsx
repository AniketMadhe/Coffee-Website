import React from "react";
import { FaInstagram, FaWhatsapp, FaTelegram } from "react-icons/fa";

function Contact() {
  return (
    <div className="min-h-screen flex-col flex items-center  justify-start pt-40">
      <h1 className="text-white mb-6 font-bold">CONTACT US</h1>
      <div className="w-full text-primary-text h-full gap-6 flex justify-center items-center">
        <div className="socials flex flex-col justify-center gap-5">
          <div className="icons flex flex-col gap-2">
            <h2 className="text-center font-semibold">Write</h2>
            <div className="icon flex justify-center items-center gap-4">
              <FaWhatsapp size={30} />
              <FaInstagram size={30} />
              <FaTelegram size={30} />
            </div>
          </div>
          <div className="location">
            <h2 className=" font-semibold">Location </h2>
            <p>Lima-Sun City-peru</p>
            <button>View on Map</button>
          </div>
        </div>
        <div className="pic w-2/7 aspect-square bg-cover bg-no-repeat rounded-full bg-[url('https://thumbs.dreamstime.com/b/cheerful-cartoon-barista-holding-tray-coffees-cheerful-cartoon-barista-wearing-glasses-beard-holding-tray-378077596.jpg?w=768')]"></div>
        <div className="address flex flex-col gap-5">
          <h3>
            <span className="font-semibold">Delivery</span> <br />
            <span>
              ++00-987-7654-321 <br />
              +11-012345
            </span>
          </h3>
          <h3>
            <span className="font-semibold">Attention</span> <br />
            <span>
              Monday - Saturday <br />
              9AM - 10PM
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Contact;
