// window.computeUsersStats = (users, progress, courses) => {};
// window.sortUsers = (users, orderBy, orderDirection) => {};
// window.filterUsers = (users, search) => {};
// window.processCohortData = (options) => {};



const btn =  document.getElementById("dropdown2018");
const container =  document.getElementById("contenedorCambiante");
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
            return container.innerHTML += (`<p>${element.name}</p>`)
        })
        return render;
    })
}

const cursos = document.getElementById("dropdownCurso");
const containerDos= document.getElementById("contenedorCambiante");
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

const cohort = cohortJson.find(item => item.id === 'lim-2018-03-pre-core-pw');
const courses = Object.keys(cohortJson.coursesIndex);
const { users, progress } = cohortJson;
const processed = computeUsersStats(users, progress, courses);
console.log("cohort");
/*const cohortFilter = cohortJson.filter(//Le pasamos cosas, esto para filtrar segun los parametros que le entregamos en la funcion
    (elemento) =>{
        return elemento.signupCohort == 'lim-2018-03-pre-core-pw';
        console.log(signupCohort)
    }
);


for(i = 0; i < cohortJson.length; i++){

}*/