export default class BrowserStorage {
    constructor() {
        this.toDoList = null;
    }
        
    saveToDoList() {
        localStorage.setItem('toDoList', JSON.stringify(this.toDoList));
    }

    getToDoList() {
        this.toDoList = JSON.parse(localStorage.getItem('toDoList'));
        if (!this.toDoList || this.toDoList.length < 1) {
            this.toDoList = [
                {
                    id: 0,
                    title: 'Title',
                    description: 'Description',
                    completed: false,
                }
            ]
        }
        return this.toDoList;
    }
}