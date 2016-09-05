# LisaEddington.com

Portfolio site for my beautiful wife and her beautiful artwork.

## Base Dependencies
- node/npm (http://nodejs.org/)
- grunt-cli (http://gruntjs.com/getting-started)
- ruby (already installed on OSX)
- sass (http://sass-lang.com/install)

## Project Installation - NPM
This project can be installed locally using npm. After checking the project out from source control, `cd` to the root directory where package.json is located, and `npm install ./`.

## Third Party Libs
When installing a new third party lib to the src/vendor directory, make sure to add a new entry to the Gruntfile under the concat:vendor task.

## Workflow
All development work should be done in the 'src' directory. Use the grunt commands below for running the project locally and processing for handoff to QA/Staging/Production.

## Using grunt in the Terminal
`cd` to the trunk directory with the Gruntfile.js and use the following commands:

- `grunt run` : runs a local static server with automatic live-reloading on port http://localhost:<%= serverPort %>. Lints javascript, compiles SASS, and copies all files over to a 'local' folder that the static server points to. Watches all files for changes.
- `grunt build` : packages all files for delivery to staging or production, output to a 'public' folder. Lints javascript, optimizes javascript, compiles and minifies CSS.
