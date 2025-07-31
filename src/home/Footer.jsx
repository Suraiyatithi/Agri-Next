// import React from 'react';
// import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6';

// const Footer = () => {
//     return (
//         <footer className="bg-lime-800 text-white">
//             {/* Top Part */}
//             <div className="flex flex-col md:flex-row justify-between  items-center px-8 py-6 border-b border-lime-700">
//                 <div className="text-2xl font-bold">AgriNEXT</div>
//                 <div className="text-center text-2xl italic font-serif">Farm of Laughter and Happiness</div>
//                 <div className="flex gap-4 mt-2 md:mt-0">
//                     <FaFacebookF className="w-5 h-5 hover:text-yellow-400 transition" />
//                     <FaXTwitter className="w-5 h-5 hover:text-yellow-400 transition" />
//                     <FaInstagram className="w-5 h-5 hover:text-yellow-400 transition" />
//                 </div>
//             </div>

//             {/* Middle Part */}
//             <div className="flex flex-col md:flex-row mt-8 mb-8 px-6 py-8 gap-8">
//                 {/* Contact Us - 2/7 */}
//                 <div className="md:w-2/7">
//                     <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
//                     <p className=" mb-2">📞 Phone: +880 123 456 789</p>
//                     <p className=" mb-2">📧 Email: contact@agrinext.com</p>
//                     <p className=" ">🏡 Address: 123 Greenfield Rd, Agro City</p>
//                 </div>

//                 {/* News Post - 1/7 */}
//                 <div className="md:w-1/7">
//                     <h3 className="text-2xl font-semibold mb-4">News Post</h3>
//                     <ul className=" space-y-2">
//                         <li>Agri Expo 2025</li>
//                         <li>New AI Tools Launched</li>
//                         <li>Sustainable Farming Tips</li>
//                     </ul>
//                 </div>

//                 {/* Quick Links - 1/7 */}
//                 <div className="md:w-1/7">
//                     <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
//                     <ul className=" space-y-2">
//                         <li>Home</li>
//                         <li>About Us</li>
//                         <li>Services</li>
//                         <li>Contact</li>
//                     </ul>
//                 </div>

//                 {/* Subscribe Newsletter - 3/7 */}
//                 <div className="md:w-3/7">
//                     <h3 className="text-2xl font-semibold mb-4">Subscribe Newsletter</h3>
//                     <p className=" mb-3">Stay updated with our latest news and offerings.</p>
//                     <div className="flex flex-col sm:flex-row items-center gap-2">
//                         <input
//                             type="email"
//                             placeholder="Enter your email"
//                             className="px-4 py-2 rounded border border-amber-300  text-black w-full sm:w-auto flex-1"
//                         />
//                         <button className="bg-yellow-500 hover:bg-yellow-600 text-lime-800 px-4 py-2 rounded font-semibold">
//                             Subscribe
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* Bottom Part */}
//             <div className="text-center  py-4 border-t border-lime-700">
//                 © {new Date().getFullYear()} AgriNEXT. All rights reserved.
//             </div>
//         </footer>
//     );
// };

// export default Footer;


import React from 'react';
import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="bg-lime-800 text-white">
            {/* Top Part */}
            <div className="flex flex-col md:flex-row justify-between items-center px-8 py-6 border-b border-lime-700">
                <div className="text-2xl font-bold">AgriNEXT</div>
                <div className="text-center text-2xl italic font-serif">
                    {t('footer.tagline')}
                </div>
                <div className="flex gap-4 mt-2 md:mt-0">
                    <FaFacebookF className="w-5 h-5 hover:text-yellow-400 transition" />
                    <FaXTwitter className="w-5 h-5 hover:text-yellow-400 transition" />
                    <FaInstagram className="w-5 h-5 hover:text-yellow-400 transition" />
                </div>
            </div>

            {/* Middle Part */}
            <div className="flex flex-col md:flex-row mt-8 mb-8 px-6 py-8 gap-8">
                {/* Contact Us */}
                <div className="md:w-2/7">
                    <h3 className="text-2xl font-semibold mb-4">{t('footer.contact_title')}</h3>
                    <p className="mb-2">📞 {t('footer.phone')}</p>
                    <p className="mb-2">📧 {t('footer.email')}</p>
                    <p>🏡 {t('footer.address')}</p>
                </div>

                {/* News Post */}
                <div className="md:w-1/7">
                    <h3 className="text-2xl font-semibold mb-4">{t('footer.news_title')}</h3>
                    <ul className="space-y-2">
                        <li>{t('footer.news1')}</li>
                        <li>{t('footer.news2')}</li>
                        <li>{t('footer.news3')}</li>
                    </ul>
                </div>

                {/* Quick Links */}
                <div className="md:w-1/7">
                    <h3 className="text-2xl font-semibold mb-4">{t('footer.links_title')}</h3>
                    <ul className="space-y-2">
                        <li>{t('home')}</li>
                        <li>{t('about')}</li>
                        <li>{t('services')}</li>
                        <li>{t('contact')}</li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div className="md:w-3/7">
                    <h3 className="text-2xl font-semibold mb-4">{t('footer.subscribe_title')}</h3>
                    <p className="mb-3">{t('footer.subscribe_text')}</p>
                    <div className="flex flex-col sm:flex-row items-center gap-2">
                        <input
                            type="email"
                            placeholder={t('footer.email_placeholder')}
                            className="px-4 py-2 rounded border border-amber-300 text-black w-full sm:w-auto flex-1"
                        />
                        <button className="bg-yellow-500 hover:bg-yellow-600 text-lime-800 px-4 py-2 rounded font-semibold">
                            {t('footer.subscribe_button')}
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Part */}
            <div className="text-center py-4 border-t border-lime-700">
                © {new Date().getFullYear()} AgriNEXT. {t('footer.rights')}
            </div>
        </footer>
    );
};

export default Footer;
