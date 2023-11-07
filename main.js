const document = document.querySelector("jstable")
const table = document.createElement("table")
table.classList.add("table")

document.appendChild(table)


const thead = document.createElement("thead")
thead.classList.add("thead")
const th1 = document.createElement('th')
const th2 = document.createElement('th')
const th3 = document.createElement('th')
th1.innerText = 'Name'
th2.innerText = 'Surname'
th3.innerText = 'Age'
thead.appendChild(th1)
thead.appendChild(th2)
thead.appendChild(th3)

const tbody = document.createElement('tbody')

table.appendChild(thead)
table.appendChild(tbody)


const Students = [
    {name:'Nigar',surname:'Glm',age:19},
    {name:'Leyla',surname:'Rustemli',age:19},
    {name:'Aysu',surname:'Ramazanova',age:18},
    {name:'Ulkar',surname:'Jabbarli',age:20},
]


Students.map((student,i)=>{
    const tr=document.createElement('tr')
    const td1=document.createElement('td')
    const td2=document.createElement('td')
    const td3=document.createElement('td')

    td1.innerText=student.name
    td2.innerText=student.surname
    td3.innerText=student.age

    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)

    tbody.appendChild(tr)
})