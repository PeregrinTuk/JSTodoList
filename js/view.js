import AddNewToDo from './components/add-todo.js';

export default class View {
    constructor() {
        this.classModel = null;
        this._table = document.getElementById('table');
        this.addNewToDo = new AddNewToDo();

        this.addNewToDo.onClick((title, description) => this.addToDo(title, description));
    }

    setModel(model) {
        this.classModel = model;
    }

    addToDo(title, description){
        const viewToDo = this.classModel.addToDo(title, description);
        this.createRow(viewToDo);
    }

    removeToDo(id) {
        this.classModel.removeToDo(id);
        document.getElementById(id).remove();
    }

    createRow(toDo) {
        const newRow = this._table.insertRow();
        newRow.setAttribute('id', toDo.id);
        newRow.innerHTML = `
            <td>
                ${toDo.title}
            </td>
            <td>
                ${toDo.description}
            </td>
            <td class="text-center">
                <input type="checkbox">
            </td>
            <td class="text-right">
                <button class="btn btn-primary mb-1">
                    <i class="fa fa-pencil"></i>
                </button>
            </td>
        `;
        const trashBtn = document.createElement('button');
        trashBtn.classList.add('btn', 'btn-danger', 'mb-1', 'ml-1');
        trashBtn.innerHTML = '<i class="fa fa-trash"></i>';
        trashBtn.onclick = () => this.removeToDo(viewToDo.id);

        newRow.children[3].appendChild(trashBtn);
    }
}