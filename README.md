# WebsiteTemplateWebpack
A fully responsive website template made with HTML, CSS and JavaScript. Bundled by Webpack.

HI!
This is a free responsvie webiste template containing multiple sections (header, signup section, team members, footer, ...).
It is made using node package manager and Webpack file bundler. You need to install NPM in order to run the project:

`[sudo] npm install npm -g`

The `-g` flag makes sure that NPM installs globally so you can use it for other projects as well.
All of the required dependencies are listed inside `package.json`. Run 

`[sudo] npm install` 

To install all of the dependencies from this file. `package.json` must be in your current dierectory when you run the command. After running it a folder called `nodes_modules` appear in your directory. It conatins all of the required dependencies. But keep in mind that this way they are installed locally for this project only. If you want a dependency to be accessible from other npm projects use `-g` global flag to install in your root directory.

Run the project using webpack-webserver

`[sudo] npm run start`

It will make a local server with a live connection on `http://localhost:8080`.
The project can also run on development mode

`[sudo] npm run dev`

and on production mode

`[sudo] npm run build`

These 3 scripts are all listed inside the `package.json` file.

Enjoy!

payman.khayree@gmail.com

Some screenshots of the project:

[Screenshot 1, the Header](screenshots/screenshot-1-scaled.png)

[Screenshot 2](screenshots/screenshot-2-scaled.png)

[Screenshot 3](screenshots/screenshot-3-scaled.png)

[Screenshot 4](screenshots/screenshot-4-scaled.png)

[Screenshot 5](screenshots/screenshot-5-scaled.png)

