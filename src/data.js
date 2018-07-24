let computeUsersStats;
let users;
let progress;
let cohorts;
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
    //se crean tres variables constantes para poder guardar los datos de cada fetch y poder utilizarlos en nuestras funciones
    users = responseJsons[0];
    progress = responseJsons[1];
    cohorts = responseJsons[2];
    console.log(responseJsons);
    window.computeUsersStats(users, progress,cohorts);
//window.computeUsersStats(users, progress, Object.keys(cohorts[1].coursesIndex));
}).catch(

    (error) =>{
       console.log("Error al cargar los datos" + error);
      
    }
);

    /*Promise.all([
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
      //se crean tres variables constantes para poder guardar los datos de cada fetch y poder utilizarlos en nuestras funciones
      let users = responseJsons[0];
      let progress = responseJsons[1];
      let courses = responseJsons[2];
      let computeUsersStats= window.loadData.computeUsersStats(users,progress,courses);
      console.log(responseJsons);


      
      })
      .catch(
      (error) =>{
          alert("Error al cargar los datos" + error);
      }
  );*/



window.computeUsersStats=(users, progress, cohorts) => {
    let progressPercent = 0;    
    let completed = 0;
    let quizzes = 0;
    let quizzesTotales = 0;
    let quizzessCompletados = 0;
    let quizzesPercent = 0;
    let scoreSum = 0;
    let scoreAvg = 0;
    let reads = 0;
    let readsTotales = 0;
    let readsCompletados = 0;
    let readsPercent = 0;
    let exercises = 0;
    let exercisesTotales = 0;
    let exercisesCompletados = 0;
    let exercisesPercent = 0;
    let usersNuevos = [];
    //creamos for para recorrer users
    for(let i=0; i < users.length; i++){
        let idAlumnas = users[i].id;

        console.log(idAlumnas)
        let progreso = progress[idAlumnas];
        console.log(progreso)
        let role = users[i].role;
   
        /*users.forEach(item => {
            let idAlumnas = users.id;
        
            console.log(idAlumnas)

            let progreso = progress[idAlumnas];*/

            if(role === "student"){
                console.log(role);
                
                for (let j in progreso){  
                
                //cohorts.forEach(item2 => {
                    //if(progreso[j] !== "undefined"){
                        //console.log(progreso[j]);
                        let progressPercent = progreso[j].percent;
                        console.log(progressPercent);
                        let progressUnit = progreso[j].units;

                        console.log(progressUnit)
                        for (let k in progressUnit){
                            let progressParts = progressUnit[k].parts;
                            console.log(progressParts);
                            for (let l in progressParts){
                                switch(progressParts[l].type){
                                    case "read":
                                        readsTotales += 1;
                                        console.log(readsTotales);
                                        if(progressParts[l].completed == 1){
                                            readsCompletados += 1;
                                        }break;
                                    case "quiz":
                                        quizzesTotales += 1;
                                        if(progressParts[l].completed == 1){
                                            quizzessCompletados += 1;
                                            scoreSum += progressParts[l].score;
                                        }break;
                                    case "practice":
                                        exercisesTotales += 1;
                                        if(progressParts[l].completed == 1){
                                            exercisesCompletados += 1;
                                        }break;
                                }
                            }
                        }
                        // let stats = new Object();
                        console.log(users[i]);
                        users[i].stats = {
                            percent: progressPercent,
                            reads: {
                                total: readsTotales,
                                completed: readsCompletados,
                                percent: Math.round((readsCompletados / readsTotales) * 100)
                            },
                            quiz: {
                                total: quizzesTotales,
                                completed: quizzessCompletados,
                                percent: Math.round((quizzessCompletados / quizzesTotales) * 100),
                                scoreSum: scoreSum,
                                scoreAvg: Math.round(scoreSum /quizzessCompletados)
                            },
                            exercises: {
                                total: exercisesTotales,
                                completed: exercisesCompletados,
                                percent: Math.round((exercisesCompletados / exercisesTotales) * 100)
                            }
                        
                        };
                        console.log(users[i].stats);
                        console.log(users);
                        return users;
                        
                        // stats.percent = progressPercent;
                        // stats.reads ={
                        //     total: readsTotales,
                        //     completed: readsCompletados,
                        //     percent: Math.round((readsCompletados / readsTotales) * 100)
                        // };
                        // stats.quiz ={
                        //     total: quizzesTotales,
                        //     completed: quizzessCompletados,
                        //     percent: Math.round((quizzessCompletados / quizzesTotales) * 100),
                        //     scoreSum: scoreSum,
                        //     scoreAvg: Math.round(scoreSum /quizzessCompletados)
                        // };
                        // stats.exercises ={
                        //     total: exercisesTotales,
                        //     completed: exercisesCompletados,
                        //     percent: Math.round((exercisesCompletados / exercisesTotales) * 100)
                        // };

                        // users[i].stats = stats;
                        
                    //}
                }
            }        
    }

};    
    //console.log(users);     
         //creamos variable users para poder obtener el id de cada alumna  
    
         //creamos una segunda variable para juntar progreso con alumnas
         //transformar la info de progreso a una informacion que podamos entender
         /*if(JSON.stringify(progreso)==='{}'){
          let stats = new Object();
              stats:{
                percent: 
                exercises:{
                    total:
                    completed:
                    percent:
                }, 
                reads: {
                    total:
                    completed:
                    percent:
                },
                quizzes:{
                    total:
                    completed:
                    percent:
                    scoreSum:
                    scoreAvg: 
                }
             */
             
                 //... cumple la misma funcion que el push 
                 //en esta parte agregamos la propiedad de stats a users
                
            
    
window.filterUsers = (users, search) => {
    users.filter((user) => user.includes(search));
};
// window.processCohortData = (options) => {};
     
