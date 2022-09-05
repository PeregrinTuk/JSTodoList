// ------
// This file uses Express (a framework for Node.js) to generate a local host.
// -
const express = require('express');
const app = express();
const message = '\n/########################################\\' +
                '\n|         LOCAL SERVER LISTENING         |' +
                '\n| -----         ----------         ----- |' +
                '\n|  > PORT => localhost:3000              |' +
                '\n|  > Now you can use our TodoList app    |' +
                '\n|  > ;D                                  |' +
                '\n\\########################################/';

app.use(express.static(__dirname + '/../'));

app.listen('3000', function() {
  console.log(message);
});