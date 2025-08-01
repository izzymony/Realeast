import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not set in environment variables');
}

export default defineConfig({
  out: './src/drizzle/migrations',
  schema: './src/drizzle/schema.ts',
  dialect: 'postgresql',
  
  dbCredentials: {
    // Always append sslmode for Railway
    url: process.env.DATABASE_URL + 
      (process.env.NODE_ENV === 'production' 
        ? '?sslmode=require' 
        : '?sslmode=prefer'
      ),
  },

  // These are the only valid configuration options
  verbose: true,
  strict: true,
});