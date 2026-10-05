import React from "react";
import {
  FaInstagram,
  FaCcVisa,
  FaCcAmazonPay,
  FaCcPaypal,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full bg-teal-950 text-white border-t border-teal-800/60 py-6 px-4 md:px-8">
      <div className="max-w-6xl mx-auto flex  md:flex-row justify-between items-center gap-6">
        {/* Social Links */}
        <div className="flex items-center gap-4">
          <a
            href="#instagram"
            aria-label="Instagram"
            className="p-2 rounded-full hover:bg-teal-900 transition-colors"
          >
            <FaInstagram
              size={20}
              className="text-teal-200 hover:text-white transition-colors"
            />
          </a>
          <a
            href="#telegram"
            aria-label="Telegram"
            className="p-2 rounded-full hover:bg-teal-900 transition-colors"
          >
            <FaTelegram
              size={20}
              className="text-teal-200 hover:text-white transition-colors"
            />
          </a>
          <a
            href="#whatsapp"
            aria-label="WhatsApp"
            className="p-2 rounded-full hover:bg-teal-900 transition-colors"
          >
            <FaWhatsapp
              size={20}
              className="text-teal-200 hover:text-white transition-colors"
            />
          </a>
        </div>

        {/* Newsletter Subscription */}
        <div className="flex flex-col items-center md:items-start gap-1.5">
          <h2 className="text-sm font-medium text-teal-200 tracking-wide">
            Subscribe For Discounts
          </h2>
          <div className="relative flex items-center w-full max-w-xs">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-teal-900/80 border border-teal-700/60 rounded-md py-1.5 pl-3 pr-24 text-sm text-white placeholder-teal-400 focus:outline-none focus:border-teal-400 transition-colors"
            />
            <button
              type="button"
              className="absolute right-1 px-3 py-1 bg-teal-700 hover:bg-teal-600 text-xs font-medium text-white rounded transition-colors"
            >
              Subscribe
            </button>
          </div>
        </div>

        {/* Payment Icons */}
        <div className="flex items-center gap-4 text-teal-300">
          <FaCcPaypal
            size={24}
            className="hover:text-white transition-colors"
          />
          <FaCcAmazonPay
            size={24}
            className="hover:text-white transition-colors"
          />
          <FaCcVisa size={24} className="hover:text-white transition-colors" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
