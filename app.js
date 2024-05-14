let inputBox = document.getElementById("inputBox"); 
let add = document.querySelector("#add"); 
let listItems = document.querySelector("#listItems"); 
let listContainer = document.querySelector("#listContainer")
add.addEventListener("click", () => {
    addTask();
}); 


function addTask() {

    let inputValue = inputBox.value; 
    
    if (inputValue === '') {
        alert("Please write something");
    } else {

        listItems.insertAdjacentHTML("beforeend", `
        <div class="row">
            <div class="col-lg-12">
                <div id="listContainer" class="mb-3">
                  <li class="card">${inputValue}</li>
                  <button onClick="edit()" type="button" class="btn btn-warning btn-lg"><i class="fa-solid fa-pen-to-square"></i></button>
                  <button onClick="deletePost()" type="button" class="btn btn-danger btn-lg"><i class="fa-solid fa-trash"></i></button>
                </div>
            </div>
          </div>
        `); 

    }

    inputBox.value = ""; 
    save(); 

}   

function deletePost() {

    listItems.addEventListener("click", (e) => {
        // Check where are you clicking
        // console.log(e.target, "i was clicked"); 
        e.target.parentElement.parentElement.remove()
        save(); 
    });  
}

/* function edit() {
    console.log("i was clicked");
} */


function save() {
    localStorage.setItem("data", listItems.innerHTML); 
}

function showData() {
    listItems.innerHTML = localStorage.getItem("data"); 
}

showData(); 
