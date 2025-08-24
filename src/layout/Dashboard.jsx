



import {
  FaAd, FaCalendar, FaHome, FaList, FaSearch, FaShoppingCart,
  FaUsers, FaUtensils, FaBook, FaBars
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";
import useRole from "../Hooks/useRole";
import { useState } from "react";

const Dashboard = () => {
  const [cart] = useCart();
  const [role, isRoleLoading] = useRole();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const SidebarLinks = () => (
    <ul className="menu p-4 space-y-2">
      {isRoleLoading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : role === 'admin' ? (
        <>
          <li><NavLink to="/dashboard/adminHome"><FaHome /> Admin Home</NavLink></li>
          <li><NavLink to="/dashboard/addItems"><FaUtensils /> Add Items</NavLink></li>
          <li><NavLink to="/dashboard/manageItems"><FaList /> Manage Items</NavLink></li>
          <li><NavLink to="/dashboard/makeseller"><FaBook /> Manage Seller</NavLink></li>
          <li><NavLink to="/dashboard/users"><FaUsers /> All Users</NavLink></li>
          <li><NavLink to="/dashboard/allpayment"><FaUsers /> All Payment</NavLink></li>
        </>
      ) : role === 'seller' ? (
        <>
          <li><NavLink to="/dashboard/userHome"><FaHome /> Seller Home</NavLink></li>
          <li><NavLink to="/dashboard/seller-product"><FaList /> My Products</NavLink></li>
          <li><NavLink to="/dashboard/addItems"><FaUtensils /> Add New Product</NavLink></li>
          {/* Optional: include user features for sellers too */}
          {/* <li><NavLink to="/dashboard/cart"><FaShoppingCart /> My Cart ({cart.length})</NavLink></li> */}
          <li><NavLink to="/dashboard/persons"><FaList /> My updates</NavLink></li>
        </>
      ) : (
        <>
          <li><NavLink to="/dashboard/userHome"><FaHome /> User Home</NavLink></li>
          {/* <li><NavLink to="/dashboard/reservation"><FaCalendar /> Reservation</NavLink></li> */}
          <li><NavLink to="/dashboard/cart"><FaShoppingCart /> My Cart ({cart.length})</NavLink></li>
          <li><NavLink to="/dashboard/review"><FaAd /> Add a Review</NavLink></li>
          <li><NavLink to="/dashboard/persons"><FaList />My notes</NavLink></li>
        </>
      )}
      
      {/* Common Links */}
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


