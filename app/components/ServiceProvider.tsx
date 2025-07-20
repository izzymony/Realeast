import React from 'react'
import Image from 'next/image'

const ServiceProvider = () => {
  return (
   <div>
  <section className="mt-16 bg-[#fafafa] p-6 rounded-lg py-20 md:p-12">
    <div className="flex gap-4 ">
      <h1 className="text-black text-[30px] font-bold">Build Service Provider</h1>
      <div className="flex items-center gap-1 mt-3 sm:mt-0">
        <span className="text-[#91c1c2] font-medium text-[24px]">month</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 9L12 15L18 9" stroke="#91c1c2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>

    <div className="grid grid-cols-1 mt-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {/* Card 1 - Architect */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow relative">
        {/* Rating Tag */}
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1 z-10 shadow-sm">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFD700" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="#FFD700" strokeWidth="1"/>
          </svg>
          <span className="text-sm text-black font-medium">4.8</span>
        </div>
        <Image
          src="/083dd1764351dc30d981fef31467a6c1.jpg"
          alt="Architect working"
          width={320}
          height={200}
          className="w-full h-48 object-cover"
        />
        <div className="p-4 relative">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
            <Image
              src="/5e8700424201eb225c9a7dea4c3ec7f4.jpg"
              alt="Architect profile"
              width={48}
              height={48}
              className="w-12 h-12 border-2 border-white rounded-full object-cover"
            />
          </div>
          <p className="text-black font-medium text-center mt-4">David Wilson</p>
          <p className="text-gray-500 text-sm text-center">Architect</p>
        </div>
      </div>

      {/* Card 2 - Interior Designer */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow relative">
        {/* Rating Tag */}
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1 z-10 shadow-sm">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFD700" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="#FFD700" strokeWidth="1"/>
          </svg>
          <span className="text-sm text-black font-medium">4.9</span>
        </div>
        <Image
          src="/da6309c9db6c4d8af2de9f46626dc314.jpg"
          alt="Interior designer"
          width={320}
          height={200}
          className="w-full h-48 object-cover"
        />
        <div className="p-4 relative">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
            <Image
              src="/478e7e03fad29ec0dd037ebc135eaaa6.jpg"
              alt="Designer profile"
              width={48}
              height={48}
              className="w-12 h-12 border-2 border-white rounded-full object-cover"
            />
          </div>
          <p className="text-black font-medium text-center mt-4">Sarah Johnson</p>
          <p className="text-gray-500 text-sm text-center">Interior Designer</p>
        </div>
      </div>

      {/* Card 3 - Contractor */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow relative">
        {/* Rating Tag */}
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1 z-10 shadow-sm">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFD700" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="#FFD700" strokeWidth="1"/>
          </svg>
          <span className="text-sm text-black font-medium">4.7</span>
        </div>
        <Image
          src="/73f4fc255b81c47a77f2af814e4a01d5.jpg"
          alt="Construction worker"
          width={320}
          height={200}
          className="w-full h-48 object-cover"
        />
        <div className="p-4 relative">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
            <Image
              src="/25338f488af2c45912c15ebab325e363.jpg"
              alt="Agent/provider"
              width={48}
              height={48}
              className="w-12 h-12 border-2 border-white rounded-full object-cover"
            />
          </div>
          <p className="text-black font-medium text-center mt-4">Michael Brown</p>
          <p className="text-gray-500 text-sm text-center">General Contractor</p>
        </div>
      </div>

      {/* Card 4 - Landscape Designer */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow relative">
        {/* Rating Tag */}
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1 z-10 shadow-sm">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFD700" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="#FFD700" strokeWidth="1"/>
          </svg>
          <span className="text-sm text-black font-medium">4.6</span>
        </div>
        <Image
          src="/7788324f7f97a696a1cde17c1940006e.jpg"
          alt="Landscape designer"
          width={320}
          height={200}
          className="w-full h-48 object-cover"
        />
        <div className="p-4 relative">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
            <Image
              src="/5e8700424201eb225c9a7dea4c3ec7f4.jpg"
              alt="Landscape designer profile"
              width={48}
              height={48}
              className="w-12 h-12 border-2 border-white rounded-full object-cover"
            />
          </div>
          <p className="text-black font-medium text-center mt-4">Emily Davis</p>
          <p className="text-gray-500 text-sm text-center">Landscape Designer</p>
        </div>
      </div>
    </div>
  </section>
</div>
  )
}

export default ServiceProvider
