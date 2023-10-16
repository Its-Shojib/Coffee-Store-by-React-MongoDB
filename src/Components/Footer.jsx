import { BsFacebook } from 'react-icons/bs';
import { FaLocationPin } from 'react-icons/fa6';
import { AiFillTwitterCircle, AiOutlineInstagram, AiFillLinkedin, AiFillPhone, AiTwotoneMail,AiOutlineLogout} from 'react-icons/ai';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
const Footer = () => {
    let {user,Logout} = useContext(AuthContext);
    let handleSignOut = () =>{
        Logout()
            .then()
            .catch()
    }
    return (
        <div className='mt-10 bg-[#F4F3F0]'>
            <div className='w-full md:w-8/12 mx-auto flex px-4'>
                <div className='space-y-4 flex-1'>
                    <img className='w-16 h-16' src="/public/more/logo1.png" alt="" />
                    <h1 className='text-3xl'>Espresso Emporium</h1>
                    <p className='text-lg'>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                    <div className='flex gap-3 text-3xl'>
                        <BsFacebook />
                        <AiFillTwitterCircle />
                        <AiOutlineInstagram />
                        <AiFillLinkedin />
                        {
                            user && <AiOutlineLogout className='cursor-pointer' onClick={handleSignOut}/>
                        }
                    </div>
                    <h1 className='text-3xl'>Get in Touch</h1>
                    <div className='flex gap-3 items-center'>
                        <AiFillPhone />
                        <p className='text-lg'>+88-01790407979</p>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <AiTwotoneMail />
                        <p className='text-lg'>mdshojib922@gmail.com</p>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <FaLocationPin />
                        <p className='text-lg'>Pabna, Bangladesh</p>
                    </div>
                </div>
                <div className='flex-1 text-center pt-20'>
                    <h1 className='text-4xl'>Connect with Us</h1>
                    <form className='space-y-3'>
                        <input className='w-full md:w-3/6 p-2' type="text" name="" id="" placeholder='Name' />
                        <br />
                        <input className='w-full md:w-3/6 p-2' type="email" name="" id="" placeholder='Email' />
                        <br />
                        <textarea className='w-full md:w-3/6 p-2' name="" id="" placeholder='Message'></textarea>
                        <br />
                        <button className='border-red-950 border-2 px-4 py-1 rounded-3xl' type="submit">Send Message</button>
                    </form>
                </div>
            </div>
            <div className="bg-[url('/public/more/24.jpg')] p-2 mt-5">
                <p className='text-center text-lg text-white'>Copyright Espresso Emporium ! All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;