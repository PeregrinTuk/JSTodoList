import BrowserStorage from './components/browser-storage.js';

export default class Model {
    constructor(){
        this.browserStorage = new BrowserStorage();
        this.classView = null;
        this.toDoList = this.browserStorage.getToDoList();
        this.rowId = this.toDoList[this.toDoList.length -1].id + 1;
    }

    setView(view) {
        this.classView = view;
    }

    getToDoList() {
        return this.toDoList;
    }

    findToDo(id) {
        return this.toDoList.findIndex((modelToDo) => modelToDo.id === id);
    }

    toggleCompleted(id) {
        const toDoIndex = this.findToDo(id);
        const toDo = this.toDoList[toDoIndex];
        toDo.completed = !toDo.completed;
        
        this.browserStorage.saveToDoList();
        console.log(this.toDoList);
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

    removeToDo(id) {
        const toDoIndex = this.findToDo(id);
        this.toDoList.splice(toDoIndex, 1);
        
        this.browserStorage.saveToDoList();
    }
}