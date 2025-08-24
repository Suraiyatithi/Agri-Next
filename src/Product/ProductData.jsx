



// import React, { useState } from 'react';
// import Swal from "sweetalert2";
// import useAuth from '../Hooks/useAuth';
// import { useLocation, useNavigate } from "react-router-dom";
// import useAxiosSecure from '../Hooks/useAxiosSecure';
// import useCart from '../Hooks/useCart';
// import { useTranslation } from 'react-i18next';

// const ProductData = ({ data }) => {
//     const { t } = useTranslation();
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

//     const { user } = useAuth();
//     const navigate = useNavigate();
//     const location = useLocation();
//     const axiosSecure = useAxiosSecure();
//     const [, refetch] = useCart();

//     const [showModal, setShowModal] = useState(false);

//     const handleAddToCart = () => {
//         if (user && user.email) {
//             const cartItem = {
//                 menuId: _id,
//                 email: user.email,
//                 name: productName,
//                 image: productImage,
//                 price
//             };
//             axiosSecure.post('/carts', cartItem)
//                 .then(res => {
//                     if (res.data.insertedId) {
//                         Swal.fire({
//                             position: "top-end",
//                             icon: "success",
//                             title: `${productName} ${t("cartAdded")}`,
//                             showConfirmButton: false,
//                             timer: 1500
//                         });
//                         refetch();
//                     }
//                 });
//         } else {
        
//             Swal.fire({
//                 title: t("notLoggedIn"),
//                 text: t("pleaseLoginAddCart"),
//                 icon: "warning",
//                 showCancelButton: true,
//                 confirmButtonColor: "#80d630ff",
//                 cancelButtonColor: "#d33",
//                 confirmButtonText: t("yesLogin")
//             }).then((result) => {
//                 if (result.isConfirmed) {
//                     navigate('/login', { state: { from: location } });
//                 }
//             });
//         }
//     };

//     return (
//         <>
//             {/* Product Card */}
//             <div className="w-full max-w-sm mx-auto bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
//                 <figure className="overflow-hidden rounded-t-2xl">
//                     <img 
//                         src={productImage} 
//                         alt={productName} 
//                         className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300" 
//                     />
//                 </figure>
//                 <div className="p-6 text-center">
//                     <h2 className="text-xl font-semibold text-gray-800 uppercase mb-1">{productName}</h2>
//                     <p className="text-sm text-gray-500 mb-3">{t("by")} {authorName}</p>
//                     <div className="flex justify-center items-center space-x-3 text-sm mb-4">
//                         <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">{t("inStock")}: {availableQuantity}</span>
//                         <span className="text-yellow-600 font-bold text-lg">${price}</span>
//                     </div>
//                     <div className="text-sm text-gray-600 h-16 overflow-hidden mb-4">
//                         {description?.slice(0, 80)}...
//                     </div>
                    
//                     {/* Action Buttons */}
//                     <div className="flex justify-center gap-2">
//                         <button 
//                             onClick={handleAddToCart}
//                             className="px-5 py-2 rounded-full text-white font-semibold  bg-lime-800 hover:from-lime-600 hover:to-green-700 shadow-md hover:shadow-lg transition duration-300"
//                         >
//                             {t("addToCart")}
//                         </button>
//                         <button 
//                             onClick={() => setShowModal(true)}
//                             className="px-5 py-2 rounded-full text-lime-800 font-semibold  border-2 border-yellow-600 hover:from-blue-500 hover:to-blue-700 shadow-md hover:shadow-lg transition duration-300"
//                         >
//                             {t("viewDetails")}
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* Modal */}
//             {showModal && (
//                 <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50 z-50">
//                     <div className="bg-white rounded-lg max-w-lg w-full p-6 shadow-xl relative">
//                         {/* Close Button */}
//                         <button 
//                             onClick={() => setShowModal(false)}
//                             className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl"
//                         >
//                             ✖
//                         </button>

//                         {/* Product Details */}
//                         <img src={productImage} alt={productName} className="w-full h-64 object-cover rounded-lg mb-4"/>
//                         <h2 className="text-2xl font-bold mb-2">{productName}</h2>
//                         <p className="text-gray-500 mb-2">{t("by")} {authorName} | ⭐ {rating}</p>
//                         <p className="mb-4">{description}</p>
//                         <p className="mb-4"><strong>{t("category")}:</strong> {category}</p>
//                         <p className="mb-4"><strong>{t("price")}:</strong> ${price}</p>
//                         <p className="mb-4"><strong>{t("available")}:</strong> {availableQuantity}</p>

//                         <button 
//                             onClick={handleAddToCart}
//                             className="w-full px-5 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-emerald-800 to-lime-600 hover:from-lime-600 hover:to-green-700 shadow-md hover:shadow-lg transition duration-300"
//                         >
//                             {t("addToCart")}
//                         </button>
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// };

// export default ProductData;


import React, { useState } from 'react';
import Swal from "sweetalert2";
import useAuth from '../Hooks/useAuth';
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from '../Hooks/useAxiosSecure';
import useCart from '../Hooks/useCart';
import { useTranslation } from 'react-i18next';
import useRole from '../Hooks/useRole';

const ProductData = ({ data }) => {
    const { t } = useTranslation();
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

    const [showModal, setShowModal] = useState(false);

    // ✅ get role
    const [role, isRoleLoading] = useRole();

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
                            title: `${productName} ${t("cartAdded")}`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        refetch();
                    }
                });
        } else {
            Swal.fire({
                title: t("notLoggedIn"),
                text: t("pleaseLoginAddCart"),
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#80d630ff",
                cancelButtonColor: "#d33",
                confirmButtonText: t("yesLogin")
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } });
                }
            });
        }
    };

    // ✅ disable add to cart if role is seller or admin
    const isDisabled = role === "admin" || role === "seller";

    return (
        <>
            {/* Product Card */}
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
                    <p className="text-sm text-gray-500 mb-3">{t("by")} {authorName}</p>
                    <div className="flex justify-center items-center space-x-3 text-sm mb-4">
                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">{t("inStock")}: {availableQuantity}</span>
                        <span className="text-yellow-600 font-bold text-lg">${price}</span>
                    </div>
                    <div className="text-sm text-gray-600 h-16 overflow-hidden mb-4">
                        {description?.slice(0, 80)}...
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex justify-center gap-2">
                        <button 
                            onClick={handleAddToCart}
                            disabled={isDisabled || isRoleLoading}
                            className={`px-5 py-2 rounded-full text-white font-semibold shadow-md transition duration-300
                                ${isDisabled ? "bg-gray-400 cursor-not-allowed" : "bg-lime-800 hover:from-lime-600 hover:to-green-700 hover:shadow-lg"}
                            `}
                        >
                            {isDisabled ? t("notAllowed") : t("addToCart")}
                        </button>
                        <button 
                            onClick={() => setShowModal(true)}
                            className="px-5 py-2 rounded-full text-lime-800 font-semibold border-2 border-yellow-600 shadow-md hover:shadow-lg transition duration-300"
                        >
                            {t("viewDetails")}
                        </button>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50 z-50">
                    <div className="bg-white rounded-lg max-w-lg w-full p-6 shadow-xl relative">
                        {/* Close Button */}
                        <button 
                            onClick={() => setShowModal(false)}
                            className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl"
                        >
                            ✖
                        </button>

                        {/* Product Details */}
                        <img src={productImage} alt={productName} className="w-full h-64 object-cover rounded-lg mb-4"/>
                        <h2 className="text-2xl font-bold mb-2">{productName}</h2>
                        <p className="text-gray-500 mb-2">{t("by")} {authorName} | ⭐ {rating}</p>
                        <p className="mb-4">{description}</p>
                        <p className="mb-4"><strong>{t("category")}:</strong> {category}</p>
                        <p className="mb-4"><strong>{t("price")}:</strong> ${price}</p>
                        <p className="mb-4"><strong>{t("available")}:</strong> {availableQuantity}</p>

                        <button 
                            onClick={handleAddToCart}
                            disabled={isDisabled || isRoleLoading}
                            className={`w-full px-5 py-3 rounded-full text-white font-semibold shadow-md transition duration-300
                                ${isDisabled ? "bg-gray-400 cursor-not-allowed" : "bg-gradient-to-r from-emerald-800 to-lime-600 hover:from-lime-600 hover:to-green-700 hover:shadow-lg"}
                            `}
                        >
                            {isDisabled ? t("notAllowed") : t("addToCart")}
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProductData;
