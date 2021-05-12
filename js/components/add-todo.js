export default class AddNewToDo {
    constructor() {
        this._alert = document.getElementById('alert');
        this._title = document.getElementById('title');
        this._description = document.getElementById('description');
        this._addBtn = document.getElementById('addBtn');
    }

    alertCheck(){
        if (this._title.value === '' || this._description.value === '') {
            this._alert.classList.remove('d-none');
            this._alert.innerText = 'Title and description are required';
            console.error('Title and description are required');
            return false;
        }
        this._alert.classList.add('d-none');
        return true;
    }

    onClick(callback){
        this._addBtn.onclick = () => {
            this.check = this.alertCheck();
            if (this.check){
                callback(this._title.value, this._description.value);
            }
        }
    }
}