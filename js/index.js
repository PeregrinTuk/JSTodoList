import Controller from './modules/controller.js';
import Model from './modules/model.js';
import View from './modules/view.js';

document.addEventListener('DOMContentLoaded', function() {
    // const model = new Model();
    // const view = new View();
    
    // model.setView(view);
    // view.setModel(model);

    // view.renderToDoList();
    const app = new Controller(new Model(), new View());
});