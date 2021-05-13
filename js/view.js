import NewToDo from './components/add-to-do.js';

export default class View {
    constructor() {
        const newToDo = new NewToDo();

        this.classModel = null;
        this._table = document.getElementById('table');

        newToDo.clickedAddBtn((title, description) => this.addToDo(title, description));
    }

    setModel(model) {
        this.classModel = model;
    }

    renderToDoList() {
        const toDoList = this.classModel.getToDoList();
        // for (const toDo of toDoList){
        //     this.createRow(toDo);
        // }
        // Podemos hacer lo mismo pero en lugar de con un bucle ´for´ con el método ´forEach´
        toDoList.forEach((toDo) => this.createRow(toDo));
    }

    toggleCompleted(id) {
        this.classModel.toggleCompleted(id);
    }

    removeToDo(id) {
        this.classModel.removeToDo(id);
        document.getElementById(id).remove();
    }

    createRow(toDo) {
        const newRow = this._table.insertRow();
        newRow.setAttribute('id', toDo.id);
        newRow.innerHTML = `
            <td>${toDo.title}</td>
            <td>${toDo.description}</td>
            <td class="text-center"></td>
            <td class="text-right">
                <button class="btn btn-primary mb-1">
                    <i class="fa fa-pencil"></i>
                </button>
            </td>
        `;

        const completedCheckbox =document.createElement('input');
        completedCheckbox.type = 'checkbox';
        completedCheckbox.checked = toDo.completed;
        completedCheckbox.onclick = () => this.toggleCompleted(toDo.id);

        const trashBtn = document.createElement('button');
        trashBtn.classList.add('btn', 'btn-danger', 'mb-1', 'ml-1');
        trashBtn.innerHTML = '<i class="fa fa-trash"></i>';
        trashBtn.onclick = () => this.removeToDo(toDo.id);

        newRow.children[2].appendChild(completedCheckbox);
        newRow.children[3].appendChild(trashBtn);
    }

    addToDo(title, description){
        const viewToDo = this.classModel.addToDo(title, description);
        this.createRow(viewToDo);
    }
}