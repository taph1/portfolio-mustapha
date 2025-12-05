# How to Add or Edit Skills

Skills are stored in translation files, so you can add them in multiple languages.

## Where to Find Skills

Skills are located in:
- `src/styles/locales/en.json` (English)
- `src/styles/locales/es.json` (Spanish)
- `src/styles/locales/fr.json` (French)

## How to Add a New Skill

### Option 1: Add to All Languages

1. **Open each locale file** and find the `skillsList` array

2. **Add your new skill** to the array in each file:

**English (`src/styles/locales/en.json`):**
```json
{
  "skillsList": [
    "JavaScript",
    "Node.js / Express",
    "REST APIs",
    "MySQL / H2",
    "HTML / CSS",
    "Git & GitHub",
    "Java (Learning)",
    "Spring Boot (Learning)",
    "Your New Skill Here"
  ]
}
```

**Spanish (`src/styles/locales/es.json`):**
```json
{
  "skillsList": [
    "JavaScript",
    "Node.js / Express",
    "APIs REST",
    "MySQL / H2",
    "HTML / CSS",
    "Git & GitHub",
    "Java (Aprendiendo)",
    "Spring Boot (Aprendiendo)",
    "Tu Nueva Habilidad Aquí"
  ]
}
```

**French (`src/styles/locales/fr.json`):**
```json
{
  "skillsList": [
    "JavaScript",
    "Node.js / Express",
    "APIs REST",
    "MySQL / H2",
    "HTML / CSS",
    "Git & GitHub",
    "Java (Apprentissage)",
    "Spring Boot (Apprentissage)",
    "Votre Nouvelle Compétence Ici"
  ]
}
```

3. **Save all files**

4. **Refresh your browser** - the new skill will appear!

## Quick Method: Add to One Language

If you only want to add skills in one language (e.g., English only), just edit that file. The same skills will show regardless of language.

## Examples of Skills to Add

### Frontend:
- React
- Vue.js
- Angular
- TypeScript
- Tailwind CSS
- Bootstrap
- Sass/SCSS

### Backend:
- Python
- Django
- Flask
- PHP
- Ruby on Rails
- PostgreSQL
- MongoDB

### DevOps:
- Docker
- Kubernetes
- CI/CD
- AWS
- Azure
- Linux

### Tools:
- Figma
- Photoshop
- VS Code
- Postman
- Jira

## Current Skills

Your portfolio currently shows:
- JavaScript
- Node.js / Express
- REST APIs
- MySQL / H2
- HTML / CSS
- Git & GitHub
- Java (Learning)
- Spring Boot (Learning)

## Tips

- Keep skill names short (1-3 words max)
- List most important skills first
- Group related skills (e.g., "React / Next.js")
- Use "(Learning)" suffix for skills you're currently studying
- Aim for 8-12 skills total (too many can look cluttered)

## After Adding Skills

The skills will automatically appear in a grid on your portfolio home page. They will:
- Show in a responsive grid (2-4 columns depending on screen size)
- Adapt to dark mode automatically
- Update immediately when you refresh the page

No need to restart the server - just save the files and refresh!

