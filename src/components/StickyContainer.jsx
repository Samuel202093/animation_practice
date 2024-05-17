import React from 'react'
import { TbPentagonFilled } from "react-icons/tb";

const StickyContainer = () => {
  return (
    <section className='min-h-[80vh] overflow-y-hidden'>
        <h1 className='curious'>BE CURIOUS</h1>

        <div className='flex'>
            <div className='w-[50%] h-[40vh] bg-[#f2f4f6]'></div>

            {/* make the difference wrapper */}
            <div className='flex justify-center items-center w-[50%] h-[200px] bg-[#ffffff]'>
                <div className='flex flex-col justify-center items-center gap-6 w-[400px] h-[400px] border-2y border-red-700y'>
                    <h1 className='text-4xl font-semibold text-[#252626] font-serif'>Make the most of <br /><span className='text-[#ba0c2f]'>every moment</span></h1>

                    <p className='text-center text-xl text-[#4e5150] font-serif'>Make friends, create memories, and experience the true value of being part of something more than yourself. Grasp every opportunity and live every moment to the fullest.</p>

                    <span className='span-pentagon bg-[#ba0c2f] border-[1px] border-[#ba0c2f] px-2 py-3 mt-4'></span>

                    {/* <TbPentagonFilled className='pentagon-icon text-[#ba0c2f] text-4xl mt-4'/> */}

                    {/* <div className='pentagon'></div> */}
                </div>
            </div>
        </div>
    </section>
  )
}

export default StickyContainer
