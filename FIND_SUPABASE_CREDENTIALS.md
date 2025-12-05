# Step-by-Step: Finding Your Supabase Credentials

## Step 1: Get the Project URL

1. In Supabase Dashboard, go to **Settings** (gear icon)
2. Look for **"Project URL"** or **"API URL"** section
3. You should see something like:
   ```
   https://abcdefghijklmnop.supabase.co
   ```
   OR if you only see a **"Project ID"** (like `abcdefghijklmnop`), you can construct the URL:
   ```
   https://[your-project-id].supabase.co
   ```
   Replace `[your-project-id]` with the actual project ID you see.

4. **Copy this entire URL** - this goes in `VITE_SUPABASE_URL`

## Step 2: Get the Anon Key

1. Still in **Settings**, click on **"API"** in the left menu (or scroll down to API section)
2. Look for **"Project API keys"** section
3. You'll see a table with different keys. Find the row that says:
   - **"anon"** or **"public"** (NOT "service_role")
4. The key will be hidden - click **"Reveal"** or **"Copy"** button
5. The key should be a **very long token** starting with `eyJhbGciOiJIUzI1NiIs...`
6. **Copy the entire key** - this goes in `VITE_SUPABASE_ANON_KEY`

## Step 3: Update Your .env File

Your `.env` file should look exactly like this:

```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlvdXItcHJvamVjdC1pZCIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNjQ1MTkyMDAwLCJleHAiOjE5NjA3NjgwMDB9.xxxxx
```

**Important:**
- Replace `your-project-id` with your actual project ID
- Replace the anon key with your actual full key (it's very long!)
- No quotes, no spaces around the `=` sign

## Visual Guide

If you see:
- ✅ **Project URL**: `https://xxxxx.supabase.co` → Use this for `VITE_SUPABASE_URL`
- ✅ **Project ID**: `xxxxx` → Use `https://xxxxx.supabase.co` for `VITE_SUPABASE_URL`
- ✅ **anon key**: `eyJhbGciOiJIUzI1NiIs...` (very long) → Use this for `VITE_SUPABASE_ANON_KEY`

If you see:
- ❌ `sb_secret_...` → Wrong! This is not what you need
- ❌ `sb_publishable_...` → Wrong! This is not what you need
- ❌ Short tokens → Wrong! The anon key is very long (200+ characters)

## Still Can't Find It?

If you're in Settings but don't see "API" section:
1. Make sure you're in the correct project
2. Look for tabs or sections like: "General", "API", "Database", "Auth", etc.
3. Click on the "API" tab/section
4. The Project URL and API keys should be there




