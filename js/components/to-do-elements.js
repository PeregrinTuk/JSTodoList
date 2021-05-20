import ModalBox from './modal-box.js';

export default class ToDoElements {
    constructor() {
        this.modalBox = new ModalBox();
        this._table = document.getElementById('table');
    }

    createRow(toDo) {
        const newRow = this._table.insertRow();
        newRow.setAttribute('id', toDo);
        newRow.innerHTML = `
            <td>${toDo.title}</td>
            <td>${toDo.description}</td>
            <td class="text-center"></td>
            <td class="text-rigth"></td>
        `;
    }//v0.2

    createCompletedCbox(toDo) {
        const completedCheckbox = document.createElement('input');
        completedCheckbox.type = 'checkbox';
        completedCheckbox.checked = toDo.completed;
        completedCheckbox.onclick = () => this.toggleCompleted(toDo.id);

        toDo.children[2].appendChild(completedCheckbox);
    }//v0.2

    createdEditBtn(toDo) {
        const editBtn = document.createElement('button');
        editBtn.classList.add('btn', 'btn-primary', 'mb-1');
        editBtn.setAttribute('data-toggle', 'modal');
        editBtn.setAttribute('data-target', '#modal');
        editBtn.innerHTML = '<i class="fa fa-pencil"></i>';
        editBtn.onclick = () => this.modalBox.setValues(toDo);

        toDo.children[3].appendChild(editBtn);
    }//v0.2

    createdDeleteBtn(toDo) {
        const DeleteBtn = document.createElement('button');
        DeleteBtn.classList.add('btn', 'btn-danger', 'mb-1', 'ml-1');
        DeleteBtn.innerHTML = '<i class="fa fa-trash"></i>';
        DeleteBtn.onclick = () => this.removeToDo(toDo.id);

        toDo.children[3].appendChild(DeleteBtn);
    }//v0.2
}