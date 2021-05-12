export default class Model {
    constructor(){
        this.classView = null;
        this.toDoList = [];
        this.rowId = 0;
    }

    setView(view) {
        this.classView = view;
    }

    getToDo() {
        return this.toDoList;
    }

    addToDo(title, description) {
        const modelToDo = {
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

        this.toDoList.push(modelToDo);
        console.log(this.toDoList);

        // return Object.assign({}, modelToDo);
        // /!\Sintaxis antigua/!\
        //con ´Object.assign({}, modelToDo)´ estamos creando un objeto clon del ´modelToDo´. Hacemos esto para que no se vea afectado por los posibles cambios que se apliquen en el ´modelToDo´ del archivo view.js.  /!\ Sintaxis antigua de JS
        return {...modelToDo};
        // Spread syntax
        //Hace no mismo que ´Object.assign({}, modelToDo)´ pero con una sintaxis reducida.
    }

    removeToDo(id) {
        const index = this.toDoList.findIndex((modelToDo) => modelToDo.id === id);
        console.log(this.toDoList[index]);
    }
}