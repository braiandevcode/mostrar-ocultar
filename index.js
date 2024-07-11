"use-strict"
const d = document;

// EVENTO EN CAJAS PARA MOSTRAR U OCULTAR
const containerHiden = (e)=>{
    e.preventDefault() // PREVENGO EL COMPORTAMIENTO POR DEFECTO
    let parent=  e.target.parentElement;  // VARIABLE QUE GUARDA AL PADRE DE ELEMENTO QUE ORIGINA EL EVENTO

    // EL EVENTO ORIGINADO CONTIENE LA CLASE "container__btn"?
    if(e.target.classList.contains("container__btn")){
        // ACCEDO AL PADRE PRINCIPAL PARA AÑADIR O QUITAR CLASE USANDO METODO TOOGLE
        parent.parentElement.classList.toggle("container--hide"); 
        // ACCEDO AL PADRE CONTENEDOR DEL ELEMENTO AL CUAL SE ORIGINO EL EVENTO PARA AÑADIR O QUITAR CLASE USANDO METODO TOOGLE
        parent.classList.toggle("container__box--left");
        parent.classList.toggle("container__box--right");
         // ACCEDO AL ELEMENTO AL CUAL SE ORIGINO EL EVENTO PARA AÑADIR O QUITAR CLASE USANDO METODO TOOGLE
        e.target.classList.toggle("container__btn--royal");
        e.target.classList.toggle("container__btn--green");
    }    
}
d.addEventListener("click", containerHiden);