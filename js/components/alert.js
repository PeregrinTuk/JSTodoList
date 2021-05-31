export default class Alert {
    constructor(alertId){
        this.alertId = alertId;
        this._alert = document.getElementById(alertId);
        this._newTitle = document.getElementById('title-input');
        this._newDescription = document.getElementById('description-input');
        this._modalTitle = document.getElementById('modal-title');
        this._modalDescription = document.getElementById('modal-description');
        this.alerMessage = 'Title and description are required';
        this.alertCondition = false;
    }

    showAlert() {
        this._alert.classList.remove('d-none');
        this._alert.innerText = this.alerMessage;
    }

    assignCondition() {
        if(this.alertId === 'alert') {
            this.alertCondition = !this._newTitle.value || !this._newDescription.value;
        } else if(this.alertId === 'modal-alert') {
            this.alertCondition = !this._modalTitle.value || !this._modalDescription.value;
        }
    }
    
    checkAlert(){
        this.assignCondition();
        if (this.alertCondition) {
            this.showAlert();
            return false;
        }
        this._alert.classList.add('d-none');
        return true;
    }
}