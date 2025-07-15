# @sixapart/mt-toolkit

This package provides JavaScript components and TypeScript definitions for Movable Type development.

## Installation

```
npm install @sixapart/mt-toolkit@latest
```

## Usage

### Importing type definitions for global objects

Use `import` statements in your TypeScript files:

```ts
import "@sixapart/mt-toolkit";
location.href = window.CMSScriptURI; // redirect to dashboard
```

Or use `types` in `tsconfig.json`:

```json
{
  "compilerOptions": {
    "types": ["@sixapart/mt-toolkit"]
  }
}
```

Or use `typeRoots` in `tsconfig.json`:

```json
{
  "compilerOptions": {
    "typeRoots": ["node_modules/@sixapart"]
  }
}
```

### Svelte components for Content Types

```ts
import {
  ContentFieldOptionGroup,
  ContentFieldOption,
} from "@sixapart/mt-toolkit/contenttype";
import type {
  ConfigSettings,
  OptionsHtmlParams,
  Field,
} from "@sixapart/mt-toolkit/contenttype";
```

### License

MIT License

Copyright (c) Six Apart Ltd.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
