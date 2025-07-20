import React from 'react'
import Image from 'next/image'

interface Features {
  label: string;
  icon: string;
}

const features: Features[] = [
  { label: "4 Bed", icon: "/icons8-bed-50.png" },
  { label: "2 Bathroom", icon: "/icons8-bathtub-50.png" },
  { label: "6x7.5m²", icon: "/icons8-surface-64.png" },
]


const Header = () => {
  return (
   <div>
      <div className="relative w-full min-h-[400px] rounded-[20px] overflow-hidden px-4 md:px-8 py-10 md:py-16 md:max-w-6xl md:mx-auto md:-z-10">
  {/* Background Image with Overlay */}
  <Image
    src="/new-home-2409165_1280.jpg"
    alt="Modern home exterior"
    fill
    className="object-cover"
    priority
  />
  <div className="absolute inset-0 bg-black opacity-30"></div>
  
  {/* Content Container */}
  <div className="relative z-10 container mx-auto h-full flex gap-10  ">
    {/* Text Content - Left Side */}
    <div className="text-white w-full md:w-2/5 mb-8 md:mb-0 md:pr-8 md:mt-69">
      <h1 className="text-3xl md:text-3xl lg:text-5xl font-bold mb-4 drop-shadow-md">
        Discover Your Perfect Dream Home
      </h1>
      <p className="text-lg md:text-[18px] mb-6 drop-shadow-md max-w-lg">
        Whether you are looking for a cozy retreat, a modern apartment, or a spacious family house, we are here to guide you every step of the way
      </p>
    
    </div>
    
    {/* Card Form - Right Side */}
  <div className="bg-white shadow-lg rounded-[20px] p-4 mt-4 lg:w-[500px]  lg: ">
              <h1 className="text-black font-bold text-[30px]">
                Find your Best Property <br />
                What do you want!
              </h1>
  
              <p className="text-black mt-4 font-semibold">Please fill all the details</p>
              <form className="mt-4">
                <div className="flex flex-col gap-4">
                  <div className="w-full relative">
                    <label className="text-[#c7c7c7] font-semibold">Location</label>
                    <input
                      type="text"
                      placeholder="Enter your location"
                      className="w-full mt-2 border p-3 pl-10 pr-10 text-black font-semibold text-base rounded-full border-[#f4f4f4] focus:outline-none focus:ring-2 focus:ring-[#90cdd2] placeholder:text-sm"
                    />
                    <div className="absolute inset-y-0 left-3 top-8 flex items-center pointer-events-none">
                      <Image src="/icons8-location-64.png" alt="Location icon" width={20} height={20} />
                    </div>
                    <div className="absolute inset-y-0 right-3 top-8 flex items-center pointer-events-none">
                      <Image src="/icons8-dropdown-50.png" alt="Dropdown icon" width={16} height={16} />
                    </div>
                  </div>
  
                  <div className="relative w-full">
                    <label className="text-[#c7c7c7] font-semibold">Property Type</label>
                    <input
                      type="text"
                      placeholder="Apartment Name"
                      className="w-full mt-2 border p-3 pl-10 pr-10 text-black font-semibold text-base rounded-full border-[#f4f4f4] focus:outline-none focus:ring-2 focus:ring-[#90cdd2] placeholder:text-sm"
                    />
                    <div className="absolute inset-y-0 left-3 top-8 bg-black p-1 rounded-full h-6 w-6 flex items-center justify-center pointer-events-none">
                      <Image src="/icons8-home-50.png" alt="Home icon" width={16} height={16} />
                    </div>
                    <div className="absolute inset-y-0 right-3 top-8 flex items-center pointer-events-none">
                      <Image src="/icons8-dropdown-50.png" alt="Dropdown icon" width={16} height={16} />
                    </div>
                  </div>
  
                  <div className="flex flex-wrap gap-2">
                    {features.map((feature, index) => (
                      <div key={index} className="bg-[#f5f5f5] flex items-center justify-center gap-2 p-2 rounded-full">
                        <div className="bg-white p-1 rounded-full flex items-center justify-center">
                          <Image src={feature.icon} alt={feature.label} width={14} height={14} />
                        </div>
                        <span className="text-black font-semibold text-sm">{feature.label}</span>
                      </div>
                    ))}
                  </div>
  
                  <div className="relative w-full">
                    <label className="text-[#c7c7c7] font-semibold">Max Price</label>
                    <input
                      type="text"
                      placeholder="Enter your Amount"
                      className="w-full mt-2 border p-3 pl-10 pr-10 text-black font-semibold text-base rounded-full border-[#f4f4f4] focus:outline-none focus:ring-2 focus:ring-[#90cdd2] placeholder:text-sm"
                    />
                    <div className="absolute inset-y-0 left-3 top-8 bg-black w-6 h-6 rounded-full flex items-center justify-center pointer-events-none">
                      <Image src="/icons8-price-30 (1).png" alt="Price icon" width={14} height={14} />
                    </div>
                    <div className="absolute inset-y-0 right-3 top-8 flex items-center pointer-events-none">
                      <Image src="/icons8-dropdown-50.png" alt="Dropdown icon" width={16} height={16} />
                    </div>
                  </div>
  
                  <button className="bg-black text-white font-semibold text-lg rounded-full w-full p-3 hover:bg-gray-800 transition duration-300 mt-2">
                    Search
                  </button>
                </div>
              </form>
            </div>
  </div>
</div>        
   </div>
  )
}

export default Header
