import React from 'react'
import { FaPenNib } from "react-icons/fa";
import { TfiLocationPin } from "react-icons/tfi";
import { AiOutlineArrowUp } from "react-icons/ai";
import { IoMdNavigate } from "react-icons/io";
import { CiCircleInfo } from "react-icons/ci";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className='bg-[#ba0c2f] px-16y py-16y p-16 flex flex-col gap-10 text-white'>
        <div className='flex gap-8 text-white'>
        <div className='flex flex-col gap-8 w-[50%] border-r-[0.5px] border-white'>
            <div>
                <h1 className='text-sm font-bold'>BAYLOR SCHOOL</h1>
            </div>

            <div>
                <span>A co-ed independent college preparatory boarding and day school for Grades 6 -12, in Chattanooga Tennessee.</span>
            </div>

            <div className='flex justify-around'>
                <div className='flex gap-3 hover:mt-[-0.4rem] transition-all ease-in-out delay-75'>
                    <a href="#" className='flex gap-3 cursor-pointer'>
                    <CiCircleInfo className='text-2xl font-semibold'/>
                    <span>INQUIRE</span>
                    </a>
                </div>
                <div className='flex gap-3 hover:mt-[-0.4rem] transition-all ease-in-out delay-75'>
                    <a href="#" className='flex gap-3 cursor-pointer'>
                    <TfiLocationPin className='text-2xl font-semibold'/>
                    <span>VISIT</span>
                    </a>
                </div>
                <div className='flex gap-3 hover:mt-[-0.4rem] transition-all ease-in-out delay-75'>
                    <a href="#" className='flex gap-3 cursor-pointer'>
                    <FaPenNib className='text-2xl font-semibold'/>
                    <span>APPLY</span>
                    </a>
                </div>
            </div>
        </div>

        <div className='w-[20%] flex flex-col gap-8'>
            <div>
                <h4 className='text-sm font-bold'>CONTACT US</h4>
            </div>

            <div className='flex flex-col gap-2'>
                <span>Baylor School</span>
                <span>171 Baylor School Road</span>
                <span>Chattanooga, TN 37405</span>
            </div>

            <div className='flex gap-3'>
                <span>T: 423.267.8505</span>
            </div>

            <div>
                <a href="#" className='border-[1px] border-white px-4 py-2 rounded-3xl hover:bg-[rgba(0,0,0,0.9)] transition-all ease-in-out delay-75 hover:text-white text-xs font-semibold hover:border-[1px] hover:border-[rgba(0,0,0,0.9)]'>GET DIRECTION</a>
            </div>
        </div>

        <div className='w-[20%] flex flex-col gap-4'>
            <div>
                <h4 className='text-sm font-bold'>USEFUL LINKS</h4>
            </div>
            <div className='flex flex-col gap-3'>
                <a href="#">Calendar</a>
                <a href="#">Campus Map</a>
                <a href="#">Careers</a>
                <a href="#">Staff/Directory</a>
                <a href="#">myBaylor(login)</a>
                <a href="#">Spirit Store</a>
                <a href="#">Sitemap</a>
            </div>

            <div className='flex gap-4 mt-8'>
                <a href="#" className=''>
                <TiSocialFacebook className='text-xl transition-all ease-in-out delay-[0.3s] hover:scale-[1.3]'/>
                </a>
                <a href="#">
                <TiSocialTwitter className='text-xl transition-all ease-in-out delay-[0.3s] hover:scale-[1.3]'/>
                </a>
                <a href="#">
                <TiSocialYoutube className='text-xl transition-all ease-in-out delay-[0.3s] hover:scale-[1.3]'/>
                </a>
                <a href="#">
                <TiSocialLinkedin className='text-xl transition-all ease-in-out delay-[0.3s] hover:scale-[1.3]'/>
                </a>
                <a href="#">
                <BsInstagram className='transition-all ease-in-out delay-[0.3s] hover:scale-[1.3]'/>
                </a>
            </div>
        </div>
        </div>

        <div className='flex justify-center items-center border-2y border-whitey h-[10vh]'>
            <div className='flex justify-center items-center w-[50px] h-[50px] rounded-full border-[1px] border-white'>
                <IoMdNavigate className='text-xl'/>
            </div>
        </div>

        <div className='flex justify-center items-center border-2y border-whitey h-[10vh]'>
            <h1 className='text-3xl font-bold'>BaylorLeads</h1>
        </div>

        <div className='flex justify-center items-center border-2y border-whitey h-[10vh]'>
            <span className='text-center text-xs'>Baylor does not discriminate on the basis of race, color, religion, sex, gender, sexual orientation, national origin, ancestry, age, marital status, disability, or any other characteristic protected by law. This policy applies to, but is not limited to, educational policies, admission, financial aid, hiring and employment practices, use of school facilities, athletics, and other school-administered programs.</span>
        </div>
    </footer>
  )
}

export default Footer
