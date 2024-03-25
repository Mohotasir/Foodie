import React, { useState } from 'react';
import { FiMenu } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineShoppingCart } from "react-icons/ai";
//import './nav.css'
const Nav = () => {
  const routes = [
    { name: "Home", path: "/", id: "home" },
    { name: "About", path: "/about", id: "about" },
    { name: "Contact", path: "/contact", id: "contact" },
    { name: "Meal", path: "/meal", id: "meal" },
    { name: "Statistics", path: "/statistics", id: "stat" },

  ];
  const [showBar, setShowBar] = useState(false);
  //const [active,setActive] =  useState(false);
  const handlebar = function () {
    setShowBar(!showBar);
  }

  return (
    <div>
      <nav className=' py-0 bg-white md:py-8 fixed w-full z-10 mulish md:flex md:justify-between  md:px-6 shadow-md'>
        <div className='flex justify-between items-center px-3'>
          <div className=' md:bg-secondary md:w-[40%] rounded-md'>
            <h1 className='text-3xl font-extrabold text-secondary'><span className='md:text-white'>FAV</span>FOOD</h1>
          </div>
          <div className='text-3xl relative md:hidden'>
            <p className='absolute -top-2 md:-top-4 -left-3  rounded-full p-1 text-seconddary text-sm md:text-lg'>0</p>
            <AiOutlineShoppingCart />
          </div>
          <div onClick={handlebar} className='text-3xl flex justify-end p-3 md:hidden'>
            {
              (!showBar) ? <FiMenu /> : <RxCross1 />
            }

          </div>

        </div>

        <ul className={`duration-1000 h-[100vh] w-[50%] md:h-auto pt-12 md:pt-0 bg-indigo-200 md:bg-white rounded-lg absolute md:relative flex  flex-col md:flex-row justify-start md:justify-center items-center 
                 ${showBar ? 'left-0' : '-left-[280px] md:left-0'} `}>
          {
            routes.map(route => <li key={route.id} className={`navList py-3 md:py-0  text-lg  md:text-base border-b-2 md:border-none border-1 w-full md:w-auto md:px-8 text-center `}><NavLink to={route.path}
              style={({ isActive}) => {
                return {
                  color: isActive && '#FF00C3',
                };
              }} >{route.name}</NavLink>
            </li>)
          }
        </ul>
        <div className='text-3xl relative hidden md:flex '>
          <p className='absolute -top-4 -left-3  rounded-full p-1 text-secondary md:text-2xl font-bold'>0</p>
          <AiOutlineShoppingCart />
        </div>
      </nav>

    </div>
  );
};

export default Nav;