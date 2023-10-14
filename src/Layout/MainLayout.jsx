import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const MainLayout = () => {
    return (
        <div>
            <div className="max-w-screen-2xl mx-auto">
                <Header></Header>
            </div>
            <div className="max-w-screen-2xl mx-auto">
                    <Outlet></Outlet>
            </div>
            <div className="max-w-screen-2xl mx-auto">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;