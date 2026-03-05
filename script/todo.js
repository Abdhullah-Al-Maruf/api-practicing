const loadTodo=()=>{
    const url="https://jsonplaceholder.typicode.com/todos"
fetch(url)
.then((res)=>res.json())
.then((data)=>{
    console.log(data);
    displayTodo(data);
})
}
const displayTodo=(todosData)=>{
    const todoParentContainer=document.getElementById("todo-container")
    todosData.forEach(todo => {
        const newDivChild=document.createElement("div");
       
        newDivChild.innerHTML=`
        <div  style="padding: 24px;box-shadow: 2px 2px 22px 2px rgb(27, 82, 145); width: 80%; margin: 0 auto ; font-family: monospace; margin-top: 10px;">
        <h3>${todo.id}</h3>
        <p> ${todo.completed ==true?  `<i class="fa-solid fa-square-check"></i>`:`<i class="fa-regular fa-square-check"></i>`}  ${todo.title}</p>
        
    </div>
        
        `
        todoParentContainer.appendChild(newDivChild)
    
   }); 
}

loadTodo()