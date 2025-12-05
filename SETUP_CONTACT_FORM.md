# How to Set Up the Contact Form

The contact form can send emails using Formspree. Here's how to set it up:

## Option 1: Using Formspree (Recommended)

Formspree is a free service that handles form submissions and sends them to your email.

### Steps:

1. **Go to [Formspree.io](https://formspree.io)**

2. **Sign up for a free account**

3. **Create a new form:**
   - Click "New Form"
   - Give it a name (e.g., "Portfolio Contact Form")
   - Enter your email address (where you want to receive messages)

4. **Get your form endpoint:**
   - After creating the form, you'll see an endpoint like:
     ```
     https://formspree.io/f/xwpebvyz
     ```
   - Copy this URL

5. **Add it to your `.env` file:**
   ```env
   VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/xwpebvyz
   ```
   (Replace `xwpebvyz` with your actual form ID)

6. **Restart your dev server:**
   ```bash
   # Stop the server (Ctrl+C) and restart
   npm run dev
   ```

7. **Test it:** Fill out the contact form and submit. You should receive an email!

### Free Plan Limits:
- 50 submissions per month
- No spam filtering
- Formspree branding

For unlimited submissions, upgrade to a paid plan ($10/month).

## Option 2: Simple Mailto Link

If you don't want to use Formspree, use a mailto link (opens the user's email client):

This requires changing the ContactForm component. The form will open the user's default email application instead of sending through a backend.

## Option 3: Alternative Services

Instead of Formspree, you can use:
- **EmailJS** - https://www.emailjs.com (free tier: 200 emails/month)
- **Web3Forms** - https://web3forms.com (free, unlimited)
- **Basin** - https://usebasin.com (free tier available)

## Current Setup

Your `.env` file currently does NOT have `VITE_FORMSPREE_ENDPOINT` configured.

Without this, the form will try to send to a placeholder URL and fail.

## Quick Setup (5 minutes)

1. Go to https://formspree.io
2. Sign up (free)
3. Create a form
4. Copy the endpoint URL
5. Add to `.env`: `VITE_FORMSPREE_ENDPOINT=your_url_here`
6. Restart dev server
7. Done!

