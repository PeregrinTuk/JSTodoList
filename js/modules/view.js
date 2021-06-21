// ------
// This module contains the features responsible for showing the app's data.
// -
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
    }

    renderToDoList(classModel) {
        const toDoList = classModel.getToDoList();
        toDoList.forEach((toDo) => this.newToDo.renderToDo(toDo));
    }

    searchToDo() {
        this.searcher.getFilters((filters) => this.searcher.search(filters));
    }

    checkAddAlert() {
        return this.addAlert.checkAlert();
    }

    checkModalAlert() {
        return this.modalAlert.checkAlert();
    }

    renderNewToDo(toDo){
        this.newToDo.renderToDo(toDo);
    }

    openModalBox(toDo) {
        this.modalBox.setValues(toDo);
    }

    handleSaveBtn(toDo) {
        const toDoId = toDo.id;
        this.modalBox.returnNewValues((values) => this.renderEditedToDo(toDoId, values));

        $('#modal').modal('toggle');
    }
    
    renderEditedToDo(id, values) {
        const toDoToEdit = document.getElementById(id);
        toDoToEdit.children[0].innerText = values.title;
        toDoToEdit.children[1].innerText = values.description;
        toDoToEdit.children[2].children[0].checked = values.completed;
    }

    removeToDo(id) {
        document.getElementById(id).remove();
    }
}