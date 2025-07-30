import 'dotenv/config';
import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';

async function runMigrations() {
  // Create a dedicated migration client
  const migrationClient = postgres(process.env.DATABASE_URL!, {
    max: 1,
    idle_timeout: 5,
    connect_timeout: 10,
  });

  try {
    console.log('Running migrations...');
    
    await migrate(drizzle(migrationClient), {
      migrationsFolder: './src/drizzle/migrations',
    });

    console.log('Migrations completed successfully');
  } catch (error) {
    console.error('Migration failed:', error);
    process.exit(1); // Exit with error code
  } finally {
    await migrationClient.end(); // Ensure connection is closed
  }
}

runMigrations();