


const students = ["Alma", "Carla", "Darian", "Elna", "Josh"]

function printScreamingStudent (student){
  console.log(student.toUpperCase())
 }
// printScreamingStudent("Desh")

for(let i = 0; i < students.length; i++) {
  console.log(students[i].toUpperCase())
}






// console.log('Hello World!')
// console.log('5+6')
// const arr=[0,1,2,3,'cat']
// arr.forEach(element => {
//     console.log(arr)
// });
// const myDog = {
//     name: "Tiger Rose",
//     breed: "Jindo",
//     age: 4,
//     faveFoods: ["fish", "fish", "fish", "treats containing fish"],
//     bestFriends: [
//       { name: "Heidi", breed: "big", age: 3 },
//       { name: "Bowie", breed: "Korean Village Dog", age: 5 },
//       { name: "Luca", breed: "Doodle", age: 3 },
//     ],
//   };
//   myDog.bestFriends.forEach(function(friend){console.log(friend.name)})
//   const firstName = "first-name"

//   myDog[firstName] = "new dog"

  // 1) create an array and save it to a variable (ex: taskArray).
// 2) Inside this array you should have 3 tasks that are of type string.
// 3) Next call .forEach on this array and for each task in your task array:
//       a) create an li,
//       b) give the li textContent and
//       c) append the li to the ul that is located in this html document.
//       (hint, the ul has an id of "tasks")

const taskArray = ['Spread the deck', 'Wash the deck', 'Shuffle']
taskArray.forEach(element => console.log(element))

function appendElements(string) {
  const listElement = document.createElement('li')
  document.querySelector('#tasks')


}



















// document.addEventListener("DOMContentLoaded", () => {
//   // your code here
// });
// console.log(document)

// document.querySelector("div")
//   document.getElementById("#main-content")
// console.log("testing")

// const header = document.createElement("h1")

//   header.textContent = "hi there"

//   const list = document.getElementById("#list")
//  const div = document.querySelector("div")
//  console.log(div)

//  const form = document.getElementById("create-task-form")

//   form.addEventListener("submit", function(e){
//     e.preventDefault()
//     console.log(e.target)
//     e.target.reset()
//   })
