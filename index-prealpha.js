document.addEventListener('DOMContentLoaded', function () {
    const _alert = document.getElementById('alert');
    const _title = document.getElementById('title');
    const _description = document.getElementById('description');
    const _addBtn = document.getElementById('addBtn');
    const _table = document.getElementById('table');

    let rowId = 1;


    function alertCheck() {
        if (_title.value === '' || _description.value === '') {
            _alert.classList.remove('d-none');
            _alert.innerText = 'Title and description are required';
            return false;
        }
        _alert.classList.add('d-none');
        return true;
    }

    function removeToDo(rowId) {
        document.getElementById(rowId).remove();
    }

    function newToDo() {
        const newRow = _table.insertRow();
        newRow.setAttribute('id', rowId++);
        newRow.innerHTML = `
            <td>
                ${_title.value}
            </td>
            <td>
                ${_description.value}
            </td>
            <td class="text-center">
                <input type="checkbox">
            </td>
            <td class="text-right">
                <button class="btn btn-primary mb-1">
                    <i class="fa fa-pencil"></i>
                </button>
            </td>
        `;
        const removeBtn = document.createElement('button');
        removeBtn.classList.add('btn', 'btn-danger', 'mb-1', 'ml-1');
        removeBtn.innerHTML = '<i class="fa fa-trash"></i>';
        removeBtn.onclick = () => removeToDo(newRow.getAttribute('id'));

        newRow.children[3].appendChild(removeBtn);
    }

    function addToDo() {
        // alertCheck();
        if (alertCheck()) {
            newToDo();
        }
    }

    _addBtn.onclick = addToDo;
});