# Dynamic import behaves differently in `tsx` and `node`

## Steps to reproduce

  - run `npm install`
  - run `npm run run:node`
  - run `npm run run:tsx`
  - compare the result.

## History

I noticed this when I was working with `tsx` and `vite`, we use `tsx` for development and `node` for production.
First I was using named imports to import a commonjs package, `vite` errored and suggested to use default import:
```
CommonJS modules can always be imported via the default export, for example using:

import pkg from 'package';
const {default} = pkg;
```
So I did that, and it worked with `node`, but not with `tsx`.
`tsx` supports named imports but not default import, and named imports don't work with this package on `node`.
So this differences was an issue, because there's no overlaped way to import that would work in both.

I used debugger and I looked into what's happening, I managed to strip it down to this repo.
