// ------
// This module contains the features responsible for managing the app's data.
// -
import BrowserStorage from '../components/storage.js';
import NewToDo from '../components/new-to-do.js';
import ModalBox from '../components/modal-box.js';

export default class Model {
    constructor(){
        this.browserStorage = new BrowserStorage();
        this.newToDo = new NewToDo();
        this.modalBox = new ModalBox();
        this.toDoList = this.browserStorage.getToDoList();
        this.newToDoId = this.toDoList[this.toDoList.length -1].id + 1;
    }

    getToDoList() {
        return this.toDoList;
    }

    findToDoIndex(id) {
        return this.toDoList.findIndex((modelToDo) => modelToDo.id === id);
    }

    findToDoId(index) {
        const toDo = this.toDoList[index]
        return toDo.id;
    }

    findToDo(id) {
        const toDoIndex = this.findToDoIndex(id);
        const toDo = this.toDoList[toDoIndex];
        return toDo;
    }

    toggleCompletedCbox(id) {
        const toDo = this.findToDo(id);
        toDo.completed = !toDo.completed;
        
        this.browserStorage.saveToDoList();
    }

    saveNewToDo() {
        const values = this.newToDo.getNewToDoValues();
        const modelToDo =  this.newToDo.createToDo(this.newToDoId++, values);
        
        this.toDoList.push(modelToDo);
        this.browserStorage.saveToDoList();
        
        return {...modelToDo};
    }

    saveEditedToDo(toDo) {
        const toDoId = toDo.id;
        const toDoIndex = this.findToDoIndex(toDoId);

        this.modalBox.returnNewValues((values) => Object.assign(this.toDoList[toDoIndex], values));
        
        this.browserStorage.saveToDoList();
    }
    
    deleteToDo(id) {
        const toDoIndex = this.findToDoIndex(id);

        this.toDoList.splice(toDoIndex, 1);

        this.browserStorage.saveToDoList();
    }
}