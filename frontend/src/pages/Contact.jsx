import React from "react";
import { FaInstagram, FaWhatsapp, FaTelegram } from "react-icons/fa";

function Contact() {
  return (
    <div>
      <h1>CONTACT US</h1>
      <div className="w-full h-full gap-6 flex justify-center items-center">
        <div className="socials">
          <FaWhatsapp />
          <FaInstagram />
          <FaTelegram />
        </div>
        <div className="pic w-2/7 aspect-square bg-cover bg-no-repeat rounded-full bg-[url('https://thumbs.dreamstime.com/b/cheerful-cartoon-barista-holding-tray-coffees-cheerful-cartoon-barista-wearing-glasses-beard-holding-tray-378077596.jpg?w=768')]"></div>
        <div className="address">
          <h3>
            <span>Delivery</span> <br />
            <span>
              ++00-987-7654-321 <br />
              +11-012345
            </span>
          </h3>
          <h3>
            <span>Attention</span> <br />
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
