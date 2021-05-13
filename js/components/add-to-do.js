export default class NewToDo {
    constructor() {
        this._alert = document.getElementById('alert');
        this._title = document.getElementById('title');
        this._description = document.getElementById('description');
        this._addBtn = document.getElementById('addBtn');
    }

    checkAlert(){
        if (this._title.value === '' || this._description.value === '') {
            this._alert.classList.remove('d-none');
            this._alert.innerText = 'Title and description are required';
            console.error('Title and description are required');
            return false;
        }
        this._alert.classList.add('d-none');
        return true;
    }

    clickedAddBtn(callback){
        this._addBtn.onclick = () => {
            this.aletChecked = this.checkAlert();
            if (this.aletChecked){
                callback(this._title.value, this._description.value);
            }
        }
    }
}