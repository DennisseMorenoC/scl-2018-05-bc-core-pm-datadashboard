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
    const users =  responseJsons[0];
    const progress = responseJsons [1];
    const courses = responseJsons [2];
    console.log(responseJsons);
    if(users && progress && courses){
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
         console.log(progreso)
    
         //creamos una segunda variable para juntar progreso con alumnas
         //transformar la info de progreso a una informacion que podamos entender
         if(Json.stringify(progreso)==='{}'){
             users[i] = {
                 //... cumple la misma funcion que el push 
                 //en esta parte agregamos la propiedad de stats a users
                 ...users[i],
                 stats:{
                     percent: 0,
                     exercises:{
                         total:0,
                         completed:0,
                         percent:0,
                     }, 
                     reads: {
                         total:0,
                         completed:0,
                         percent:0,
                     },
                     quizzes:{
                         total:0,
                         completed:0,
                         percent:0,
                         scoreSum:0,
                         scoreAvg:0,
                     }
                
                 }
             }
         }

     }
 }
    
   
// window.sortUsers = (users, orderBy, orderDirection) => {};
// window.filterUsers = (users, search) => {};
// window.processCohortData = (options) => {};*/

