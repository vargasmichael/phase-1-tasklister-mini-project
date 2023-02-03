// document.addEventListener("DOMContentLoaded", () => {
//   document.querySelector("id")
//   document.getElementById("create-task-form")

const newTask = document.getElementById("new-task-description")
const taskForm = document.getElementById("create-task-form")
console.log(taskForm)

taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(newTask.value);
  addTask(newTask)

});


// function addTask(newTask)  {
//   let p = document.createElement('p')
//   p.textContent = newTask.value
//   console.log(p)
//   document.querySelector('#list').appendChild(p)
  
// }

// document.addEventListener('DOMContentLoaded', () => {
//   document.querySelector("id").addEventListener('submit', (e) => {
//     e.preventDefault();
//     console.log(newTask.value);
//   })
// })

function addTask(newTask) {
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.textContent = 'x'
  p.textContent = `${newTask.value} `
  p.appendChild(btn)
  document.querySelector('#list').appendChild(p)
  btn.addEventListener('click', taskDelete); {
  
  }
  function taskDelete(e) {
    e.target.parentElement.remove()
  
  }}

  // Things to note: Be careful to keep elements in the DOM in the correct order. If you are having issues move the code up. 
  // Console.log will help you debug your code. 
  // Make sure you call the function.
  