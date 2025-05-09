
// import React, { useState } from 'react';
// import img1 from '../assets/veges.jpg';
// import img2 from '../assets/leaf-bg.jpg';
// import img3 from '../assets/leaf-21851_1920.jpg';
// import img4 from '../assets/leaf-bg.jpg';

// const InfoBottom = () => {
//   const slides = [
//     {
//       bg: `url(${img2})`,
//       text: 'Empowering Farmers',
//       des: 'Our main goal is to empower the farmer who lives in the village whom do not get facilities and does not get enough facilities.A country is fully dependent on farming, as people cannot live without food.',
//     },
//     {
//       bg: `url(${img3})`,
//       text: 'Smart Agriculture Solutions',
//       des: 'Smart farming can bring the best results in agriculture,work smartly, where users can get a lot of benefits.Our main goal is to empower the farmer who lives in the village and does not get enough facilities.',
//     },
//     {
//       bg: `url(${img4})`,
//       text: 'Future of Farming',
//       des: 'A country is fully dependent on farming, as people cannot live without food.Our main goal is to empower the farmer who lives in the village and does not get enough facilities. This is a basic need.',
//     },
//   ];

//   const [current, setCurrent] = useState(0);

//   return (
//     <div className="flex w-full h-[400px]">
      
//       <div className="w-1/3 border border-dashed border-lime-800 p-3">
//       <div
//         className=" bg-cover  bg-center flex flex-col items-center justify-center text-white text-2xl font-bold transition-all duration-700 p-4"
//         style={{ backgroundImage: slides[current].bg }}
//       >
//         <div className=" bg-opacity-50 p-3 rounded text-2xl  w-full mt-8 text-center">
//          <h4> {slides[current].text}</h4>
//         </div>
//         <div className="bg-opacity-40 p-3 text-xl rounded   font-normal text-center ">
//           <p>{slides[current].des}</p>
//         </div>

//         {/* Slide Buttons */}
//         <div className="flex space-x-2">
//           {slides.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrent(index)}
//               className={`w-3 h-3 rounded-full transition-colors duration-300 ${
//                 current === index ? 'bg-white' : 'bg-gray-400'
//               }`}
//             ></button>
//           ))}
//         </div>
//       </div>
// </div>
//       {/* Right Side: Static Image */}
//       <div className="w-2/3 flex items-right justify-center ">
//       <div className=" border border-dashed border-lime-800 p-3">
//         <img
//           src={img1}
//           alt="Right Side"
//           className="max-w-full max-h-full object-cover"
//         />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InfoBottom;
import React, { useState } from 'react';
import img1 from '../assets/veges.jpg';
import img2 from '../assets/leaf-bg.jpg';
import img3 from '../assets/leaf-21851_1920.jpg';
import img4 from '../assets/leaf-bg.jpg';

const InfoBottom = () => {
  const slides = [
    {
      bg: `url(${img2})`,
      text: 'Empowering Farmers',
      des: 'Our goal is to empower farmers in remote villages who often lack essential resources. Agriculture forms the backbone of every nation—our mission is to support those who grow our food.',
    },
    {
      bg: `url(${img3})`,
      text: 'Smart Agriculture Solutions',
      des: 'With smart farming tools, we help maximize yield and efficiency. Our tech-driven approach ensures modern solutions reach even the most underserved farmers.',
    },
    {
      bg: `url(${img4})`,
      text: 'Future of Farming',
      des: 'Agriculture is a nation’s lifeline. We envision a future where every farmer, regardless of location, has access to innovative tools and opportunities.',
    },
  ];

  const [current, setCurrent] = useState(0);

  return (
    <div className="flex flex-col md:flex-row w-full h-auto md:h-[450px] mt-10 px-4 gap-6">
      
      {/* Slide Section */}
      <div
        className="w-full md:w-1/2 relative rounded-2xl overflow-hidden border-2 border-lime-700 shadow-lg"
        style={{ backgroundImage: slides[current].bg }}
      >
        <div className="absolute inset-0 bg-opacity-40 backdrop-blur-sm flex flex-col justify-center p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">{slides[current].text}</h2>
          <p className="text-lg leading-relaxed mb-6">{slides[current].des}</p>

          {/* Slide Dots */}
          <div className="flex justify-start gap-2 mt-auto">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-4 h-4 rounded-full transition duration-300 ${
                  current === index ? 'bg-lime-500' : 'bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center items-center border-2 border-dashed border-lime-700 rounded-2xl shadow-lg overflow-hidden">
        <img
          src={img1}
          alt="Farming Visual"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
    </div>
  );
};

export default InfoBottom;
