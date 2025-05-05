import React from 'react';

const Top = () => {
    return (
        <div className='bg-slate-50 '>
       <section className="  drop-shadow">
      <div className="container mx-auto">
         <div className="py-3 px-5">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                 
                   <p className="text-gray-500 text-sm">Welcome to smart-farming</p>
                   <p className='text-lg text-amber-300'>Agriculture & organic farm</p>
              </div>
               <div className="flex gap-10 items-center">
                    {/* social media link here */}
                    <div className=" gap-3 text-gray-500">
                       {/* {
                            socialData.map((social, index)=>(
                                <div 
                                className="hover:text-gray-600 duration-300"
                                key={index}>
                                    <Link

                                    to={social.link}
                                    >
                                       <span>{social.icon}</span>
                                    </Link>
                                </div>
                            ))
                        } */}
                        <div className="hover:text-gray-600 duration-300 flex justify-between">
                            <p>Fb</p>
                            <p>X</p>
                            <p>Ldn</p>
                        </div>
                    </div>
                    {/* user login system */}
                    <div className='flex gap-3 items-center text-gray-500'>
                        {/* <Link 
                        to="/login"
                        className="flex gap-3 items-center text-gray-500"> */}
                          <p className="text-gray-500 text-sm">smartfarming@gmail.com</p>
                            <p>user</p>
                            <p>Login</p>

                        {/* </Link> */}

                    </div>
                </div>
             </div>
          </div>
       </div>
    </section>
        </div>
    );
};

export default Top;

// const socialData = [
//     {
//         id: 1,
//         title: "facebook",
//         icon: <FaFacebookF/>,
//         link: "https://www.facebook.com/Digitalagencypark",
//     },
//     {
//         id: 1,
//         title: "twitter",
//         icon: <FaTwitter/>,
//         link: "https://www.facebook.com/Digitalagencypark",
//     },
//     {
//         id: 1,
//         title: "Linkedin",
//         icon: <FaLinkedinIn/>,
//         link: "https://www.facebook.com/Digitalagencypark",
//     },
// ]
// return (
//     <section className=" bg-slate-50 drop-shadow">
//        <div className="container mx-auto">
//           <div className="py-3 px-5">
//              <div className="flex justify-between items-center">
//                 <div className="flex items-center gap-3">
//                     <p className="text-gray-500"><HiMail/></p>
//                     <p className="text-gray-500 text-sm">mdsharifulislam@gmail.com</p>
//                 </div>
//                 <div className="flex gap-10 items-center">
//                     {/* social media link here */}
//                     <div className="flex gap-3 text-gray-500">
//                         {
//                             socialData.map((social, index)=>(
//                                 <div 
//                                 className="hover:text-gray-600 duration-300"
//                                 key={index}>
//                                     <Link

//                                     to={social.link}
//                                     >
//                                        <span>{social.icon}</span>
//                                     </Link>
//                                 </div>
//                             ))
//                         }
//                     </div>
//                     {/* user login system */}
//                     <div>
//                         <Link 
//                         to="/login"
//                         className="flex gap-3 items-center text-gray-500">
//                             <p><FaUser/></p>
//                             <p>Login</p>
//                         </Link>

//                     </div>
//                 </div>
//              </div>
//           </div>
//        </div>
//     </section>
// );
// };

// export default Top;