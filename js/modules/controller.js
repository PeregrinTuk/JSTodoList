// ------
// This module contains the features related to the interaction between the user and app.
// -
export default class Controller {
    constructor(classModel, classView) {
        this.model = classModel;
        this.view = classView;
        this._searchBtn = document.getElementById('search-btn');
        this._addBtn = document.getElementById('add-btn');
        this._completedCboxList = document.getElementsByName('completedCbox');
        this._editBtnList = document.getElementsByName('editBtn');
        this._modalSaveBtn = document.getElementById('modal-btn');
        this._deleteBtnList = document.getElementsByName('deleteBtn');

        this.view.renderToDoList(this.model);
        this.callControllers();
    }

    callControllers() {
        this.onClickSearchBtn();
        this.onClickAddBtn();
        this.onClickCompletedCbox();
        this.onClickEditBtn();
        this.onClickDeleteBtn();
    }

    onClickSearchBtn() {
        this._searchBtn.onclick = () => this.view.searchToDo();
    }

    onClickAddBtn() {
        this._addBtn.onclick = () => {
            if (this.view.checkAddAlert()) {
                const newToDo = this.model.saveNewToDo();
                this.view.renderNewToDo(newToDo);

                this.callControllers();
            }
        }
    }

    onClickCompletedCbox() {
        const controller = this;
        this._completedCboxList.forEach(function callback(completedCbox , index) {
            completedCbox.onclick = () => {
                const toDoId = controller.model.findToDoId(index);
                controller.model.toggleCompletedCbox(toDoId);

                controller.callControllers();
            }
        });
    }

    onClickSaveBtn(toDo) {
        this._modalSaveBtn.onclick = () => {
            if (this.view.checkModalAlert()) {
                this.model.saveEditedToDo(toDo);
                this.view.handleSaveBtn(toDo);
            }
        }
    }

    onClickEditBtn() {
        const controller = this;
        this._editBtnList.forEach(function callback(editBtn , index) {
            editBtn.onclick = () => {
                const toDoId = controller.model.findToDoId(index);
                const toDo = controller.model.findToDo(toDoId);

                controller.view.openModalBox(toDo);
                controller.onClickSaveBtn(toDo);

                controller.callControllers();
            }
        });
    }

    onClickDeleteBtn() {
        const controller = this;
        this._deleteBtnList.forEach(function callback(deleteBtn , index) {
            deleteBtn.onclick = () => {
                const toDoId = controller.model.findToDoId(index);
                const toDo = controller.model.findToDo(toDoId);
                controller.view.removeToDo(toDo.id);
                controller.model.deleteToDo(toDo.id);

                controller.callControllers();
            }
        });
    }   
}