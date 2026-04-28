# Rahi International App - Beginner's Guide

This guide will help you manage your website manually after you download it.

## 📁 Which file does what?

*   **`src/App.tsx`**: The **most important file**. It contains all the sections of your site (Hero, Products, Footer, etc.). If you want to change any text or link, you do it here.
*   **`src/index.css`**: This is where the global "look" is handled (fonts, background colors).
*   *`tailwind.config.js`*: This holds your "Brand Colors" (the dark blue and gold) so you can use them easily throughout the site.
*   **`package.json`**: Like a shopping list. It tells your computer which "engines" (like React or Lucide Icons) it needs to download to run the site.
*   **`public/` (Create this if missing)**: This is where you put your physical images (logo.png, banner.jpg).

---

## 🖼️ How to replace the Logo manually

1.  **Prepare your logo**: Save your logo as `logo.png` or `logo.svg`.
2.  **Add to project**: Put it inside a folder named `public` (at the same level as `src`).
3.  **Edit the code**: 
    *   Open `src/App.tsx`.
    *   Find the `Navbar` component (near line 82).
    *   Look for the `Globe2` icon inside the logo section.
    *   Replace it with: `<img src="/logo.png" className="w-12 h-12 object-contain" alt="Logo" />`.

---

## 📸 How to replace Images manually

1.  Find the section in `src/App.tsx` (e.g., the `Hero` section or `Products`).
2.  Look for lines starting with `src="https://images.unsplash.com..."`.
3.  Replace that entire link with the path to your image, for example: `src="/my-product-1.jpg"`.
4.  Make sure your image is actually in the `public` folder.

---

## 🚀 How to publish on GitHub (Manual Way)

1.  **Download as ZIP**: In AI Studio, go to the settings or export menu and download the project.
2.  **Install Node.js**: Download "Node.js" (LTS version) from the official website on your computer.
3.  **On your computer**:
    *   Extract the ZIP folder.
    *   Open a terminal (or Command Prompt) inside that folder.
    *   Type `npm install` (this downloads all the "engines").
    *   Type `npm run dev` to see it on your local computer.
4.  **GitHub**:
    *   Create a new "Repository" on GitHub.
    *   Upload all the files from your folder to that repository.
    *   To make it live, search for "GitHub Pages" in your repository settings!

---

## 🛠️ Need help?
Since you are not a coder, the easiest way to make changes is to **ask me right here in Gemini**! I can update the code for you, and then you just download the finished result.
