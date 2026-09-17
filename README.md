# Movie Explorer

Movie Explorer is a responsive React application for discovering TV shows. Browse shows from TVMaze, search by title, and open a details modal with the poster, rating, release year, genres, and overview.

## Features

- Home page with branded navigation, hero banner, and Movie Explorer CTA.
- Responsive show listing grid.
- Show search powered by the TVMaze search endpoint.
- Reusable show cards with poster, title, rating, and release year.
- Details modal with a larger image and overview.
- Netlify SPA redirect configuration for client-side routes.

## Tech Stack

- React 19
- React Router
- Vite
- CSS
- TVMaze API
- Oxlint

## Requirements

- Node.js 22.12 or newer
- npm

## Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/monirul-hasan06/movie-explorer.git
cd movie-explorer
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server. |
| `npm run build` | Create a production build in `dist`. |
| `npm run preview` | Preview the production build locally. |
| `npm run lint` | Run Oxlint. |

## API

The app uses the public [TVMaze API](https://www.tvmaze.com/api):

- `GET https://api.tvmaze.com/shows` loads the initial show list.
- `GET https://api.tvmaze.com/search/shows?q=:query` searches by title.

No API key or environment variables are required.

## Project Structure

```text
src/
	components/       Reusable navigation, hero, card, and modal components
	pages/            Home and movie listing routes
	App.jsx           Application routes
	App.css           Application styles
	index.css         Global styles
```

## Deployment

The repository includes `vercel.json` with the following configuration:

- Build command: `npm run build`
- Publish directory: `dist`
- Node version: `22.12.0`
- SPA fallback: all routes serve `index.html` for React Router

To deploy with Vercel:

1. Import the repository into Vercel from GitHub.
2. Select the `main` branch.
3. Keep the detected Vite settings and click **Deploy**.

No environment variables are required.
