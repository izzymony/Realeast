
import { pgTable, uuid, varchar, integer, timestamp } from "drizzle-orm/pg-core";

export const PropertiesTable = pgTable("properties", {
  id: uuid("id").primaryKey().defaultRandom(),
   image: varchar("image", { length: 512 }),title: varchar("title", { length: 255 }).unique().notNull(),
  address: varchar("address", { length: 255 }).notNull(),
  price: varchar("price", {length: 255}).notNull().default('0'),
  bedrooms: varchar("bedrooms" , {length: 255}).notNull(),
  bathrooms: varchar("bathrooms" , {length: 255}).notNull(),
  area: integer("area").notNull(),
  
});