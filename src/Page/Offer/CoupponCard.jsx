import React from 'react';

const CouponCard = () => {
  return (
    <div className="border-2 border-dashed border-amber-400 p-6 rounded-xl bg-yellow-50 text-center shadow-md mb-8">
      <h2 className="text-xl font-bold text-amber-600 mb-2">🎉 Use Code: <span className="bg-amber-200 px-2 py-1 rounded">AGRI20</span></h2>
      <p className="text-sm text-gray-700">Get an extra 20% off on your first purchase!</p>
      <button className="mt-4 bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded shadow">
        Apply Coupon
      </button>
    </div>
  );
};

export default CouponCard;
