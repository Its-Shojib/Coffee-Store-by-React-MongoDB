import { BiArrowBack } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const AddCoffee = () => {
    return (
        <div className='w-8/12 mx-auto'>
            <Link to='/'>
                <div className='flex items-center gap-3 text-2xl'>
                    <BiArrowBack />
                    <p>Back to home</p>
                </div>
            </Link>
            <div className='bg-[#F4F3F0] space-y-5 my-5'>
                <div className='pt-10 space-y-5'>
                    <h1 className='text-3xl text-center'>Add New Coffee</h1>
                    <p className='text-lg max-w-lg mx-auto text-center'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                </div>
                <div className='px-24'>
                    <form>
                        <div className='flex gap-10 mb-5'>
                            <div className='flex-1'>
                                <p className='text-xl'>Name</p>
                                <input className="w-full p-2" type="text" name="" id="" placeholder='Enter Coffee Name'/>
                            </div>
                            <div className='flex-1'>
                                <p className='text-xl'>Chef</p>
                                <input className="w-full p-2" type="text" name="" id="" placeholder='Enter Coffee Chef'/>
                            </div>
                        </div>
                        <div className='flex gap-10 mb-5'>
                            <div className='flex-1'>
                                <p className='text-xl'>Supplier</p>
                                <input className="w-full p-2" type="text" name="" id="" placeholder='Enter Coffee Supplier'/>
                            </div>
                            <div className='flex-1'>
                                <p className='text-xl'>Taste</p>
                                <input className="w-full p-2" type="text" name="" id="" placeholder='Enter Coffee Taste'/>
                            </div>
                        </div>
                        <div className='flex gap-10 mb-5'>
                            <div className='flex-1'>
                                <p className='text-xl'>Category</p>
                                <input className="w-full p-2" type="text" name="" id="" placeholder='Enter Coffee Category'/>
                            </div>
                            <div className='flex-1'>
                                <p className='text-xl'>Details</p>
                                <input className="w-full p-2" type="text" name="" id="" placeholder='Enter Coffee Details'/>
                            </div>
                        </div>
                        <div className='mb-5'>
                            <p className='text-xl'>Photo</p>
                            <input className="w-full p-2" type="text" name="" id="" placeholder='Enter Coffee URL'/>
                        </div>

                        <button className='w-full text-center bg-[#D2B48C] py-2 text-2xl mb-5' type="submit">Add Coffee</button>

                    </form>
                </div>

            </div>
        </div>
    );
};

export default AddCoffee;