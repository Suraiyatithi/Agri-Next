// import { useQuery } from '@tanstack/react-query';
// import useAxiosSecure from '../Hooks/useAxiosSecure';
// import img1 from '../assets/main-icon-leaf.png'

// const ReviewsSection = () => {
//   const axiosSecure = useAxiosSecure();

//   const { data: reviews = [], isLoading } = useQuery({
//     queryKey: ['reviews'],
//     queryFn: async () => {
//       const res = await axiosSecure.get('/reviews');
//       return res.data;
//     }
//   });

//   if (isLoading) {
//     return <div className="text-center text-green-600 font-semibold">Loading reviews...</div>;
//   }

//   return (
//     <div className="my-12 px-4">
                         
//       <div className="flex lg:ml-40 lg:pl-40">
                  
//       <h2 className=" text-lime-800 lg:text-4xl sm:text-xl text-right font-semibold mb-12 lg:ml-20">What Our Users Say</h2>
//      <img className="w-26 h-10" src={img1} alt="" />
//       </div>
//        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//         {reviews.slice(0, 6).map((review, idx) => (
//           <div key={idx} className="bg-white shadow-md rounded-xl p-4">
//             <div className="flex items-center gap-4 mb-2">
//               <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full object-cover" />
//               <div>
//                 <h4 className="font-semibold">{review.name}</h4>
//                 <p className="text-sm text-gray-500">Rating: ⭐ {review.rating}</p>
//               </div>
//             </div>
//             <p className="text-gray-700 italic">“{review.comment}”</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ReviewsSection;


import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import img1 from '../assets/main-icon-leaf.png';
import { useTranslation } from 'react-i18next';

const ReviewsSection = () => {
  const axiosSecure = useAxiosSecure();
  const { t } = useTranslation();

  const { data: reviews = [], isLoading } = useQuery({
    queryKey: ['reviews'],
    queryFn: async () => {
      const res = await axiosSecure.get('/reviews');
      return res.data;
    }
  });

  if (isLoading) {
    return (
      <div className="text-center text-green-600 font-semibold">
        {t('reviews.loading')}
      </div>
    );
  }

  return (
    <div className="my-12 px-4">
      <div className="flex lg:ml-40 lg:pl-40">
        <h2 className="text-lime-800 lg:text-4xl sm:text-xl text-right font-semibold mb-12 lg:ml-20">
          {t('reviews.heading')}
        </h2>
        <img className="w-26 h-10" src={img1} alt="" />
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {reviews.slice(0, 6).map((review, idx) => (
          <div key={idx} className="bg-white shadow-md rounded-xl p-4">
            <div className="flex items-center gap-4 mb-2">
              <img
                src={review.image}
                alt={review.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold">{review.name}</h4>
                <p className="text-sm text-gray-500">
                  {t('reviews.rating')}: ⭐ {review.rating}
                </p>
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
