// const response = axios.get("https://jsonplaceholder.typicode.com/todos/1");
// console.log(response);
// response.then((data)=>{console.log(data)})
// .catch((err)=>{console.log('do something')})
// setTimeout(() => console.log(response), 1000);

// <------Creating a Promise------->
// const fetchTodo=()=>new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         // resolve=([{id:1,name:'ammar'},{id:2,name:'sushant'}])
//         reject(new Error('Something Went Wrong'))
//     },3000)
// })
// console.log(fetchTodo)
// const response = fetchTodo()
// console.log(response)
// setTimeout(()=>{console.log(response)},5000)
// fetchTodo().then((data)=>{console.log(data)})
// .catch((error)=>{console.log(error)})
// const response =
// const list = document.querySelector('ul');
// fetch("https://jsonplaceholder.typicode.com/todos").then((response) => {
//   console.log(response);
//   const data = response.json();
//   console.log(data);
//   data.then(data => {
//     data.forEach((element) => {
//       const li = document.createElement('li')
//       li.innerHTML = element.title
//       ul.appendChild('li')
//       console.log(data)
//     });
//   });
// });
const list = document.querySelector('ul');
fetch("https://jsonplaceholder.typicode.com/todos")
.then((response) => response.json())
.then(data => {
    data.forEach((element) => {
      const li = document.createElement('li')
      li.innerHTML = element.title
      list.appendChild(li)
    //   console.log(data)
    });
  });
