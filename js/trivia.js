var correctas = ['r12','r21','r32','r41','r52','r61','r73','r83'];
var contador = 0;
var cant_resp = 0;
document.addEventListener("DOMContentLoaded", load, false);

function load() { 

    var el = document.querySelectorAll('button.respuesta');
    for(i=0; i<el.length; i++){
        el[i].addEventListener("click", verRespuesta, false);
    }
}

function verRespuesta(){
    cant_resp++;
    var respuesta = this.id;
    var res =  respuesta.substring(1);
    var index = res[0];
    var pregunta = 'p'+index;

    var info = 'info'+index;
    if(verResultado(respuesta)){
        this.classList.add('exito');
        contador++;
        document.getElementById(pregunta).classList.add('exito');
    }else{
        this.classList.add('error');
        document.getElementById(correctas[index-1]).classList.add('exito');
        this.classList.add('error');
        document.getElementById(pregunta).classList.add('error');
    }
    var btn = document.querySelectorAll('button.'+pregunta); 
    for(i=0; i<btn.length; i++){
        id = btn[i].id; 
        document.getElementById(id).disabled = true;
        document.getElementById(id).classList.remove('respuesta_hover');
    }
    document.getElementById(info).classList.remove('ocultar'); 
    if(cant_resp==8){
        document.getElementById('cantidad').innerHTML = contador+'/8';
        document.getElementById('resultado').classList.remove('mostrar');
    }
}


function verResultado(respuesta){
    for(i=0;i<correctas.length; i++){
        if(respuesta == correctas[i]){
            return true;
        }
    }

    return false;
}