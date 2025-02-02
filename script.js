window.onload = function () {
 
    let adjetivo = ["feo ", "desagradable ", "guapo ", "rápido ", "furioso ", "alto ", "brillante "];
    let cosa = ["el perro ", "la comida ", "el chico ", "el ladrón ", "el león ", "el edificio ", "el anillo "];
    let accion = ["me robo la mochila ", "se burlo de mi ", "me robo ", "se tropezo ", "no se paro ", "me beso "];
    let objeto = ["en la casa ", "del plato ", "de los auriculares ", "en la carpeta ", "del mando ", "del teléfono "];
    let sitio = ["en la calle ", "en el colegio ", "en el parque ", "cerca de la iglésia ", "en el congreso ", "en el bosque ", "en la playa "];




    let random1 = Math.floor(Math.random() * adjetivo.length);
    let random2 = Math.floor(Math.random() * cosa.length);
    let random3 = Math.floor(Math.random() * accion.length);
    let random4 = Math.floor(Math.random() * objeto.length);
    let random5 = Math.floor(Math.random() * sitio.length);


    document.querySelector("#excusa").innerHTML = cosa[random2] + adjetivo[random1] + accion[random3] + objeto[random4] + sitio[random5];

};
