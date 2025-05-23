import React from 'react';

const TopFooter = () => {
    return (
        <div
            className="bg-cover bg-center text-white py-30 px-12"
            style={{
                backgroundImage: "url('https://i.ibb.co.com/Lz3Gqxgn/farmers-are-working-chinese-cabbage-farm-1150-7111.jpg')", // replace with your image URL
            }}
        >
            <div className="max-w-2xl">
                <p className="text-lg font-semibold mb-2">Happy Farming</p>
                <h2 className="text-4xl font-bold mb-4">Empowering Farmers for a Better Tomorrow</h2>
                <p className="mb-6 text-base">Join us in revolutionizing agriculture with smart, sustainable solutions.</p>
                <button className="bg-yellow-700 hover:bg-lime-800 text-white font-semibold py-4 px-8 rounded-4xl">
                    Contact Us Today &gt;
                </button>
            </div>
        </div>
    );
};
export default TopFooter;