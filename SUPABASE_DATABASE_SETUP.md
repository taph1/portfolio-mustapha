# Supabase Database Setup Guide

This guide will help you set up the `projects` table in your Supabase database.

## Step 1: Access Supabase SQL Editor

1. Go to [Supabase Dashboard](https://supabase.com/dashboard)
2. Select your project
3. Click on **"SQL Editor"** in the left sidebar
4. Click **"New query"**

## Step 2: Create the Projects Table

Copy and paste this SQL into the SQL Editor, then click **"Run"**:

```sql
-- Create the projects table
CREATE TABLE IF NOT EXISTS projects (
  id BIGSERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  lang JSONB, -- For multilingual descriptions: {"en": "...", "es": "...", "fr": "..."}
  demo TEXT, -- URL to live demo
  repo TEXT, -- URL to GitHub repository
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Enable Row Level Security (RLS)
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- Create a policy to allow public read access
CREATE POLICY "Allow public read access" ON projects
  FOR SELECT
  USING (true);

-- Create an index for better performance
CREATE INDEX IF NOT EXISTS projects_id_idx ON projects(id);
```

## Step 3: Insert Sample Data (Optional)

If you want to add some sample projects, run this SQL:

```sql
-- Insert sample projects
INSERT INTO projects (title, description, lang, demo, repo) VALUES
  (
    'Travel API',
    'REST API built with Node.js and Express to manage travel-related data. Deployed on Render.',
    '{"en": "REST API built with Node.js and Express to manage travel-related data. Deployed on Render.", "es": "API REST desarrollada con Node.js y Express para gestionar información relacionada con viajes. Desplegada en Render.", "fr": "API REST développée avec Node.js et Express pour gérer des données liées aux voyages. Déployée sur Render."}',
    'https://your-demo-url.com',
    'https://github.com/yourusername/travel-api'
  ),
  (
    'Interactive Game',
    'Interactive JavaScript game demonstrating logic, event handling and interactive design. Deployed on Render.',
    '{"en": "Interactive JavaScript game demonstrating logic, event handling and interactive design. Deployed on Render.", "es": "Juego interactivo desarrollado en JavaScript que demuestra manejo de lógica, eventos y diseño de interacción. Desplegado en Render.", "fr": "Jeu interactif en JavaScript démontrant la logique, la gestion d''événements et le design interactif. Déployé sur Render."}',
    'https://your-demo-url.com',
    'https://github.com/yourusername/interactive-game'
  );
```

**Note:** Replace the URLs with your actual project URLs.

## Step 4: Verify the Table

Run this query to verify your table was created correctly:

```sql
SELECT * FROM projects;
```

You should see your projects listed.

## Alternative: Using Supabase Table Editor

If you prefer using the UI:

1. Go to **"Table Editor"** in the left sidebar
2. Click **"New table"**
3. Name it `projects`
4. Add the following columns:
   - `id` - Type: `int8` (bigint), Primary key, Default: `uuid_generate_v4()` or `serial`
   - `title` - Type: `text`, Not null
   - `description` - Type: `text`, Nullable
   - `lang` - Type: `jsonb`, Nullable
   - `demo` - Type: `text`, Nullable
   - `repo` - Type: `text`, Nullable
   - `created_at` - Type: `timestamptz`, Default: `now()`
   - `updated_at` - Type: `timestamptz`, Default: `now()`

5. Go to **"Authentication"** → **"Policies"** → **"projects"**
6. Click **"New policy"**
7. Create a policy for SELECT that allows public read access

## Troubleshooting

### Error: "column projects.id does not exist"

This means the table exists but doesn't have an `id` column. Run this SQL to add it:

```sql
-- Add id column if missing
ALTER TABLE projects ADD COLUMN IF NOT EXISTS id BIGSERIAL PRIMARY KEY;
```

### Error: "permission denied for table projects"

This means Row Level Security (RLS) is blocking access. Run this SQL:

```sql
-- Allow public read access
CREATE POLICY "Allow public read access" ON projects
  FOR SELECT
  USING (true);
```

### Table doesn't exist

Run the full CREATE TABLE SQL from Step 2 above.

## Column Reference

| Column | Type | Required | Description |
|--------|------|----------|-------------|
| `id` | BIGSERIAL | Yes | Primary key, auto-incrementing |
| `title` | TEXT | Yes | Project title |
| `description` | TEXT | No | Default description (fallback if lang is not available) |
| `lang` | JSONB | No | Multilingual descriptions: `{"en": "...", "es": "...", "fr": "..."}` |
| `demo` | TEXT | No | URL to live demo |
| `repo` | TEXT | No | URL to GitHub repository |
| `created_at` | TIMESTAMPTZ | Yes | Creation timestamp |
| `updated_at` | TIMESTAMPTZ | Yes | Last update timestamp |

## Next Steps

After setting up the table:
1. Refresh your browser
2. The projects should now load in your portfolio
3. You can add/edit projects through the Supabase Table Editor or via SQL




