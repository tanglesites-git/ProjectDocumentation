# Vitest

## Setup Vitest

This part of the documentation is assuming you already have a brand-new React project to work with. If you do not, 
run the following command. 
```powershell
npm create vite@latest
```
From here you should be presented with a dropdown of choices: Choose `React`<br />
```powershell
❯ npm create vite@latest test

> npx
> create-vite test

√ Target directory "test" is not empty. Please choose how to proceed: » Ignore files and continue
? Select a framework: » - Use arrow-keys. Return to submit.
    Vanilla
    Vue
>   React
    Preact
    Lit
    Svelte
    Solid
    Qwik
    Others
```
Then on the next screen you should be able to choose your flavor: We will choose `Typescript + SWC`
```powershell
❯ npm create vite@latest test

> npx
> create-vite test

√ Target directory "test" is not empty. Please choose how to proceed: » Ignore files and continue
√ Select a framework: » React
? Select a variant: » - Use arrow-keys. Return to submit.
    TypeScript
>   TypeScript + SWC
    JavaScript
    JavaScript + SWC
    Remix ↗
```
Then shortly after, because Vite is fast, you should see a set of instructions: <br /> 
```powershell
❯ npm create vite@latest test

> npx
> create-vite test

√ Target directory "test" is not empty. Please choose how to proceed: » Ignore files and continue
√ Select a framework: » React
√ Select a variant: » TypeScript + SWC

Scaffolding project in E:\test...

Done. Now run:

  cd test
  npm install
  npm run dev

```
Now open your terminal and input the following command. 

```powershell
npm i
```
This will install the predefined `dependencies` and `devDependencies` in the `package.json`.
Then immediately after run this command: 
```json
npm i -D vitest @vitest/ui
```

This will install `vitest` and `@vitest/ui` packages as dependencies in our project.

Now your `package.json` should look like this:
```diff
{
  "name": "tanglesites-client-documentation",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview",
+   "test": "vitest",
+   "test:ui": "vitest --ui"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@eslint/js": "^9.11.1",
    "@types/react": "^18.3.10",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react-swc": "^3.5.0",
    "eslint": "^9.11.1",
    "eslint-plugin-react-hooks": "^5.1.0-rc.0",
    "eslint-plugin-react-refresh": "^0.4.12",
    "globals": "^15.9.0",
    "typescript": "^5.5.3",
    "typescript-eslint": "^8.7.0",
+   "vite": "^5.4.8",
+   "vitest": "^2.1.2",
+   "@vitest/ui": "^2.1.2"
  }
}
```
 
 In the root of your directory, create a folder `tests`.
 ```ps
 mkdir tests; ni tests/sample.test.ts;
 ```
 or if your setup is different then mine...
 ```powershell
  New-Item -Path . -Name tests -ItemType Directory;
  New-Item -Path ./tests -Name sample.test.ts -ItemType File
 ```

 Inside the file `sample.test.ts` place this snippet of code:
 
 ```ts
import { it, expect, describe } from 'vitest';

describe('Sample Test Case', () => {
  it('Expect `1` to be Truthy', () => {
    expect(1).toBeTruthy();
  });
});
 ```

And you should get the following readout:
```powershell
❯ npm run test

> root-directory@0.0.0 test
> vitest


 DEV  v2.1.2 E:/RootDirectory

 ✓ tests/sample.test.ts (1)
   ✓ Sample Test Case (1)
     ✓ Expect `1` to be Truthy

 Test Files  1 passed (1)
      Tests  1 passed (1)
   Start at  12:01:16
   Duration  243ms (transform 22ms, setup 0ms, collect 26ms, tests 2ms, environment 0ms, prepare 75ms)


 PASS  Waiting for file changes...
       press h to show help, press q to quit
```

### Next Steps (Installing Testing Library)
[Testing Library](./testing-library.md)