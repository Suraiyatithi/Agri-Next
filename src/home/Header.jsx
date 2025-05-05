import React from 'react';

const Header = () => {
    return (
        <div className='bg-slate-50 '>
            {/* bg-slate-50 */}
           <section className=' pb-6'>
            <div className='container mx-auto px-5'>
                <div>
                    <div className='flex flex-wrap justify-between items-center'>
                        {/* <Link
                        to="/"
                        className=' '>
                            <img 
                            className='w-[250px]'
                            src={logo} alt="" /> */}
                        {/* // </Link> */}
                        <p>LOGO</p>
                        <div className=''>
                            <ul className='flex gap-8 text-gray-500'>
                                <li>Home</li>
                                <li>Feature</li>
                                <li>Products</li>
                                <li>Offer</li>
                                <li>Blog</li>
                            </ul>
                        </div>

                        <div className='flex gap-5 items-center text-gray-500'>
                            <div>
                               {/* // <FaCartShopping/> */}
                               <p>Cart</p>
                            </div>
                           
                            <div>
                                <p className=''><span>items</span> <span className='text-gray-800 font-semibold'>$150.00</span></p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            
        </section>
        </div>
    );
};

export default Header;







