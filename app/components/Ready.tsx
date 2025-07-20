import React from 'react'
import Image  from 'next/image'


const Ready = () => {
  return (
    <div className="mt-15">
  <div className='bg-[#90cdd2] p-6 sm:p-12 h-auto min-h-[400px] -z-10 flex items-center justify-center relative overflow-hidden'>
    {/* Left side images - only show on larger screens */}
    <div className='hidden md:flex absolute left-10 xl:left-10 flex-col gap-8 lg:gap-44'>
      <Image 
        src={'/d4f44b8ccf31e8343adebca4183c4865.jpg'} 
        alt='' 
        width={100}
        height={80}
        className='rounded-lg h-[60px] w-[80px] sm:h-[80px] sm:w-[100px] object-cover'
      />
      <Image 
        src={'/7788324f7f97a696a1cde17c1940006e.jpg'} 
        alt='' 
        width={100}
        height={80}
        className='rounded-lg h-[60px] w-[80px] sm:h-[80px] sm:w-[100px] object-cover ml-20'
      />
    </div>

    {/* Main content container */}
    <div className='flex flex-col items-center text-center z-10 w-full px-4 sm:px-0'>
      {/* Stacked images - centered above text on mobile */}
      <div className="relative h-[60px] w-[120px] mb-6 md:mb-0 md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:-mt-30">
        {/* Back-left image */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 z-0">
          <Image 
            src={'/7dbb92eaf7f58d767c92151f57bfa05e.jpg'} 
            alt="" 
            width={40}
            height={40}
            className="rounded-full h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] border border-white"
          />
        </div>
        
        {/* Middle (prominent) image */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <Image 
            src={'/7dbb92eaf7f58d767c92151f57bfa05e.jpg'} 
            alt="" 
            width={60}
            height={60}
            className="rounded-full h-[40px] w-[40px] sm:h-[50px] sm:w-[50px] border-2 border-white shadow-md"
          />
        </div>
        
        {/* Back-right image */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 z-0">
          <Image 
            src={'/7dbb92eaf7f58d767c92151f57bfa05e.jpg'} 
            alt="" 
            width={40}
            height={40}
            className="rounded-full h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] border border-white"
          />
        </div>
      </div>

      {/* Text content */}
      <div className=' md:mt-12'>
        <h1 className='font-bold max-lg-md text-[30px] sm:text-xl md:text-2xl   lg:text-4xl mb-3 sm:mb-4'>
          Ready to buy, sell, or rent? <br /> 
          We&apos;re here to guide you every step of the way
        </h1>
        <p className='  mx-auto  text-center text-xs sm:text-sm md:text-[14px] mt-2 sm:mt-3'>
          Join our vibrant tour community and connect with fellow <br />travel-enthusiasts! 
          Share experiences, discover hidden parts.            
        </p>
        <button className='bg-black py-2 px-4 mt-4 sm:mt-6  md:mt-7 rounded-full text-xs sm:text-sm text-white'>
          Search your property
        </button>
      </div>
    </div>

    {/* Right side images - only show on larger screens */}
    <div className='hidden md:flex absolute right-2 xl:right-10 flex-col gap-8 lg:gap-44'>
      <Image 
        src={'/da6309c9db6c4d8af2de9f46626dc314.jpg'} 
        alt='' 
        width={100}
        height={80}
        className='rounded-lg h-[60px] w-[80px] sm:h-[80px] sm:w-[100px] object-cover'
      />
      <Image 
        src={'/73f4fc255b81c47a77f2af814e4a01d5.jpg'} 
        alt='' 
        width={100}
        height={80}
        className='rounded-lg mr-20 h-[60px] w-[80px] sm:h-[80px] sm:w-[100px] object-cover '
      />
    </div>
  </div>
</div>
  )
}

export default Ready
