document.addEventListener("DOMContentLoaded", load, false);

function load() {
    var el = document.querySelectorAll('a.enlaceinfo');
    for(i=0; i<el.length; i++){
        el[i].addEventListener("click", verItem, false);
    }
  }

  function verItem() {
   var item = this.id; 
   if(item != ''){
       localStorage.clear();
       localStorage.setItem('item',item);
       window.location.href = 'pages/info.html';
   }
  }