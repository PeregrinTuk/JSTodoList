import ToDoElements from './to-do-elements.js';

export default class NewToDo {
    constructor() {
        this.toDoElements = new ToDoElements();
        this._newTitle = document.getElementById('title-input');
        this._newDescription = document.getElementById('description-input');
        // this._addBtn = document.getElementById('addBtn');
    }

    getNewToDoValues() {
        return{
            title: this._newTitle.value,
            description: this._newDescription.value,
        };
    }//v0.2

    createToDo(values) {
        const toDo = {
            id: 100,
            title: values.title,
            description: values.description,
            completed: false,
        }
        return {...toDo};
    }//v0.2

    renderToDo() {

    }//v0.2

    // clickAddBtn(callback){
    //     this._addBtn.onclick = () => {
    //         const condition = !this._newTitle.value || !this._newDescription.value;
    //         // ^ Al usar la negación ´!´ sacamos el valor ´truthy/falsy´ de estas variables, ahorrandonos usar la igualdad absoluta -> ´this._newTitle.value === '' || this._newDescription.value === ''´.
    //         const message = 'Title and description are required';
    //         this.aletChecked = this.alert.checkAlert(condition, message);
    //         if (this.aletChecked){
    //             callback(this._newTitle.value, this._newDescription.value);
    //         }
    //     }
    // }

//     createToDo(toDo) {
//         // const newToDo = this._table.insertRow();
//         // newToDo.setAttribute('id', toDo.id);
//         // newToDo.innerHTML = `
//         //     <td>${toDo.title}</td>
//         //     <td>${toDo.description}</td>
//         //     <td class="text-center"></td>
//         //     <td class="text-right"></td>
//         // `;

//         // const completedCheckbox = document.createElement('input');
//         // completedCheckbox.type = 'checkbox';
//         // completedCheckbox.checked = toDo.completed;
//         // completedCheckbox.onclick = () => this.toggleCompleted(toDo.id);

//         // const editBtn = document.createElement('button');
//         // editBtn.classList.add('btn', 'btn-primary', 'mb-1');
//         // editBtn.setAttribute('data-toggle', 'modal');
//         // editBtn.setAttribute('data-target', '#modal');
//         // editBtn.innerHTML = '<i class="fa fa-pencil"></i>';
//         // editBtn.onclick = () => this.modalBox.setValues(toDo);

//         // const removeBtn = document.createElement('button');
//         // removeBtn.classList.add('btn', 'btn-danger', 'mb-1', 'ml-1');
//         // removeBtn.innerHTML = '<i class="fa fa-trash"></i>';
//         // removeBtn.onclick = () => this.removeToDo(toDo.id);

//         // newToDo.children[2].appendChild(completedCheckbox);
//         // newToDo.children[3].appendChild(editBtn);
//         // newToDo.children[3].appendChild(removeBtn);
//     }
}