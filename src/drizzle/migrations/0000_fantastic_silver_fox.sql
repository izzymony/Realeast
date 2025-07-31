CREATE TABLE "properties" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"image" varchar(512),
	"title" varchar(255) NOT NULL,
	"address" varchar(255) NOT NULL,
	"bedrooms" varchar (255) NOT NULL,
	"bathrooms" varchar (255) NOT NULL,
	"area" integer NOT NULL,
	
	CONSTRAINT "properties_title_unique" UNIQUE("title")
);
