// import React from 'react';

// const ProductData = ({ data }) => {
//     const {
//         availableQuantity,
//         description,
//         productImage,
//         price,
//         authorEmail,
//         authorName,
//         rating,
//         productName,
//         category,
//         _id
//     } = data;

//     return (
//         <div className="w-full max-w-sm mx-auto bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
//             <figure className="overflow-hidden rounded-t-2xl">
//                 <img 
//                     src={productImage} 
//                     alt={productName} 
//                     className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300" 
//                 />
//             </figure>
//             <div className="p-6 text-center">
//                 <h2 className="text-xl font-semibold text-gray-800 uppercase mb-1">{productName}</h2>
//                 <p className="text-sm text-gray-500 mb-3">By: {authorName}</p>
//                 <div className="flex justify-center items-center space-x-3 text-sm mb-4">
//                     <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">In Stock: {availableQuantity}</span>
//                     <span className="text-yellow-600 font-bold text-lg">${price}</span>
//                 </div>
//                 <div className="text-sm text-gray-600 h-16 overflow-hidden mb-4">
//                     {description?.slice(0, 80)}...
//                 </div>
//                 <div className="card-actions">
//                     <button className="px-5 py-2 rounded-full text-white font-medium bg-gradient-to-r from-yellow-400 via-yellow-500 to-lime-600 hover:brightness-110 transition">
//                         Select
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProductData;
import React from 'react';
import Swal from "sweetalert2";
import useAuth from '../Hooks/useAuth';
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from '../Hooks/useAxiosSecure';
import useCart from '../Hooks/useCart';

const ProductData = ({ data }) => {
    const {
        availableQuantity,
        description,
        productImage,
        price,
        authorEmail,
        authorName,
        rating,
        productName,
        category,
        _id
    } = data;

    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();

    const handleAddToCart = () => {
        if (user && user.email) {
            const cartItem = {
                menuId: _id,
                email: user.email,
                name: productName,
                image: productImage,
                price
            };
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${productName} added to your cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        refetch();
                    }
                });
        } else {
            Swal.fire({
                title: "You are not Logged In",
                text: "Please login to add to the cart?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } });
                }
            });
        }
    };

    return (
        <div className="w-full max-w-sm mx-auto bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <figure className="overflow-hidden rounded-t-2xl">
                <img 
                    src={productImage} 
                    alt={productName} 
                    className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300" 
                />
            </figure>
            <div className="p-6 text-center">
                <h2 className="text-xl font-semibold text-gray-800 uppercase mb-1">{productName}</h2>
                <p className="text-sm text-gray-500 mb-3">By: {authorName}</p>
                <div className="flex justify-center items-center space-x-3 text-sm mb-4">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">In Stock: {availableQuantity}</span>
                    <span className="text-yellow-600 font-bold text-lg">${price}</span>
                </div>
                <div className="text-sm text-gray-600 h-16 overflow-hidden mb-4">
                    {description?.slice(0, 80)}...
                </div>
                <div className="card-actions">
                    <button 
                        onClick={handleAddToCart}
                        className="px-5 py-2 rounded-full text-white font-medium bg-gradient-to-r from-yellow-400 via-yellow-500 to-lime-600 hover:brightness-110 transition"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductData;
