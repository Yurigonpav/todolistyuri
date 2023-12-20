function addTask() {
    var taskInput = document.getElementById("newTask");
    var prioritySelect = document.getElementById("priority");
    var taskText = taskInput.value.trim().substring(0, 55); // Limita o texto a 55 caracteres
    var priorityValue = prioritySelect.value;
  
    if (taskText !== "") {
      var taskList = document.getElementById("tasks");
  
      var listItem = document.createElement("li");
      listItem.className = "priority-" + priorityValue;
      listItem.innerHTML = '<span>' + taskText + '</span><button onclick="completeTask(this)">Concluir</button><button onclick="removeTask(this)">Remover</button>';
  
      taskList.appendChild(listItem);
  
      taskInput.value = "";
    }
  }
  
  // Função para marcar uma tarefa como concluída
  function completeTask(button) {
    var listItem = button.parentNode;
    listItem.classList.add("completed-task");
      
    // Move a tarefa concluída para a seção de tarefas concluídas
    document.getElementById("completedTasks").appendChild(listItem);
  
    // Remove o botão "Concluir" e adiciona um botão "Desfazer"
    var completeButton = listItem.querySelector("button:nth-of-type(1)");
    completeButton.innerHTML = "Desfazer";
    completeButton.setAttribute("onclick", "undoComplete(this)");
  }
  
  // Função para desfazer a conclusão de uma tarefa
  function undoComplete(button) {
    var listItem = button.parentNode;
    listItem.classList.remove("completed-task");
  
    // Move a tarefa de volta para a seção de tarefas
    document.getElementById("tasks").appendChild(listItem);
  
    // Remove o botão "Desfazer" e adiciona um botão "Concluir"
    var undoButton = listItem.querySelector("button:nth-of-type(1)");
    undoButton.innerHTML = "Concluir";
    undoButton.setAttribute("onclick", "completeTask(this)");
  }
  
  // Função para remover uma tarefa
  function removeTask(button) {
    var listItem = button.parentNode;
    var ul = listItem.parentNode;
    ul.removeChild(listItem);
  }
  
  // Função para alternar entre o Modo Escuro e o Modo Claro
  function followInstagram() {
    window.open('https://www.instagram.com/yuri_g0n/', '_blank');
  }
  function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    document.getElementById("taskList").classList.toggle("dark-mode");
    document.getElementById("tasks").querySelectorAll("li").forEach(function (task) {
      task.classList.toggle("dark-mode");
    });
    document.getElementById("completedTasks").querySelectorAll("li").forEach(function (task) {
      task.classList.toggle("dark-mode");
    });
    var inputText = document.getElementById("newTask");
    inputText.classList.toggle("dark-mode");
    var addButton = document.querySelector("button[onclick='addTask()']");
    addButton.classList.toggle("dark-mode");
    var toggleDarkModeButton = document.getElementById("toggleDarkMode");
    toggleDarkModeButton.classList.toggle("dark-mode");
  }
  