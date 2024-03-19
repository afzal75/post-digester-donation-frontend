import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";


const MainLayout = () => {
    return (
        <div>
            <div className="sticky top-0 z-50">
                <Navbar />
            </div>
            <Outlet />
        </div>
    );
};

export default MainLayout;