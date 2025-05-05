
import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram,FaShoppingCart, FaUser } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Top = () => {
    return (
        <div className="bg-slate-50 border-b border-gray-200">
            <section className="drop-shadow">
                <div className="container mx-auto">
                    <div className="py-2 px-5">
                        <div className="flex justify-between items-center text-sm text-gray-600">

                            {/* Welcome Text */}
                            <div className="flex items-center gap-4">
                                <p className="text-gray-500">🌱 Welcome to Smart Farming</p>
                                <p className="text-amber-500 font-medium">Agriculture & Organic Farm</p>
                            </div>

                            {/* Social Media + Login */}
                            <div className="flex items-center gap-8">

                                {/* Social Media Icons */}
                                <div className="flex gap-4 text-gray-500">
                                    <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-600 duration-200">
                                        <FaFacebookF />
                                    </a>
                                    <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-sky-500 duration-200">
                                        <FaTwitter />
                                    </a>
                                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-700 duration-200">
                                        <FaLinkedinIn />
                                    </a>
                                    <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-500 duration-200">
                                        <FaInstagram />
                                    </a>
                                </div>

                                {/* User & Email Info */}
                                <div className="flex gap-4 items-center text-gray-600">
                                    <div className="flex items-center gap-2">
                                        <MdEmail />
                                        <p>smartfarming@gmail.com</p>
                                    </div>
                                    {/* <div className="flex items-center gap-2 cursor-pointer hover:text-lime-600">
                                        <FaUser />
                                        <p>Login</p>
                                    </div> */}
                                      <div className='flex gap-4 items-center text-gray-700'>
                                                                <div className='flex items-center gap-2 hover:text-lime-600 cursor-pointer'>
                                                                    <FaShoppingCart className="text-xl" />
                                                                    <p>Cart</p>
                                                                </div>
                                                                <div className='text-sm'>
                                                                    <p>
                                                                        <span className='text-gray-500'>3 items</span> &nbsp;
                                                                        <span className='text-gray-800 font-semibold'>$150.00</span>
                                                                    </p>
                                                                </div>
                                                                </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Top;
