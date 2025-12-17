# Deployment & Run Instructions

## 1. Local Development
To run the roadmap microsite locally:

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 2. Production Build
To create a production-ready build:

```bash
npm run build
```

This will generate a `dist` folder containing static assets.

## 3. Deployment to product.wewalk.io
Since this is a client-side routing app (SPA) intended for a subdomain:

**Option A: Static Hosting (Netlify/Vercel/S3)**
- Deploy the contents of `dist`.
- **Crucial**: Configure the web server to rewrite all requests (`/*`) to `index.html` so that React Router handles deep links (e.g., `/roadmap/2026`).
- **Base URL**: If hosting at root of subdomain (`product.wewalk.io`), no changes needed. If hosting in a subdirectory, set `base` in `vite.config.ts`.

**Option B: Existing Nginx/Apache**
- Upload `dist` files.
- Add try_files directive for SPA support:
  ```nginx
  location / {
    try_files $uri $uri/ /index.html;
  }
  ```

## 4. React Native Reuse Strategy
The components were built with React Native reuse in mind:

- **Logic Separation**: Data arrays (roadmap items, pillars) are defined in the components but can be extracted to pure TS files or JSON for sharing.
- **Component Structure**: `PillarCard`, `QuarterColumn`, `FeasibilityCard` follow a pattern that maps 1:1 to Views in React Native (`div` -> `View`, `h3` -> `Text`).
- **Icons**: `lucide-react` is used, which has a direct equivalent `lucide-react-native`.
- **Styling**: We used standard CSS classes (Tailwind-like utility approach in logic, though implemented via global styles). For RN, port these styles to `StyleSheet.create`.

**Shared Code Candidates:**
- Types/Interfaces (`PillarCardProps`, `QuarterColumnProps`)
- Text Content / Constants
- Icon mappings
