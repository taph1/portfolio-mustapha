# Fix: Add Missing ID Column

Your `projects` table exists but is missing the `id` column. Here's how to add it:

## Quick Fix: Add ID Column

1. **Go to Supabase Dashboard** → Your Project → **SQL Editor**

2. **Run this SQL**:

```sql
-- Add id column if it doesn't exist
ALTER TABLE projects 
ADD COLUMN IF NOT EXISTS id BIGSERIAL PRIMARY KEY;

-- If the column already exists but isn't a primary key, make it one
-- (Only run this if the above doesn't work)
-- ALTER TABLE projects 
-- ALTER COLUMN id SET NOT NULL,
-- ADD PRIMARY KEY (id);
```

3. **If you get an error about existing data**, you might need to:

```sql
-- First, check what columns you have
SELECT column_name, data_type 
FROM information_schema.columns 
WHERE table_name = 'projects';

-- If you have existing data and no id column, add it with a default
ALTER TABLE projects 
ADD COLUMN id BIGSERIAL;

-- Make it the primary key
ALTER TABLE projects 
ADD PRIMARY KEY (id);
```

4. **Refresh your browser** - the error should be gone!

## Alternative: Check Your Table Structure

If you want to see what columns your table currently has:

```sql
SELECT column_name, data_type, is_nullable
FROM information_schema.columns
WHERE table_name = 'projects'
ORDER BY ordinal_position;
```

This will show you all columns in your table so you can see what's there.




