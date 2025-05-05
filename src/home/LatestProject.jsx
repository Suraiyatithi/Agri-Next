import React from 'react';
import img1 from '../assets/main-icon-leaf.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';


const slideData = [
  { id: 1, image: 'https://i.ibb.co.com/tpKKntDv/pexels-photo-414837.jpg', link: '#project1',des:'Weather Forcasting and Solution', },
  { id: 2, image: 'https://i.ibb.co.com/mFTRtRYY/kittens-cat-cat-puppy-rush-45170.jpg', link: '#project2',des:'Animal Food and medicine supply' },
  { id: 3, image: 'https://i.ibb.co.com/vCNmWvxB/download.jpg', link: '#project3',des:'Supply Home made Food ' },
  { id: 4, image: 'https://i.ibb.co.com/cSVzWkvB/download.jpg', link: '#project4',des:'Matket Price Analysis' },
];

const LatestProject = () => {
  return (
    <div className="px-4 py-12">
      <p className='text-gray-600 text-sm mb-2 text-center'>CLOSED PROJECTS</p>
      <h1 className='text-lime-800 text-5xl sm:text-6xl text-center font-semibold mb-4'>
        Latest projects update
      </h1>
      <div className=" flex items-center justify-center mt-2 mb-12">
  <img className="w-26 h-10" src={img1} alt="" />
</div>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          1024: {
            slidesPerView: 2,
          },
        }}
        loop={true}
      >
        {slideData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative group h-64 lg:h-96 bg-cover bg-center rounded-xl overflow-hidden shadow-lg"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <a
                href={slide.link}
                className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 bg-black/50 transition duration-300"
              >
                <button className=" backdrop-blur-sm bg-white/30   text-white text-3xl p-12 font-semibold rounded-xl hover:bg-yellow-700 transition">
                  {slide.des}
                </button>
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LatestProject;
