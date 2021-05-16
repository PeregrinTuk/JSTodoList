import AddNewToDo from './components/add-to-do.js';
import Modal from './components/modal.js';

export default class View {
    constructor() {
        this.addNewToDo = new AddNewToDo();
        this.modal = new Modal();
        this.model = null;
        this._table = document.getElementById('table');

        this.addNewToDo.clickedAddBtn((title, description) => this.addToDo(title, description));
        this.modal.clickedSaveBtn((id, values) => this.editToDo(id, values));
    }

    setModel(className) {
        this.model = className;
    }

    renderToDoList() {
        const toDoList = this.model.getToDoList();
        toDoList.forEach((toDo) => this.createToDo(toDo));
    }

    toggleCompleted(id) {
        this.model.toggleCompleted(id);
    }

    editToDo(id, values) {
        // console.log(id);
        // console.log(values);
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

    createToDo(toDo) {
        const newToDo = this._table.insertRow();
        newToDo.setAttribute('id', toDo.id);
        newToDo.innerHTML = `
            <td>${toDo.title}</td>
            <td>${toDo.description}</td>
            <td class="text-center"></td>
            <td class="text-right"></td>
        `;

        const completedCheckbox = document.createElement('input');
        completedCheckbox.type = 'checkbox';
        completedCheckbox.checked = toDo.completed;
        completedCheckbox.onclick = () => this.toggleCompleted(toDo.id);

        const editBtn = document.createElement('button');
        editBtn.classList.add('btn', 'btn-primary', 'mb-1');
        editBtn.setAttribute('data-toggle', 'modal');
        editBtn.setAttribute('data-target', '#modal');
        editBtn.innerHTML = '<i class="fa fa-pencil"></i>';
        editBtn.onclick = () => this.modal.setValues(toDo);

        const removeBtn = document.createElement('button');
        removeBtn.classList.add('btn', 'btn-danger', 'mb-1', 'ml-1');
        removeBtn.innerHTML = '<i class="fa fa-trash"></i>';
        removeBtn.onclick = () => this.removeToDo(toDo.id);

        newToDo.children[2].appendChild(completedCheckbox);
        newToDo.children[3].appendChild(editBtn);
        newToDo.children[3].appendChild(removeBtn);
    }

    addToDo(title, description){
        const viewToDo = this.model.addToDo(title, description);
        this.createToDo(viewToDo);
    }
}