// components/property-card.tsx

import Image from 'next/image';



 interface Property {
  id: string;
  price: string;
  title: string;
  address: string;
  area: number;
  bedrooms: string;
  bathrooms: string;
  image: string;
  
}

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200">
      <div className="relative h-48 w-full">
        <Image
          src={property.image || '/placeholder-property.jpg'}
          alt={property.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-4">
         <div className="flex justify-between items-start mb-2">
                    <p className="text-black font-bold text-xl">
                      ${property.price}
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
                  <p className="text-gray-500 text-sm mt-1 line-clamp-1">{property.address}</p>
                  <hr className="my-4 border-gray-100" />

                  <div className="flex justify-between gap-4">
          <div className="flex items-center gap-2 flex-1">
            <Image
              className="object-contain"
              src="/icons8-bed-50 (1).png"
              width={18}
              height={18}
              alt="Bedrooms"
            />
            <span className="text-gray-500 text-xs">{property.bedrooms} bedrooms</span>
          </div>
          <div className="flex items-center gap-2 flex-1">
            <Image
              className="object-contain"
              src="/icons8-bathtub-50.png"
              width={18}
              height={18}
              alt="Bathrooms"
            />
            <span className="text-gray-500 text-xs">{property.bathrooms} bathrooms</span>
          </div>
          <div className="flex items-center gap-2 flex-1">
            <Image
              className="object-contain"
              src="/icons8-surface-64.png"
              width={18}
              height={18}
              alt="Area"
            />
            <span className="text-gray-500 text-xs">{property.area} sqft</span>
          </div>
         </div>
      </div>
    </div>
  );
}