import BrowserStorage from './components/browser-storage.js';

export default class Model {
    constructor(){
        this.browserStorage = new BrowserStorage();
        this.view = null;
        this.toDoList = this.browserStorage.getToDoList();
        this.rowId = this.toDoList[this.toDoList.length -1].id + 1;
    }

    setView(className) {
        this.view = className;
    }

    getToDoList() {
        return this.toDoList;
    }

    findToDo(id) {
        return this.toDoList.findIndex((modelToDo) => modelToDo.id === id);
    }

    addToDo(title, description) {
        const modelToDo = {
            id: this.rowId++,
            title: title,
            description: description,
            completed: false,
        }

        this.toDoList.push(modelToDo);
        this.browserStorage.saveToDoList();
        
        return {...modelToDo};
    }

    toggleCompleted(id) {
        const toDoIndex = this.findToDo(id);
        const toDo = this.toDoList[toDoIndex];
        toDo.completed = !toDo.completed;
        
        this.browserStorage.saveToDoList();
    }

    editToDo(id, values) {
        const toDoIndex = this.findToDo(id);
        Object.assign(this.toDoList[toDoIndex], values);
        // ^ Con el metodo ´Object´ le asignamos al ´toDo´ selecionado los ´values´ que recivimos en los parentesis de la función, sin necesidad de tener que ir asignandolos de uno en uno.
        this.browserStorage.saveToDoList();
    }

    removeToDo(id) {
        const toDoIndex = this.findToDo(id);

        this.toDoList.splice(toDoIndex, 1);
        this.browserStorage.saveToDoList();
    }
}