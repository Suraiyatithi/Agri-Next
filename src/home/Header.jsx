

// import React, { useContext } from 'react';
import logo from '../assets/Agrinext-logo2.png';
import { FaHome, FaLeaf, FaShoppingCart, FaUser, FaTags, FaBlog } from 'react-icons/fa';
import { MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import Swal from 'sweetalert2';
import useRole from '../Hooks/useRole';

// const Header = () => {
//     const { user, logOut } = useContext(AuthContext);
//     const [role] = useRole(); // 'admin', 'seller', or 'user'
//     const navigate = useNavigate();

//     const handleLogOut = () => {
//         logOut()
//             .then(() => {})
//             .catch(error => console.log(error));
//     };

//     // Dynamic dashboard route
//     const dashboardLink =
//         role === 'admin' ? '/dashboard/adminHome' :
//         role === 'seller' ? '/dashboard/userHome' :
//         '/dashboard/userHome';

//     // Add Items button handler
//     const handleAddItemClick = () => {
//         if (role === 'admin' || role === 'seller') {
//             navigate('/dashboard/addItems');
//         } else {
//             Swal.fire({
//                 title: 'Become a Seller',
//                 text: 'You are not a seller. Do you want to send a request?',
//                 icon: 'question',
//                 showCancelButton: true,
//                 confirmButtonText: 'Yes, request it!',
//                 cancelButtonText: 'Cancel'
//             }).then((result) => {
//                 if (result.isConfirmed) {
//                     fetch('http://localhost:5000/seller-requests', {
//                         method: 'POST',
//                         headers: { 'Content-Type': 'application/json' },
//                         body: JSON.stringify({
//                             email: user.email,
//                             name: user.displayName,
//                             role: 'pending',
//                         }),
//                     })
//                     .then(res => res.json())
//                     .then(data => {
//                         if (data.insertedId) {
//                             Swal.fire('Requested!', 'Your request has been sent.', 'success');
//                         } else {
//                             Swal.fire('Oops!', 'Request already sent or an error occurred.', 'error');
//                         }
//                     });
//                 }
//             });
//         }
//     };

//     return (
//         <div className='bg-slate-50 shadow-md sticky top-0 z-50 '>
//             <section className='py-4'>
//                 <div className='container mx-auto px-5'>
//                     <div className='flex flex-wrap justify-between items-center'>

//                         {/* Logo */}
//                         <Link to="/">
//                             <img src={logo} className='w-56 h-24 -mb-4' alt="AgriNext Logo" />
//                         </Link>

//                         {/* Navigation Menu */}
//                         <ul className='flex gap-10 items-center text-gray-700 font-medium text-lg'>

//                             <li className='flex items-center gap-2 hover:text-lime-600'>
//                                 <FaHome />
//                                 <Link to="/">Home</Link>
//                             </li>

//                             <li className='flex items-center gap-2 hover:text-lime-600'>
//                                 <FaLeaf />
//                                 <Link to="/feature">Feature</Link>
//                             </li>

//                             <li className='flex items-center gap-2 hover:text-lime-600'>
//                                 <MdOutlineProductionQuantityLimits />
//                                 <Link to="/products">Products</Link>
//                             </li>

//                             <li className='flex items-center gap-2 hover:text-lime-600'>
//                                 <FaTags />
//                                 <Link to="/offer">Offer</Link>
//                             </li>

//                             <li className='flex items-center gap-2 hover:text-lime-600'>
//                                 <FaBlog />
//                                 <Link to="/blog">Blog</Link>
//                             </li>

//                             <li
//                                 className='flex items-center gap-2 hover:text-lime-600 cursor-pointer'
//                                 onClick={handleAddItemClick}
//                             >
//                                 <FaShoppingCart />
//                                 <span>Add Items</span>
//                             </li>
//                         </ul>

//                         {/* User Info / Login */}
//                         {
//                             user ? (
//                                 <div className="flex items-center gap-4">
//                                     {user.photoURL && (
//                                         <Link to={dashboardLink}>
//                                             <img
//                                                 src={user.photoURL}
//                                                 alt="User"
//                                                 className="w-10 h-10 rounded-full border-2 border-lime-800 hover:opacity-80"
//                                             />
//                                         </Link>
//                                     )}
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


// ... other imports
import React, { useContext, useState } from 'react';
const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const [role] = useRole();
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLogOut = () => {
        logOut().catch(error => console.log(error));
    };

    const dashboardLink = role === 'admin' ? '/dashboard/adminHome' : '/dashboard/userHome';

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
                    }).then(res => res.json()).then(data => {
                        if (data.insertedId) {
                            Swal.fire('Requested!', 'Your request has been sent.', 'success');
                        } else {
                            Swal.fire('Oops!', 'Request already sent or error occurred.', 'error');
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
                    <div className='flex justify-between items-center'>

                        {/* Logo */}
                        <Link to="/">
                            <img src={logo} className='w-40 md:w-56 h-20 -mb-2' alt="AgriNext Logo" />
                        </Link>

                        {/* Hamburger for Mobile */}
                        <div className="md:hidden">
                            <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700 focus:outline-none">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    {menuOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    )}
                                </svg>
                            </button>
                        </div>

                        {/* Main Menu */}
                        <ul className={`md:flex gap-6 text-gray-700 font-medium text-base items-center ${menuOpen ? 'block mt-4' : 'hidden'} md:mt-0 md:block`}>
                            <li className='flex items-center gap-2 hover:text-lime-600'><FaHome /><Link to="/">Home</Link></li>
                            <li className='flex items-center gap-2 hover:text-lime-600'><FaLeaf /><Link to="/feature">Feature</Link></li>
                            <li className='flex items-center gap-2 hover:text-lime-600'><MdOutlineProductionQuantityLimits /><Link to="/products">Products</Link></li>
                            <li className='flex items-center gap-2 hover:text-lime-600'><FaTags /><Link to="/offer">Offer</Link></li>
                            <li className='flex items-center gap-2 hover:text-lime-600'><FaBlog /><Link to="/blog">Blog</Link></li>
                            <li className='flex items-center gap-2 hover:text-lime-600 cursor-pointer' onClick={handleAddItemClick}><FaShoppingCart /><span>Add Items</span></li>
                        </ul>

                        {/* Auth Info */}
                        <div className='hidden md:flex items-center gap-4'>
                            {
                                user ? (
                                    <>
                                        {user.photoURL && (
                                            <Link to={dashboardLink}>
                                                <img src={user.photoURL} alt="User" className="w-10 h-10 rounded-full border-2 border-lime-800 hover:opacity-80" />
                                            </Link>
                                        )}
                                        <button
                                            onClick={handleLogOut}
                                            className="border-2 rounded-full px-4 py-1 font-medium text-sm border-lime-800 hover:text-lime-600"
                                        >
                                            Logout
                                        </button>
                                    </>
                                ) : (
                                    <Link to="/login" className="flex items-center border-2 text-sm rounded-full px-4 py-1 border-lime-800 gap-2 hover:text-lime-600">
                                        <FaUser />
                                        LogIn
                                    </Link>
                                )
                            }
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default Header;