



import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { FaUserCheck, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const MakeSeller = () => {
  const axiosSecure = useAxiosSecure();

  const { data: requests = [], refetch } = useQuery({
    queryKey: ["sellerRequests"],
    queryFn: async () => {
      const res = await axiosSecure.get("/seller-requests");
      return res.data;
    },
  });

  const handleApprove = async (email, name) => {
    try {
      const res = await axiosSecure.patch(`/users/make-seller/${email}`);
      if (res.data.modifiedCount > 0) {
        await axiosSecure.delete(`/seller-requests/${email}`);
        refetch();
        Swal.fire({
          icon: "success",
          title: `${name} is now a Seller!`,
          showConfirmButton: false,
          timer: 1500,
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
        axiosSecure.delete(`/seller-requests/${email}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire("Deleted!", "Request has been removed.", "success");
          }
        });
      }
    });
  };

  return (
    <div className="px-4 py-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold">Seller Requests</h2>
        <h2 className="text-lg md:text-xl text-gray-600">Total: {requests.length}</h2>
      </div>

      <div className="overflow-x-auto bg-white shadow rounded-lg">
        <table className="table w-full table-zebra text-sm md:text-base">
          <thead className="bg-green-100 text-gray-700">
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
                <td>{index + 1}</td>
                <td>{req.name}</td>
                <td>{req.email}</td>
                <td>
                  <button
                    onClick={() => handleApprove(req.email, req.name)}
                    className="btn btn-sm bg-green-500 hover:bg-green-600 text-white"
                  >
                    <FaUserCheck />
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleReject(req.email)}
                    className="btn btn-sm btn-outline btn-error"
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
            {requests.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center py-6 text-gray-500">
                  No seller requests found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MakeSeller;
