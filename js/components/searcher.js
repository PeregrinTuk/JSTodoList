export default class Searcher {
    constructor() {
        this.form = document.getElementById('filters');
        this._table = document.getElementById('table');
    }

    getFilters(callback){
        const searchData = new FormData(this.form);
        callback({
            type: searchData.get('type'),
            words: searchData.get('words')
        });
    }//v0.2

    search(filters) {
        const {type, words} = filters;
        const [, ...rows] = this._table.getElementsByTagName('tr');

        for (const row of rows){
            const [title, description, completed] = row.children;
                        
            let shouldHide = false;

            if (!!words) {
                shouldHide = !title.innerText.includes(words) && !description.innerText.includes(words);
            }

            const completedFilter = type ==='completed';
            const completedStatus = completed.children[0].checked;

            if (type != 'all' && completedFilter !== completedStatus) {
                shouldHide = true;
            }

            if (shouldHide) {
                row.classList.add('d-none');
            } else {
                row.classList.remove('d-none');
            }
        }
    }//v0.2


    
    // clickSearchBtn(callback) {
    //     this.searchBtn.onclick = (e) => {
    //         // e.preventDefault();
    //         // ^ Este MÉTODO bloquea el intento del elemento ´<buttom>´ de enviar la info del ´<form>´. // /!\ INNECESARIO: Para evitar esto basta con cambiar el ´type="submit"´ del ´<button>´ por ´type="button"´
    //         const searchData = new FormData(this.form);
    //         // ^ El OBJETO ´FormData´ nos permite compilar un conjunto de pares ´key:value´. En este caso, usamos el OBJETO ´FormData´ para crear un objeto nuevo cuyos valores obtenemos de los valores de un formulario (en este caso de ´this.form´)
    //         callback({
    //             type: searchData.get('type'),
    //             words: searchData.get('words'),
    //         });
    //     }
    // }

    // search(filters) {
    //     // const type = filters.type;
    //     // const words = filter.words;
    //     // ^ Podemos sintetizar esto escribiendolo de la siguiente forma:
    //     const {type, words} = filters;

    //     //const rows = this._table.getElementsByTagName('tr');
    //     // let row = null;
    //     // for (let i = 1; i < rows.length; i++) {
    //     //     row = rows[i];
    //     //     console.log(row);
    //     // }
    //     // ^ SINTAXIS ANTIGÜA. Esta sintaxis se puede resumir usando una sintaxys de destructuración (destructuring assignement syntax):
    //     const [, ...rows] = this._table.getElementsByTagName('tr');
    //     // ^ De este modo, al crear el ARRAY ´rows´ le estamos diciendo que lo haga guardando el primer ´<tr>´ en una variable inexistente (o lo que es lo mismo, que lo ignore) y el resto de elementos ´<tr>´ dentro del ARRAY ´rows´
    //     for (const row of rows){
    //         // const title = row.children[0];
    //         // const description = row.children[1];
    //         // const completed = row.children[2].children[0];
    //         // ^ SINTAXIS ANTIGÜA. Siguendo con el caso anterior, podemos hacer uso de la 'destructuring assignement syntax' para sintetizar:
    //         const [title, description, completed] = row.children;
    //         // ^ De este modo, estamos declarando a la vez tres constantes (´title´, ´description´ y ´completed´) y asignandole a cada una el valor del children correspondiente de entre los tres primeros children de ´row´, respectivamente.
            
    //         let shouldHide = false;

    //         if (!!words) {
    //             shouldHide = !title.innerText.includes(words) && !description.innerText.includes(words);
    //         }

    //         const completedFilter = type ==='completed';
    //         const completedStatus = completed.children[0].checked;

    //         if (type != 'all' && completedFilter !== completedStatus) {
    //             shouldHide = true;
    //         }

    //         if (shouldHide) {
    //             row.classList.add('d-none');
    //         } else {
    //             row.classList.remove('d-none');
    //         }
    //     }
    // }
}