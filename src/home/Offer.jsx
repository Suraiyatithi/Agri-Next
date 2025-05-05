// import React from 'react';

// const offers = [
//     {
//         image: 'https://i.ibb.co.com/WWFbqGxB/pexels-photo-2933243.jpg',
//         logo: 'https://i.ibb.co.com/S73CRY5G/download.png',
//         text: 'Smart Irrigation Solutions',
//         des:'Farming product such as tractor ,irrigation product,motor,seeds,fertilizsers etc are available for the farmers so that farmers can buy those product and can easily use it to their farm',
//     },
//     {
//         image: 'https://i.ibb.co.com/VpzzVMcL/pexels-photo-2252584.jpg',
//         logo: 'https://i.ibb.co.com/FkLZ0p7D/download.jpg',
//         text: 'Fresh Fruits and Vegetable',
//         des:'Our farmaer producing healthy fruits and vegetables ,so all the vegetables here you will get is totally healthy and fresh .Also the fruits and vegetables are also available to sell in the shop .'
//     },
//     {
//         image: 'https://i.ibb.co.com/d0KJdBZk/bull-calf-heifer-ko-162240.jpg',
//         logo: 'https://i.ibb.co.com/HDLnKBqm/download.jpg',
//         text: 'Healthy Dairy Products',
//         des:'for stay healthy it is needed to eat healthy ,we provide hdealthy dairy product that will increase the ,also hand made different food made by villagers that is totally natural and healthy ',
//     },
//     {
//         image: 'https://i.ibb.co.com/GQxrfYFF/pexels-photo-1072824.jpg',
//         logo: 'https://i.ibb.co.com/nqDrp03h/pngtree-green-plant-logo-png-image-9164721.png',
//         text: 'Plants Related Product',
//         des:'we are proving best quality of plant products .such as seeds ,that seeds is highly productive and also it is will incrtease the productivity of farming',
//     }
// ];

// const Offer = () => {
//     return (
//         <div className='p-12 mt-12'>
//             <p className='text-gray-600 text-sm mb-2 text-center'>WELCOME TO AGRINEXT</p>
//             <h1 className='text-lime-800 text-7xl text-center font-semibold mb-10'>What we are offering</h1>

//             <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
//                 {offers.map((offer, index) => (
//                     <div key={index} className='bg-white shadow-md rounded-2xl overflow-hidden text-center'>
//                         <div className="overflow-hidden">
//                             <img
//                                 src={offer.image}
//                                 alt='offer'
//                                 className='w-full h-40 object-cover transform transition-transform duration-500 hover:scale-110'
//                             />
//                         </div>
//                         <div className='flex justify-center -mt-10 bg-white' >
//                             <img
//                                 src={offer.logo}
//                                 alt='logo'
//                                 className='w-20 h-20  bg-white p-1 rounded-full shadow-lg'
//                             />
//                         </div>
//                         <div className='p-4'>
//                             <h4 className='text-gray-800 font-semibold text-xl'>{offer.text}</h4>
//                             <p className='font-light'>{offer.des}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Offer;


import React from 'react';
import img1 from '../assets/main-icon-leaf.png';

const offers = [
    {
        image: 'https://i.ibb.co.com/WWFbqGxB/pexels-photo-2933243.jpg',
        logo: 'https://i.ibb.co.com/S73CRY5G/download.png',
        text: 'Smart Irrigation Solutions',
        des: 'Farming product such as tractor, irrigation product, motor, seeds, fertilizers etc are available for the farmers so that farmers can buy those products and can easily use them on their farm.',
    },
    {
        image: 'https://i.ibb.co.com/VpzzVMcL/pexels-photo-2252584.jpg',
        logo: 'https://i.ibb.co.com/FkLZ0p7D/download.jpg',
        text: 'Fresh Fruits and Vegetable',
        des: 'Our farmers produce healthy fruits and vegetables. So all the vegetables here are totally healthy and fresh. Also, the fruits and vegetables are available for sale in the shop.'
    },
    {
        image: 'https://i.ibb.co.com/d0KJdBZk/bull-calf-heifer-ko-162240.jpg',
        logo: 'https://i.ibb.co.com/HDLnKBqm/download.jpg',
        text: 'Healthy Dairy Products',
        des: 'To stay healthy, it is necessary to eat healthy. We provide healthy dairy products and handmade foods prepared by villagers, which are totally natural and healthy.',
    },
    {
        image: 'https://i.ibb.co.com/GQxrfYFF/pexels-photo-1072824.jpg',
        logo: 'https://i.ibb.co.com/nqDrp03h/pngtree-green-plant-logo-png-image-9164721.png',
        text: 'Plants Related Product',
        des: 'We are providing the best quality plant products, such as seeds that are highly productive and will increase the productivity of farming.',
    }
];
 
const Offer = () => {
    return (
        <div className='p-12 mt-12'>
            <p className='text-gray-600 text-sm mb-2 text-center'>WELCOME TO AGRINEXT</p>
            <h1 className='text-lime-800 text-5xl sm:text-6xl text-center font-semibold mb-4'>What we are offering</h1>
            <div className="flex items-center justify-center mt-2 mb-12">
  <img className="w-26 h-10" src={img1} alt="" />
</div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                {offers.map((offer, index) => (
                    <div
                        key={index}
                        className='bg-white shadow-md rounded-2xl text-center relative'
                    >
                        {/* Image with hover zoom */}
                        <div className="relative">
                            <img
                                src={offer.image}
                                alt='offer'
                                className='w-full h-40 object-cover rounded-t-2xl transform transition-transform duration-500 hover:scale-110'
                            />
                            {/* Logo over image, fully visible */}
                            <div className='absolute -bottom-10 left-1/2 transform -translate-x-1/2 z-12'>
                                <img
                                    src={offer.logo}
                                    alt='logo'
                                    className='w-20 h-20 bg-white p-1 rounded-full shadow-lg border'
                                />
                            </div>
                        </div>

                        {/* Card body */}
                        <div className='pt-10 pb-6 px-4 mt-6 mb-6'>
                            <h4 className='text-gray-800 font-semibold text-xl mb-2'>{offer.text}</h4>
                            <p className='font-light text-sm text-gray-600'>{offer.des}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Offer;

