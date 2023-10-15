
const Logos = () => {
    return (
        <div className="bg-[#ECEAE3]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 py-5 w-full px-2 md:w-8/12 mx-auto">
                {/* Card-1 */}
                <div>
                    <div className="space-y-5">
                        <figure><img src="/public/icons/1.png" /></figure>
                        <div className="">
                            <h2 className="text-2xl">Awesome Aroma</h2>
                            <p className="text-lg">You will definitely be a fan of the design & aroma of your coffee</p>
                        </div>
                    </div>
                </div>
                {/* Card-2 */}
                <div>
                    <div className="space-y-5">
                        <figure><img src="/public/icons/2.png" /></figure>
                        <div className="">
                            <h2 className="text-2xl">High Quality</h2>
                            <p className="text-lg">We served the coffee to you maintaining the best quality</p>

                        </div>
                    </div>
                </div>
                {/* Card-3 */}
                <div>
                    <div className="space-y-5">
                        <figure><img src="/public/icons/3.png" /></figure>
                        <div className="">
                            <h2 className="text-2xl">Pure Grades</h2>
                            <p className="text-lg">The coffee is made of the green coffee beans which you will love</p>

                        </div>
                    </div>
                </div>
                {/* Card-4 */}
                <div>
                    <div className="space-y-5">
                        <figure><img src="/public/icons/4.png" /></figure>
                        <div className="">
                            <h2 className="text-2xl">Proper Roasting</h2>
                            <p className="text-lg">Your coffee is brewed by first roasting the green coffee beans</p>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Logos;