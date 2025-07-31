import { table } from 'console';
import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

if(!process.env.DATABASE_URL){
  throw new Error('DATABASE_URL is not set in environment variables')
}

export default defineConfig({
  out: './src/drizzle/migrations',
  schema: './src/drizzle/schema.ts',
  dialect: 'postgresql',
  
  dbCredentials: {
    url: process.env.DATABASE_URL!,

    ssl: process.env.NODE_ENV ==='production'
    ? {rejectUnauthorized:false} : false,
  },

  verbose:true,
  strict:true,


});
