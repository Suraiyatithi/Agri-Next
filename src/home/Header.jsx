// import React from 'react';
// import logo from '../assets/Agrinext-logo2.png';

// const Header = () => {
//     return (
//         <div className='bg-slate-50 '>
//             {/* bg-slate-50 */}
//            <section className=' pb-6'>
//             <div className='container mx-auto px-5'>
//                 <div>
//                     <div className='flex flex-wrap justify-between items-center'>
//                         {/* <Link
//                         to="/"
//                         className=' '>
//                             <img 
//                             className='w-[250px]'
//                             src={logo} alt="" /> */}
//                         {/* // </Link> */}
//                        <img src={logo} className='w-56 h-24 -mb-6' alt="" />
//                         <div className=''>
//                             <ul className='flex gap-8 text-gray-500'>
//                                 <li>Home</li>
//                                 <li>Feature</li>
//                                 <li>Products</li>
//                                 <li>Offer</li>
//                                 <li>Blog</li>
//                             </ul>
//                         </div>

//                         <div className='flex gap-5 items-center text-gray-500'>
//                             <div>
//                                {/* // <FaCartShopping/> */}
//                                <p>Cart</p>
//                             </div>
                           
//                             <div>
//                                 <p className=''><span>items</span> <span className='text-gray-800 font-semibold'>$150.00</span></p>
//                             </div>
//                         </div>

//                     </div>
//                 </div>
//             </div>
            
//         </section>
//         </div>
//     );
// };

// export default Header;



import React from 'react';
import logo from '../assets/Agrinext-logo2.png';
import { FaHome, FaLeaf, FaShoppingCart,FaUser, FaTags, FaBlog } from 'react-icons/fa';
import { MdOutlineProductionQuantityLimits } from 'react-icons/md';

const Header = () => {
    return (
        <div className='bg-slate-50 shadow-md sticky top-0 z-50'>
            <section className='py-4'>
                <div className='container mx-auto px-5'>
                    <div className='flex flex-wrap justify-between items-center'>

                        {/* Logo */}
                        <img src={logo} className='w-56 h-24 -mb-4' alt="AgriNext Logo" />

                        {/* Navigation Menu */}
                        <ul className='flex gap-10 items-center text-gray-700 font-medium text-lg'>
                            <li className='flex items-center gap-2 hover:text-lime-600 cursor-pointer'>
                                <FaHome /> Home
                            </li>
                            <li className='flex items-center gap-2 hover:text-lime-600 cursor-pointer'>
                                <FaLeaf /> Feature
                            </li>
                            <li className='flex items-center gap-2 hover:text-lime-600 cursor-pointer'>
                                <MdOutlineProductionQuantityLimits /> Products
                            </li>
                            <li className='flex items-center gap-2 hover:text-lime-600 cursor-pointer'>
                                <FaTags /> Offer
                            </li>
                            <li className='flex items-center gap-2 hover:text-lime-600 cursor-pointer'>
                                <FaBlog /> Blog
                            </li>
                        </ul>

                        {/* Cart Summary */}
                        {/* <div className='flex gap-4 items-center text-gray-700'>
                            <div className='flex items-center gap-2 hover:text-lime-600 cursor-pointer'>
                                <FaShoppingCart className="text-xl" />
                                <p>Cart</p>
                            </div>
                            <div className='text-sm'>
                                <p>
                                    <span className='text-gray-500'>3 items</span> &nbsp;
                                    <span className='text-gray-800 font-semibold'>$150.00</span>
                                </p>
                            </div> */}
                              <div className="flex border-2 font-medium text-lg rounded-full px-4 py-2 border-yellow-700 items-center gap-2 cursor-pointer hover:text-lime-600">
                                                                    <FaUser />
                                                                    <p>Login</p>
                                                                </div>
                        {/* </div> */}

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Header;




