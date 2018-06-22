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
<<<<<<< HEAD
    let users = response [0];
    let progress = response [1];
    let cohorts = response [2];
    console.log(responseJsons);
  // computeUsersStats(responseJsons[0],responseJsons[1],responseJsons[2]);
=======
    let users =  response [0];
    let progress = response [1];
    let cohorts = response [2];
    console.log(responseJsons);


>>>>>>> 7d59eb58def8b364fffeadce42d9ae8581689824
}).catch(
    (error) =>{
        alert("Error al cargar los datos" + error);
      console.log(error);
    }
);
<<<<<<< HEAD
=======


>>>>>>> 7d59eb58def8b364fffeadce42d9ae8581689824

