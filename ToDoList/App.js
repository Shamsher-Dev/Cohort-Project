
const inputBox = document.querySelector('#userInput');
const taskBox = document.querySelector('.taskList');
const button = document.querySelector('#btn');
button.addEventListener('click', addTask);

function addTask(){
    if(inputBox.value === ''){
       alert('Write something in the box !');
    }else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        taskBox.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
}

taskBox.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle('clicked');
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);