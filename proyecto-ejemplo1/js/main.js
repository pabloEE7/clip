//cambia color de fondo del header responsive
//var header = document.getElementById('header');
var estadoHeader = false;
/*
document.getElementById('btn-header').addEventListener("click", function(){
    if (!estadoHeader) {
        header.style.background = "#1B1E2A";
        estadoHeader = true;
    }
    else{
        header.style.background = "transparent";
        estadoHeader = false;
    }
});*/

console.log('hola pequeña personita');
//animacion header de pagina proyectos
var nav_cabezera = document.getElementById('nav_cabezera');
$(document).ready(function(){
    
    var flag_Proyectos = false;
    var scroll;

    $(window).scroll(function(){
    	scroll = $(window).scrollTop();
    	if (scroll > 10){
    		$(nav_cabezera).css({   			
    			"background": " black",
    			"transition": "0.3s"    						
    	    });    	        	
    	}
    	else{
    		$(nav_cabezera).css({
                "background": "transparent"
    	    });      
    	}    	    	
    });

    // envio de formulario

});

$("#btn_cotizacion").click(function() {
 
console.log("asd");
      /*$.ajax({
        url: "mail/contact_me.php",
        type: "POST",
        data: {
          name: name,
          lastname: lastname,
          phone: phone,
          barrio: barrio,
          direccion: direccion,
          message: message,
          success:  function(data) {                 
            console.log("asd");
          },
      });*/
     
return false;

  });





