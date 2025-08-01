import postgres from 'postgres';
import { drizzle } from 'drizzle-orm/postgres-js';
import { PropertiesTable } from './src/drizzle/schema';


async function main() {
   
  const sql = postgres(process.env.DATABASE_URL!, {
    max: 1,
    idle_timeout: 20,
    connect_timeout: 10
  });
  const db = drizzle(sql, { schema: { properties: PropertiesTable } });

  try {
    const [property] = await db.insert(PropertiesTable).values({
       
      title: 'Modern Downtown Apartment',
      address: '123 Main St, New York',
      area: 1200,
      bedrooms: '4',
      bathrooms: '4',
      image: 'https://example.com/apartment.jpg',
      price: '1000000'
      // id, created_at, updated_at will be auto-filled
    }).returning();

    console.log("Successfully inserted:", property);

    // Verify with raw query
    const results = await sql`SELECT * FROM properties`;
    console.log("Database contents:", results);
    
  }  catch (error) {
    console.error("Full error details:", {
      message: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
      ...(error as any).detail // PostgreSQL specific details
    });
  } finally {
    await sql.end();
  }
}

main();