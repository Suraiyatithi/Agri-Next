
// import { useContext, useEffect, useState } from 'react';
// import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
// import { AuthContext } from '../Providers/AuthProvider';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2'
// import SocialLogin from '../SocialLogin/SocialLogin';
// import img1 from '../assets/pngfind.com-hand-holding-png-1711178.png';

// const Login = () => {
//     const [disabled, setDisabled] = useState(true);
//     const { signIn } = useContext(AuthContext);
//     const navigate = useNavigate();
//     const location = useLocation();

//     const from = location.state?.from?.pathname || "/";
//     console.log('state in the location login page', location.state)

//     useEffect(() => {
//         loadCaptchaEnginge(6);
//     }, [])

//     const handleLogin = event => {
//         event.preventDefault();
//         const form = event.target;
//         const email = form.email.value;
//         const password = form.password.value;
//         console.log(email, password);
//         signIn(email, password)
//             .then(result => {
//                 const user = result.user;
//                 console.log(user);
//                 Swal.fire({
//                     title: 'User Login Successful.',
//                     showClass: {
//                         popup: 'animate__animated animate__fadeInDown'
//                     },
//                     hideClass: {
//                         popup: 'animate__animated animate__fadeOutUp'
//                     }
//                 });
//                 navigate(from, { replace: true });
//             })
//     }

//     const handleValidateCaptcha = (e) => {
//         const user_captcha_value = e.target.value;
//         if (validateCaptcha(user_captcha_value)) {
//             setDisabled(false);
//         }
//         else {
//             setDisabled(true)
//         }
//     }
// //flex-col md:flex-row-reverse
//     return (
//         <>
//             <div className="hero min-h-screen bg-base-200">
//                 <div className="hero-content flex">
//                     <div className="text-center md:w-1/2 lg:text-left">
//                     <img src={img1} alt="" />
//                         {/* <h1 className="text-5xl font-bold">Login now!</h1> */}
//                         {/* <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
//                     </div>
//                     <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
//                         <form onSubmit={handleLogin} className="card-body">
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Email</span>
//                                 </label>
//                                 <input type="email" name="email" placeholder="email" className="input input-bordered" />
//                             </div>
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Password</span>
//                                 </label>
//                                 <input type="password" name="password" placeholder="password" className="input input-bordered" />
//                                 <label className="label">
//                                     <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
//                                 </label>
//                             </div>
//                             <div className="form-control">
//                                 <label className="label">
//                                     <LoadCanvasTemplate />
//                                 </label>
//                                 <input onBlur={handleValidateCaptcha} type="text" name="captcha" placeholder="type the captcha above" className="input input-bordered" />

//                             </div>
//                             <div className="form-control mt-6">
//                                 {/* TODO: apply disabled for re captcha */}
//                                 <input disabled={false} className="btn bg-lime-800 text-white p-6" type="submit" value="Login" />
//                             </div>
//                         </form>
//                         <p className='px-6'><small>New Here? <Link to="/signup">Create an account</Link> </small></p>
//                         <SocialLogin></SocialLogin>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Login;
import { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../Providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import SocialLogin from '../SocialLogin/SocialLogin';
import img1 from '../assets/pngfind.com-hand-holding-png-1711178.png';

const Login = () => {
    const [disabled, setDisabled] = useState(true);
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                Swal.fire({
                    title: 'Login Successful!',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1500,
                });
                navigate(from, { replace: true });
            });
    };

    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        setDisabled(!validateCaptcha(user_captcha_value));
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-lime-100 via-green-100 to-lime-50 flex items-center justify-center px-4">
            <div className="flex flex-col-reverse md:flex-row bg-white rounded-3xl shadow-2xl overflow-hidden max-w-5xl w-full">
                <div className="md:w-1/2 bg-lime-100 flex items-center justify-center p-10">
                    <img src={img1} alt="Login Visual" className="w-full h-auto object-contain animate-fade-in" />
                </div>

                <div className="md:w-1/2 p-8 space-y-5">
                    <h2 className="text-3xl font-bold text-center text-lime-800">Welcome Back</h2>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div className="form-control">
                            <label className="label-text font-semibold text-gray-700">Email</label>
                            <input type="email" name="email" placeholder="example@mail.com" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control">
                            <label className="label-text font-semibold text-gray-700">Password</label>
                            <input type="password" name="password" placeholder="••••••••" className="input input-bordered w-full" />
                            <label className="label pt-1">
                                <a href="#" className="label-text-alt link link-hover text-sm text-lime-700">Forgot password?</a>
                            </label>
                        </div>

                        <div className="form-control">
                            <LoadCanvasTemplate />
                            <input onBlur={handleValidateCaptcha} type="text" name="captcha" placeholder="Type the captcha above" className="input input-bordered w-full mt-2" />
                        </div>

                        <input
                            disabled={disabled}
                            type="submit"
                            value="Login"
                            className={`btn w-full text-white font-semibold tracking-wide transition-all duration-300 ease-in-out ${disabled
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-gradient-to-r from-lime-500 to-green-600 hover:brightness-110"}`}
                        />
                    </form>

                    <p className="text-center text-sm">
                        New Here? <Link to="/signup" className="text-lime-700 font-semibold hover:underline">Create an account</Link>
                    </p>

                    <div className="divider">or</div>
                    <SocialLogin />
                </div>
            </div>
        </div>
    );
};

export default Login;
