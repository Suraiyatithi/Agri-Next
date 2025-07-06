import React from 'react';

const featuredOffers = [
  {
    id: 1,
    title: "Organic Tomato Seeds",
    image: "https://i.ibb.co/8GB9CWC/download.jpg",
    price: 120,
    discount: 30,
  },
  {
    id: 2,
    title: "Bio Fertilizer Pack",
    image: "https://i.ibb.co/sddWQ06v/download.jpg",
    price: 500,
    discount: 20,
  },
];

const FeaturedDeals = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6 mb-8">
      {featuredOffers.map(offer => (
        <div key={offer.id} className="border rounded-xl shadow hover:shadow-lg transition duration-300 overflow-hidden">
          <img src={offer.image} alt={offer.title} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-bold text-green-800">{offer.title}</h3>
            <p className="text-sm mt-1 text-gray-600 line-through">৳{offer.price}</p>
            <p className="text-lg font-semibold text-lime-600">Now ৳{offer.price - (offer.price * offer.discount) / 100}</p>
            <button className="mt-3 bg-lime-500 text-white px-4 py-1 rounded hover:bg-lime-600">Grab Deal</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedDeals;
