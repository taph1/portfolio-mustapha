# How to Add Your CV

## Steps to Add Your CV

1. **Place your CV file** in this `public` folder
2. **Name it `cv.pdf`** (or update the path in `src/pages/Home.jsx` if you use a different name)
3. **Supported formats**: PDF is recommended, but you can also use:
   - `cv.pdf` (recommended)
   - `cv.docx`
   - `cv.doc`
   - Any other file format

## Current Setup

The download button is configured to download `/cv.pdf` from the public folder.

If your CV has a different name or format, you can:
1. Rename it to `cv.pdf`, OR
2. Update the `href` in `src/pages/Home.jsx` to match your file name

## Example

If your CV is named `Mustapha_Jarju_CV.pdf`:
- Option 1: Rename it to `cv.pdf` and place it in the `public` folder
- Option 2: Update the button in `src/pages/Home.jsx`:
  ```jsx
  <a href="/Mustapha_Jarju_CV.pdf" download>
  ```

## File Location

```
portfolio-mustapha/
  └── public/
      └── cv.pdf  ← Place your CV here
```

After placing your CV file, refresh your browser and the download button will work!




