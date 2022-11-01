let url = 'https://the-one-api.dev/v2/';
let categoria = ['book', 'movie','character', 'quote', 'chapter'];

let preguntas = [];

let book ={
    cat: 'book',
    name: 'name',
}

let movie ={
    id:'id',
    cat:'movie',
    name: 'name',
    duracion: 'runtimeInMinutes',
    presupuesto: 'budgetInMillions', 
    taquilla: 'boxOfficeRevenueInMillion',
    nominaciones: 'academyAwardNominations',
    premiosGanados: 'academyAwardWins',
    calificacion:'rottenTomatoesScore',
}

let character ={
    id:'id',
    cat:'character',
    name: 'name',
    altura: 'height',
    genero: 'gender',
    nac: 'birth',
    pareja:'spouse',
    muerte:'death',
    reino:'realm',
    pelo:'hair',
}

let quote ={
    frase:'dialog',
    pelicula: 'movie',
    personaje: 'character'
};

let chapter ={
    id:'id',
    cat:'chapter',
}


const headers1 = {
    'Accept': 'application/json',
      'Authorization': 'Bearer exCnepJmeII3_C8CeeBU'
}
const headers2 = {
    'Accept': 'application/json',
      'Authorization': 'Bearer ZhbvYSxMr5SHIyYJo1TX'
}
const headers3 = {
    'Accept': 'application/json',
      'Authorization': 'Bearer qawhzL2ipZusCjIfe9ft'
}
const headers4 = {
    'Accept': 'application/json',
      'Authorization': 'Bearer UYipu1GwOp1FHMQD_kJC'
}
const headers5 = {
    'Accept': 'application/json',
      'Authorization': 'Bearer E5DogB5rl3k37mkW3WvI'
}

//1
fetch(`${url}${character.cat}?${character.name}=Samwise Gamgee`,{headers: headers1})
.then(resupuesta => resupuesta.json())
.then(datos => {
    let preguntaArray ={
        pregunta:'¿Cúal es el nombre completo de Sam',
        opciones: [
            'Samuel',
            'Sam Gamgee',
            'Samwise',
            (datos.docs[0].name)
        ],
        correcta: (datos.docs[0].name),
    }
    preguntas.push(preguntaArray)
    
});
//2
fetch(`${url}${character.cat}?${character.name}=Gandalf`,{headers: headers2})
.then(resupuesta => resupuesta.json())
.then(datos => {
    let preguntaArray ={
        pregunta:`¿A que raza pertenece ${datos.docs[0].name}?`,
        opciones: [
            'Valar',
            'Humano',
            'Elfo',
            (datos.docs[0].race)
        ],
        correcta: (datos.docs[0].race),
    }
    preguntas.push(preguntaArray)
    
});
//3
fetch(`${url}${character.cat}?${character.name}=Eru Ilúvatar`,{headers: headers1})
.then(resupuesta => resupuesta.json())
.then(datos => {
    let preguntaArray ={
        pregunta:`¿Cúal de estos es el dios de Arda y la Tierra Media?`,
        opciones: [
            'Melkor',
            'Manwë',
            'Aulë',
            (datos.docs[0].name)
        ],
        correcta: (datos.docs[0].name),
    }
    preguntas.push(preguntaArray)
    
});
//4
fetch(`${url}${character.cat}?${character.name}=Gollum`,{headers: headers2})
.then(resupuesta => resupuesta.json())
.then(datos => {
    let preguntaArray ={
        pregunta:`¿A que raza pertenece ${datos.docs[0].name}?`,
        opciones: [
            'Trasgo',
            'Humano',
            'Orco',
            (datos.docs[0].race)
        ],
        correcta: (datos.docs[0].race),
    }
    preguntas.push(preguntaArray)
    
});
//5
fetch(`${url}${character.cat}?${character.name}=Gollum`,{headers: headers1})
.then(resupuesta => resupuesta.json())
.then(datos => {
    let preguntaArray ={
        pregunta:`¿Quien fue el responsable de destruir el anillo único?`,
        opciones: [
            'Isildur',
            'Sam',
            'Frodo',
            (datos.docs[0].name)
        ],
        correcta: (datos.docs[0].name),
    }
    preguntas.push(preguntaArray)
    
});
//6
fetch(`${url}${character.cat}?${character.name}=Isildur`,{headers: headers2})
.then(resupuesta => resupuesta.json())
.then(datos => {
    let preguntaArray ={
        pregunta:`¿Quien derrotó a Sauron al finalizar la guerra de la última alianza?`,
        opciones: [
            'Elendil',
            'Elrond',
            'Gil-Galad',
            (datos.docs[0].name)
        ],
        correcta: (datos.docs[0].name),
    }
    preguntas.push(preguntaArray)
    
});
//7
fetch(`${url}${character.cat}?${character.name}=Fëanor`,{headers: headers1})
.then(resupuesta => resupuesta.json())
.then(datos => {
    let preguntaArray ={
        pregunta:`¿Quien fue el creador de los silmarils?`,
        opciones: [
            'Sauron',
            'Celebrimbor',
            'Morgoth',
            datos.docs[0].name
        ],
        correcta: (datos.docs[0].name)
    }
    preguntas.push(preguntaArray)
    
});
//8
fetch(`${url}${character.cat}?${character.name}=Melkor`,{headers: headers2})
.then(resupuesta => resupuesta.json())
.then(datos => {
    let preguntaArray ={
        pregunta:`¿A cual de estos se le conoce como el enemigo del mundo?`,
        opciones: [
            'Sauron',
            'Rey Brujo',
            datos.docs[0].name,
            'Saruman'
        ],
        correcta: (datos.docs[0].name)
    }
    preguntas.push(preguntaArray)
    
});
//9
fetch(`${url}${character.cat}?${character.name}=Sauron`,{headers: headers1})
.then(resupuesta => resupuesta.json())
.then(datos => {
    let preguntaArray ={
        pregunta:`¿A cual de estos se le conoce como el enemigo de los pueblos libres?`,
        opciones: [
            'Melkor',
            datos.docs[0].name,
            'Rey Brujo',
            'Saruman'
        ],
        correcta: (datos.docs[0].name)
    }
    preguntas.push(preguntaArray)
    
});
//10
fetch(`${url}${character.cat}?${character.name}=Sauron`,{headers: headers2})
.then(resupuesta => resupuesta.json())
.then(datos => {
    let preguntaArray ={
        pregunta:`¿Quien es el señor de los anillos?`,
        opciones: [
            'Isildur',
            'Aragorn',
            datos.docs[0].name,
            'Frodo'
        ],
        correcta: (datos.docs[0].name)
    }
    preguntas.push(preguntaArray);
    
});
//11
fetch(`${url}${movie.cat}?${movie.name}=The Fellowship of the Ring`,{headers: headers3})
.then(resupuesta => resupuesta.json())
.then(datos => {
    let preguntaArray ={
        pregunta:`¿Cuantas nominaciones al Oscar tiene La comunidad del anillo?`,
        opciones: [
            datos.docs[0].academyAwardNominations,
            8,
            4,
            10
        ],
        correcta: (datos.docs[0].academyAwardNominations)
    }
    preguntas.push(preguntaArray);
});
//12
fetch(`${url}${movie.cat}?${movie.name}=The Return of the King`,{headers: headers3})
.then(resupuesta => resupuesta.json())
.then(datos => {
    let preguntaArray ={
        pregunta:`¿Cuantos Oscars tiene El Retrono del rey?`,
        opciones: [
            10,
            datos.docs[0].academyAwardWins,
            7,
            9
        ],
        correcta: (datos.docs[0].academyAwardWins)
    }
    preguntas.push(preguntaArray);
});
//13
fetch(`${url}${character.cat}?${character.name}=Bilbo Baggins`,{headers: headers4})
.then(resupuesta => resupuesta.json())
.then(datos => {
    let preguntaArray ={
        pregunta:`¿Quien es el protagonista principal del Hobbit?`,
        opciones: [
            'Gandalf',
            'Frodo Baggins',
            'Thorin',
            datos.docs[0].name
        ],
        correcta: (datos.docs[0].name)
    }
    preguntas.push(preguntaArray);
    
});
//14
fetch(`${url}${character.cat}?${character.name}=Aragorn II Elessar`,{headers: headers4})
.then(resupuesta => resupuesta.json())
.then(datos => {
    let preguntaArray ={
        pregunta:`¿Cúal es el nombre completo de Aragorn?`,
        opciones: [
            'Aragorn II',
            'Aragorn Elessar',
            datos.docs[0].name,
            'Aragorn II Arathorn'
        ],
        correcta: (datos.docs[0].name)
    }
    preguntas.push(preguntaArray);
    
});
//15
fetch(`${url}${character.cat}?${character.name}=Aragorn II Elessar`,{headers: headers5})
.then(resupuesta => resupuesta.json())
.then(datos => {
    let preguntaArray ={
        pregunta:`¿Quien es la pareja de Aragorn?`,
        opciones: [
            datos.docs[0].spouse,
            'Eowyn',
            'Galadriel',
            'Ninguna'
        ],
        correcta: (datos.docs[0].spouse)
    }
    preguntas.push(preguntaArray);
    
});
//16




