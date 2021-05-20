export default class Controller {
    constructor(classModel, classView) {
        this.model = classModel;
        this.view = classView;
        this._searchBtn = document.getElementById('search-btn');
        this._addBtn = document.getElementById('add-btn');
        
        this.view.renderToDoList(this.model);
        this.onClickSearchBtn();
        this.onClickAddBtn();
        this.onClickEditBtn();
        this.onClickSaveBtn();
        this.onClickDeleteBtn();
    }

    onClickSearchBtn() {
        this._searchBtn.onclick = () => this.view.searchToDo();
    }

    onClickAddBtn() {
        this._addBtn.onclick = () => {
            if (this.view.checkAddAlert())
                this.model.addToDo();
                // this.view.addToDo();
        }
    }
    
    onClickEditBtn() {}
    onClickSaveBtn() {}
    onClickDeleteBtn() {}
}