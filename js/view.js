import AddNewToDo from './components/add-todo.js';

export default class View {
    constructor() {
        this.model = null;
        this._table = document.getElementById('table');
        this.addNewToDo = new AddNewToDo();

        this.addNewToDo.onClick((title, description) => this.addToDo(title, description));
    }

    setModel(model) {
        this.model = model;
    }

    addToDo(title, description){
        const toDo = this.model.addToDo(title, description);
        this.createRow(toDo);
    }

    removeToDo(id) {
        this.model.removeToDo(id);
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
        const removeBtn = document.createElement('button');
        removeBtn.classList.add('btn', 'btn-danger', 'mb-1', 'ml-1');
        removeBtn.innerHTML = '<i class="fa fa-trash"></i>';
        removeBtn.onclick = () => this.removeToDo(toDo.id);

        newRow.children[3].appendChild(removeBtn);
    }
}