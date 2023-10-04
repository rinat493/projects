const inputBox= document.getElementById("input-Box");
const listContainer = document.getElementById("list-Container");

function AddTask(){
    if(inputBox === '')
    alert("You must write something!");
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li); //create new line from the inbox area
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span); //create new X button to every new dinamic line
    }

    inputBox.value = ''; //delete value from the input area after adding to list
    saveData() //save data after any change
}

listContainer.addEventListener("click" , function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked"); //clicked in li element and become the line "checked" 
        saveData() //save data after any change
    }
    else if(e.target.tagName === 'SPAN'){ //clicked in span(X button) element and remove the line
        e.target.parentElement.remove();
        saveData() //save data after any change
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML); //save the data in the lockal storage in variable="data"
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data"); //show the saved data after close the browser or refreshing
}
showTask();