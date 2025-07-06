
import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaShoppingCart } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import useCart from '../Hooks/useCart';
import { Link } from 'react-router-dom';

// const Top = () => {
//     const [cart] = useCart();

//     return (
//         <div className="bg-slate-50 border-b border-gray-200">
//             <section className="drop-shadow">
//                 <div className="container mx-auto">
//                     <div className="py-2 px-5">
//                         <div className="flex justify-between items-center text-sm text-gray-600">

//                             {/* Welcome Text */}
//                             <div className="flex items-center gap-4">
//                                 <p className="text-gray-500">🌱 Welcome to Smart Farming</p>
//                                 <p className="text-amber-500 font-medium">Agriculture & Organic Farm</p>
//                             </div>

//                             {/* Social Media + Contact + Cart */}
//                             <div className="flex items-center gap-8">

//                                 {/* Social Media Icons */}
//                                 <div className="flex gap-4 text-gray-500">
//                                     <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-600 duration-200">
//                                         <FaFacebookF />
//                                     </a>
//                                     <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-sky-500 duration-200">
//                                         <FaTwitter />
//                                     </a>
//                                     <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-700 duration-200">
//                                         <FaLinkedinIn />
//                                     </a>
//                                     <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-500 duration-200">
//                                         <FaInstagram />
//                                     </a>
//                                 </div>

//                                 {/* Email and Cart Section */}
//                                 <div className="flex gap-6 items-center text-gray-600">
//                                     {/* Email Info */}
//                                     <div className="flex items-center gap-2">
//                                         <MdEmail />
//                                         <p>smartfarming@gmail.com</p>
//                                     </div>

//                                     {/* Enhanced Cart Icon */}
//                                     <div className="relative group">
//                                         <Link
//                                             to="/dashboard/cart"
//                                             className="flex items-center gap-2 text-gray-700 hover:text-green-600 transition-all duration-300"
//                                         >
//                                             <div className="relative">
//                                                 <FaShoppingCart className="text-xl" />
//                                                 {cart.length > 0 && (
//                                                     <span className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center shadow-md">
//                                                         {cart.length}
//                                                     </span>
//                                                 )}
//                                             </div>
//                                             <span className="hidden sm:inline text-sm font-medium">Cart</span>
//                                         </Link>

//                                         {/* Tooltip on hover */}
//                                         {cart.length > 0 && (
//                                             <div className="absolute top-8 left-0 bg-white border border-gray-200 rounded-lg shadow-lg p-3 opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-300 z-20 w-48">
//                                                 <p className="text-xs text-gray-500">🛒 Items in cart:</p>
//                                                 <p className="text-sm font-semibold text-gray-800">{cart.length} item(s)</p>
//                                                 <Link
//                                                     to="/dashboard/cart"
//                                                     className="mt-2 inline-block text-center bg-lime-600 hover:bg-lime-700 text-white text-xs px-3 py-1 rounded-full transition"
//                                                 >
//                                                     View Cart
//                                                 </Link>
//                                             </div>
//                                         )}
//                                     </div>
//                                 </div>

//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default Top;

const Top = () => {
    const [cart] = useCart();

    return (
        <div className="bg-slate-50 border-b border-gray-200">
            <section className="drop-shadow">
                <div className="max-w-screen-xl mx-auto">
                    <div className="py-2 px-5">
                        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 gap-2">

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