export default class Alert {
    constructor(alertId){
        this._alert = document.getElementById(alertId);
    }

    showAlert(message) {
            this._alert.classList.remove('d-none');
            this._alert.innerText = message;
            // console.error(message);
    }
    
    checkAlert(condition, message){
        if (condition) {
            this.showAlert(message);
            return false;
        }
        this._alert.classList.add('d-none');
        return true;
    }
}