


import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import useAxiosPublic from "../Hooks/useAxiosPublic";
import SocialLogin from "../SocialLogin/SocialLogin";
import img from '../assets/pngfind.com-hand-holding-png-1711178.png';

const SignUp = () => {
    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = data => {
        createUser(data.email, data.password)
            .then(result => {
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const userInfo = {
                            name: data.name,
                            email: data.email
                        };
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'User created successfully!',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/');
                                }
                            });
                    })
                    .catch(error => console.log(error));
            });
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-green-50 via-lime-100 to-white flex items-center justify-center px-4">
            <div className="flex flex-col-reverse lg:flex-row bg-white shadow-2xl rounded-3xl overflow-hidden max-w-6xl w-full">
                {/* Image Section */}
                <div className="lg:w-1/2 bg-lime-50 flex items-center justify-center p-8">
                    <img src={img} alt="Signup Visual" className="w-full max-w-xs md:max-w-sm animate-fade-in" />
                </div>

                {/* Form Section */}
                <div className="lg:w-1/2 p-10">
                    <h2 className="text-3xl font-bold text-lime-800 mb-6 text-center">Create Your Account</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                        <div className="form-control">
                            <label className="label-text font-semibold text-gray-700">Name</label>
                            <input type="text" {...register("name", { required: true })} placeholder="Full Name" className="input input-bordered w-full" />
                            {errors.name && <span className="text-red-600 text-sm">Name is required</span>}
                        </div>

                        <div className="form-control">
                            <label className="label-text font-semibold text-gray-700">Photo URL</label>
                            <input type="text" {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered w-full" />
                            {errors.photoURL && <span className="text-red-600 text-sm">Photo URL is required</span>}
                        </div>

                        <div className="form-control">
                            <label className="label-text font-semibold text-gray-700">Email</label>
                            <input type="email" {...register("email", { required: true })} placeholder="Email address" className="input input-bordered w-full" />
                            {errors.email && <span className="text-red-600 text-sm">Email is required</span>}
                        </div>

                        <div className="form-control">
                            <label className="label-text font-semibold text-gray-700">Password</label>
                            <input type="password" {...register("password", {
                                required: true,
                                minLength: 6,
                                maxLength: 20,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                            })} placeholder="Password" className="input input-bordered w-full" />
                            {errors.password?.type === 'required' && <p className="text-red-600 text-sm">Password is required</p>}
                            {errors.password?.type === 'minLength' && <p className="text-red-600 text-sm">Minimum 6 characters</p>}
                            {errors.password?.type === 'maxLength' && <p className="text-red-600 text-sm">Maximum 20 characters</p>}
                            {errors.password?.type === 'pattern' && <p className="text-red-600 text-sm">Password must include uppercase, lowercase, number & symbol</p>}
                        </div>

                        <input type="submit" value="Sign Up" className="btn w-full text-white font-semibold tracking-wide bg-gradient-to-r from-lime-600 to-green-700 hover:brightness-110 transition-all duration-300" />
                    </form>

                    <p className="mt-4 text-sm text-center">Already have an account? <Link to="/login" className="text-lime-700 font-medium hover:underline">Login</Link></p>

                    <div className="divider my-6">or</div>

                    <SocialLogin />
                </div>
            </div>
        </div>
    );
};

export default SignUp;



