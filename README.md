## MCLE TRACKR

An AngularJS spa for tracking and cataloguing the State Bar's mandatory continuing legal education credit hours for practicing attorneys and legal professionals.


## Continuing Legal Education Information

[The State Bar of California's MCLE Guidelines](http://mcle.calbar.ca.gov/)

## Configuration

```
$ npm install
```

## Run the Application

```
$ grunt
```

viewable here : [http://localhost:3000](http://localhost:3000).

>Note that unless the application is run [via Live Preview in Brackets](#use-in-brackets-live-preview), the browser will need to be refreshed to view the most recent changes.


## Use in Brackets Live Preview

To use the application with the Live Preview functionality of the Brackets text editor, go to __File > Project Settings__ and add `http://localhost:3000` to the Base URL field.

## Base Directory Structure

```
├── Gruntfile.js
├── LICENSE
├── Procfile
├── README.md
├── app
│   ├── assets
│   │   └── images
│   │       └── logo.png
│   ├── pages
│   │   └── index.html
│   ├── scripts
│   │   └── app.js
│   ├── styles
│   │   └── style.css
│   └── templates
│       └── home.html
├── package.json
└── server.js
```


## Grunt plugins

A list of the Grunt plugins in this application.

#### Watch

[Grunt watch](https://github.com/gruntjs/grunt-contrib-watch) watches for changes to file content and then executes Grunt tasks when a change is detected.

#### Copy

[Grunt copy](https://github.com/gruntjs/grunt-contrib-copy) copies files from our development folders and puts them in the folder that will be served with the frontend of your application.

#### Clean

[Grunt clean](https://github.com/gruntjs/grunt-contrib-clean) "cleans" or removes all files in your distribution folder (`dist`) so that logic in your stylesheets, templates, or scripts isn't accidentally overridden by previous code in the directory.

#### Hapi

[Grunt Hapi](https://github.com/athieriot/grunt-hapi) runs a server using [`HapiJS`](http://hapijs.com/). Happy is a Node web application framework with robust configuration options.
