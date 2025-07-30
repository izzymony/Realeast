DO $$
BEGIN
    -- Add 'bedrooms' column if it does not exist
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name='properties' AND column_name='bedrooms'
    ) THEN
        ALTER TABLE "properties" ADD COLUMN "bedrooms" varchar(255) NOT NULL;
    END IF;

    -- Add 'bathrooms' column if it does not exist
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name='properties' AND column_name='bathrooms'
    ) THEN
        ALTER TABLE "properties" ADD COLUMN "bathrooms" varchar(255) NOT NULL;
    END IF;
END
$$;