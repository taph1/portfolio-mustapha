# How to Verify Supabase URL and Anon Key

## Method 1: Check in Your Browser Console

1. **Start your dev server** (if not already running):
   ```bash
   npm run dev
   ```

2. **Open your browser** and navigate to `http://localhost:5173`

3. **Open Developer Tools** (F12 or Right-click → Inspect)

4. **Go to the Console tab**

5. **Look for the debug messages** - you should see:
   - `✓ Supabase URL loaded: https://xxxxx***.supabase.co`
   - `✓ Supabase Anon Key loaded: eyJhbGciOiJIUzI1NiIs...`
   
   If you see warnings instead, your environment variables are not loaded correctly.

## Method 2: Check Your .env File

1. **Open your `.env` file** in the project root directory

2. **Verify the format** - it should look like this:
   ```env
   VITE_SUPABASE_URL=https://xxxxx.supabase.co
   VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh4eHh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDUxOTIwMDAsImV4cCI6MTk2MDc2ODAwMH0.xxxxx
   ```

3. **Important checks:**
   - ✅ No quotes around the values
   - ✅ No spaces around the `=` sign
   - ✅ URL starts with `https://` and ends with `.supabase.co`
   - ✅ Anon key starts with `eyJ` (JWT token format)

## Method 3: Get Credentials from Supabase Dashboard

1. **Go to [Supabase Dashboard](https://supabase.com/dashboard)**

2. **Select your project** (or create a new one if you don't have one)

3. **Go to Settings** (gear icon in the left sidebar)

4. **Click on "API"** in the settings menu

5. **You'll find two sections:**
   
   **a) Project URL** (under "Project URL" section)
   - This is your `VITE_SUPABASE_URL`
   - Format: `https://xxxxx.supabase.co` (NOT a secret key!)
   - Example: `https://abcdefghijklmnop.supabase.co`
   
   **b) API Keys** (under "Project API keys" section)
   - Look for the **"anon"** or **"public"** key (NOT the "service_role" key!)
   - This is your `VITE_SUPABASE_ANON_KEY`
   - It's a long JWT token starting with `eyJhbGciOiJIUzI1NiIs...`
   - Click the "Reveal" or "Copy" button if it's hidden
   - ⚠️ **DO NOT use** keys that start with `sb_secret_` or `sb_publishable_` - those are for different services!

6. **Copy both values** to your `.env` file:
   ```env
   VITE_SUPABASE_URL=https://your-project-id.supabase.co
   VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlvdXItcHJvamVjdC1pZCIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNjQ1MTkyMDAwLCJleHAiOjE5NjA3NjgwMDB9.xxxxx
   ```

## Method 4: Verify via Terminal

Run this command to check if your environment variables are set:

```bash
# Check if variables are loaded (values will be masked)
npm run dev
# Then check the browser console for the debug messages
```

Or check your .env file directly:
```bash
cat .env | grep VITE_SUPABASE
```

## Common Issues

### ❌ "Supabase not configured" error
- **Solution:** Make sure your `.env` file exists in the project root
- **Solution:** Restart your dev server after creating/modifying `.env`

### ❌ CORS errors
- **Solution:** Verify your URL is correct (should end with `.supabase.co`)
- **Solution:** Check that your Supabase project is active
- **Solution:** Ensure you're using the **anon/public** key, not the service_role key

### ❌ "Invalid API key" errors
- **Solution:** Make sure you copied the entire anon key (it's very long)
- **Solution:** Verify there are no extra spaces or line breaks
- **Solution:** Get a fresh key from the Supabase dashboard

## Quick Verification Checklist

- [ ] `.env` file exists in project root
- [ ] `VITE_SUPABASE_URL` starts with `https://` and ends with `.supabase.co`
- [ ] `VITE_SUPABASE_ANON_KEY` is a long JWT token (starts with `eyJ`)
- [ ] No quotes around values in `.env`
- [ ] Dev server restarted after setting environment variables
- [ ] Browser console shows `✓ Supabase URL loaded` and `✓ Supabase Anon Key loaded`

## Need Help?

If you're still having issues:
1. Check the browser console for specific error messages
2. Verify your Supabase project is active and not paused
3. Make sure the `projects` table exists in your Supabase database
4. Check Row Level Security (RLS) policies if you have them enabled

