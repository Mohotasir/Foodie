import { Outlet } from "react-router-dom";
import Nav from "./navBar/Nav";

const Home = () => {
    return (
        <div className="">
             <div className="h-[100px]">
             <Nav></Nav>
             </div>
             <Outlet></Outlet>
            
        </div>
    );
};

export default Home;