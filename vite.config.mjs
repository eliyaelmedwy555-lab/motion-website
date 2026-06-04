import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Builds the main-site React app into a single committed ES module:
//   assets/app.bundle.js
// Deploy stays static (no Vercel build); clients/** are untouched.
export default defineConfig({
  plugins: [react()],
  // React reads process.env.NODE_ENV; lib builds don't define it, so inject it
  // to avoid a "process is not defined" ReferenceError in the browser.
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
  build: {
    outDir: '.',
    emptyOutDir: false,        // never wipe the repo root
    minify: 'esbuild',
    lib: {
      entry: 'app.jsx',
      formats: ['es'],
      fileName: () => 'assets/app.bundle.js',
    },
    // React + ReactDOM are bundled in (not externalized).
  },
});
