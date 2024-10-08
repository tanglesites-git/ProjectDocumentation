# Testing Library

## Installing Packages
```powershell
npm install @testing-library/react @testing-library/user-events jsdom
```

Next we need to edit the config file for vite.

#### `vite.config.ts`
```diff
+ /// <reference types="vitest" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
+ test: {
+   globals: true,
+   environment: "jsdom"
  }
});
```

Because vitest runs on node and node does not have a DOM, we need something like `jsdom` in which to render our React components during testing. `JSDOM` is known as headless browser, this means it cannot render visual content, but does interact with html similar to a browser. From the perspective of the HTML, it thinks JSDOM is a browser. 