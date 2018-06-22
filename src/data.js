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
    const users = responseJsons[0];
    const progress = responseJsons[1];
    const courses = responseJsons[2];
    console.log(responseJsons);
    if(users && progress && courses){
        window.computeUsersStats(responseJsons[0],responseJsons[1],responseJsons[2])
    }

}).catch(
    (error) =>{
        alert("Error al cargar los datos" + error);
      console.log(error);
    }
);

 window.computeUsersStats = (users, progress, courses) => {
     //creamos for para recorrer users
     for (let i= 0; users.length; ++i){
         //creamos variable users para poder obtener el id de cada alumna
         let idAlumnas = users[i].id;
         let progreso = progress[idAlumnas];
         console.log (progreso)
         //creamos una segunda variable para 
        if(JSON.stringify(progreso) === '{}'){
            users[i] = {
                ...users[i],
                stats:{
                    percent: 0,
                    exercises: {
                        total: 0,
                        completed: 0,
                        percent: 0
                    },
                    reads: {
                        total: 0,
                        completed: 0,
                        percent: 0
                    },
                    quizzes: {
                        total: 0,
                        completed: 0,
                        percent: 0,
                        scoreSum: 0,
                        scoreAvg: 0,
                }


            }


         }
         
     }
 }

   
// window.sortUsers = (users, orderBy, orderDirection) => {};
// window.filterUsers = (users, search) => {};
// window.processCohortData = (options) => {};


 
