
//Função que adiciona uma tarefa
function addTask() {
  //Captura o título digitado no input text
  const taskTitle = document.querySelector("#task-title").value;

  
  if(taskTitle) {
    //Clona template
    const template = document.querySelector(".template");

    const newTask = template.cloneNode(true);
    
    //adiciona título
    newTask.querySelector(".task-title").textContent = taskTitle;

    //Remover as classes desnecessárias
    newTask.classList.remove("template");
    newTask.classList.remove("hide");

    //Adicionar tarefa na lista
    const list = document.querySelector("#task-list");

    list.appendChild(newTask);

    //Evento de remover tarefa
    const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click", function() {
      removeTask(this);
    });

    //adicionar evento de completar tarefa
    const doneBtn = newTask.querySelector(".done-btn").addEventListener("click", function(){
      completeTask(this);
    });

    //Limpar texto do input
    document.querySelector("#task-title").value = "";


  }
}

//função de remover tarefa
function removeTask(task){
  task.parentNode.remove(true);
};

//função para marcar tarefa como completa
function completeTask(task){
  const taskToComplete = task.parentNode;
  taskToComplete.classList.toggle("done");
};

const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click", (e)=> {
  e.preventDefault();
  addTask();
})