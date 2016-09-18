# AngularJS-Webpack-Boilerplate

Simple AngularJS boilerplate using karma, webpack and webpack-dev-server.


### Installation

Clone the repository and run ```npm install```

### Scripts

There are four tasks available as npm-scripts.  

```npm run test``` will start the karma-test-runner and execute tests using Chrome. In the karma-configuration,  ```watch``` is set, so changing your code will result in a rerun of all the tests. Test coverage is provided via Istanbul and saved in the ```./coverage``` folder.

```npm run watch``` will start up webpack-dev-server and serve your files. Your webapplication is available at ```http://localhost:8080/```. Unminfied and unuglyfied sourcecode is available via the browsers devtools. Live-reload is activated.

```npm run build``` will start the build-process. The output is found in ```./dst```. All JavaScript will be minified and uglyfied and split into a ```[build-hash]-vendor.js```and a ```[build-hash]-bundle.js``` file. CSS will be minified and saved to ```[bundle-hash]-style.css```. Script-tags and style-tags will be automatically placed in the index.html-template.

```npm run watch:dst``` will start the build-process and serve the result at ```http://localhost:8080/```. Live-reload is activated.

### Questions

If you have any questions about the configuration or usage, feel free to open an issue.
