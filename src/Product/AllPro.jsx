// import React from 'react';
// import useProduct from '../Hooks/useProduct';
// import ProductData from './ProductData';

// const AllPro = () => {
//     const [product, loading] = useProduct();

//     if (loading) return <p>Loading...</p>; // Prevent running .map on undefined

//     return (
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center px-6">
//             {
//                 product.map(data => <ProductData key={data._id} data={data} />)
//             }
//         </div>
//     );
// };

// export default AllPro;
import React, { useState } from 'react';
import useProduct from '../Hooks/useProduct';
import ProductData from './ProductData';

const AllPro = () => {
    const [product, loading] = useProduct();
    const [searchTerm, setSearchTerm] = useState('');

    if (loading) return <p className="text-center text-lg font-medium mt-10">Loading...</p>;

    // Filter products based on search input
    const filteredProducts = product.filter(p =>
        p.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="w-full px-4 py-12 bg-gradient-to-br from-green-50 to-green-100">
            {/* Search Bar */}
            <div className="max-w-md mx-auto mb-10">
                <input
                    type="text"
                    placeholder="Search product by name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-2 border-2 border-lime-600 rounded-full focus:outline-none focus:ring-2 focus:ring-lime-500"
                />
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {
                    filteredProducts.length > 0 ? (
                        filteredProducts.map(data => (
                            <ProductData key={data._id} data={data} />
                        ))
                    ) : (
                        <p className="col-span-full text-center text-gray-500">No products found.</p>
                    )
                }
            </div>
        </div>
    );
};

export default AllPro;
