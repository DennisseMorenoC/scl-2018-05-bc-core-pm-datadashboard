// window.computeUsersStats = (users, progress, courses) => {};
// window.sortUsers = (users, orderBy, orderDirection) => {};
// window.filterUsers = (users, search) => {};
// window.processCohortData = (options) => {};



const btn =  document.getElementById("boton");
const container =  document.getElementById("root");
const userJson = "../data/cohorts/lim-2018-03-pre-core-pw/users.json";


fetch(userJson)
.then(response => response.json())
.then(data => {
    renderUsers(data);
    console.log(data);
})

const renderUsers = data =>{
    btn.addEventListener("click", () =>{
        const render = data.forEach(element =>{
            return container.innerHTML += (`<p>${element.name}</p>` + `<p>${element.timezone}</p>`)
        })
        return render;
    })
}

const cursos = document.getElementById("cohorts");
const containerDos= document.getElementById("rootDos");
const cohortJson= "../data/cohorts.json";

fetch(cohortJson)
.then(response => response.json())
.then(data => {
    renderCohorts(data);
    console.log(data);
})

const renderCohorts = data =>{
    cursos.addEventListener("click", () =>{
        const render = data.forEach(element =>{
            return containerDos.innerHTML += (`<p>${element.id}</p>`)
        })
        return render;
    })
}