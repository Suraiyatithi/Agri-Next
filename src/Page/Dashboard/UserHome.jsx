
import useAuth from "../../Hooks/useAuth";
import useCart from "../../Hooks/useCart";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaMoneyBillWave, FaUserCircle } from "react-icons/fa";

const UserHome = () => {
    const { user } = useAuth();
    const [cart] = useCart();

    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className="p-6">
            <div className="bg-gradient-to-r from-green-100 to-yellow-100 p-6 rounded-xl shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                    {
                        user?.photoURL ? (
                            <img
                                src={user.photoURL}
                                alt="User"
                                className="w-16 h-16 rounded-full shadow-lg"
                            />
                        ) : (
                            <FaUserCircle className="text-5xl text-gray-600" />
                        )
                    }
                    <div>
                        <h2 className="text-3xl font-bold text-green-800">
                            Hi, {user?.displayName || "Back"} 👋
                        </h2>
                        <p className="text-gray-600">Welcome to your dashboard</p>
                    </div>
                </div>
                <div className="flex gap-6 text-center">
                    <div className="bg-white p-4 rounded-lg shadow hover:scale-105 transition duration-300">
                        <FaShoppingCart className="text-2xl text-green-600 mx-auto mb-2" />
                        <p className="font-semibold">Cart Items</p>
                        <p className="text-lg">{cart.length}</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow hover:scale-105 transition duration-300">
                        <FaMoneyBillWave className="text-2xl text-yellow-600 mx-auto mb-2" />
                        <p className="font-semibold">Total</p>
                        <p className="text-lg">${totalPrice.toFixed(2)}</p>
                    </div>
                </div>
                <div>
                    {cart.length > 0 ? (
                        <Link to="/dashboard/cart">
                            <button className="btn bg-green-600 hover:bg-green-700 text-white shadow">
                                View Cart & Pay
                            </button>
                        </Link>
                    ) : (
                        <button className="btn btn-disabled">Cart is Empty</button>
                    )}
                </div>
            </div>

            <div className="mt-10">
                <h3 className="text-xl font-semibold text-gray-700 mb-3">What's Next?</h3>
                <ul className="list-disc pl-5 text-gray-600 space-y-1">
                    <li>Explore new products from the menu</li>
                    <li>Check your bookings and reservations</li>
                    <li>Add reviews for your recent purchases</li>
                    <li>Track your order history</li>
                </ul>
            </div>
        </div>
    );
};

export default UserHome;
