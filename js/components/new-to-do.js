export default class NewToDo {
    constructor() {
        this._newTitle = document.getElementById('title-input');
        this._newDescription = document.getElementById('description-input');
        this._table = document.getElementById('table');
    }

    getNewToDoValues() {
        return{
            title: this._newTitle.value,
            description: this._newDescription.value,
        };
    }

    createToDo(id, values) {
        const toDo = {
            id: id,
            title: values.title,
            description: values.description,
            completed: false,
        }
        return {...toDo};
    }

    renderToDo(toDo) {
        const newRow = this.createRow(toDo);
        this.createCompletedCbox(newRow, toDo);
        this.createEditBtn(newRow);
        this.createDeleteBtn(newRow)
    }
    
    createRow(toDo) {
        const newRow = this._table.insertRow();
        newRow.setAttribute('id', toDo.id);
        newRow.innerHTML = `
            <td>${toDo.title}</td>
            <td>${toDo.description}</td>
            <td class="text-center"></td>
            <td class="text-rigth"></td>
        `;
        return newRow;
    }

    createCompletedCbox(newRow, toDo) {
        const completedCbox = document.createElement('input');
        completedCbox.type = 'checkbox';
        completedCbox.setAttribute('name', 'completedCbox');
        completedCbox.checked = toDo.completed;
        newRow.children[2].appendChild(completedCbox);
    }

    createEditBtn(newRow) {
        const editBtn = document.createElement('button');
        editBtn.classList.add('btn', 'btn-primary', 'mb-1');
        editBtn.setAttribute('name', 'editBtn');
        editBtn.setAttribute('data-toggle', 'modal');
        editBtn.setAttribute('data-target', '#modal');
        editBtn.innerHTML = '<i class="fa fa-pencil"></i>';

        newRow.children[3].appendChild(editBtn);
    }

    createDeleteBtn(newRow) {
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('btn', 'btn-danger', 'mb-1', 'ml-1');
        deleteBtn.setAttribute('name', 'deleteBtn');
        deleteBtn.innerHTML = '<i class="fa fa-trash"></i>';

        newRow.children[3].appendChild(deleteBtn);
    }
}