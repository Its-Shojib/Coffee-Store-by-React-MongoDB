import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";


const ErrorPage = () => {
    return (
        <div>
            <Header></Header>
            <div className="w-8/12 mx-auto">
                <div>
                    <Link to='/'>
                        <div className='flex items-center gap-3 text-2xl'>
                            <BiArrowBack />
                            <p>Back to home</p>
                        </div>
                    </Link>
                </div>
                <img src="/public/404/404.gif" alt="" />
            </div>

            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;