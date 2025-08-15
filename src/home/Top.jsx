


import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaShoppingCart } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import useCart from '../Hooks/useCart';
import { Link } from 'react-router-dom';
import Chatbot from './Chatbot/CHatbotui';

const Top = () => {
  const [cart] = useCart();
  const [showChatbot, setShowChatbot] = useState(false);

  return (
    <>
      <div className="bg-slate-50 border-b border-gray-200">
        <section className="drop-shadow">
          <div className="max-w-screen-xl mx-auto">
            <div className="py-2 px-5">

              {/* ✅ Desktop/Tablet View */}
              <div className="hidden md:flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 gap-2">
                {/* Welcome Text */}
                <div className="flex flex-col sm:flex-row items-center gap-2 md:gap-4 text-center md:text-left">
                  <p className="text-gray-500">🌱 Welcome to Smart Farming</p>
                  <p className="text-amber-500 font-medium">Agriculture & Organic Farm</p>
                </div>

                {/* Right Section */}
                <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-8">
                  {/* Social Icons */}
                  <div className="flex gap-3 text-gray-500">
                    <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-600"><FaFacebookF /></a>
                    <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-sky-500"><FaTwitter /></a>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-700"><FaLinkedinIn /></a>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-500"><FaInstagram /></a>
                  </div>

                  {/* Email and Cart */}
                  <div className="flex flex-col sm:flex-row items-center gap-4 text-gray-600 text-sm">
                    <div className="flex items-center gap-2">
                      <MdEmail />
                      <p>smartfarming@gmail.com</p>
                    </div>

                    <div className="relative group">
                      <Link to="/dashboard/cart" className="flex items-center gap-2 hover:text-green-600">
                        <div className="relative">
                          <FaShoppingCart className="text-lg" />
                          {cart.length > 0 && (
                            <span className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                              {cart.length}
                            </span>
                          )}
                        </div>
                        <span className="hidden sm:inline">Cart</span>
                      </Link>
                    </div>

                    {/* Chat Button */}
                    <button
                      onClick={() => setShowChatbot(true)}
                      className="bg-lime-700 hover:bg-green-600 text-white px-3 py-1 rounded-full font-medium text-sm"
                    >
                      💬 Chat
                    </button>
                  </div>
                </div>
              </div>

              {/* ✅ Mobile View (Only Cart + Chat) */}
              <div className="flex md:hidden justify-end items-center gap-4 mt-2">
                <div className="relative group">
                  <Link to="/dashboard/cart" className="flex items-center gap-1 hover:text-green-600">
                    <div className="relative">
                      <FaShoppingCart className="text-xl" />
                      {cart.length > 0 && (
                        <span className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                          {cart.length}
                        </span>
                      )}
                    </div>
                    <span className="text-sm">Cart</span>
                  </Link>
                </div>

                <button
                  onClick={() => setShowChatbot(true)}
                  className="bg-lime-700 hover:bg-green-600 text-white px-3 py-1 rounded-full font-medium text-sm"
                >
                  💬 Chat
                </button>
              </div>

            </div>
          </div>
        </section>
      </div>

      {/* Chatbot Popup */}
      <Chatbot visible={showChatbot} onClose={() => setShowChatbot(false)} />
    </>
  );
};

export default Top;
