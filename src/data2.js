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
if(ordenDirection === 'percent');
}
