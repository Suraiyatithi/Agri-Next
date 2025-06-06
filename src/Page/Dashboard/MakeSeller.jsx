import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { FaUserCheck, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const MakeSeller = () => {
    const axiosSecure = useAxiosSecure();

    const { data: requests = [], refetch } = useQuery({
        queryKey: ['sellerRequests'],
        queryFn: async () => {
            const res = await axiosSecure.get('/seller-requests');
            return res.data;
        }
    });

    const handleApprove = async (email, name) => {
        try {
            const res = await axiosSecure.patch(`/users/make-seller/${email}`);
            if (res.data.modifiedCount > 0) {
                // Remove the request from sellerRequests collection
                await axiosSecure.delete(`/seller-requests/${email}`);
                refetch();
                Swal.fire({
                    icon: "success",
                    title: `${name} is now a Seller!`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        } catch (err) {
            console.error(err);
            Swal.fire({
                icon: "error",
                title: "Oops!",
                text: "Failed to approve seller request.",
            });
        }
    };

    const handleReject = (email) => {
        Swal.fire({
            title: "Reject request?",
            text: "This will remove the seller request.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, reject it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/seller-requests/${email}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire("Deleted!", "Request has been removed.", "success");
                        }
                    });
            }
        });
    };

    return (
        <div>
            <div className="flex justify-evenly my-4">
                <h2 className="text-3xl">Seller Requests</h2>
                <h2 className="text-3xl">Total Requests: {requests.length}</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Approve</th>
                            <th>Reject</th>
                        </tr>
                    </thead>
                    <tbody>
                        {requests.map((req, index) => (
                            <tr key={req._id}>
                                <th>{index + 1}</th>
                                <td>{req.name}</td>
                                <td>{req.email}</td>
                                <td>
                                    <button
                                        onClick={() => handleApprove(req.email, req.name)}
                                        className="btn bg-green-500 text-white">
                                        <FaUserCheck />
                                    </button>
                                </td>
                                <td>
                                    <button
                                        onClick={() => handleReject(req.email)}
                                        className="btn btn-ghost text-red-600">
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

export default MakeSeller;
