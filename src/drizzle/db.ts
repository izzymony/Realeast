// src/drizzle/db.ts
import postgres from 'postgres';
import { drizzle } from 'drizzle-orm/postgres-js';
import * as schema from './schema';

const connectionString = process.env.DATABASE_URL!;
const client = postgres(connectionString, { max: 1 }); // Single connection for writes
export const db = drizzle(client, { schema });