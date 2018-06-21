//import { promises } from "fs";

 window.computeUsersStats = (users, progress, courses) => {
     for (i = 0; i < users.length; ++i){
         let idAlumnas = users.map(function(id){
             return idAlumnas;
             console.log(idAlumnas);
         });
     }
 };
// window.sortUsers = (users, orderBy, orderDirection) => {};
// window.filterUsers = (users, search) => {};
// window.processCohortData = (options) => {};


//fetch para users
let users = [];
const btn =  document.getElementById("dropdown2018");
const container =  document.getElementById("contenedorCambiante");
const userJson = "../data/cohorts/lim-2018-03-pre-core-pw/users.json";

Promise.todas([
    fetch("../data/cohorts/lim-2018-03-pre-core-pw/users.json"),
    fetch("../data/cohorts.json"),
    fetch("../data/cohorts/lim-2018-03-pre-core-pw/progress.json"),
]).then([
    (rensponse => response.json())
])

fetch(userJson)
.then(response => response.json())
.then(data => {
    //renderUsers(data);
    users = data;
    console.log(users);
})


const renderUsers = data =>{
    btn.addEventListener("click", () =>{
        const render = data.forEach(element =>{
            return container.innerHTML += (`<p>${element.id}</p>`)
        })
        return render;
    })
}

//fetch para cohorts
let cohorts = [];
//const cursos = document.getElementById("dropdownCurso");
//const containerDos= document.getElementById("contenedorCambiante");
const cohortJson= "../data/cohorts.json";

fetch(cohortJson)
.then(response => response.json())
.then(data => {
    renderCohorts(data);
    cohorts = data;
    console.log(cohorts);
})

const renderCohorts = data =>{
    cursos.addEventListener("click", () =>{
        const render = data.forEach(element =>{
            return containerDos.innerHTML += (`<p>${element.id}</p>`)
        })
        return render;
    })
}

