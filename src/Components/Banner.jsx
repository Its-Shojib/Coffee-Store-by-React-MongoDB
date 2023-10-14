import { Link } from "react-router-dom";


const Banner = () => {
    return (

        <div className="bg-[url('/public/more/3.png')] bg-[length:1535px_450px] bg-no-repeat h-[450px] text-white flex justify-center items-center">
            <div className=" px-4 md:pl-80 space-y-3">
                <h1 className=" text-4xl">Would you like a Cup of Delicious Coffee?</h1>
                <p>Its coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of <br /> every moment!!! Enjoy the beautiful moments and make them memorable.</p>

                <button className="bg-[#E3B577] text-black px-3 py-1 rounded"><Link to='/about'>Learn More</Link></button>
            </div>
        </div>
    );
};

export default Banner;