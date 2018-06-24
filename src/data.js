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
    const users = responseJsons[0];
    const progress = responseJsons[1];
    const courses = responseJsons[2];
    console.log(responseJsons);
    if(users && progress && courses){
        window.computeUsersStats(responseJsons[0], responseJsons[1], responseJsons[2]);
    }});
    .catch(
    (error) =>{
        alert("Error al cargar los datos" + error);
      console.log(error);
    }
);

window.computeUsersStats = (users, progress, courses) => {
     //creamos for para recorrer users
     let idAlumnas = users[i].id;
     let progreso = progress[idAlumnas];

let percent = 0;
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


     users.forEach(progreso => {
         
     });
     //for (let i= 0; users.length; ++i){
         //creamos variable users para poder obtener el id de cada alumna

 
    
         //creamos una segunda variable para juntar progreso con alumnas
         //transformar la info de progreso a una informacion que podamos entender
         if(JSON.stringify(progreso)==='{}'){
         /* let stats = new Object();
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
                
                     }
                
                 }
         
         
         
     

    
    
   
// window.sortUsers = (users, orderBy, orderDirection) => {};
// window.filterUsers = (users, search) => {};
// window.processCohortData = (options) => {};
     
