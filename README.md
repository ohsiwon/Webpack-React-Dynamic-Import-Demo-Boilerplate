## Webpack + React Dynamic Import Boilerplate

#### Features
Pre-configured webpack with
* Demo example of using dynamic import and code splitting
* Basic essentials (eslint, jest, sass, cssModule support based on resource query)
* Vendor code splitting
* This Demo is using [React-loadable](https://github.com/jamiebuilds/react-loadable). However, code splitting is also working with React.lazy or any other dynamic import methods.

#### How to use

|Start                    |Command                 |
|-------------------------|------------------------|
|Install                  | `npm install`          |
|Development Environment  | `npm run dev`          |
|Run test                 | `npm run test`         |
|Build coverage           | `npm run test:coverage`|
|Build production         | `npm run build`        |
|Run production from local| `npm start`            |

#### Bundle Analyzer
Build production with Bundle Analyzer `BA_MODE={server|static} npm run build`

#### Using cssModule
To enable cssModule append query `module` to the end of target path.
```js
import from './style.css'; // default
import style from './style.css?module'; //cssModule

import from './style.scss'; // default
import style from './style.scss?module'; //cssModule
```
cssModule can be used together with regular CSS.

