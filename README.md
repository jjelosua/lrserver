# Gulp server with livereload for testing ideas

Quick and dirty livereload server to test frontend mockups. The server will listen to any changes in HTML, CSS and JS and reload the app

Each time it reloads it will show on the console errors or warnings provided hinted by _jshint_.

## Prerequisites 

This repo assumes that you have _[node.js](https://nodejs.org/en/)_ and _[npm](https://docs.npmjs.com/)_ installed and somewhere on your **PATH**

For instructions on how to install node.js check the [official page](https://nodejs.org/en/download/) for your platform

## Configuration

There are two configuration variables to tweak inside the _gulpfile.js_

1. **conf.app_cwd**: Set it to the root folder where the webapp is. (Default: '../webapp')

2. **conf.port**: Set it to whichever port you want the server to use. (Default: 8080)

## Instructions

1. Clone the repo in the folder where you have the web application you want to test

```
$ git clone https://github.com/jjelosua/lrserver
```

2. Get into the recently created _lrserver_ folder

```
$ cd lrserver
```

2. Install dependencies with npm

```
$ npm install
```

3. Review the configuration to suit your project, change the variables if needed

4. Run the server

```
$ gulp
```



    
