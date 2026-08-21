This project is built with [Vite](https://vite.dev/) + React + TypeScript.

## Requirements

- Node.js >= 22.12.0
- npm (>= 10)

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Starts the Vite development server.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits. Hot Module Replacement (HMR) is enabled.

### `npm run test`

Runs the test suite once with [Vitest](https://vitest.dev/) (non-watch mode).

### `npm run test:watch`

Runs the tests in interactive watch mode.

### `npm run build`

Type-checks the project with `tsc` and builds the app for production into the `dist` folder.

### `npm run preview`

Serves the production build locally for previewing.

## Project Structure

```
index.html            # Einstiegspunkt (Vite)
public/               # Statische Assets (werden 1:1 kopiert)
src/                  # Quellcode
  index.tsx           # React-Einstieg (createRoot)
  App.tsx             # Routing & Layout
  pages/              # Seiten
  pageElements/       # Wiederverwendbare UI-Bausteine
  scss/               # Sass-Styles
  services/           # API-Services
  entities/           # Typen/Modelle
  contexts/           # React-Context
  constants/          # Konstanten
```

## Configuration

- `vite.config.ts` – Vite- und Vitest-Konfiguration
- `tsconfig.json` – TypeScript-Konfiguration
- `.npmrc` – npm-Einstellungen (`legacy-peer-deps`, nötig für react-plx)

## Learn More

- [Vite documentation](https://vite.dev/guide/)
- [React documentation](https://react.dev/)
- [Vitest documentation](https://vitest.dev/guide/)


