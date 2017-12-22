#Insight Studio

## Client Template

### Tooling
-   Webpack
-   Gulp
-   BroswerSync
-   Handlebars
-   Bootstrap
-   Navigo Routing
-   Font Awesome
-   Forever

### Installation

1.  [Download](../../archive/master.zip) this template.
1.  Unzip and rename the template directory.
1.  Empty [`README.md`](README.md) and fill with your own content.
1.  Move into the new project and `git init`.
1.  Install dependencies with `npm install`.

### Dependencies

Install with `npm install`.

At the beginning of each cohort, update the versions in
[`package.json`](package.json) by replace all versions with a glob (`*`) and
running `npm update --save && npm update --save-dev`. You may wish to test these
changes by deleting the `node_modules` directory and running `npm install`.
Fix any conflicts.

### Commands
-   Open a terminal windown and run `npm start` - will launch a BroswerSync server on http://localhost:8080
-   For Deployment / Production, run `gulp build` - will fire Webpack to bundle all Javascript and Styling into one bundled files in `public/`.

