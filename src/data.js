// window.computeUsersStats = (users, progress, courses) => {};
// window.sortUsers = (users, orderBy, orderDirection) => {};
// window.filterUsers = (users, search) => {};
// window.processCohortData = (options) => {};


//fetch para users
let users = [];
const btn =  document.getElementById("dropdown2018");
const container =  document.getElementById("contenedorCambiante");
const userJson = "../data/cohorts/lim-2018-03-pre-core-pw/users.json";


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

//fetch para progress
let progress = {};
const cursos = document.getElementById("dropdownCurso");
const containerDos= document.getElementById("contenedorCambiante");
const progressJson= "../data/cohorts/lim-2018-03-pre-core-pw/progress.json";

fetch(progressJson)
.then(response => response.json())
.then(data => {
    renderProgress(data);
    progress =  data;
    console.log(progress);
})

const renderProgress = data =>{
    cursos.addEventListener("click", () =>{
        const render = data.forEach(element =>{
            return containerDos.innerHTML += (`<p>${element.intro}</p>`)
        })
        return render;
    })
}

