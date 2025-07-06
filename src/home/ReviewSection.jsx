import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../Hooks/useAxiosSecure';

const ReviewsSection = () => {
  const axiosSecure = useAxiosSecure();

  const { data: reviews = [], isLoading } = useQuery({
    queryKey: ['reviews'],
    queryFn: async () => {
      const res = await axiosSecure.get('/reviews');
      return res.data;
    }
  });

  if (isLoading) {
    return <div className="text-center text-green-600 font-semibold">Loading reviews...</div>;
  }

  return (
    <div className="my-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-6">What Our Users Say</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {reviews.slice(0, 6).map((review, idx) => (
          <div key={idx} className="bg-white shadow-md rounded-xl p-4">
            <div className="flex items-center gap-4 mb-2">
              <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full object-cover" />
              <div>
                <h4 className="font-semibold">{review.name}</h4>
                <p className="text-sm text-gray-500">Rating: ⭐ {review.rating}</p>
              </div>
            </div>
            <p className="text-gray-700 italic">“{review.comment}”</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsSection;
