# How to Add Projects to Your Portfolio

Projects are stored in your Supabase database. Here are two ways to add them:

## Method 1: Using Supabase Table Editor (Easiest)

1. **Go to Supabase Dashboard**: https://supabase.com/dashboard
2. **Select your project**
3. **Click "Table Editor"** in the left sidebar
4. **Click on the `projects` table**
5. **Click "Insert row"** (or the "+" button)
6. **Fill in the fields**:
   - `title` (required): Project title (e.g., "Travel API")
   - `description` (optional): Default description text
   - `lang` (optional): Multilingual descriptions as JSON
   - `demo` (optional): URL to live demo
   - `repo` (optional): URL to GitHub repository
   - `id`: Auto-generated (don't need to fill)
   - `created_at` and `updated_at`: Auto-generated

7. **For multilingual descriptions**, in the `lang` field, enter JSON like this:
   ```json
   {
     "en": "REST API built with Node.js and Express to manage travel-related data.",
     "es": "API REST desarrollada con Node.js y Express para gestionar información relacionada con viajes.",
     "fr": "API REST développée avec Node.js et Express pour gérer des données liées aux voyages."
   }
   ```
   OR if your structure uses nested objects:
   ```json
   {
     "en": {"description": "REST API built with Node.js and Express..."},
     "es": {"description": "API REST desarrollada con Node.js..."},
     "fr": {"description": "API REST développée avec Node.js..."}
   }
   ```

8. **Click "Save"** (or press Enter)
9. **Refresh your portfolio** - the new project will appear!

## Method 2: Using SQL Editor

1. **Go to Supabase Dashboard** → Your Project → **SQL Editor**
2. **Click "New query"**
3. **Run this SQL** (replace with your project details):

```sql
INSERT INTO projects (title, description, lang, demo, repo) VALUES
  (
    'Your Project Title',
    'Default description (fallback if lang is not available)',
    '{"en": "English description", "es": "Descripción en español", "fr": "Description en français"}',
    'https://your-demo-url.com',
    'https://github.com/yourusername/your-repo'
  );
```

4. **Click "Run"**
5. **Refresh your portfolio**

## Example: Complete Project Entry

```sql
INSERT INTO projects (title, description, lang, demo, repo) VALUES
  (
    'E-Commerce Platform',
    'Full-stack e-commerce application with payment integration',
    '{
      "en": "Full-stack e-commerce application with payment integration. Built with React, Node.js, and PostgreSQL.",
      "es": "Aplicación de comercio electrónico full-stack con integración de pagos. Construida con React, Node.js y PostgreSQL.",
      "fr": "Application de commerce électronique full-stack avec intégration de paiement. Construite avec React, Node.js et PostgreSQL."
    }',
    'https://my-ecommerce-demo.com',
    'https://github.com/yourusername/ecommerce-platform'
  );
```

## Field Reference

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | BIGSERIAL | Auto | Primary key (auto-generated) |
| `title` | TEXT | ✅ Yes | Project title |
| `description` | TEXT | No | Default description (used if lang is not available) |
| `lang` | JSONB | No | Multilingual descriptions (JSON object) |
| `demo` | TEXT | No | URL to live demo |
| `repo` | TEXT | No | URL to GitHub repository |
| `created_at` | TIMESTAMPTZ | Auto | Creation timestamp (auto-generated) |
| `updated_at` | TIMESTAMPTZ | Auto | Last update timestamp (auto-generated) |

## Tips

- **At minimum**, you need a `title` - everything else is optional
- Projects will appear in the order they were created (or by `id` if you set a custom order)
- The portfolio automatically shows the description in the user's selected language
- If a language is not available in `lang`, it falls back to the `description` field
- You can edit projects later by clicking on them in the Table Editor

## Quick Add Template

For a simple project with just title and description:

```sql
INSERT INTO projects (title, description) VALUES
  ('My New Project', 'This is a description of my project');
```

For a project with all fields:

```sql
INSERT INTO projects (title, description, lang, demo, repo) VALUES
  (
    'Project Name',
    'Default description',
    '{"en": "English", "es": "Español", "fr": "Français"}',
    'https://demo.com',
    'https://github.com/user/repo'
  );
```




