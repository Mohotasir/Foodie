import { Link, useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate();
    const handleNavitegate = ()=>{
        navigate(-1);
    }
    return (
        <div className="flex flex-col w-full h-screen justify-center items-center">
            <h1 className="text-6xl font-bold mulish">OPPS!!!!</h1>
            <p className="text-4xl py-8 font-semibold mulish">No Data Found!!!!!!!!!</p>
            <div>
              <button onClick={handleNavitegate} className="btn text-white bg-pink-800">GO Back</button>
               
            </div>
        </div>
    );
};

export default ErrorPage;