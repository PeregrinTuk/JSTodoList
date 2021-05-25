// import Alert from "./alert.js";

export default class ModalBox {
    constructor() {
        this._modalTitle = document.getElementById('modal-title');
        this._modalDescription = document.getElementById('modal-description');
        this._modalCompleted = document.getElementById('modal-completed');
    }

    setValues(toDo) {
        this._modalTitle.value = toDo.title;
        this._modalDescription.value = toDo.description;
        this._modalCompleted.checked = toDo.completed;
    }//v0.2


    returnNewValues(callback){
        callback({
            title: this._modalTitle.value,
            description: this._modalDescription.value,
            completed: this._modalCompleted.checked,
        });
    }//v0.2


//-- WIP ------------------








//=========================

}