document.addEventListener("DOMContentLoaded", load, false);

function load() {
    var env = document.querySelector('#mail');
    env.addEventListener("change", verificarData, false);
    var el = document.querySelectorAll('.input');
    for(i=0; i<el.length; i++){
        el[i].addEventListener("click", clearData, false);
    }
    var env = document.querySelector('#enviar');
    env.addEventListener("click",sendData , false);
  }

  function verificarData() {
    emailRegex = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    if(!emailRegex.test(this.value)){
        var id = this.id;
        var ide = this.id+'_e';
       document.getElementById(id).classList.add('error');
       document.getElementById(ide).innerHTML='E-mail ingresado no válido';
    }
  }

  function clearData() {
       this.value = '';
       var id = this.id;
       var ide = this.id+'_e';
       document.getElementById(id).classList.remove('error');
       document.getElementById(ide).innerHTML='';
  }

  function sendData(e){ 
      e.preventDefault();
      var mail = document.getElementById('mail').value;
      var remail = document.getElementById('remail').value; console.log(remail); console.log(mail);
      if(mail != remail){
        document.getElementById('mail').classList.add('error');
        document.getElementById('mail_e').innerHTML='Los E-mail no coinciden';
        document.getElementById('remail').classList.add('error');
        document.getElementById('remail_e').innerHTML='Los E-mail no coinciden';
      }else if(mail == '' && remail == ''){
        document.getElementById('mail').classList.add('error');
        document.getElementById('mail_e').innerHTML='Ingresá una dirección de mail';
        document.getElementById('remail').classList.add('error');
        document.getElementById('remail_e').innerHTML='Ingresá una dirección de mail';
      }else{
        document.getElementById('mail').classList.add('exito');
        document.getElementById('mail_e').innerHTML='';
        document.getElementById('remail').classList.add('exito');
        document.getElementById('remail_e').innerHTML=''; 
        this.innerText='Suscripto';
        document.getElementById(this.id).classList.add('bg-exito');
      }
  }