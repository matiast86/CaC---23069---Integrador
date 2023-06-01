//crear options en array con js
let arrayCategoria = ['seleccione una opción','Estudiante','Trainee','Junior'];
let options="";
arrayCategoria.map((op,i)=> {
    options+=`<option value="${op}" id="${i}">${op}<option>`
})
document.getElementById("categoria").innerHTML=options;




