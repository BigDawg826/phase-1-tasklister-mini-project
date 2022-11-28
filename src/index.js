// As a user, I should be able to type a task into the input field.
// As a user, I should be able to click some form of a submit button.
// As a user, I expect to see the task string that I provided appear in the DOM after the submit button has been activated.
const userTask = document.getElementById('create-task-form')
userTask.addEventListener('submit', taskSubmit)

function taskSubmit (e){
  e.preventDefault() 
  const newTask = document.getElementById('new-task-description').value
  // create li element
  const li = document.createElement('li')
  // assign text content (or inner text) to li from newTask
  li.innerText = newTask

  li.addEventListener('click', () => li.remove())
  // append all this ish to My todos id = 'tasks'
  document.getElementById('tasks').append(li)

    e.target.reset()
}

