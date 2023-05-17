let persona = {
    nombre: "Juan Camilo",
    edad: 24,
    ciudad: "Cali",
    profesion: "Médico"
}

console.log(persona);

function presentacion(object){
    let phrase = "Soy " + persona.nombre + ", tengo " + persona.edad + " años y vivo en " + persona.ciudad;
    return phrase;
}

let mensaje = presentacion(persona);

console.log(mensaje);

persona.hobbies = ["leer","programar","correr"];

console.log(persona.hobbies);

let hobbies = persona.hobbies[0];
for (let i = 0; i < hobbies.length; i ++){
     let hobby = persona.hobbies[i];
     console.log(hobby);
}