import { defineConfig } from 'drizzle-kit';
import 'dotenv/config';

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is missing in .env');
}

export default defineConfig({
  schema: './src/drizzle/schema.ts',
  out: './src/drizzle/migrations',
  dialect: 'postgresql',
   // Explicitly specify pg driver

  dbCredentials: {
    url: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false } // Force-disable SSL verification
  },

  verbose: true,
  strict: true
});