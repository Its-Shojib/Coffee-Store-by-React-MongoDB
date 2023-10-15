import Swal from 'sweetalert2'
import { BiArrowBack } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const AddCoffee = () => {


    let handleAddCoffee = e => {
        e.preventDefault();
        let form = e.target;
        let name = form.name.value;
        let chef = form.chef.value;
        let category = form.category.value;
        let supplier = form.supplier.value;
        let taste = form.taste.value;
        let details = form.details.value;
        let photo = form.photo.value;
        // console.log(name,chef,supplier,category,taste,details,photo);
        let coffee = {name,chef,supplier,category,taste,details,photo}

        // Send data to server
        fetch('http://localhost:5000/coffee',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(coffee)
        })
        .then(res=> res.json())
        .then(data=>{
            if(data.acknowledged){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee Added Successfully',
                    icon: 'Success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }
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
                    <form onSubmit={handleAddCoffee}>
                        <div className='flex gap-10 mb-5'>
                            <div className='flex-1'>
                                <p className='text-xl'>Name</p>
                                <input className="w-full p-2" type="text" name="name" id="" placeholder='Enter Coffee Name' />
                            </div>
                            <div className='flex-1'>
                                <p className='text-xl'>Chef</p>
                                <input className="w-full p-2" type="text" name="chef" id="" placeholder='Enter Coffee Chef' />
                            </div>
                        </div>
                        <div className='flex gap-10 mb-5'>
                            <div className='flex-1'>
                                <p className='text-xl'>Supplier</p>
                                <input className="w-full p-2" type="text" name="supplier" id="" placeholder='Enter Coffee Supplier' />
                            </div>
                            <div className='flex-1'>
                                <p className='text-xl'>Taste</p>
                                <input className="w-full p-2" type="text" name="taste" id="" placeholder='Enter Coffee Taste' />
                            </div>
                        </div>
                        <div className='flex gap-10 mb-5'>
                            <div className='flex-1'>
                                <p className='text-xl'>Category</p>
                                <input className="w-full p-2" type="text" name="category" id="" placeholder='Enter Coffee Category' />
                            </div>
                            <div className='flex-1'>
                                <p className='text-xl'>Details</p>
                                <input className="w-full p-2" type="text" name="details" id="" placeholder='Enter Coffee Details' />
                            </div>
                        </div>
                        <div className='mb-5'>
                            <p className='text-xl'>Photo</p>
                            <input className="w-full p-2" type="text" name="photo" id="" placeholder='Enter Coffee URL' />
                        </div>

                        <button className='w-full text-center bg-[#D2B48C] py-2 text-2xl mb-5' type="submit">Add Coffee</button>

                    </form>
                </div>

            </div>
        </div>
    );
};

export default AddCoffee;