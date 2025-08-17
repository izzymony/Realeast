'use server';
import { db } from '@/src/drizzle/db';
import { PropertiesTable } from '@/src/drizzle/schema';
import { sql } from 'drizzle-orm';

export async function getProperties() {
             
  try {
    // 1. First verify database connection
    const connectionTest = await db.execute(sql`SELECT 1`);
    if (!connectionTest) {
      throw new Error('Database connection test failed');
    }

    // 2. Execute query with explicit error handling
    const properties = await db.select().from(PropertiesTable).execute();
    console.log("Fetched properties:", JSON.stringify(properties, null, 2)); 
    
    // 3. Validate response
    if (!Array.isArray(properties)) {
      throw new Error('Invalid properties data format');
    }

    console.log('Fetched properties:', properties.length);
    return properties;
    
  } catch (error) {
    console.error('Database error:', error);
    
    // Include original error message in development
    if (process.env.NODE_ENV === 'development') {
      throw new Error(`Failed to fetch properties: ${error instanceof Error ? error.message : String(error)}`);
    } else {
      throw new Error('Failed to fetch properties');
    }
  }
}