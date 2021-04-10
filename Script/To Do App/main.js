const iconPlus = document.querySelector('.icon-plus');
const colorItems = document.querySelectorAll('.item-color');
const colorList = document.querySelector('.color-list');
const noteList = document.querySelector('.note-list');
const noteItem = document.querySelector('.note-box');
const searchBar = document.querySelector('.search-bar');
const search = document.getElementById('search');
const showBoxTodo = document.querySelector('.showBoxTodo');

// buttons
const cancelButton = document.querySelector('.cancel');
const addButton = document.querySelector('.add_button');
const saveButton = document.querySelector('.save_button');
let todoEdit = null;
// toggle button to show/hide color pattern
iconPlus.addEventListener('click', handleColorList);

function handleColorList() {
    colorList.classList.toggle('active');
}
// when click to color item => show box to write with same color item
colorList.addEventListener('click', function (e) {
    const element = e.target;
    if (element.classList.contains('item-color')) {
        const colorValue = element.style.backgroundColor; // get value color
        showBoxTodo.querySelector(
            '.note-box'
        ).style.backgroundColor = colorValue;

        showBoxTodo.querySelector('.text-form-input').value = 'Write Here!!!';

        showBoxTodo.classList.add('active');
        addButton.classList.add('active');
    }
});
// handle click button [click,remove]
noteList.addEventListener('click', function (e) {
    const target = e.target;

    if (target.classList.contains('fa-pencil-alt')) {
        const footer = target.parentElement.parentElement;
        const parentDiv = footer.parentElement;
        const color = parentDiv.style.backgroundColor;
        const text = parentDiv.firstElementChild.innerText;

        showBoxTodo.querySelector('.note-box').style.backgroundColor = color;
        showBoxTodo.classList.add('active');
        showBoxTodo.querySelector('.text-form-input').value = text;

        saveButton.classList.add('active');

        todoEdit = parentDiv;
    }
    if (target.classList.contains('fa-trash')) {
        const footer = target.parentElement.parentElement;
        const parentDiv = footer.parentElement;
        parentDiv.remove();
    }
});

saveButton.addEventListener('click', handleSaveButton);
cancelButton.addEventListener('click', closeBox);

function handleSaveButton(e) {
    const element = e.target;
    const parent = element.parentElement.previousElementSibling;
    const data = parent.querySelector('.text-form-input').value;

    todoEdit.querySelector('.content').textContent = data;
    closeBox();
    saveButton.classList.remove('active');
}
addButton.addEventListener('click', function () {
    handleAdd();
    closeBox();
    addButton.classList.remove('active');
});
function handleAdd() {
    const colorValue = showBoxTodo.querySelector('.note-box').style
        .backgroundColor;
    const text = showBoxTodo.querySelector('.text-form-input').value;

    noteList.insertAdjacentHTML(
        'afterbegin',
        `
        <div class="note-box" style="background-color:${colorValue}">
        <div class="content">
            ${text}
        </div>
        <footer class="note-footer">
            <div class="date">${getDate()}</div>
            <div class="icons">
                <i class="icon fas fa-trash"></i>
                <i class="icon fas fa-pencil-alt"></i>
            </div>
        </footer>
        </div> 
        `
    );
}
function closeBox() {
    showBoxTodo.classList.remove('active');
    addButton.classList.remove('active');
    saveButton.classList.remove('active');
}
// gat value date show when click create note
function getDate() {
    let options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    };
    const date = new Date().toLocaleDateString('en-US', options);
    return date;
}
