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
    //console.log(responseJsons);
    window.computeUsersStats(users, progress,cohorts);
//window.computeUsersStats(users, progress, Object.keys(cohorts[1].coursesIndex));
}).catch(

    (error) =>{
       //console.log("Error al cargar los datos" + error);
      
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
        let progreso = progress[idAlumnas];

        let role = users[i].role;
   
        /*users.forEach(item => {
            let idAlumnas = users.id;
        
            console.log(idAlumnas)
            let progreso = progress[idAlumnas];*/

            if(role === "student"){
                
                for (let j in progreso){  
                
                //cohorts.forEach(item2 => {
                    //if(progreso[j] !== "undefined"){
                        //console.log(progreso[j]);
                        let progressPercent = progreso[j].percent;

                        let progressUnit = progreso[j].units;


                        for (let k in progressUnit){
                            let progressParts = progressUnit[k].parts;

                            for (let l in progressParts){
                                switch(progressParts[l].type){
                                    case "read":
                                        readsTotales += 1;
                                       // console.log(readsTotales);
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
                       // console.log(users[i]);
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
                       // console.log(users[i].stats);
                       // console.log(users);
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
                
            

    
// window.filterUsers = (users, search) => {};
// window.processCohortData = (options) => {};*/
 /*    
window.sortUsers = (users, ordenBy, ordenDirection) => {;
    // creo una funcion que tiene el nombre sortUsers, los parametros de esta funcion son:
    //users = corresponde a un arreglo de las alumnas
    //ordeBy= es un string 
    if(ordenBy === 'name'){ // digo que mi parametro ordenBy debe ser si o si name 
    return users.sort(function(x,y){ // esta linea me ordena users segun la funcion que le estoy dando
    if(ordenDirection == 'ASC'){ // en esta linea creo una condicion y le digo que mi parametro ordenDirection debe ser igual a el string ASC
     return x.name.localeCompare(y.name);// En esta linea le digo que me compare los datos x.name con y.name 
    }else{
        return x.name.localeCompare(y.name)* -1; // en esta linea comparo nuevamente x.name e y.name pero lo hago para que se ordenen descendente, eso sucede al compararlo por -1, hace que el valor que estoy multiplicando por -1 me lo devuelva negativo y lo ordene descendente
    }
    
    }
    );}
    if(ordenDirection === 'percent'){ //ordeno que trabaje en la propiedad percent
        return users.sort(function(x,y){//y que me ordene users segun la funcion 
            if(ordenDirection == 'ASC'){
            return a.stats.percent - b.stats.percent; //comparo mis dos percent
        }else{
            return a.stats.percent - b.stast.percent *-1//esta comparacion es para que me los de en orden descendente
        }
    });
    console.log(percent)
    }}*/

   function sortUsers(users, orderBy, orderDirection){
        if(orderBy === 'name'){
        users.sort(function(estudiante1, estudiante2){
            if(orderDirection == 'ASC'){
               return estudiante1.name.localeCompare(estudiante2.name);
            } else { 
                return (estudiante1.name.localeCompare(estudiante2.name) * -1);
            }
         })
        }
        return sortUsers;
    };
    
window.filterUsers = (users, search) => {
    users.filter((user) => user.includes(search));
};
// window.processCohortData = (options) => {};
     
function showData(){

    contenedorCambiante.innerHTML += `
    
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Completitud General</th>
                        <th scope="col">Completitud Lecturas</th>
                        <th scope="col">Completitud Ejercicios</th>
                        <th scope="col">Completitud Quizzes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">${users.name}</th>
                        <td>${progress.progressPercent}</td>
                        <td>${progress.readsTotales}</td>
                        <td>${progress.exercisesTotales}</td>
                        <td>${progress.quizzesTotales}</td>
                    </tr>
                </tbody>
            </table>
  
    `
;
    
}
