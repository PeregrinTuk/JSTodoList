export default class Filters {
    constructor() {
        this.form = document.getElementById('filters');
        this.searchBtn = document.getElementById('search');
    }

    clickSearchBtn(callback) {
        this.searchBtn.onclick = (e) => {
            // e.preventDefault();
            // ^ Este MÉTODO bloquea el intento del elemento ´<buttom>´ de enviar la info del ´<form>´. // /!\ INNECESARIO: Para evitar esto basta con cambiar el ´type="submit"´ del ´<button>´ por ´type="button"´
            const searchData = new FormData(this.form);
            // ^ El OBJETO ´FormData´ nos permite compilar un conjunto de pares ´key:value´. En este caso, usamos el OBJETO ´FormData´ para crear un objeto nuevo cuyos valores obtenemos de los valores de un formulario (en este caso de ´this.form´)
            callback({
                type: searchData.get('type'),
                words: searchData.get('words'),
            });
        }
    }
}