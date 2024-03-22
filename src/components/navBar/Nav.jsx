import React, { useState } from 'react';
import { FiMenu } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import { Link } from 'react-router-dom';
const Nav = () => {
    const routes = [
        {name: "Home", path: "/", id: "home"},
        {name: "About", path: "/about", id: "about"},
        {name: "Contact", path: "/contact", id: "contact"},
        {name: "Meal", path: "/meal", id: "meal"},
        {name: "Portfolio", path: "/portfolio", id: "portfolio"}
      ];
      const [showBar ,setShowBar] = useState(false);
      const handlebar = function(){
         setShowBar(!showBar);
      }

    return (
      <div>
        <nav className='py-0 bg-white md:py-8 fixed w-full z-10 mulish md:flex md:justify-between shadow-md'>
           <div className='flex justify-between items-center px-3'>
           <div >
                <h1 className='text-3xl font-extrabold text-secondary'>FOODIE</h1>
            </div>
            <div onClick={handlebar} className='text-3xl flex justify-end p-3 md:hidden'>
              {
                (!showBar) ?  <FiMenu /> :<RxCross1 />
              }
              
            </div>
           </div>
            <ul className={`duration-1000 h-[100vh] w-[50%] md:h-auto pt-12 md:pt-0 bg-indigo-200 md:bg-white rounded-lg absolute md:relative flex  flex-col md:flex-row justify-start md:justify-center items-center 
                 ${showBar? 'left-0' : '-left-[280px] md:left-0'} `}>
            {
                routes.map(route => <li key={route.id} className='py-3 md:py-0 md:mr-8 text-lg  md:text-base border-b-2 md:border-none border-1 w-full text-center'><Link to={route.path}>{route.name}</Link>
                 </li>)
            }
            </ul>
        </nav>
          
        </div>
    );
};

export default Nav;