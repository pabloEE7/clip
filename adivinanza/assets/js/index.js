
var panel_respuesta    = $('#respuesta_request');
var panel_intentos     = $('#intentos');
var panel_pistas       = $('#pistas');
var respuesta_correcta = 'covid 19';
var intentos           = 3;
var pista_1            = 'Te damos una pista: esta declarada como pandemia';
var pista_2            = 'Te damos otra pista: ataca a las vias respiratorias';
  

$(document).ready(function () {               

    $( '#btn_adivinanza' ).on( 'click', function() {

        switch (intentos) {
            case 3:
                
                intentos-=1;
                panel_intentos.html(intentos);

                panel_pistas.html(pista_1);

                response_(
                    $('#text_adivinanza').val(),
                    "felicitaciones la respuesta: " + $('#text_adivinanza').val() + " es correcta",
                    "la respuesta: " + $('#text_adivinanza').val() + " es incorrecta"
                );
                
                break;
            case 2:
                intentos--;
                panel_intentos.html(intentos);

                panel_pistas.html(pista_2);

                response_(
                    $('#text_adivinanza').val(),
                    "felicitaciones la respuesta: " + $('#text_adivinanza').val() + " es correcta",
                    "la respuesta: " + $('#text_adivinanza').val() + " es incorrecta"
                );
                
                break;
            case 1:

                intentos--;
                panel_intentos.html("game over");

                response_(
                    $('#text_adivinanza').val(),
                    "felicitaciones la respuesta: " + $('#text_adivinanza').val() + " es correcta",
                    " Respuesta incorrecta. La respuesta correcta es: " + respuesta_correcta
                );
                
                panel_pistas.html("");
                
                break;
            default:
                break;
        }
        
    }); 
});


function response_(text_adivinanza, text_correcto, text_incorrecto) {

    if(respuesta_correcta == text_adivinanza){ 

        let template_respuesta_correcta = 
        `
        <div class="alert alert-success" role="alert">
            ${ text_correcto }
        </div>
        `; 
        
        intentos = "";
        panel_pistas.html("");
        $('#panel_intentos').html("Fin");
        panel_respuesta.html(template_respuesta_correcta);

    }
    else{

        let template_respuesta_incorrecta = 
            `
                <div class="alert alert-danger" role="alert">
                    ${ text_incorrecto }
                </div>
            `;
            panel_respuesta.html(template_respuesta_incorrecta);
    }
    
}