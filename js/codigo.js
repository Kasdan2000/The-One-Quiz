
let volverAInicio = document.querySelector("#volverAInicio");
let puntaje = document.querySelector("#puntaje");
let siguientePregunta = document.querySelector("#siguientePregunta");
let btnComienzo = document.querySelector("#comenzarQuiz");
let contenedorQuiz = document.querySelector("#contenedorPregunta");
let advertencia = document.querySelector("#popUPAdvertencia");
let busqueda;
let contador = 5;
document.querySelector("#contador").innerHTML += ''
contenedorQuiz.innerHTML = '';

function correctoIncorrecto1(){
    if(this.value === busqueda.correcta){
        this.style.backgroundColor = "#7BCE72";
        contador++;
        setTimeout(function (){
            document.querySelector("#contador").innerHTML += '',
            contenedorQuiz.innerHTML = '',
            randomizer(), 
            imprimirPreguntas()
        }
        , 800)
    }
    else{
        this.style.backgroundColor = "#DA3925";
        contador--;
        setTimeout(function (){
            document.querySelector("#contador").innerHTML += '',
            contenedorQuiz.innerHTML = '',
            randomizer(), 
            imprimirPreguntas()
        }
        , 800)
    }
    if(contador === 0){
        advertencia.style.display='flex'
    advertencia.innerHTML = `<article>
    <h3>Has Perdido</h3>
    <div>
    <button id="reintentarQuiz">Reintentar</button>
    <button id="abandonarQuiz">Salir</button></article>
    </div>`;
    let reintentarQuiz = document.querySelector("#reintentarQuiz");
    let abandonarQuiz = document.querySelector("#abandonarQuiz");
    reintentarQuiz.addEventListener("click", rehacerQuiz);
    abandonarQuiz.addEventListener("click", abandonarLaQuiz);
    reintentarQuiz.style.backgroundColor= "#7BCE72";
    abandonarQuiz.style.backgroundColor= "#DA3925";
    }
    if(contador === 10){
        advertencia.style.display='flex'
    advertencia.innerHTML = `<article>
    <h3>¡Has Ganado!</h3>
    <div>
    <button id="reintentarQuiz">Reintentar</button>
    <button id="abandonarQuiz">Salir</button></article>
    </div>`;
    let reintentarQuiz = document.querySelector("#reintentarQuiz");
    let abandonarQuiz = document.querySelector("#abandonarQuiz");
    reintentarQuiz.addEventListener("click", rehacerQuiz);
    abandonarQuiz.addEventListener("click", abandonarLaQuiz);
    reintentarQuiz.style.backgroundColor= "#7BCE72";
    abandonarQuiz.style.backgroundColor= "#DA3925";
    }
}

function correctoIncorrecto2(){
    if(this.value === busqueda.correcta){
        this.style.backgroundColor = "#7BCE72";
        contador++;
        setTimeout(function (){
            document.querySelector("#contador").innerHTML += '',
            contenedorQuiz.innerHTML = '',
            randomizer(), 
            imprimirPreguntas()
        }
        , 800)
    }
    else{
        this.style.backgroundColor = "#DA3925";
        contador--;
        setTimeout(function (){
            document.querySelector("#contador").innerHTML += '',
            contenedorQuiz.innerHTML = '',
            randomizer(), 
            imprimirPreguntas()
        }
        , 800)
    }
    if(contador === 0){
        advertencia.style.display='flex'
    advertencia.innerHTML = `<article>
    <h3>Has Perdido</h3>
    <div>
    <button id="reintentarQuiz">Reintentar</button>
    <button id="abandonarQuiz">Salir</button></article>
    </div>`;
    let reintentarQuiz = document.querySelector("#reintentarQuiz");
    let abandonarQuiz = document.querySelector("#abandonarQuiz");
    reintentarQuiz.addEventListener("click", rehacerQuiz);
    abandonarQuiz.addEventListener("click", abandonarLaQuiz);
    reintentarQuiz.style.backgroundColor= "#7BCE72";
    abandonarQuiz.style.backgroundColor= "#DA3925";
    }
    if(contador === 10){
        advertencia.style.display='flex'
    advertencia.innerHTML = `<article>
    <h3>¡Has Ganado!</h3>
    <div>
    <button id="reintentarQuiz">Reintentar</button>
    <button id="abandonarQuiz">Salir</button></article>
    </div>`;
    let reintentarQuiz = document.querySelector("#reintentarQuiz");
    let abandonarQuiz = document.querySelector("#abandonarQuiz");
    reintentarQuiz.addEventListener("click", rehacerQuiz);
    abandonarQuiz.addEventListener("click", abandonarLaQuiz);
    reintentarQuiz.style.backgroundColor= "#7BCE72";
    abandonarQuiz.style.backgroundColor= "#DA3925";
    }
}

function correctoIncorrecto3(){
    if(this.value === busqueda.correcta){
        this.style.backgroundColor = "#7BCE72";
        contador++;
        setTimeout(function (){
            document.querySelector("#contador").innerHTML += '',
            contenedorQuiz.innerHTML = '',
            randomizer(), 
            imprimirPreguntas()
        }
        , 800)
    }
    else{
        this.style.backgroundColor = "#DA3925";
        contador--;
        setTimeout(function (){
            document.querySelector("#contador").innerHTML += '',
            contenedorQuiz.innerHTML = '',
            randomizer(), 
            imprimirPreguntas()
        }
        , 800)
    }
    if(contador === 0){
        advertencia.style.display='flex'
    advertencia.innerHTML = `<article>
    <h3>Has Perdido</h3>
    <div>
    <button id="reintentarQuiz">Reintentar</button>
    <button id="abandonarQuiz">Salir</button></article>
    </div>`;
    let reintentarQuiz = document.querySelector("#reintentarQuiz");
    let abandonarQuiz = document.querySelector("#abandonarQuiz");
    reintentarQuiz.addEventListener("click", rehacerQuiz);
    abandonarQuiz.addEventListener("click", abandonarLaQuiz);
    reintentarQuiz.style.backgroundColor= "#7BCE72";
    abandonarQuiz.style.backgroundColor= "#DA3925";
    }
    if(contador === 10){
        advertencia.style.display='flex'
    advertencia.innerHTML = `<article>
    <h3>¡Has Ganado!</h3>
    <div>
    <button id="reintentarQuiz">Reintentar</button>
    <button id="abandonarQuiz">Salir</button></article>
    </div>`;
    let reintentarQuiz = document.querySelector("#reintentarQuiz");
    let abandonarQuiz = document.querySelector("#abandonarQuiz");
    reintentarQuiz.addEventListener("click", rehacerQuiz);
    abandonarQuiz.addEventListener("click", abandonarLaQuiz);
    reintentarQuiz.style.backgroundColor= "#7BCE72";
    abandonarQuiz.style.backgroundColor= "#DA3925";
    }
}

function correctoIncorrecto4(){
    if(this.value === busqueda.correcta){
        this.style.backgroundColor = "#7BCE72";
        contador++;
        setTimeout(function (){
            document.querySelector("#contador").innerHTML += '',
            contenedorQuiz.innerHTML = '',
            randomizer(), 
            imprimirPreguntas()
        }
        , 800)
    }
    else{
        this.style.backgroundColor = "#DA3925";
        contador--;
        setTimeout(function (){
            document.querySelector("#contador").innerHTML += '',
            contenedorQuiz.innerHTML = '',
            randomizer(), 
            imprimirPreguntas()
        }
        , 800)     
    }
    if(contador === 0){
        advertencia.style.display='flex'
    advertencia.innerHTML = `<article>
    <h3>Has Perdido</h3>
    <div>
    <button id="reintentarQuiz">Reintentar</button>
    <button id="abandonarQuiz">Salir</button></article>
    </div>`;
    let reintentarQuiz = document.querySelector("#reintentarQuiz");
    let abandonarQuiz = document.querySelector("#abandonarQuiz");
    reintentarQuiz.addEventListener("click", rehacerQuiz);
    abandonarQuiz.addEventListener("click", abandonarLaQuiz);
    }
    if(contador === 10){
        advertencia.style.display='flex'
    advertencia.innerHTML = `<article>
    <h3>¡Has Ganado!</h3>
    <div>
    <button id="reintentarQuiz">Reintentar</button>
    <button id="abandonarQuiz">Salir</button></article>
    </div>`;
    let reintentarQuiz = document.querySelector("#reintentarQuiz");
    let abandonarQuiz = document.querySelector("#abandonarQuiz");
    reintentarQuiz.addEventListener("click", rehacerQuiz);
    abandonarQuiz.addEventListener("click", abandonarLaQuiz);
    reintentarQuiz.style.backgroundColor= "#7BCE72";
    abandonarQuiz.style.backgroundColor= "#DA3925";
    }
}

function pasarPregunta(){
        document.querySelector("#contador").innerHTML += ''
        contenedorQuiz.innerHTML = '';
        randomizer();
        imprimirPreguntas();
}
function randomizer(){
    busqueda = preguntas[Math.floor(Math.random() * preguntas.length)];
}

const imprimirPreguntas = () => {
    document.querySelector("#contador").innerHTML = `<h3 id="puntaje">${contador}</h3>
    <p>Puntaje</p>`
    contenedorQuiz.innerHTML = `<h2>${busqueda.pregunta}</h2>
    <input type="button" id="o1" value="${busqueda.opciones[0]}">
    <input type="button" id="o2" value="${busqueda.opciones[1]}">
    <input type="button" id="o3" value="${busqueda.opciones[2]}">
    <input type="button" id="o4" value="${busqueda.opciones[3]}">
    <p id="pasarPregunta">Ya respondí esta pregunta</p>
    <p id="volverAInicio">Volver a inicio</p>`;
    let opcion1 = document.querySelector("#o1");
    let opcion2 = document.querySelector("#o2");
    let opcion3 = document.querySelector("#o3");
    let opcion4 = document.querySelector("#o4");
    let pasarPreguntaBtn = document.querySelector("#pasarPregunta");
    let puntaje = document.querySelector("#puntaje");
    let siguientePregunta = document.querySelector("#siguientePregunta");
    let advertencia = document.querySelector("#popUPAdvertencia");
    let volverAInicio = document.querySelector("#volverAInicio");
    pasarPreguntaBtn.addEventListener("click", pasarPregunta);
    opcion1.addEventListener("click", correctoIncorrecto1);
    opcion2.addEventListener("click", correctoIncorrecto2);
    opcion3.addEventListener("click", correctoIncorrecto3);
    opcion4.addEventListener("click", correctoIncorrecto4);
    volverAInicio.addEventListener("click", salirDeQuiz);
    
    
} 

function comenzarQuiz(){
    document.querySelector("#backModal").style.display = "flex";
    document.querySelector("h1").style.display = "none";
    btnComienzo.style.display = "none";
    randomizer();
    imprimirPreguntas();
}
btnComienzo.addEventListener("click", comenzarQuiz);

function rehacerQuiz(){
    contador = 5;
    advertencia.style.display='none';
    advertencia.innerHTML= '';
    document.querySelector("#contador").innerHTML += ''
    contenedorQuiz.innerHTML = '';
    randomizer();
    imprimirPreguntas();
}

function abandonarLaQuiz(){
    contador = 5;
    document.querySelector("#contador").innerHTML += ''
    contenedorQuiz.innerHTML = '';
    advertencia.style.display='none';
    advertencia.innerHTML= '';
    document.querySelector("#backModal").style.display = "none";
    document.querySelector("h1").style.display = "block";
    btnComienzo.style.display = "block";
}

function continuarLaQuiz(){
    advertencia.style.display='none'
    advertencia.innerHTML= '';   
}

function salirDeQuiz(){
    advertencia.style.display='flex'
    advertencia.innerHTML = `<article>
    <h3>¿Seguro quieres volver?</h3>
    <p>Perderas tu progreso si te vas</p>
    <div>
    <button id="abandonarQuiz">Si</button>
    <button id="continuarQuiz">No</button>
    </div>
    </article>`;
    let abandonarQuiz = document.querySelector("#abandonarQuiz");
    let continuarQuiz = document.querySelector("#continuarQuiz");
    abandonarQuiz.addEventListener("click", abandonarLaQuiz);
    continuarQuiz.addEventListener("click", continuarLaQuiz);
    abandonarQuiz.style.backgroundColor= "#DA3925";
    continuarQuiz.style.backgroundColor= "#7BCE72";
};


