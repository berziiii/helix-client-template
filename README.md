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
-   HELIX CLI - Insight Studio specific

### Installation

1.  [Download](../../archive/master.zip) this template.
1.  Unzip and rename the template directory.
1.  Empty [`README.md`](README.md) and fill with your own content.
1.  Move into the new project and `git init`.
1.  Install dependencies with `npm install`.
1.  Install HELIX CLI by `npm link`.

### Dependencies

Install with `npm install`.

At the beginning of each cohort, update the versions in
[`package.json`](package.json) by replace all versions with a glob (`*`) and
running `npm update --save && npm update --save-dev`. You may wish to test these
changes by deleting the `node_modules` directory and running `npm install`.
Fix any conflicts.

`HELIX CLI` is Insight Studio's basic CLI for this framework. To insall, `npm link` from inside the root of the directory.

### GULP Commands
-   Open a terminal windown and run `gulp serve` - will launch a BroswerSync server on http://localhost:8080 with live updating from `public/`.
-   For Deployment / Production, run `gulp build` - will fire Webpack to bundle all Javascript and Styling into one bundled files in `dist/`.

### HELIX CLI
-   Test to ensure you have successfully added set up Helix by typing `helix` in terminal. You should see:

```sh

                                        WELCOME TO HELIX!

                    INSIGHT STUDIO COMMAND LINE INTERFACE FOR CLIENT TEMPLATES.

                                             ENJOY!
```

-   `helix help` will provide a list of the tasks, commands and how to use them
-   `helix generate [NAME]` or `helix g [NAME]` will generate a Component's directory, necessary files and add a route for the component for quick and efficient building. `[NAME]` is what you want to call the component. I.E. `helix generate products` will generate a products component and necessary files
-   `helix destroy [NAME]` or `helix d [NAME]` will destroy an already make component. *BE CAREFUL* ANY files or code in the components folder will be destroyed! `[NAME]` will look for the component. If non-existant or spelled incorrectly, it will not proceed. 

<!-- ### File Structure

The framework utilizes the component based approached. All of the components can be found in `app/`.

All files that consist of `app.<%something%>.ext` are part of the application component. Consider this to be the global level of the application. This includes any navigation or application wide functionality. Sub-directories in `app/` are both views along with components. -->
