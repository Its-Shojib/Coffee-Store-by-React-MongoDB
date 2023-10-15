import { Link, useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import Instagram from "../Components/Instagram";
import Logos from "../Components/Logos";
import { useState } from "react";
import CoffeeCard from "../Components/CoffeeCard";
import { BsCupHotFill } from 'react-icons/bs';

const Home = () => {

    let loadedCoffees = useLoaderData();
    let [coffees, setCoffees] = useState(loadedCoffees);
    return (
        <div>
            <Banner></Banner>
            <Logos></Logos>
            <div className="min-h-screen bg-[url('/public/more/4.png')] bg-no-repeat bg-left-top md:mb-20 my-10">
                <div className="bg-[url('/public/more/5.png')] bg-no-repeat bg-right">
                    <p className="text-center text-lg mb-1">--- Sip & Savor ---</p>
                    <h1 className="text-center text-4xl font-bold mb-4">Our Popular Products</h1>
                    <button className="block mx-auto text-lg bg-[#E3B577] px-3 py-2 rounded-md"><Link to='/addCoffee'>Add Coffee <BsCupHotFill className="inline" /></Link></button>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full px-4 md:w-8/12 mx-auto mt-5">
                        {
                            coffees.map(coffee => <CoffeeCard
                                key={coffee._id}
                                coffee={coffee}
                                coffees = {coffees}
                                setCoffees={setCoffees}
                            ></CoffeeCard>)
                        }
                    </div>
                </div>
            </div>
            <Instagram></Instagram>
        </div>
    );
};

export default Home;