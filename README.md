# WebsiteTemplateWebpack
A fully responsive website template made with HTML, CSS and JavaScript. Bundled by Webpack.

HI!
This is a free responsvie webiste template containing multiple sections (header, signup section, team members, footer, ...).
It is made using node package manager and Webpack file bundler. You need to install NPM in order to run the project:

`[sudo] npm install npm -g`

The `-g` flag makes sure that NPM installs globally so you can use it in other projects.
All of the required dependencies are listed inside `package.json`. Run 

`[sudo] npm install` 

To install all of the dependencies from this file. `package.json` must be in your current dierectory when you run the command. After running it a folder called `nodes_modules` appear in your directory. It conatins all of the required dependencies. But keep in mind that this way they are installed locally for this project only. If you want a dependency to be accessible from other npm projects use `-g` global flag to install in your root directory.

There are 3 ways to run the project:

1. In development mode:

`[sudo] npm run dev`

which runs the project from the `./src` folder.

2. In production mode:

`[sudo] npm run build`

which minifies all of the files (makes them as small as possible by for example removing the spaces) and bundle them into one small file which is suitable for production. After running


