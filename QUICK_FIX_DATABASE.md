# Quick Fix: Set Up Projects Table

## The Problem
Your Supabase database doesn't have the `projects` table set up correctly. The error "column projects.id does not exist" means the table is missing or doesn't have the required structure.

## Solution: Run This SQL

1. **Go to Supabase Dashboard**: https://supabase.com/dashboard
2. **Select your project**
3. **Click "SQL Editor"** in the left sidebar
4. **Click "New query"**
5. **Copy and paste this entire SQL block**:

```sql
-- Step 1: Create the projects table (if it doesn't exist)
CREATE TABLE IF NOT EXISTS projects (
  id BIGSERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  lang JSONB,
  demo TEXT,
  repo TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Step 2: Enable Row Level Security
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- Step 3: Create policy to allow public read access
DROP POLICY IF EXISTS "Allow public read access" ON projects;
CREATE POLICY "Allow public read access" ON projects
  FOR SELECT
  USING (true);
```

6. **Click "Run"** (or press Ctrl+Enter)

## Verify It Worked

After running the SQL, run this query to verify:

```sql
SELECT * FROM projects;
```

You should see an empty table (or your existing projects if any).

## Add Sample Data (Optional)

If you want to add some sample projects:

```sql
INSERT INTO projects (title, description, lang, demo, repo) VALUES
  (
    'Travel API',
    'REST API built with Node.js and Express',
    '{"en": "REST API built with Node.js and Express to manage travel-related data.", "es": "API REST desarrollada con Node.js y Express.", "fr": "API REST développée avec Node.js et Express."}',
    'https://your-demo-url.com',
    'https://github.com/yourusername/travel-api'
  );
```

**Replace the URLs with your actual project URLs.**

## After Running the SQL

1. **Refresh your browser** (the portfolio page)
2. The error should be gone
3. Projects should load (or show "More projects coming soon" if the table is empty)

## Still Having Issues?

If you still see errors:
1. Make sure you ran ALL the SQL (all 3 steps)
2. Check that the table was created: Run `SELECT * FROM projects;`
3. Verify RLS policy exists: Go to Authentication → Policies → projects




