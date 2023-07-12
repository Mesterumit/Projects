const url = 'https://cwbarry.pythonanywhere.com/student/'

async function getStudents(){
    const response = await axios.get(url)

    console.log(response)
    return response.data
}
function displayStudents(data){
    const ulElm = document.getElementById('student-container')

    const html = data.map(
        (item) =>
          `<li class="list-group-item"> ${item.first_name} ${item.last_name} ${item.number} ${item.path}</li>`
      )
    console.log(html.join(''))
    ulElm.innerHTML = html.join('')
}


async function getData(){
    const data = await getStudents()

    // console.log(data)
    displayStudents(data)
}




window.addEventListener('DOMContentLoaded', getData)

async function addStudent(first_name,last_name,number,path){
    const data = await axios({
        method:'post',
        url:url,
        data:{first_name,last_name,number,path},
    })

    getData()
}

document.querySelector('form').addEventListener("submit", (event)=>{

    event.preventDefault()
    const first_name = document.getElementById('first-name').value
    const last_name = document.getElementById('last-name').value
    const number = document.getElementById('number').value
    const path = document.getElementById('path').value

    document.getElementById('first-name').value = ''
    document.getElementById('last-name').value = ''
    document.getElementById('number').value = ''
    document.getElementById('path').value = ''

    addStudent(first_name,last_name,number,path)

})

async function deleteStudent(id){
    const data = await axios({
        method:'delete',
        url: url + id +'/',
      
    })
    await getData()
}

document.getElementById('delete').addEventListener('click', ()=>{


    deleteStudent(46)
})
