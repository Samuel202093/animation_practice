import React from 'react'
import { FaRegUser } from "react-icons/fa";
import { TiArrowRightThick } from "react-icons/ti";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearch } from "react-icons/io5";
import logo from '../assets/img/logo.svg'

const NavBar = () => {
  return (
    <nav className='flex justify-between h-[15vh] p-4 border-2y border-b-red-950y'>
        <div className='flex justify-center items-center'>
            {/* <h3 className='text-[#ba0c2f]'>Baylor School </h3> */}
            <img src={logo} alt="" />
        </div>

        <div className='w-[40%] px-3 h-[10vh] flex justify-between border-2y border-red-600y'>
            <div className='flex justify-between w-[35%] px-3 h-[10vh] border-[2px]y border-yellow-400y'>
                <div className='flex justify-center items-center h-[40px] w-[40px] rounded-[50%] border-[2px]y border-emerald-100y transition-all ease-in-out delay-[0.3s] bg-[rgba(0,0,0,0.1)] cursor-pointer hover:scale-[1.2] mt-2'>
                    <FaRegUser/>
                </div>

                <div className='flex justify-center items-center text-[#ba0c2f]'>
                    <span className='mr-1 text-xs uppercase font-semibold italic'>MyBaylor</span>
                    <TiArrowRightThick/>
                </div>

            </div>
            <div className='flex justify-center items-center ml-[3rem]'>
            <div className='flex justify-center items-center cursor-pointer transition-all ease-in-out delay-[0.2s] w-[40px] h-[40px] rounded-[50%] bg-[rgba(0,0,0,0.2)] mr-[2rem] hover:scale-[1.3] hover:bg-[#ba0c2f] hover:text-white'>
                    <IoSearch className='text-[1.2rem]'/>
            </div>
            </div>

            <div className='border-[2px]y border-blacky w-[40%] flex justify-center items-center px-4 '>
                {/* <div className='flex justify-center items-center w-[40px] h-[40px] rounded-[50%] bg-[rgba(0,0,0,0.2)] mr-[2rem]'>
                    <IoSearch className='text-[1.2rem]'/>
                </div> */}
                <div className='lineContainer border-b-[1px] border-[rgba(0,0,0,0.4)] w-[15%] h-[1vh] mt-[-0.5rem] mr-[1rem]'></div>
                    {/* <hr className='w-[50%'/> */}
                <div className=''>
                    <h2 className='text-xs font-semibold'>MENU</h2>
                </div>
                <div className='hamburgerContainer flex justify-center cursor-pointer transition-all ease-in-out delay-[0.3s] items-center ml-4 h-[40px] w-[40px] rounded-[50%] bg-[rgba(0,0,0,0.7)] text-white hover:bg-[#ba0c2f] hover:text-white hover:scale-[1.3] hover:border-[1px] hover:border-[rgba(0,0,0,0.8)]'>
                    <RxHamburgerMenu/>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default NavBar
