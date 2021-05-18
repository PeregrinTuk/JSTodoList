import AddNewToDo from './components/add-to-do.js';
import ModalBox from './components/modalBox.js';
import Filters from './components/filters.js';

export default class View {
    constructor() {
        this.addNewToDo = new AddNewToDo();
        this.modalBox = new ModalBox();
        this.filters = new Filters();
        this.model = null;
        this._table = document.getElementById('table');

        this.addNewToDo.clickAddBtn((title, description) => this.addToDo(title, description));
        this.modalBox.clickSaveBtn((id, values) => this.editToDo(id, values));
        this.filters.clickSearchBtn((filters) => this.filter(filters));
    }

    setModel(className) {
        this.model = className;
    }

    renderToDoList() {
        const toDoList = this.model.getToDoList();
        toDoList.forEach((toDo) => this.createToDo(toDo));
    }

    filter(filters) {
        // const type = filters.type;
        // const words = filter.words;
        // ^ Podemos sintetizar esto escribiendolo de la siguiente forma:
        const {type, words} = filters;

        //const rows = this._table.getElementsByTagName('tr');
        // let row = null;
        // for (let i = 1; i < rows.length; i++) {
        //     row = rows[i];
        //     console.log(row);
        // }
        // ^ SINTAXIS ANTIGÜA. Esta sintaxis se puede resumir usando una sintaxys de destructuración (destructuring assignement syntax):
        const [, ...rows] = this._table.getElementsByTagName('tr');
        // ^ De este modo, al crear el ARRAY ´rows´ le estamos diciendo que lo haga guardando el primer ´<tr>´ en una variable inexistente (o lo que es lo mismo, que lo ignore) y el resto de elementos ´<tr>´ dentro del ARRAY ´rows´
        for (const row of rows){
            // const title = row.children[0];
            // const description = row.children[1];
            // const completed = row.children[2].children[0];
            // ^ SINTAXIS ANTIGÜA. Siguendo con el caso anterior, podemos hacer uso de la 'destructuring assignement syntax' para sintetizar:
            const [title, description, completed] = row.children;
            // ^ De este modo, estamos declarando a la vez tres constantes (´title´, ´description´ y ´completed´) y asignandole a cada una el valor del children correspondiente de entre los tres primeros children de ´row´, respectivamente.
            
            let shouldHide = false;

            if (!!words) {
                shouldHide = !title.innerText.includes(words) && !description.innerText.includes(words);
            }

            const completedFilter = type ==='completed';
            const completedStatus = completed.children[0].checked;

            if (type != 'all' && completedFilter !== completedStatus) {
                shouldHide = true;
            }

            if (shouldHide) {
                row.classList.add('d-none');
            } else {
                row.classList.remove('d-none');
            }
        }
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
        editBtn.onclick = () => this.modalBox.setValues(toDo);

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