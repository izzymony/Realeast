// components/PropertyList.tsx
import { useEffect, useState } from 'react';

interface Property {
  id: string;
  title: string;
  address: string;
  area: number;
  bedrooms: string;
  bathrooms: string;
  image: string;
  created_at: string;
}

export default function PropertyList() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProperties() {
      try {
        const response = await fetch('../api/properties.ts');
        const data = await response.json();
        setProperties(data);
      } catch (error) {
        console.error('Fetch error:', error);
      } finally {
        setLoading(false);
      }
    }
    loadProperties();
  }, []);

  if (loading) return <div className="p-4">Loading properties...</div>;
  if (!properties.length) return <div className="p-4">No properties found</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {properties.map((property) => (
        <div key={property.id} className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
          <img 
            src={property.image} 
            alt={property.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">{property.title}</h3>
            <p className="text-gray-600 mb-1">{property.address}</p>
            <div className="flex justify-between mt-3 text-sm">
              <span>Area: {property.area} sqft</span>
              <span>{property.bedrooms} beds</span>
              <span>{property.bathrooms} baths</span>
            </div>
            <p className="text-xs text-gray-400 mt-2">
              Listed: {new Date(property.created_at).toLocaleDateString()}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}