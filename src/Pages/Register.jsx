
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMail } from 'react-icons/ai';
import { RiLockPasswordFill } from 'react-icons/ri';
import { useContext, useState } from "react";
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';


const Register = () => {

    let [showPassword, setShowPassword] = useState(false);
    let { createUser, googleSignIn } = useContext(AuthContext)

    let navigate = useNavigate()
    let handleCreateUser = (e) => {
        e.preventDefault();
        let email = e.target.email.value;
        let password = e.target.password.value;

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                Swal.fire('User Created Successfully!');
                navigate('/')
            })
            .catch(() => {
                Swal.fire('Error!');
            })
    }
    let handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                Swal("Good job!", "Sign-in Successfuly!", "success");
                navigate('/')
            })
            .catch(error => {
                Swal("Error!", error.message, "error");
            })

    }

    return (
        <div className="bg-gradient-to-r from-fuchsia-500 to-violet-500 flex justify-center items-center min-h-[646px]">
            <div className="bg-gray-400 w-8/12 md:w-4/12 text-center p-10 rounded-lg">
                <h2 className="text-3xl font-bold mb-2">Register Now!</h2>
                <form onSubmit={handleCreateUser}>
                    <hr className="my-3" />
                    <div className="relative">
                        <p className="text-left text-lg font-semibold">User Email</p>
                        <AiOutlineMail className="absolute bottom-4 left-2"></AiOutlineMail>
                        <input className="w-full p-2 pl-7 text-black rounded-lg my-1"
                            type="email"
                            name="email"
                            placeholder="Type your email"
                            required />
                    </div>
                    <hr className="my-3" />
                    <div className="relative">
                        <p className="text-left text-lg font-semibold">Password</p>
                        <RiLockPasswordFill className="absolute bottom-4 left-2"></RiLockPasswordFill>
                        <input className="w-full p-2 pl-6 text-black rounded-lg my-1"
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            placeholder="Type your password"
                        />
                        <span onClick={() => setShowPassword(!showPassword)} className="absolute right-3 bottom-4">{showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}</span>
                    </div>
                    <hr className="my-3" />
                    <button
                        className="bg-gradient-to-r from-violet-500 to-fuchsia-500 w-full py-2 text-white font-semibold text-lg rounded-xl" type="submit">
                        Register</button>

                </form>

                <p className="mt-5">Or Sign up using</p>
                <div className="flex gap-3 justify-center my-3">
                    <img onClick={handleGoogleLogin} className="w-8 cursor-pointer" src="/google.jpg" alt="" />
                </div>
                <div className="flex gap-3 justify-center mt-8">
                    <p>Already have an account?</p>
                    <Link className="underline text-lg text-blue-600" to='/login'>Login now</Link>
                </div>
            </div>
        </div>
    );
};

export default Register;