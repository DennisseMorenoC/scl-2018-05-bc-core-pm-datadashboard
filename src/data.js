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


 Promise.all([
    fetch ("../data/cohorts/lim-2018-03-pre-core-pw/users.json"),
    fetch ("../data/cohorts/lim-2018-03-pre-core-pw/progress.json"),
    fetch ("../data/cohorts.json")
 ]).then(
     (responses) =>{
     return Promise.all(responses.map((response)=>{
         return response.json();
     }));
 }
).then((responseJsons)=>{
    console.log(responseJsons);
  // computeUsersStats(responseJsons[0],responseJsons[1],responseJsons[2]);
}).catch(
    (error) =>{
        alert("Error al cargar los datos" + error);
      console.log(error);
    }
);



