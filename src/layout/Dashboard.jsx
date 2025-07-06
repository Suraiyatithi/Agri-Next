// // import { FaAd, FaCalendar, FaHome, FaList, FaSearch, FaShoppingCart } from "react-icons/fa";
// // import { NavLink, Outlet } from "react-router-dom";
// // import useCart from "../Hooks/useCart";


// // const Dashboard = () => {
// //     const [cart] = useCart();

// //     return (
// //         <div className="flex">
// //             {/* dashboard side bar */}
// //             <div className="w-64 min-h-screen bg-gradient-to-br from-green-100 to-yellow-200">
// //                 <ul className="menu p-4">
// //                     <li>
// //                         <NavLink to="/dashboard/userHome">
// //                             <FaHome></FaHome>
// //                             User Home</NavLink>
// //                     </li>
// //                     <li>
// //                         <NavLink to="/dashboard/reservation">
// //                             <FaCalendar></FaCalendar>
// //                             Reservation</NavLink>
// //                     </li>
// //                     <li>
// //                         <NavLink to="/dashboard/cart">
// //                             <FaShoppingCart></FaShoppingCart>
// //                             My Cart ({cart.length})</NavLink>
// //                     </li>
// //                     <li>
// //                         <NavLink to="/dashboard/review">
// //                             <FaAd></FaAd>
// //                             Add a Review</NavLink>
// //                     </li>
// //                     <li>
// //                         <NavLink to="/dashboard/bookings">
// //                             <FaList></FaList>
// //                             My Bookings</NavLink>
// //                     </li>
                   
// //                     <div className="divider"></div>
// //                     <li>
// //                         <NavLink to="/">
// //                             <FaHome></FaHome>
// //                             Home</NavLink>
// //                     </li>
// //                     <li>
// //                         <NavLink to="/order/salad">
// //                             <FaSearch></FaSearch>
// //                             Menu</NavLink>
// //                     </li>
// //                 </ul>
// //             </div>
// //             {/* dashboard content */}
// //             <div className="flex-1 p-8">
// //                 <Outlet></Outlet>
// //             </div>
// //         </div>
// //     );
// // };

// // export default Dashboard;

// import { FaAd, FaCalendar, FaHome, FaList, FaSearch, FaShoppingCart, FaUsers, FaUtensils, FaBook } from "react-icons/fa";
// import { NavLink, Outlet } from "react-router-dom";
// import useCart from "../Hooks/useCart";
// import useAdmin from "../Hooks/useAdmin"; // assuming this exists

// const Dashboard = () => {
//     const [cart] = useCart();
//     const [isAdmin] = useAdmin(); // returns true if user is an admin

//     return (
//         <div className="flex">
//             {/* Dashboard Sidebar */}
//             <div className="w-64 min-h-screen bg-gradient-to-br from-green-100 to-yellow-200">
//                 <ul className="menu p-4">
//                     {
//                         isAdmin ? (
//                             <>
//                                 <li>
//                                     <NavLink to="/dashboard/adminHome">
//                                         <FaHome />
//                                         Admin Home
//                                     </NavLink>
//                                 </li>
//                                 <li>
//                                     <NavLink to="/dashboard/addItems">
//                                         <FaUtensils />
//                                         Add Items
//                                     </NavLink>
//                                 </li>
//                                 <li>
//                                     <NavLink to="/dashboard/manageItems">
//                                         <FaList />
//                                         Manage Items
//                                     </NavLink>
//                                 </li>
                               
//                                 <li>
//                                     <NavLink to="/dashboard/makeseller">
//                                         <FaBook />
//                                         Manage Seller
//                                     </NavLink>
//                                 </li>
//                                 <li>
//                                     <NavLink to="/dashboard/users">
//                                         <FaUsers />
//                                         All Users
//                                     </NavLink>
//                                 </li>
//                             </>
//                         ) : (
//                             <>
//                                 <li>
//                                     <NavLink to="/dashboard/userHome">
//                                         <FaHome />
//                                         User Home
//                                     </NavLink>
//                                 </li>
//                                 <li>
//                                     <NavLink to="/dashboard/reservation">
//                                         <FaCalendar />
//                                         Reservation
//                                     </NavLink>
//                                 </li>
//                                 <li>
//                                     <NavLink to="/dashboard/cart">
//                                         <FaShoppingCart />
//                                         My Cart ({cart.length})
//                                     </NavLink>
//                                 </li>
//                                 <li>
//                                     <NavLink to="/dashboard/review">
//                                         <FaAd />
//                                         Add a Review
//                                     </NavLink>
//                                 </li>
//                                 <li>
//                                     <NavLink to="/dashboard/bookings">
//                                         <FaList />
//                                         My Bookings
//                                     </NavLink>
//                                 </li>
//                             </>
//                         )
//                     }

//                     {/* Common Links */}
//                     <div className="divider"></div>
//                     <li>
//                         <NavLink to="/">
//                             <FaHome />
//                             Home
//                         </NavLink>
//                     </li>
//                     <li>
//                         <NavLink to="/order/salad">
//                             <FaSearch />
//                             Menu
//                         </NavLink>
//                     </li>
//                 </ul>
//             </div>

//             {/* Dashboard Content */}
//             <div className="flex-1 p-8">
//                 <Outlet />
//             </div>
//         </div>
//     );
// };

// export default Dashboard;
import {
  FaAd, FaCalendar, FaHome, FaList, FaSearch, FaShoppingCart,
  FaUsers, FaUtensils, FaBook, FaBars
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";
import { useState } from "react";

const Dashboard = () => {
  const [cart] = useCart();
  const [isAdmin] = useAdmin();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const SidebarLinks = () => (
    <ul className="menu p-4 space-y-2">
      {isAdmin ? (
        <>
          <li><NavLink to="/dashboard/adminHome"><FaHome /> Admin Home</NavLink></li>
          <li><NavLink to="/dashboard/addItems"><FaUtensils /> Add Items</NavLink></li>
          <li><NavLink to="/dashboard/manageItems"><FaList /> Manage Items</NavLink></li>
          <li><NavLink to="/dashboard/makeseller"><FaBook /> Manage Seller</NavLink></li>
          <li><NavLink to="/dashboard/users"><FaUsers /> All Users</NavLink></li>
           <li><NavLink to="/dashboard/allpayment"><FaUsers /> All Payment</NavLink></li>
        </>
      ) : (
        <>
          <li><NavLink to="/dashboard/userHome"><FaHome /> User Home</NavLink></li>
          <li><NavLink to="/dashboard/reservation"><FaCalendar /> Reservation</NavLink></li>
          <li><NavLink to="/dashboard/cart"><FaShoppingCart /> My Cart ({cart.length})</NavLink></li>
          <li><NavLink to="/dashboard/review"><FaAd /> Add a Review</NavLink></li>
          <li><NavLink to="/dashboard/bookings"><FaList /> My Bookings</NavLink></li>
        </>
      )}
      <div className="divider" />
      <li><NavLink to="/"><FaHome /> Home</NavLink></li>
      <li><NavLink to="/order/salad"><FaSearch /> Menu</NavLink></li>
    </ul>
  );

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Mobile Menu Button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded-md shadow-md"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <FaBars className="text-green-700 text-xl" />
      </button>

      {/* Sidebar */}
      <div
        className={`
          bg-gradient-to-br from-green-100 to-yellow-200 
          w-64 min-h-screen p-4 z-40 transition-transform duration-300 ease-in-out
          fixed top-0 left-0 transform
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0 lg:relative lg:block
        `}
      >
        <SidebarLinks />
      </div>

      {/* Backdrop for mobile sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 p-4 mt-16 lg:mt-0 lg:p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;



