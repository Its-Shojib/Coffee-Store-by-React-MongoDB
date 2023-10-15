import PropTypes from 'prop-types';
import { AiFillEdit, AiFillDelete, AiFillEye } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee,setCoffees,coffees }) => {
    let { _id, name, chef, taste, photo } = coffee;

    let handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Coffee has been deleted.',
                                'success'
                            )
                            let remaining = coffees.filter(cof=> cof._id != id)
                            setCoffees(remaining);
                        }
                    })
            }
        })
    }
    return (
        <div>
            <div className="bg-[#ECEAE3] flex justify-around items-center">
                <div className='flex justify-start items-center gap-5'>
                    <img className='w-[140px] h-[200px]' src={photo} alt="coffee" />
                    <div>
                        <h2 className="font-bold text-lg">Name: {name}</h2>
                        <p className='text-lg'>Chef: {chef}</p>
                        <p className='text-lg'>Taste: {taste}</p>
                    </div>
                </div>
                <div className="flex gap-3 flex-col">
                    <button className="px-2 py-1 text-white rounded-sm bg-black text-xl"><AiFillEye /></button>
                    <Link to={`/updateCoffee/${_id}`}>
                        <button className="px-2 py-1 text-white rounded-sm bg-gray-600 text-xl"><AiFillEdit /></button>
                    </Link>
                    <button onClick={() => handleDelete(_id)} className="px-2 py-1 text-white rounded-sm bg-red-500 text-xl"><AiFillDelete /></button>
                </div>
            </div>
        </div>
    );
};
CoffeeCard.propTypes = {
    coffee: PropTypes.object,
    setCoffees: PropTypes.func,
    coffees: PropTypes.array,
}
export default CoffeeCard;