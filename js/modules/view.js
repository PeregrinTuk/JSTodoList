import Alert from '../components/alert.js';
import NewToDo from '../components/new-to-do.js';
import ModalBox from '../components/modal-box.js';
import Searcher from '../components/searcher.js';

export default class View {
    constructor() {
        this.addAlert = new Alert('alert');
        this.modalAlert = new Alert('modal-alert');
        this.searcher = new Searcher();
        this.newToDo = new NewToDo();
        this.modalBox = new ModalBox();
        this._newTitle = document.getElementById('title-input');
        this._newDescription = document.getElementById('description-input');
        this._table = document.getElementById('table');

        // this.searcher.clickSearchBtn((filters) => this.searchToDo(filters));
    }

    renderToDoList(classModel) {
        const toDoList = classModel.getToDoList();
        toDoList.forEach((toDo) => this.newToDo.renderToDo(toDo));
    }//v0.2

    searchToDo() {
        this.searcher.getFilters((filters) => this.searcher.search(filters));
    }//v0.2

    checkAddAlert() {
        return this.addAlert.checkAlert();
    }//v0.2

    checkModalAlert() {
        return this.modalAlert.checkAlert();
    }//v0.2

    renderNewToDo(toDo){
        this.newToDo.renderToDo(toDo);
    }//v0.2

    openModalBox(toDo) {
        this.modalBox.setValues(toDo);
    }//v0.2

    handleSaveBtn(toDo) {
        const toDoId = toDo.id;
        this.modalBox.returnNewValues((values) => this.renderEditedToDo(toDoId, values));

        $('#modal').modal('toggle');
    }//v0.2
    
    renderEditedToDo(id, values) {
        const toDoToEdit = document.getElementById(id);
        toDoToEdit.children[0].innerText = values.title;
        toDoToEdit.children[1].innerText = values.description;
        toDoToEdit.children[2].children[0].checked = values.completed;
    }//v0.2


//-- WIP ------------------




    removeToDo(id) {
        document.getElementById(id).remove();
    }




//=========================

}