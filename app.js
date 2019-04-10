// define event vars

const form = document.querySelector("#task-form");
const TaskList = document.querySelector(".collection");
const clearBtn  = document.querySelector(".clear-tasks")
const filter = document.querySelector("#filter")
const taskInput = document.querySelector("#task");

//load all eventListeners

loadeventlisterners();

//load event listerners
function loadeventlisterners(){

  //add task event
  form.addEventListener("submit", addTask)

  //remove task event
  TaskList.addEventListener("click", removeTask);

  //clear task evvent

  clearBtn.addEventListener("click", clearTasks);

  //filter task event
  filter.addEventListener("keyup", filterTasks);
}

function addTask(e){
if(taskInput.value === ''){
 alert("put in a task")
}

//add li element
const li = document.createElement("li");
li.className = "collection-item";
//create text node
const item = document.createTextNode(taskInput.value);
//append item to li
li.appendChild(item);

//create new link
const link = document.createElement("a");
link.className = "delete-item secondary-content";

//add icon html
link.innerHTML = '<i class="fa fa-remove"></i>'
//append the link to li
li.appendChild(link);

//append the li to ul
TaskList.appendChild(li);

//clear input
taskInput.value = '';

e.preventDefault();

}

 //Remove Tasks

 function removeTask(e){
if(e.target.parentElement.classList.contains("delete-item"))
{
  if (confirm("Are You Sure"))e.target.parentElement.parentElement.remove();
}

 }

 //Clear Tasks

 function clearTasks(){
while(TaskList.firstChild){
TaskList.removeChild(TaskList.firstChild);
}

// TaskList.innerHTML = '';
 }

 //filter events

 function filterTasks(e){
  const text = e.target.value.toLowerCase()
  document.querySelectorAll(".collection-item").forEach
  (function(task){
  const item = task.firstChild.textContent;
  if(item.toLowerCase().indexOf(text) != -1){
  
  task.style.display = "block";
  } else{
  
    task.style.display = "none";
  }
  
  
  })
  
   }
  






