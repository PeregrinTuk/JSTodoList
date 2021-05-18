import Alert from './alert.js';

export default class AddNewToDo {
    constructor() {
        this.alert = new Alert('alert');
        this._title = document.getElementById('title');
        this._description = document.getElementById('description');
        this._addBtn = document.getElementById('addBtn');
    }

    clickAddBtn(callback){
        this._addBtn.onclick = () => {
            const condition = !this._title.value || !this._description.value;
            // ^ Al usar la negación ´!´ sacamos el valor ´truthy/falsy´ de estas variables, ahorrandonos usar la igualdad absoluta -> ´this._title.value === '' || this._description.value === ''´.
            const message = 'Title and description are required';
            this.aletChecked = this.alert.checkAlert(condition, message);
            if (this.aletChecked){
                callback(this._title.value, this._description.value);
            }
        }
    }
}