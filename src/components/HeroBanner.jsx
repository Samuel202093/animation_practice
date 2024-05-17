import React from 'react'

const HeroBanner = () => {
  return (
    <section className='h-[100vh] border-2y border-blue-800y border-b-[1px] border-[rgba(0,0,0,0.2)] mt-4'>
        <div className='absolute top-[53%] h-[300px] w-[300px] bg-red-800 -z-10'></div>
        <div className='bgContainer h-[80vh] w-[98%] mx-auto bg-blacky text-white flexy flex-coly gap-4y justify-centery items-centery z-20'>
            <div className='absolute flex flex-col gap-4 justify-center items-center z-50 top-[50%] h-[35vh] w-[97.8%] bg-[rgba(0,0,0,0)]'>
                <h1 className='text-[3.5rem]'>Are You Ready?</h1>
                <span>Because this is a school like none other...</span>
            </div>
            {/* <h1 className='text-[3.5rem]'>Are You Ready?</h1>
                <span>Because this is a school like none other...</span> */}
        </div>
      
    </section>
  )
}

export default HeroBanner
