
// import React, { useContext } from 'react';
// import logo from '../assets/Agrinext-logo2.png';
// import { FaHome, FaLeaf, FaShoppingCart, FaUser, FaTags, FaBlog } from 'react-icons/fa';
// import { MdOutlineProductionQuantityLimits } from 'react-icons/md';
// import { Link } from 'react-router-dom';
// import { AuthContext } from '../Providers/AuthProvider';
// import useAdmin from '../Hooks/useAdmin';

// const Header = () => {
//     const { user, logOut } = useContext(AuthContext);
//     const [isAdmin] = useAdmin();

//     const handleLogOut = () => {
//         logOut()
//             .then(() => {})
//             .catch(error => console.log(error));
//     };

//     const dashboardLink = isAdmin ? '/dashboard/adminHome' : '/dashboard/userHome';

//     return (
//         <div className='bg-slate-50 shadow-md sticky top-0 z-50'>
//             <section className='py-4'>
//                 <div className='container mx-auto px-5'>
//                     <div className='flex flex-wrap justify-between items-center'>

//                         {/* Logo */}
//                         <Link to="/">
//                             <img src={logo} className='w-56 h-24 -mb-4' alt="AgriNext Logo" />
//                         </Link>

//                         {/* Navigation Menu */}
//                         <ul className='flex gap-10 items-center text-gray-700 font-medium text-lg'>
//                             <li className='flex items-center gap-2 hover:text-lime-600 cursor-pointer'>
//                                 <FaHome />
//                                 <Link to="/">Home</Link>
//                             </li>
//                             <li className='flex items-center gap-2 hover:text-lime-600 cursor-pointer'>
//                                 <FaLeaf />
//                                 <Link to="/feature">Feature</Link>
//                             </li>
//                             <li className='flex items-center gap-2 hover:text-lime-600 cursor-pointer'>
//                                 <MdOutlineProductionQuantityLimits />
//                                 <Link to="/products">Products</Link>
//                             </li>
//                             <li className='flex items-center gap-2 hover:text-lime-600 cursor-pointer'>
//                                 <FaTags />
//                                 <Link to="/offer">Offer</Link>
//                             </li>
//                             <li className='flex items-center gap-2 hover:text-lime-600 cursor-pointer'>
//                                 <FaBlog />
//                                 <span>Blog</span>
//                             </li>
//                         </ul>

//                         {/* User Info / Login */}
//                         {
//                             user ? (
//                                 <div className="flex items-center gap-4">
//                                     {/* User Photo (Linked to Dashboard) */}
//                                     {
//                                         user.photoURL && (
//                                             <Link to={dashboardLink}>
//                                                 <img
//                                                     src={user.photoURL}
//                                                     alt="User"
//                                                     className="w-10 h-10 rounded-full border-2 border-lime-800 hover:opacity-80"
//                                                 />
//                                             </Link>
//                                         )
//                                     }
//                                     {/* Logout Button */}
//                                     <button
//                                         onClick={handleLogOut}
//                                         className="border-2 rounded-full px-4 py-2 font-medium text-lg border-lime-800 hover:text-lime-600"
//                                     >
//                                         Logout
//                                     </button>
//                                 </div>
//                             ) : (
//                                 <div className="flex border-2 font-medium text-lg rounded-full px-4 py-2 border-lime-800 items-center gap-2 cursor-pointer hover:text-lime-600">
//                                     <FaUser />
//                                     <Link to="/login">LogIn</Link>
//                                 </div>
//                             )
//                         }
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default Header;

import React, { useContext } from 'react';
import logo from '../assets/Agrinext-logo2.png';
import { FaHome, FaLeaf, FaShoppingCart, FaUser, FaTags, FaBlog } from 'react-icons/fa';
import { MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import Swal from 'sweetalert2';
import useRole from '../Hooks/useRole';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const [role] = useRole(); // 'admin', 'seller', or 'user'
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => {})
            .catch(error => console.log(error));
    };

    // Dynamic dashboard route
    const dashboardLink =
        role === 'admin' ? '/dashboard/adminHome' :
        role === 'seller' ? '/dashboard/userHome' :
        '/dashboard/userHome';

    // Add Items button handler
    const handleAddItemClick = () => {
        if (role === 'admin' || role === 'seller') {
            navigate('/dashboard/addItems');
        } else {
            Swal.fire({
                title: 'Become a Seller',
                text: 'You are not a seller. Do you want to send a request?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonText: 'Yes, request it!',
                cancelButtonText: 'Cancel'
            }).then((result) => {
                if (result.isConfirmed) {
                    fetch('http://localhost:5000/seller-requests', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            email: user.email,
                            name: user.displayName,
                            role: 'pending',
                        }),
                    })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            Swal.fire('Requested!', 'Your request has been sent.', 'success');
                        } else {
                            Swal.fire('Oops!', 'Request already sent or an error occurred.', 'error');
                        }
                    });
                }
            });
        }
    };

    return (
        <div className='bg-slate-50 shadow-md sticky top-0 z-50'>
            <section className='py-4'>
                <div className='container mx-auto px-5'>
                    <div className='flex flex-wrap justify-between items-center'>

                        {/* Logo */}
                        <Link to="/">
                            <img src={logo} className='w-56 h-24 -mb-4' alt="AgriNext Logo" />
                        </Link>

                        {/* Navigation Menu */}
                        <ul className='flex gap-10 items-center text-gray-700 font-medium text-lg'>

                            <li className='flex items-center gap-2 hover:text-lime-600'>
                                <FaHome />
                                <Link to="/">Home</Link>
                            </li>

                            <li className='flex items-center gap-2 hover:text-lime-600'>
                                <FaLeaf />
                                <Link to="/feature">Feature</Link>
                            </li>

                            <li className='flex items-center gap-2 hover:text-lime-600'>
                                <MdOutlineProductionQuantityLimits />
                                <Link to="/products">Products</Link>
                            </li>

                            <li className='flex items-center gap-2 hover:text-lime-600'>
                                <FaTags />
                                <Link to="/offer">Offer</Link>
                            </li>

                            <li className='flex items-center gap-2 hover:text-lime-600'>
                                <FaBlog />
                                <Link to="/blog">Blog</Link>
                            </li>

                            <li
                                className='flex items-center gap-2 hover:text-lime-600 cursor-pointer'
                                onClick={handleAddItemClick}
                            >
                                <FaShoppingCart />
                                <span>Add Items</span>
                            </li>
                        </ul>

                        {/* User Info / Login */}
                        {
                            user ? (
                                <div className="flex items-center gap-4">
                                    {user.photoURL && (
                                        <Link to={dashboardLink}>
                                            <img
                                                src={user.photoURL}
                                                alt="User"
                                                className="w-10 h-10 rounded-full border-2 border-lime-800 hover:opacity-80"
                                            />
                                        </Link>
                                    )}
                                    <button
                                        onClick={handleLogOut}
                                        className="border-2 rounded-full px-4 py-2 font-medium text-lg border-lime-800 hover:text-lime-600"
                                    >
                                        Logout
                                    </button>
                                </div>
                            ) : (
                                <div className="flex border-2 font-medium text-lg rounded-full px-4 py-2 border-lime-800 items-center gap-2 cursor-pointer hover:text-lime-600">
                                    <FaUser />
                                    <Link to="/login">LogIn</Link>
                                </div>
                            )
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Header;

