import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../Hooks/useAxiosSecure'; 
import useAuth from '../../Hooks/useAuth';

const SellerProducts = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: sellerProducts = [], isLoading, error } = useQuery({
    queryKey: ['seller-products', user?.email],
    enabled: !!user?.email, // ensure email is available before firing query
    queryFn: async () => {
      const res = await axiosSecure.get(`/seller-products?email=${user.email}`);
      return res.data;
    }
  });

  if (isLoading) return <div className="text-center text-lg font-semibold mt-10">Loading your products...</div>;
  if (error) return <div className="text-center text-red-500">Something went wrong while loading products.</div>;

  return (
    <div className="p-4 md:p-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-green-700">My Listed Products</h2>
      {sellerProducts.length === 0 ? (
        <p className="text-center text-gray-500">You haven't added any products yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sellerProducts.map(product => (
            <div
              key={product._id}
              className="bg-white shadow-lg rounded-xl overflow-hidden border hover:shadow-xl transition duration-300"
            >
              <img
                src={product.productImage}
                alt={product.productName}
                className="h-48 w-full object-cover"
              />
              <div className="p-4 space-y-2">
                <h3 className="text-xl font-semibold text-gray-800">{product.productName}</h3>
                <p className="text-sm text-gray-600">{product.description?.slice(0, 80)}...</p>
                <div className="text-sm text-gray-700">Category: {product.category}</div>
                <div className="text-sm text-gray-700">Available: {product.availableQuantity}</div>
                <div className="flex justify-between items-center mt-2">
                  <span className="font-bold text-green-600">${product.price}</span>
                  <span className="text-yellow-500 font-medium">⭐ {product.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SellerProducts;
