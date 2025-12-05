# Deploy Your Portfolio to GitHub and Vercel

## Part 1: Upload to GitHub

### Step 1: Create GitHub Repository

1. **Go to GitHub**: https://github.com
2. **Sign in** to your account
3. **Click the "+" button** (top right) → "New repository"
4. **Fill in details:**
   - Repository name: `portfolio-mustapha` (or any name you like)
   - Description: "My personal portfolio website"
   - Visibility: **Public** (so Vercel can access it)
   - **DO NOT** check "Initialize with README" (we already have code)
5. **Click "Create repository"**

### Step 2: Connect Local Repo to GitHub

After creating the repository, GitHub will show commands. Use these:

```bash
cd /home/taphson/Documents/portfolio-mustapha

# Add GitHub as remote
git remote add origin https://github.com/YOUR_USERNAME/portfolio-mustapha.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Replace `YOUR_USERNAME`** with your actual GitHub username!

### Alternative: Using GitHub CLI

If you have GitHub CLI installed:
```bash
gh repo create portfolio-mustapha --public --source=. --push
```

## Part 2: Deploy to Vercel

### Step 1: Sign Up / Log In to Vercel

1. **Go to Vercel**: https://vercel.com
2. **Click "Sign Up"** (or "Log In" if you have an account)
3. **Sign up with GitHub** (easiest option)
   - This connects your Vercel account to GitHub
   - Click "Continue with GitHub"
   - Authorize Vercel

### Step 2: Import Your Project

1. **On Vercel Dashboard**, click **"Add New..."** → **"Project"**
2. **Select your repository** from the list
   - Find "portfolio-mustapha" (or whatever name you used)
   - Click **"Import"**

### Step 3: Configure Project

Vercel will auto-detect it's a Vite project. Configure:

**Framework Preset:** Vite (should be auto-detected)

**Build Command:** 
```
npm run build
```

**Output Directory:**
```
dist
```

**Environment Variables** (IMPORTANT!):
Click "Environment Variables" and add:

```
VITE_SUPABASE_URL = https://jrfvkcbybeybjktwjpwp.supabase.co
VITE_SUPABASE_ANON_KEY = your_actual_anon_key_here
VITE_FORMSPREE_ENDPOINT = https://formspree.io/f/your_form_id (optional)
```

**Get these from:**
- Supabase URL/Key: Your `.env` file or Supabase Dashboard
- Formspree: If you set it up (otherwise leave it out)

### Step 4: Deploy!

1. **Click "Deploy"**
2. **Wait 1-2 minutes** while Vercel builds your project
3. **Done!** 🎉

You'll get a URL like: `https://portfolio-mustapha.vercel.app`

## Part 3: Set Up Custom Domain (Optional)

### Option 1: Free Vercel Domain
You already have it! `your-project.vercel.app`

### Option 2: Custom Domain
1. Buy a domain (e.g., from Namecheap, GoDaddy)
2. In Vercel Dashboard → Your Project → Settings → Domains
3. Add your domain
4. Follow Vercel's DNS instructions
5. Wait for DNS propagation (can take up to 48 hours)

## After Deployment

### Your Portfolio is Live! 🚀

Access it at: `https://your-project-name.vercel.app`

### Automatic Deployments

Every time you push to GitHub:
```bash
git add .
git commit -m "Update skills"
git push
```

Vercel automatically rebuilds and redeploys (takes ~2 minutes).

### Update Environment Variables

If you need to update environment variables later:
1. Vercel Dashboard → Your Project → Settings → Environment Variables
2. Edit the variables
3. Redeploy (Settings → Deployments → click "..." → Redeploy)

## Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Make sure environment variables are set
- Verify `npm run build` works locally

### Projects Not Loading
- Check Supabase environment variables in Vercel
- Verify Supabase credentials are correct
- Check browser console for errors

### Contact Form Not Working
- Add Formspree endpoint to Vercel environment variables
- Or use the mailto fallback (already configured)

## Summary of URLs

| Service | URL |
|---------|-----|
| GitHub Repo | `https://github.com/YOUR_USERNAME/portfolio-mustapha` |
| Live Site | `https://portfolio-mustapha.vercel.app` |
| Vercel Dashboard | `https://vercel.com/dashboard` |
| Supabase Dashboard | `https://supabase.com/dashboard` |

## Next Steps

1. ✅ Test your live site
2. ✅ Add projects in Supabase (they'll show immediately)
3. ✅ Share your portfolio URL
4. ✅ Update skills/content by pushing to GitHub
5. ✅ Set up custom domain (optional)

Congratulations! Your portfolio is live! 🎊

