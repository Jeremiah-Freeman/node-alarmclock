Project Setup:
(be sure gulp is installed globally)
From project root, run the following commands:

npm init
npm install gulp --save-dev
npm browserify --save-dev
npm install vinyl-source-stream --save-dev
npm install gulp-concat --save-dev
npm install gulp-uglify --save-dev
npm install gulp-util --save-dev
npm install del --save-dev
npm install jshint --save-dev
npm install gulp-jshint --save-dev
npm install browser-sync --save-dev

npm install bower -g
bower init
bower install jquery --save
bower install bootstrap --save



Dependencies (what do these thing do?):

Node package manager: installation of other people's useful
Gulp: automation of build tasks and use of packages
Browserify:  manage requirements and modules
Vinyl Source Stream: Somehow makes using browserify easier
Gulp concat: Concatenates files
Gulp uglify: minifies files for size and machine readability
Del: clean utility to delete builds before re-creating
Gulp Utility: allows creation of environment variables
JS Hint: Javascript linter
Bower: Front end dependency manager
BrowserSync: Development server utility
