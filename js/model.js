export default class Model {
    constructor(){
        this.view = null;
        this.toDoList = [];
        this.rowId = 0;
    }

    setView(view) {
        this.view = view;
    }

    getToDo() {
        return this.toDos;
    }

    addToDo(title, description) {
        const toDo = {
            id: this.rowId++,
            title: title,
            description: description,
            //* En JS moderno, si el valor de una propiedad es identico al nombre de la propiedad, podemos obviar el valor y JS entiende que el valor de la propiedad es igual al nombre de la misma.
            /* Ejm.:

            title,
            description,

            */
            completed: false,
        }

        this.toDoList.push(toDo);
        console.log(this.toDoList);

        // return Object.assign({}, toDo);
        // /!\Sintaxis antigua/!\
        //con ´Object.assign({}, toDo)´ estamos creando un objeto clon del ´toDo´. Hacemos esto para que no se vea afectado por los posibles cambios que se apliquen en el ´toDo´ del archivo view.js.  /!\ Sintaxis antigua de JS
        return {...toDo};
        // Spread syntax
        //Hace no mismo que ´Object.assign({}, toDo)´ pero con una sintaxis reducida.
    }

    removeToDo(id) {
        const index = this.toDoList.findIndex((toDo) => toDo.id === id);
        console.log(this.toDoList[index]);
    }
}