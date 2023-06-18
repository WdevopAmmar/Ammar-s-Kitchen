const list = document.createElement('ul')
document.body.appendChild(list)
const fetchdata = async()=>{
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos')
        const data = await res.json()
        console.log(data)
        data.forEach((element) => {
            const li = document.createElement('li')
            li.innerHTML = element.title
            list.appendChild(li)
          //   console.log(data)
          });
    } catch (error) {
        console.log('Something went wrong')
    }
    finally{
        console.log('you stupid cant understand')
    }
}
fetchdata()