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
        // this.model = null;
        this._newTitle = document.getElementById('title-input');
        this._newDescription = document.getElementById('description-input');
        this._table = document.getElementById('table');

        // this.newToDo.clickAddBtn((title, description) => this.addToDo(title, description));
        this.modalBox.clickSaveBtn((id, values) => this.editToDo(id, values));
        // this.searcher.clickSearchBtn((filters) => this.searchToDo(filters));
    }

    // setModel(className) {
    //     this.model = className;
    // }

    renderToDoList(classModel) {
        const toDoList = classModel.getToDoList();
        toDoList.forEach((toDo) => this.newToDo.renderToDo(toDo));
    }//v0.2

    searchToDo() {
        this.searcher.getFilters((filters) => this.searcher.search(filters));
    }//v0.2

    checkAddAlert() {
        const alertCondition = !this._newTitle.value || !this._newDescription.value;
        const alertMessage = 'Title and description are required';
        const alertChecked = this.addAlert.checkAlert(alertCondition, alertMessage);

        return alertChecked;
    }//v0.2

    addToDo(title, description){
        const viewToDo = this.model.addToDo(title, description);
        this.renderToDo(viewToDo);
    }

    toggleCompleted(id) {
        this.model.toggleCompleted(id);
    }

    editToDo(id, values) {
        this.model.editToDo(id, values);
        const toDoToEdit = document.getElementById(id);
        toDoToEdit.children[0].innerText = values.title;
        toDoToEdit.children[1].innerText = values.description;
        toDoToEdit.children[2].children[0].checked = values.completed;
    }

    removeToDo(id) {
        this.model.removeToDo(id);
        document.getElementById(id).remove();
    }
}