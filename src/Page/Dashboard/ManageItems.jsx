


import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import useProduct from "../../Hooks/useProduct";

const ManageItems = () => {
    const [product, , refetch] = useProduct();
    const axiosSecure = useAxiosSecure();

    const handleDeleteItem = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/product/${item._id}`);
                if (res.data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${item.productName} has been deleted`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }
        });
    };

    return (
        <div className="px-4 md:px-8 py-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-green-700">Manage Products</h2>
            <div className="overflow-x-auto rounded-lg shadow-md bg-white">
                <table className="table w-full text-sm md:text-base">
                    <thead className="bg-green-100 text-green-700 uppercase text-xs md:text-sm">
                        <tr>
                            <th className="p-4 text-left">#</th>
                            <th className="p-4 text-left">Image</th>
                            <th className="p-4 text-left">Product Name</th>
                            <th className="p-4 text-left">Price</th>
                            <th className="p-4 text-center">Update</th>
                            <th className="p-4 text-center">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {product.map((item, index) => (
                            <tr key={item._id} className="hover:bg-gray-100 border-b">
                                <td className="p-4">{index + 1}</td>
                                <td className="p-4">
                                    <div className="flex items-center">
                                        <div className="w-12 h-12 rounded-lg overflow-hidden">
                                            <img
                                                src={item.productImage}
                                                alt="Product"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                </td>
                                <td className="p-4">{item.productName}</td>
                                <td className="p-4 text-green-600 font-medium">${item.price.toFixed(2)}</td>
                                <td className="p-4 text-center">
                                    <Link to={`/dashboard/updateItem/${item._id}`}>
                                        <button className="btn bg-orange-500 text-white hover:bg-orange-600 btn-sm">
                                            <FaEdit />
                                        </button>
                                    </Link>
                                </td>
                                <td className="p-4 text-center">
                                    <button
                                        onClick={() => handleDeleteItem(item)}
                                        className="btn bg-red-500 text-white hover:bg-red-600 btn-sm"
                                    >
                                        <FaTrashAlt />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageItems;

