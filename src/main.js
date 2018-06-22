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
    let users =  response [0];
    let progress = response [1];
    let cohorts = response [2];
    console.log(responseJsons);


}).catch(
    (error) =>{
        alert("Error al cargar los datos" + error);
      console.log(error);
    }
);



