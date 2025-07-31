// app/properties/page.tsx
"use server"
import { getProperties } from '@/app/actions/properties';
import PropertyCard from '@/app/components/PropertyCard';
import Nav from '../components/Nav';
import Footer from '../components/Footer'

 export default async function PropertiesPage() {
  const properties = await getProperties()  as Property[];

  if (!properties.length) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold">No Properties Found</h1>
        <p className="mt-4 text-gray-600">
          We couldn &apos;t find any properties in the database.
        </p>
        <div className="mt-8 p-4 bg-gray-100 rounded-lg text-left">
          <h2 className="font-semibold">Debug Information:</h2>
          <pre className="mt-2 text-sm">
            {JSON.stringify({
              dbStatus: 'Connected',
              count: properties.length,
              sample: properties[0]
            }, null, 2)}
          </pre>
        </div>
      </div>
    );
  }

  return (
   <div className=''>  
   <Nav />      
    <div className=" mx-auto px-4 py-8 mt-12">
      <h1 className="text-3xl font-bold mb-8 text-black">Available Properties</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
    <Footer />
    </div>   
  );
}