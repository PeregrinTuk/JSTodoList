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
        // console.log(this.toDoList);
    }

    editToDo(id, values) {
        // const toDoToEdit = this.toDoList[this.findToDo(id)];
        // toDoToEdit.title = values.title;
        // toDoToEdit.description = values.description;
        // toDoToEdit.completed = values.completed;
        //// Podemos hacer lo mismo que arriba usando el metodo ´Object´ y asignandole de forma global los ´values´ que recivimos en los parentesis de la función, en lugar de tener que ir asignandolos de uno en uno.
        const toDoIndex = this.findToDo(id);
        Object.assign(this.toDoList[toDoIndex], values);

        this.browserStorage.saveToDoList();
    }

    removeToDo(id) {
        const toDoIndex = this.findToDo(id);

        this.toDoList.splice(toDoIndex, 1);
        this.browserStorage.saveToDoList();
    }
}