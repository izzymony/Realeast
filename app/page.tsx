'use client'
import Image from "next/image";
import React, { useState } from 'react'
import Nav from "./components/Nav";
import { FiFilter } from 'react-icons/fi'
import { Check } from "lucide-react"
import PropertyGrid from "./components/PropertyGrid";
import ServiceProvider from "./components/ServiceProvider";
import Testimonials from "./components/Testimonials";
import Ready from "@/app/components/Ready"
import Footer from "./components/Footer";
import Header from "./components/Header"

interface Features {
  label: string;
  icon: string;
}

interface Properties {
  price: string;
  location: string;
  title: string;
  image: string;
  feature: { label: string; icon: string }[];
}

const properties: Properties[] = [
  {
    price: "$2,400",
    location: "6391 Elgin St. Celina, Delaware",
    title: "Rosewood Manor",
    image: "/house-2943878_1280.jpg",
    feature: [
      { label: "4 Bed", icon: "/icons8-bed-50 (1).png" },
      { label: "2 Bath", icon: "/icons8-bathtub-24.png" },
      { label: "6x5m²", icon: "/icons8-surface-64 (1).png" },
    ],
  },
  {
    price: "$850,000",
    location: "Los Angeles, CA",
    title: "Modern Home in Beverly Hills",
    image: "/house-431604_1280.jpg",
    feature: [
      { label: "4 Bed", icon: "/icons8-bed-50 (1).png" },
      { label: "2 Bath", icon: "/icons8-bathtub-24.png" },
      { label: "3500 sqft", icon: "/icons8-surface-64 (1).png" },
    ],
  },
  {
    price: "$60,000",
    location: "Miami, FL",
    title: "Beachfront Condo",
    image: "/residence-2219972_1280.jpg",
    feature: [
      { label: "4 Bed", icon: "/icons8-bed-50 (1).png" },
      { label: "2 Bath", icon: "/icons8-bathtub-24.png" },
      { label: "3500 sqft", icon: "/icons8-surface-64 (1).png" },
    ],
  },
  {
    price: "$4,000",
    location: "Austin, TX",
    title: "Charming Family House",
    image: "/house-431604_1280 (1).jpg",
    feature: [
      { label: "4 Bed", icon: "/icons8-bed-50 (1).png" },
      { label: "2 Bath", icon: "/icons8-bathtub-24.png" },
      { label: "3500 sqft", icon: "/icons8-surface-64 (1).png" },
    ],
  },
  {
    price: "$400,000",
    location: "Austin, TX",
    title: "Charming Family House",
    image: "/gardening-3248249_1280.jpg",
    feature: [
      { label: "4 Bed", icon: "/icons8-bed-50 (1).png" },
      { label: "2 Bath", icon: "/icons8-bathtub-24.png" },
      { label: "3500 sqft", icon: "/icons8-surface-64 (1).png" },
    ],
  },
]

const features: Features[] = [
  { label: "4 Bed", icon: "/icons8-bed-50.png" },
  { label: "2 Bathroom", icon: "/icons8-bathtub-50.png" },
  { label: "6x7.5m²", icon: "/icons8-surface-64.png" },
]

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [ , setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsVisible(!isVisible);
    setIsOpen(true);
  }

  const closeMenu = () => {
    setIsVisible(false);
    setIsOpen(false);
  }

  return (
    <div className="">
      <Nav />

      <main className="px-4 mt-20">

        {/* Header Mobile */}
        <header className="md:hidden">
          <div className="mt-5">
            <div className="relative w-full h-[300px]">
              <Image
                src="/new-home-2409165_1280.jpg"
                alt="Modern home exterior"
                width={800}
                height={800}
                className="w-full rounded-[20px] h-[300px] object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black rounded-[20px] opacity-30"></div>
            </div>
            <div className="absolute top-48 left-4 right-4 p-3">
              <h1 className="text-white font-bold text-3xl">Discover Your Perfect Dream Home</h1>
              <p className="text-white text-sm mt-2">
                Whether you are looking for a cozy retreat, a modern apartment, or a spacious family house, we are here to guide you every step of the way
              </p>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-[20px] p-4 mt-4  md:w-[600px] md:mx-auto">
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
        </header>

       <section className="hidden md:block">
        <Header />
       </section>

        {/* Property Listing */}
        <section className="mt-10 md:max-w-6xl md:mx-auto">
          <h1 className="text-black font-bold text-[30px]">Popular Listing</h1>
          <div className="flex gap-4 items-center justify-between mt-3">
            <div className="relative w-full max-w-lg md:hidden">
              <input
                type="text"
                placeholder="Enter your location"
                className="w-full mt-2 border p-3 pl-10 pr-10 text-black font-semibold text-base rounded-full border-[#f4f4f4] focus:outline-none focus:ring-2 focus:ring-[#90cdd2] placeholder:text-sm"
              />
              <div className="absolute inset-y-0 left-3 top-8 flex items-center pointer-events-none">
                <div className="bg-black h-6 w-6 p-1 rounded-full flex items-center -mt-6 justify-center">
                  <Image src="/icons8-location-50 (1).png" alt="Location icon" width={16} height={16} />
                </div>
              </div>
              <div className="absolute inset-y-0 right-3 top-8 flex -mt-6 items-center pointer-events-none">
                <Image src="/icons8-dropdown-50.png" alt="Dropdown icon" width={16} height={16} />
              </div>
            </div>
            <button
              className="bg-white w-fit mt-2 rounded-full shadow-lg p-3 flex items-center justify-center md:hidden hover:bg-gray-50 transition"
              onClick={toggleMenu}
              aria-label="Open menu"
            >
              <Image src="/icons8-menu-16.png" width={16} height={16} alt="Menu icon" />
            </button>
          </div>

          <button className="bg-black text-white px-4 py-2 mt-3 rounded-full flex items-center gap-2 hover:bg-gray-800 transition md:hidden">
            <FiFilter size={20} />
            <span className="font-semibold">Filter</span>
          </button>

          {/* Dropdown Menu */}
          <div className={`bg-white shadow-lg rounded-[20px] pt-8 absolute right-4 z-50 w-[200px] md:hidden p-4 ${isVisible ? 'block' : 'hidden'}`}>
            <button
              className="absolute  top-2 right-2 p-2 md:hidden"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <Image src="/icons8-cancel-50 (4).png" alt="Close menu" width={24} height={24} className="-mt-3" />
            </button>
            <div className="flex flex-col gap-2">
              {['House', 'Hotel', 'Villa', 'Apartment'].map((item) => (
                <button
                  key={item}
                  className="bg-white w-full rounded-full p-2 border border-gray-200 hover:bg-gray-50 transition"
                >
                  <div className="flex justify-center items-center gap-2">
                    <Image
                      src="/icons8-home-48.png"
                      alt={`${item} icon`}
                      width={14}
                      height={14}
                      className="object-contain"
                    />
                    <p className="text-sm text-[#a4a5a6]">{item}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Desktop listing header */}
          <div className="flex gap-4 items-center justify-between mt-3">
            <div className="hidden md:block relative w-full max-w-lg">
              <input
                type="text"
                placeholder="Enter your location"
                className="w-full mt-2 border p-3 pl-10 pr-10 text-black font-semibold text-base rounded-full border-[#f4f4f4] focus:outline-none focus:ring-2 focus:ring-[#90cdd2] placeholder:text-sm"
              />
              <div className="absolute inset-y-0 left-3 top-8 flex items-center pointer-events-none">
                <div className="bg-black h-6 w-6 p-1 rounded-full flex items-center -mt-6 justify-center">
                  <Image src="/icons8-location-50 (1).png" alt="Location icon" width={16} height={16} />
                </div>
              </div>
              <div className="absolute inset-y-0 right-3 top-8 flex -mt-6 items-center pointer-events-none">
                <Image src="/icons8-dropdown-50.png" alt="Dropdown icon" width={16} height={16} />
              </div>
            </div>
          <div className="hidden  md:flex gap-4 ">
              {['House', 'Hotel', 'Villa', 'Apartment'].map((item) => (
                <button
                  key={item}
                  className="bg-white w-fit rounded-full p-2 border border-gray-200 hover:bg-gray-50 transition"
                >
                  <div className="flex justify-center items-center gap-2">
                    <Image
                      src="/icons8-home-48.png"
                      alt={`${item} icon`}
                      width={14}
                      height={14}
                      className="object-contain"
                    />
                    <p className="text-sm text-[#a4a5a6]">{item}</p>
                  </div>
                </button>
              ))}
            </div>
            <button className="hidden md:flex bg-black text-white px-4 py-2 mt-3 rounded-full flex items-center gap-2 hover:bg-gray-800 transition ">
            <FiFilter size={20} />
            <span className="font-semibold">Filter</span>
          </button>
          </div>
           
          {/* Property Grid */}
          <section className="">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-5">
            {properties.map((property, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200">
                <div className="relative aspect-video">
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <p className="text-black font-bold text-xl">
                      {property.price}
                      <span className="text-gray-400 text-sm ml-1">/month</span>
                    </p>
                   {/*  <button className="p-2 border-2 border-black hover:bg-black hover:text-white transition-colors px-4 py-1 rounded-full  w-[120px]  text-sm font-medium">
                      View Deal
                    </button> */}
                     <button className="border-2 border-black p-2 text-black rounded-full w-[120px]  -mt-1 text-[17px] font-semibold">
              View Deal
            </button>
                  </div>
                  <h2 className="text-lg font-semibold text-gray-900 line-clamp-1">{property.title}</h2>
                  <p className="text-gray-500 text-sm mt-1 line-clamp-1">{property.location}</p>
                  <hr className="my-4 border-gray-100" />
                  <div className="flex flex-wrap gap-3">
                    {property.feature.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-1.5">
                        <Image
                          src={feature.icon}
                          alt={feature.label}
                          width={14}
                          height={14}
                          className="opacity-60"
                        />
                        <span className="text-gray-500 text-xs">{feature.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          </section>  
          <div className="text-center mt-6">
            <button className="bg-black font-semibold text-white py-3 px-6 rounded-full hover:bg-gray-800 transition w-full sm:w-auto">
              View All Properties
            </button>
          </div>
        </section>

        {/* Video Section */}
        <section className="mt-16">
          <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-lg overflow-hidden">
            <Image
              src="/large-home-389271_1280.jpg"
              alt="Luxury home tour"
              fill
              className="object-cover"
            />
            <button
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                         backdrop-blur-sm bg-white/10 border border-white rounded-full p-4
                         hover:bg-white/20 transition"
              aria-label="Play video"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        </section>

        {/* How it works */}
        <section className="mt-16 md:max-w-5xl mx-auto">
          <div className="text-center lg:max-w-md  mx-auto">
            <h1 className="text-black font-bold text-[30px]">How It Works</h1>
            <div className="flex items-center gap-4 px-4 mt-4">
              <div className="flex-grow h-px bg-[#a4a5a6] "></div>
              <div className="text-center px-2 py-1 text-xs font-medium rounded-full text-black bg-[#f2f2f2]">
                Simple Steps
              </div>
              <div className="flex-grow h-px bg-[#a4a5a6] "></div>
            </div>
          </div>
          <section className="">
          {/* Buyers Section */}
          <div className="mt-8">
            <div className="bg-[#90cdd2] p-2 w-full font-semibold rounded-lg text-[17px] text-[#0b1f28] mb-4">Buyers</div>
            <div className="bg-white border-2 rounded-lg border-gray-200 p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((step) => (
                <div key={`buyer-${step}`} className="bg-white p-4  rounded-lg border-gray-200">
                  <div className="flex items-center gap-4">
                    <div className="bg-[#f2f2f2] p-2 h-10 w-10 text-lg text-center rounded-full font-bold text-[#0b1f28] flex-shrink-0">
                      {step}
                    </div>
                    {step !== 3 && <div className="flex-grow h-px bg-[#a4a5a6]"></div>}
                  </div>
                  <div className="mt-4">
                    <h2 className="text-xl font-bold text-[#0b1f28]">
                      {step === 1 ? 'Search & Discover' : step === 2 ? ' Connect & Visit' : 
                 'Finalize & Buy' }
                    </h2>
                    <p className="text-[#a4a5a6] mt-2">
                      {step === 1 ? 'Users search properties based on their preferences (location, budgets, and types) and explore detailed listings' :
                 step === 2 ? 'Users connect with sellers or agents tours ' :
                 'Navigate terms, finalize paperworks , and own property'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            </div>
          </div>

          {/* Sellers Section */}
          <div className="mt-8">
            <div className="bg-[#90cdd2] p-2 w-full font-semibold rounded-lg text-[17px] text-[#0b1f28] mb-4">Sellers</div>
            <div className="bg-white border-2 rounded-lg p-3 border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((step) => (
                <div key={`seller-${step}`} className="bg-white p-4 rounded-lg ">
                  <div className="flex items-center gap-4">
                    <div className="bg-[#f2f2f2] p-2 h-10 w-10 text-lg text-center rounded-full font-bold text-[#0b1f28] flex-shrink-0">
                      {step}
                    </div>
                    {step !== 3 && <div className="flex-grow h-px bg-[#a4a5a6]"></div>}
                  </div>
                  <div className="mt-4">
                    <h2 className="text-xl font-bold text-[#0b1f28]">
                      {step === 1 ? 'Search & Discover' : step === 2 ? ' Connect & Visit' : 
                 'Finalize & Buy' }
                    </h2>
                    <p className="text-[#a4a5a6] mt-2">
                       {step === 1 ? 'Users search properties based on their preferences (location, budgets, and types) and explore detailed listings' :
                 step === 2 ? 'Users connect with sellers or agents tours ' :
                 'Navigate terms, finalize paperworks , and own property'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            </div>
          </div>
          </section>
        </section>

        {/* Why work with us */}
        <section className="mt-16">
          <div className="bg-[#edf9fa] p-6 rounded-lg max-w-6xl mx-auto">
            <h1 className="text-black font-bold text-[30px] text-center mb-8">Why Work With Us?</h1>

            <div className="overflow-x-auto ">
              <div className="min-w-[500px]">
                {/* Table header */}
                <div className="grid grid-cols-3  border-b border-gray-200">
                  <div className="p-4 flex items-center">
                    <span className="bg-teal-200 text-teal-800 px-3 py-1 rounded-full text-sm font-medium">
                      Mine Features
                    </span>
                  </div>
                  <div className="p-4 text-center bg-white rounded-t-lg">
                    <h3 className="font-semibold text-gray-900">Our Benefits</h3>
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-semibold text-gray-900">Traditional methods</h3>
                  </div>
                </div>

                {/* Table rows */}
                {['Flexibility', 'Convenience', 'Greater Control', 'Transparency', 'Support'].map((feature, index) => (
                  <div key={index} className="grid grid-cols-3 border-b border-gray-200 last:border-b-0">
                    <div className="p-4 flex items-center">
                      <span className="font-medium text-gray-900">{feature}</span>
                    </div>
                    <div className="p-4 text-center bg-white rounded-b-lg">
                      <Check className="w-5 h-5 text-teal-500 mx-auto" />
                      <button className="text-white bg-black w-[100px] ">
                    
                      </button>
                    </div>
                    <div className="p-4 text-center">
                      <Check className="w-5 h-5 text-teal-500 mx-auto" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Newest Property */}
        <section className="mt-16 md:max-w-6xl md:mx-auto">
          <h1 className="text-[30px] font-bold text-black">Newest Property</h1>
          <PropertyGrid properties={properties} />
        </section>

        {/* Transaction Management */}
        <section className="mt-16 md:max-w-6xl md:mx-auto">
          <h1 className="text-[30px] font-bold text-black text-center">Transaction Management</h1>
          <div className="mt-6 flex justify-center">
            <Image
              src="/Screenshot_17-7-2025_7431_cdn.dribbble.com.jpeg"
              alt="Transaction management illustration"
              width={500}
              height={400}
              className="rounded-lg  md:w-[700px]"
            />
          </div>
        </section>

      
        
      </main>
        {/* Build Service Provider */}
        <section className="">
          <ServiceProvider />      
        </section>

        <section className="">
          <Testimonials />
        </section>

        <section>
          <Ready />
        </section>
        <section>
          <Footer/>
        </section>
    </div>
  )
}