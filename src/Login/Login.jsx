
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
// import { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = (e) => {
//     e.preventDefault();
//     // Handle login logic here
//     console.log('Logging in with:', { email, password });
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-green-50 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
//         <div>
//           <h2 className="mt-6 text-center text-3xl font-bold text-green-800">Login to AgriNext</h2>
//           <p className="mt-2 text-center text-sm text-gray-600">
//             Or&nbsp;
//             <Link to="/signup" className="font-medium text-green-600 hover:text-green-800">
//               create a new account
//             </Link>
//           </p>
//         </div>
//         <form className="mt-8 space-y-6" onSubmit={handleLogin}>
//           <div className="rounded-md shadow-sm -space-y-px">
//             <div className="mb-4">
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                 Email address
//               </label>
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 autoComplete="email"
//                 required
//                 className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-green-600 focus:border-green-600 sm:text-sm"
//                 placeholder="you@example.com"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>

//             <div className="mb-6">
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//                 Password
//               </label>
//               <input
//                 id="password"
//                 name="password"
//                 type="password"
//                 autoComplete="current-password"
//                 required
//                 className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-green-600 focus:border-green-600 sm:text-sm"
//                 placeholder="••••••••"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </div>
//           </div>

//           <div className="flex items-center justify-between">
//             <div className="text-sm">
//               <Link to="/forgot-password" className="font-medium text-green-600 hover:text-green-800">
//                 Forgot your password?
//               </Link>
//             </div>
//           </div>

//           <div>
//             <button
//               type="submit"
//               className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
//             >
//               Log in
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
