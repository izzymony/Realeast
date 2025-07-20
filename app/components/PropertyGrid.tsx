import React from 'react'
import Image from 'next/image';

interface PropertyFeature {
  icon: string;
  label: string;
}

interface Property {
  image: string;
  title: string;
  price: string;
  location: string;
  feature: PropertyFeature[];
}

interface PropertyGridProps {
  properties: Property[];
}

const PropertyGrid: React.FC<PropertyGridProps> = ({ properties }) => {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
   const [activeButton, setActiveButton] = React.useState<'left' | 'right' | null>(null);




   const scrollLeft = () => {
  if (scrollContainerRef.current) {
    scrollContainerRef.current.scrollBy({
      left: -400, // scroll 400px to the left
      behavior: 'smooth',
    });
    setActiveButton('left');
  }
};

const scrollRight = () => {
  if (scrollContainerRef.current) {
    scrollContainerRef.current.scrollBy({
      left: 400, // scroll 400px to the right
      behavior: 'smooth',
    });
    setActiveButton('right');
  }
};

  

  return (
   <div className="relative">
  {/* Scroll buttons */}
   <div className="flex justify-end gap-2 -mt-12 absolute top-0 right-0 z-0 pr-4">
           <button 
            onClick={scrollLeft}
            onMouseEnter={() => setActiveButton('left')}
            onMouseLeave={() => setActiveButton(null)}
            className={`rounded-full p-2 shadow-md transition-colors duration-200 ${
              activeButton === 'left' ? 'bg-black' : 'bg-white'
            }`}
            aria-label="Scroll left"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke={activeButton === 'left' ? 'white' : 'currentColor'}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={scrollRight}
            onMouseEnter={() => setActiveButton('right')}
            onMouseLeave={() => setActiveButton(null)}
            className={`rounded-full p-2 shadow-md transition-colors duration-200 ${
              activeButton === 'right' ? 'bg-black' : 'bg-white'
            }`}
            aria-label="Scroll right"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke={activeButton === 'right' ? 'white' : 'currentColor'}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
  

  {/* Property grid with proper horizontal scroll */}
  <div 
    ref={scrollContainerRef}
    className="flex gap-4 mt-16  overflow-x-auto  scrollbar-hide"
  >
    {properties.map((property, index) => (
      <div 
        key={index} 
        className="flex-shrink-0 w-[400px]  bg-white rounded-[10px] border border-gray-200"
      >
        <Image
          src={property.image}
          alt={property.title}
          width={300}
          height={200}
          className="w-full h-[200px] object-cover rounded-t-[10px]"
        />
      
        <div className="p-4">
          <div className="flex relative">
            <p className="text-black font-bold text-[24px]">
              {property.price} <span className="text-[#d7d9d9] text-sm">/month</span>
            </p>
            <button className="border-2 border-black p-2 text-black rounded-full w-[120px] absolute right-0 -mt-1 text-[17px] font-semibold">
              View Deal
            </button>
          </div>
          <h2 className="text-black font-semibold text-[23px] mt-1">{property.title}</h2>
          <p className="text-[#a4a5a6] mt-1 text-sm">{property.location}</p>

          <hr className="mt-5"/>
        
          <div className="flex flex-wrap gap-2">
            {property.feature.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2 p-2 mt-3 w-fit text-sm">
                <Image 
                  src={feature.icon} 
                  alt={feature.label} 
                  width={16} 
                  height={16} 
                  className="relative invert brightness-[0.6] text-[#a4a5a6]" 
                />
                <span className="text-[#a4a5a6]">{feature.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
  );
};

export default PropertyGrid;