# 🎬 Movie App

A React web application for browsing popular movies, searching the TMDB catalogue, and saving favourite movies directly in your browser.

## ⚡ Features

- 🌟 **Browse Popular Movies:** Discover trending and popular movies fetched live from TMDB.
- 🔍 **Search Capabilities:** Search for any movie title across the TMDB database.
- 📱 **Detailed Views:** Display movie posters, titles, and release years.
- ❤️ **Favourites Management:** Quickly add or remove movies from your personal favourites list.
- 💾 **Persistent Storage:** Favourites are automatically saved to browser local storage.
- 🧭 **Smooth Navigation:** Seamlessly navigate between the Home and Favourites pages.

## 🛠️ Built With

- ⚛️ **React** - User Interface
- 🛣️ **React Router** - Navigation & Routing
- ⚡ **Vite** - Build Tool & Development Server
- 🎬 **TMDB API** - Movie Data Source

## 🚀 Getting Started

### 📋 Prerequisites

- **Node.js** and **npm** installed on your system.
- A **TMDB API key** ([Get one here](https://www.themoviedb.org/documentation/api)).

### 📥 Installation

1. Clone the repository and go to the app directory:

   ```bash
   git clone https://github.com/RayanMendis56/Movie-App
   cd movie-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env.local` file in the project root and add your TMDB configuration:

   ```env
   VITE_TMDB_BASE_URL=https://api.themoviedb.org/3
   VITE_TMDB_API_KEY=your_tmdb_api_key
   ```

   Replace `your_tmdb_api_key` with your TMDB API key. Do not commit real credentials to a public repository.

4. Start the development server:

   ```bash
   npm run dev
   ```

   Open the local URL printed in the terminal.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Build the app for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run Oxlint |

## Project Structure

```text
src/
├── assets/       # Images and other static assets
├── components/   # Shared UI components
├── contexts/     # Shared movie and favourites state
├── css/          # Stylesheets
├── pages/        # Home and Favourites pages
├── services/     # TMDB API requests
├── App.jsx       # App routes and shared layout
└── main.jsx      # React app entry point
```

## Favourites

Favourite movies are stored in the browser's local storage, so they remain available across page reloads in the same browser.

## API

Movie data is provided by [The Movie Database (TMDB)](https://www.themoviedb.org/). The app uses the popular movies and movie search endpoints.

The API key is used by the frontend, so it is included in browser requests. Use a browser-appropriate TMDB key and configure any available usage restrictions; do not put private server credentials in Vite environment variables.

## Author
Rayan Mendis- IT undergraduate at Curtin University

## License

No license is specified for this project.
```
