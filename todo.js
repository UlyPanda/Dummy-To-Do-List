 // We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.


  const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    .then( (json) => arrayOfTodos = json)
  }

  const logTodos = () => {
    console.log(arrayOfTodos)
  }

  const resetToDos = () => {
    location.reload;
  }

  const populateTodos = () => {

    let todoList = document.getElementById('todo-list');


 let todoTitle = "";
 let todoComplete = "";

    for (i=0; i < arrayOfTodos.length; i++) {
        todoTitle = document.createTextNode(arrayOfTodos[0].title);
      
      //createElement to make a new LI
    let todoItem = document.createElement("LI");
     if (arrayOfTodos[i].completed) {
       // add a class to the li to make text red
       todoItem.classList.add("istrue")

     } else {
        todoItem.classList.add("isfalse")
     }

    todoItem.appendChild(todoTitle);

    todoList.appendChild(todoItem);


  } // end of for loop


 console.log(arrayOfTodos[100].userId) 
 console.log(arrayOfTodos[150].userId)
} // end of function
