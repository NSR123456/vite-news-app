---

# Vite News App

A modern, fast, and responsive news application built with React and Vite. Stay updated with the latest headlines from around the world.

## 🚀 Features

* **Real-time News**: Fetches live news articles from various sources.
* **Responsive Design**: Optimized for both desktop and mobile devices.
* **Fast Development**: Powered by Vite for rapid builds and hot module replacement.

## 🛠️ Tech Stack

* **Frontend**: React
* **Build Tool**: Vite
* **Styling**: 
* **API**: 

## 📦 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/NSR123456/vite-news-app.git
   cd vite-news-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your API key:

   ```env
   VITE_NEWS_API_KEY=your_api_key_here
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:5173`.

## 🌐 Deployment

To deploy the app to GitHub Pages:

1. Install `gh-pages`:

   ```bash
   npm install gh-pages --save-dev
   ```

2. Add deployment scripts to `package.json`:

   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Deploy the app:

   ```bash
   npm run deploy
   ```

   Your app will be live at `https://NSR123456.github.io/vite-news-app/`
