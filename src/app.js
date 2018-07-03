//solucionario
//+ cohort + es una variable que sera definida mas abajo
//usarios y progresos dependen de cohort 
//promise.all llama a todas las rutas juntas
//en data.js solo se hace las peticiones . modelo, vista, controlador. 
//el controlador es el cdigo que va a manipular la vista 
//modelo es como va hacer mi vista 
//vista lo visual lo que veo 
//los datos para js en json son manipulables, json crea una estructura iterable para js
function cargar(cohort){
    Promise.all([
        fetch("../data/cohorts/"+ cohort + "users.json"),
        fetch("../data/cohorts/"+ cohort + "progress.json"),
        fetch("../data/cohorts.json")
    ]).then(//al cumplirse las promesas ejecutara lo siguiente
        (datos.Json)=>{
            return Promise.all(datos.Json.map((respuesta) =>{//crea un nuevo array con objetos json
                return respuesta.json()
            }))
        }
    ).then(
        (respuestaJson)=> {
            console.log(respuestaJson)
            var usuarios = computeUsersStats(respuestaJson[0], respuestaJson[1],respuestaJson[2])

        }
    )
}