var testsContext = require.context("./app", true, /\.js$/);
testsContext.keys().forEach(testsContext);
