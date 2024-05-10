let inputBox = document.getElementById("inputBox"); 
let add = document.querySelector("#add"); 
let listContainer = document.querySelector("#listContainer"); 
let listItems = document.querySelector("#listItems"); 

add.addEventListener("click", () => {
    addTask();
}); 


function addTask() {

    let inputValue = inputBox.value; 
    
    if (inputValue === '') {
        alert("Please write something");
    } else {

        let listItems = document.querySelector("#listItems"); 
        listItems.insertAdjacentHTML("beforeend", `
        <div class="row">
            <div class="col-lg-12">
                <div id="listContainer" class="mb-3">
                  <li class="card">${inputValue}</li>
                  <button type="button" class="btn btn-warning btn-lg"><i class="fa-solid fa-pen-to-square"></i></button>
                  <button type="button" class="btn btn-danger btn-lg"><i class="fa-solid fa-trash"></i></button>
                </div>
            </div>
          </div>
        `); 

    }

    inputBox.value = ""; 

}   

