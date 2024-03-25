import { Outlet } from "react-router-dom";
import Nav from "./navBar/Nav";
import Footer from "./footer/Footer";

const Home = () => {
    return (
        <div className="">
             <div className="h-[100px]">
             <Nav></Nav>
             </div>
             <Outlet></Outlet>
             <Footer></Footer>
            
        </div>
    );
};

export default Home;