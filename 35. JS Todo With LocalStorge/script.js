// selectors
const inputField = document.querySelector(".inputField");
const addBtn = document.querySelector(".addBtn");
const showTodo = document.querySelector(".todoList")
const elementCount = document.querySelector(".footer");



showData();

function getInput() {
    let data = inputField.value;
    if (data.trim() != 0) {
        addBtn.classList.add("active");
    } else {
        addBtn.classList.remove("active");
    }
}

function addData() {
    if (inputField.value.trim() != '') {
        let userdata = inputField.value;
        let getLocalstorage = localStorage.getItem("New Data");
        if (getLocalstorage == null) {
            listItem = []
        } else {
            listItem = JSON.parse(getLocalstorage);
        }
        listItem.push(userdata);
        localStorage.setItem("New Data", JSON.stringify(listItem));
        showData();
    }
}

function showData() {
    let getLocalstorage = localStorage.getItem("New Data");
    if (getLocalstorage == null) {
        listItem = []
    } else {
        listItem = JSON.parse(getLocalstorage);
    }
    let newData = '';
    listItem.forEach((element, index) => {
        newData += `<li>${element} <span onclick="deleteTodo(${index})"><i class="fa fa-trash" aria-hidden="true"></i></span></li>`;
        console.log(listItem.length);
    });
    if (listItem) {
        elementCount.innerHTML = `<p>You have ${listItem.length} pending work todo</p><span><button onclick="deleteAllTodo()">Clear All</button></span>`
    } else {
        elementCount.innerHTML = `<p>You don't have any pending work todo</p><span><button>Clear All</button></span>`

    }
    showTodo.innerHTML = newData
    inputField.value = "";
}

function deleteTodo(index) {
    let getLocalstorage = localStorage.getItem("New Data");
    listItem = JSON.parse(getLocalstorage);
    listItem.splice(index, 1);
    localStorage.setItem("New Data", JSON.stringify(listItem));
    showData();
}

function deleteAllTodo() {
    let getLocalstorage = localStorage.getItem("New Data");
    listItem = JSON.parse(getLocalstorage);
    listItem.splice(0, listItem.length);
    localStorage.setItem("New Data", JSON.stringify(listItem));
    showData();
}