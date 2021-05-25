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
    }//v0.2

    findToDoIndex(id) {
        return this.toDoList.findIndex((modelToDo) => modelToDo.id === id);
    }//v0.2

    findToDoId(index) {
        const toDo = this.toDoList[index]
        return toDo.id;
    }//v0.2

    findToDo(id) {
        const toDoIndex = this.findToDoIndex(id);
        const toDo = this.toDoList[toDoIndex];
        return toDo;
    }//v0.2

    toggleCompletedCbox(id) {
        const toDo = this.findToDo(id);
        toDo.completed = !toDo.completed;
        
        this.browserStorage.saveToDoList();
    }//v0.2

    saveNewToDo() {
        const values = this.newToDo.getNewToDoValues();
        const modelToDo =  this.newToDo.createToDo(this.newToDoId++, values);
        
        this.toDoList.push(modelToDo);
        this.browserStorage.saveToDoList();
        
        return {...modelToDo};
    }//v0.2

    saveEditedToDo(toDo) {
        const toDoId = toDo.id;
        const toDoIndex = this.findToDoIndex(toDoId);

        this.modalBox.returnNewValues((values) => Object.assign(this.toDoList[toDoIndex], values));
        
        this.browserStorage.saveToDoList();
    }//v0.2

//-- WIP ------------------
    


    deleteToDo(id) {
        const toDoIndex = this.findToDoIndex(id);

        this.toDoList.splice(toDoIndex, 1);

        this.browserStorage.saveToDoList();
    }




//=========================

}