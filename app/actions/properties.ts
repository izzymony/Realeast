

// app/actions/properties.ts
'use server';
import {db} from '@/src/drizzle/db'
import { PropertiesTable } from '@/src/drizzle/schema';
import {sql} from 'drizzle-orm';

export async function getProperties(){
   try{
      await db.execute(sql `SELECT 1`);
      
      const properties = await db.select().from(PropertiesTable);
      console.log('Fetched properties:' , properties.length)
      return properties;
   }catch(error){
        console.error('Database error:' , error);
        throw new Error('Failed to fetch properties');      
   } 
              
}