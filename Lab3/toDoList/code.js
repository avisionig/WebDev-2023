const form = document.querySelector("#task-form");
const input = document.querySelector("#task-form-input");
const arr = document.querySelector("#tasks");

form.addEventListener("submit", (event)=>{
    event.preventDefault();

    const task = input.value;

    if(!task){
        return;
    }
    const task_el = document.createElement("div");
    task_el.classList.add("new-task");
    task_el.innerHTML =
        `<input type="checkbox" class="checkbox-type">
         <p>${task}</p>
         <button class="del-button"><img src="trash-10-128.png" alt="Delete"></button>
        `;
    arr.appendChild(task_el);

    const delButton = task_el.getElementsByClassName("del-button")[0];
    delButton.addEventListener('click', (e)=>{
        arr.removeChild(task_el);
    })

    const taskPara = task_el.getElementsByTagName("p")[0];
    const taskCheck = task_el.getElementsByClassName("checkbox-type")[0];

    taskCheck.onclick = function boxCheck(){
        if(taskCheck.checked){
            taskPara.classList.add("task-check");
        }
        else{
            taskPara.classList.remove("task-check");
        }
    }



});