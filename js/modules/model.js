import BrowserStorage from '../components/storage.js';
import NewToDo from '../components/new-to-do.js';

export default class Model {
    constructor(){
        this.browserStorage = new BrowserStorage();
        this.newToDo = new NewToDo();
        // this.view = null;
        this.toDoList = this.browserStorage.getToDoList();
        this.newToDoId = this.toDoList[this.toDoList.length -1].id + 1;
        
        // this.toDoList.splice(10, 1);
        // this.browserStorage.saveToDoList();
        // console.log(this.toDoList);
    }

    // setView(className) {
    //     this.view = className;
    // }

    getToDoList() {
        return this.toDoList;
    }

    findToDo(id) {
        return this.toDoList.findIndex((modelToDo) => modelToDo.id === id);
    }

    addToDo() {
        const values = this.newToDo.getNewToDoValues();
        const modelToDo =  this.newToDo.createToDo(values);

        console.log(modelToDo);
        // this.toDoList.push(modelToDo);
        // this.browserStorage.saveToDoList();
        
        // return {...modelToDo};
    }

    // addToDo(title, description) {
    //     // const modelToDo = {
    //     //     id: this.rowId++,
    //     //     title: title,
    //     //     description: description,
    //     //     completed: false,
    //     // }

    //     this.toDoList.push(modelToDo);
    //     this.browserStorage.saveToDoList();
        
    //     return {...modelToDo};
    // }

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