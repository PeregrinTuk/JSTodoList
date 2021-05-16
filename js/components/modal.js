import Alert from "./alert.js";

export default class Modal {
    constructor() {
        this.alert = new Alert('modal-alert');
        this.toDoToEdit = null;
        this._modalTitle = document.getElementById('modal-title');
        this._modalDescription = document.getElementById('modal-description');
        this._modalSaveBtn = document.getElementById('modal-btn');
        this._modalCompleted = document.getElementById('modal-completed');
    }

    setValues(toDo) {
        this.toDoToEdit = toDo;
        this._modalTitle.value = toDo.title;
        this._modalDescription.value = toDo.description;
        this._modalCompleted.checked = toDo.completed;
    }

    clickedSaveBtn(callback){
        this._modalSaveBtn.onclick = () => {
            // const condition = this._title.value === '' || this._description.value === '';
            const condition = !this._title.value || !this._description.value;
            // ^ Al usar la negación ´!´ sacamos el valor ´truthy/falsy´  de estas variables.
            const message = 'Title and description are required';
            this.aletChecked = this.alert.checkAlert(condition, message);
            if (this.aletChecked){
                callback(this.toDoToEdit.id, {
                    title: this._modalTitle.value,
                    description: this._modalDescription.value,
                    completed: this._modalCompleted.checked,
                });

                $('#modal').modal('toggle'); // Funcion de Bootstrap mediante jQuery para ocultar el ´modal´ al pulsar el botón de ´save´
            }


            // callback(this.toDoToEdit.id, {
            //     title: this._modalTitle.value,
            //     description: this._modalDescription.value,
            //     completed: this._modalCompleted.checked,
            // });
        }
    }
}