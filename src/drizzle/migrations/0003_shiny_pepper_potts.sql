-- First add as nullable
ALTER TABLE "properties" ADD COLUMN "price" varchar(255);

-- Then update existing rows
UPDATE "properties" SET "price" = '0' WHERE "price" IS NULL;

-- Finally set as NOT NULL
ALTER TABLE "properties" ALTER COLUMN "price" SET NOT NULL;