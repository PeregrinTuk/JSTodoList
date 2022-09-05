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
    }

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
    }
}