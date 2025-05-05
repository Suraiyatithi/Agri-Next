import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import img1 from '../assets/main-icon-leaf.png';

const ChooseUs = () => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 300], [0, -20]);

    return (
        <div className="flex w-full min-h-screen">
            {/* Left Part: 2/5 width with animation */}
            <motion.div style={{ y }} className="w-2/5 relative">
                <img
                    src="https://i.ibb.co.com/BKvT8myM/agriculture-healthy-food-23-2151969814.jpg"
                    alt="Why Choose Us"
                    className="w-full h-full object-cover m-10 p-10"
                />
                {/* https://i.ibb.co.com/j96N5Swz/pexels-photo-693857.webp */}
                {/* Overlay Message */}
                <div className="absolute m-7 mb-10 top-4 left-4 bg-yellow-700 bg-opacity-60 text-white p-12 rounded">
                    <h3 className="text-2xl font-semibold mb-3">Trusted by Farmers</h3>
                    <p className="text-md">Empowering agriculture through <br /> technology .Our agriculture is <br /> one of the main components <br /> of our live</p>
                </div>
            </motion.div>

            {/* Right Part: 3/5 width */}
            <div className="w-3/5 p-16 flex flex-col mt-12 ">
                <p className='text-gray-600 text-sm mb-2'>OUR SPECIALITIES</p>
                <h1 className='text-lime-800 text-5xl sm:text-6xl font-semibold mb-3'>
                    Why Choose Us
                </h1>
                <img className='w-26 h-10' src={img1} alt="" />
                <p className="text-lg text-gray-700 mb-10 mt-6">
                    At AgriNext, we combine cutting-edge technology with deep agricultural insights to help farmers achieve better productivity and sustainability. Our platform offers smart tools, real-time data, and expert support tailored to every farmer's needs.
                </p>

                {/* Feature 1 */}
             <div className="flex justify-between mb-10">
             <div className="flex items-start gap-4 mb-6 p-4">
                <FaCheckCircle className="text-lime-800 w-30 h-30 mt-1 " />

                    <div className=''>
                        <h3 className="text-xl font-semibold text-gray-800">Smart Monitoring</h3>
                        <p className="text-gray-600 text-lg mt-6">Track your crop health and soil conditions in real-time with our intelligent sensors.Smart monitoring is really a speacial feature for smart agriculture.</p>
                    </div>
                </div>

                {/* Feature 2 */}
                <div className="flex items-start gap-4 mb-6 p-4">
                <FaCheckCircle className="text-lime-800 w-30 h-30 mt-1" />

                    <div>
                        <h3 className="text-xl font-semibold text-gray-800">Expert Guidance</h3>
                        <p className="text-gray-600 text-lg mt-6">Receive personalized tips and alerts to make data-driven farming decisions.By getting Expert is one of the best feature ever for smart farming and productivity.</p>
                    </div>
                </div>
             </div>

                {/* Read More Button */}
                <button className="mt-4 flex items-center gap-2 bg-lime-800 text-white px-6 py-3 rounded hover:bg-lime-700 transition">
                    Read More
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-5 h-5 text-yellow-700"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default ChooseUs;
