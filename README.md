# Portfolio - Mustapha Jarju

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS.

## 🚀 Features

- ✨ Modern and responsive design
- 🌍 Multilingual support (English, Spanish, French)
- 🌙 Dark mode toggle
- 📱 Mobile-friendly
- 🗂️ Project showcase with Supabase integration
- 📧 Contact form with Formspree integration
- 📄 Downloadable CV
- ⚡ Fast loading with Vite

## 🛠️ Tech Stack

- **Frontend:** React 18, Vite
- **Styling:** Tailwind CSS
- **Routing:** React Router v6
- **Animations:** Framer Motion
- **Database:** Supabase
- **i18n:** react-i18next
- **Forms:** Formspree

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/portfolio-mustapha.git

# Navigate to project directory
cd portfolio-mustapha

# Install dependencies
npm install

# Create .env file and add your credentials
cp .env.example .env

# Start development server
npm run dev
```

## 🔧 Environment Variables

Create a `.env` file in the root directory:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_FORMSPREE_ENDPOINT=your_formspree_endpoint (optional)
```

## 📝 Usage

### Adding New Skills

Edit the `skillsList` array in:
- `src/styles/locales/en.json`
- `src/styles/locales/es.json`
- `src/styles/locales/fr.json`

### Adding New Projects

Projects are managed in Supabase:
1. Go to your Supabase Dashboard → Table Editor
2. Click on the `projects` table
3. Click "Insert row" and fill in the fields (title, description, demo, repo, etc.)
4. Projects will appear automatically on your portfolio

### Updating CV

Replace `public/cv.pdf` with your CV file.

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com) and import your GitHub repository
3. Add environment variables in Vercel:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
   - `VITE_FORMSPREE_ENDPOINT` (optional)
4. Deploy! Vercel will automatically redeploy on every push to GitHub

## 📄 License

MIT License - feel free to use this for your own portfolio!

## 👤 Author

**Mustapha Jarju**
- Portfolio: [Live Site](https://portfolio-nine-puce-46.vercel.app)
- GitHub: [@taph1](https://github.com/taph1)
- Email: actionsatis@gmail.com

## 🙏 Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Heroicons](https://heroicons.com/)

