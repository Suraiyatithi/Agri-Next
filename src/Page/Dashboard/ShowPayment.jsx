import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure"; 

const ShowPayment = () => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure.get("/payments")
      .then((res) => {
        setPayments(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching payments:", err);
        setLoading(false);
      });
  }, [axiosSecure]);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-semibold text-green-700 mb-6 text-center">
        💳 All Payment Records
      </h2>

      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-green-500"></div>
        </div>
      ) : (
        <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-green-100 text-green-900">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold">#</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Email</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Price</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Transaction ID</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Date</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Items</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {payments.map((payment, index) => (
                <tr key={payment._id} className="hover:bg-green-50">
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">{payment.email}</td>
                  <td className="px-4 py-2">${payment.price?.toFixed(2)}</td>
                  <td className="px-4 py-2 text-xs text-gray-700 break-all">
                    {payment.transactionId || "N/A"}
                  </td>
                  <td className="px-4 py-2">
                    {new Date(payment.date).toLocaleString()}
                  </td>
                  <td className="px-4 py-2">
                    <span className="inline-block bg-green-100 text-green-800 px-2 py-1 text-xs rounded">
                      {payment.cartIds?.length || 0} item(s)
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ShowPayment;
