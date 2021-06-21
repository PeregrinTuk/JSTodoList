// ------
// This is the main file. It calls and runs the three modules to our app (controller.js, model.js and view.js).
// -
import Controller from './modules/controller.js';
import Model from './modules/model.js';
import View from './modules/view.js';

document.addEventListener('DOMContentLoaded', function() {
    const app = new Controller(new Model(), new View());
});